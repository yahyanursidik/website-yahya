import React from 'react';

interface Props {
    status: 'correct' | 'wrong' | null;
    message?: string;
}

export default function FeedbackBox({ status, message }: Props) {
    if (!status) return null;

    const isCorrect = status === 'correct';
    const defaultCorrectMsg = "MasyaAllah, benar!";
    const defaultWrongMsg = "Coba dengarkan lagi, lalu perhatikan hurufnya.";
    
    const displayMsg = message || (isCorrect ? defaultCorrectMsg : defaultWrongMsg);

    return (
        <div className={`p-4 rounded-2xl text-center max-w-sm mx-auto shadow-sm animate-in fade-in slide-in-from-bottom-4 ${
            isCorrect 
            ? 'bg-[#E3F0E5] text-[#0F4C5C] border border-[#83C5BE]/30' 
            : 'bg-[#FFFDF7] text-[#0F4C5C] border border-[#FFD166]/50'
        }`}>
            <div className="flex items-center justify-center gap-2">
                {isCorrect ? (
                    <div className="w-8 h-8 rounded-full bg-[#FFD166] text-[#0F4C5C] flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                ) : (
                    <div className="w-8 h-8 rounded-full bg-[#FFD166]/30 text-[#0F4C5C] flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                    </div>
                )}
                <p className={`font-bold ${isCorrect ? 'text-lg' : 'text-base'}`}>
                    {displayMsg}
                </p>
            </div>
        </div>
    );
}
