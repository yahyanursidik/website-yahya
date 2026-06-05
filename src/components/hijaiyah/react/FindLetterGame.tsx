import React, { useState } from 'react';
import FeedbackBox from './FeedbackBox';

export interface LetterOption {
    slug: string;
    arabicLetter: string;
}

interface Props {
    targetLetter: LetterOption;
    options: LetterOption[];
    onSuccess: () => void;
}

export default function FindLetterGame({ targetLetter, options, onSuccess }: Props) {
    const [status, setStatus] = useState<'correct' | 'wrong' | null>(null);
    const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

    const handleSelect = (slug: string) => {
        setSelectedSlug(slug);
        
        if (slug === targetLetter.slug) {
            setStatus('correct');
            setTimeout(() => {
                onSuccess();
            }, 2000);
        } else {
            setStatus('wrong');
            setTimeout(() => {
                setStatus(null);
                setSelectedSlug(null);
            }, 2500);
        }
    };

    return (
        <div className="flex flex-col items-center w-full max-w-md mx-auto animate-in fade-in slide-in-from-right-8 duration-500">
            <h2 className="text-2xl font-bold text-[#0F4C5C] mb-8 text-center">
                Temukan huruf
            </h2>

            <div className="mb-8 w-32 h-32 rounded-3xl bg-[#FFD166]/20 flex items-center justify-center border-4 border-[#FFD166]/40">
                <span className="text-7xl font-arabic text-[#0F4C5C]">
                    {targetLetter.arabicLetter}
                </span>
            </div>

            <div className="grid grid-cols-2 gap-4 w-full mb-8">
                {options.map((option) => {
                    const isSelected = selectedSlug === option.slug;
                    const isCorrect = isSelected && status === 'correct';
                    const isWrong = isSelected && status === 'wrong';

                    let buttonClass = "bg-white border-[#83C5BE]/20 text-[#0F4C5C] hover:border-[#83C5BE] hover:shadow-md";
                    
                    if (isCorrect) {
                        buttonClass = "bg-[#E3F0E5] border-[#83C5BE] text-[#0F4C5C] shadow-md scale-105";
                    } else if (isWrong) {
                        buttonClass = "bg-red-50 border-red-200 text-red-700 opacity-70 animate-shake";
                    }

                    return (
                        <button
                            key={option.slug}
                            onClick={() => !status && handleSelect(option.slug)}
                            disabled={status === 'correct'}
                            className={`aspect-square rounded-3xl border-2 flex items-center justify-center text-7xl font-arabic transition-all ${buttonClass}`}
                        >
                            {option.arabicLetter}
                        </button>
                    );
                })}
            </div>

            <div className="h-20 w-full">
                <FeedbackBox status={status} />
            </div>
        </div>
    );
}
