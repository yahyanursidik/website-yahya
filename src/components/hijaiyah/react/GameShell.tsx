import React, { useState, useEffect } from 'react';
import ProgressDots from './ProgressDots';
import ListenChooseGame, { type LetterOption } from './ListenChooseGame';
import FindLetterGame from './FindLetterGame';
import SimilarLetterGame from './SimilarLetterGame';

export interface GameStep {
    type: 'listen-choose' | 'find-letter' | 'similar-letter';
    targetLetter: LetterOption;
    options: LetterOption[];
    audioPath: string;
}

interface Props {
    levelSlug: string;
    levelTitle: string;
    steps: GameStep[];
}

export default function GameShell({ levelSlug, levelTitle, steps }: Props) {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    
    // Save progress to localStorage when finished
    useEffect(() => {
        if (isFinished) {
            try {
                const stored = localStorage.getItem('hijaiyah-play-progress');
                const progress = stored ? JSON.parse(stored) : { levels: [], letters: [] };
                
                if (!progress.levels.includes(levelSlug)) {
                    progress.levels.push(levelSlug);
                }
                
                // Add all letters from this level to completed letters
                steps.forEach(step => {
                    if (!progress.letters.includes(step.targetLetter.slug)) {
                        progress.letters.push(step.targetLetter.slug);
                    }
                });
                
                localStorage.setItem('hijaiyah-play-progress', JSON.stringify(progress));
            } catch (e) {
                console.error("Failed to save progress", e);
            }
        }
    }, [isFinished, levelSlug, steps]);

    const handleSuccess = () => {
        if (currentStepIndex < steps.length - 1) {
            setCurrentStepIndex(prev => prev + 1);
        } else {
            setIsFinished(true);
        }
    };

    if (steps.length === 0) {
        return <div className="text-center p-8 text-gray-500">Belum ada huruf di level ini.</div>;
    }

    if (isFinished) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] animate-in zoom-in duration-500">
                <div className="w-32 h-32 bg-[#FFD166] rounded-full flex items-center justify-center text-5xl mb-6 shadow-lg border-4 border-white">
                    ⭐
                </div>
                <h2 className="text-3xl font-bold text-[#0F4C5C] mb-2 text-center">
                    Alhamdulillah!
                </h2>
                <p className="text-[#0F4C5C]/80 mb-8 text-center max-w-sm">
                    Kamu berhasil menyelesaikan level "{levelTitle}". Hebat sekali!
                </p>
                <div className="flex gap-4">
                    <a href="/hijaiyah/levels" className="px-6 py-3 bg-[#E3F0E5] text-[#0F4C5C] font-bold rounded-full hover:bg-[#83C5BE] hover:text-white transition-colors">
                        Pilih Level Lain
                    </a>
                </div>
            </div>
        );
    }

    const currentStep = steps[currentStepIndex];

    return (
        <div className="w-full">
            <div className="mb-8">
                <ProgressDots current={currentStepIndex + 1} total={steps.length} />
            </div>

            <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-[#83C5BE]/20 min-h-[400px] flex items-center justify-center overflow-hidden">
                {currentStep.type === 'listen-choose' && (
                    <ListenChooseGame 
                        key={currentStepIndex}
                        targetLetter={currentStep.targetLetter} 
                        options={currentStep.options} 
                        audioPath={currentStep.audioPath}
                        onSuccess={handleSuccess} 
                    />
                )}
                
                {currentStep.type === 'find-letter' && (
                    <FindLetterGame 
                        key={currentStepIndex}
                        targetLetter={currentStep.targetLetter} 
                        options={currentStep.options} 
                        onSuccess={handleSuccess} 
                    />
                )}

                {currentStep.type === 'similar-letter' && (
                    <SimilarLetterGame 
                        key={currentStepIndex}
                        targetLetter={currentStep.targetLetter} 
                        options={currentStep.options} 
                        audioPath={currentStep.audioPath}
                        onSuccess={handleSuccess} 
                    />
                )}
            </div>
        </div>
    );
}
