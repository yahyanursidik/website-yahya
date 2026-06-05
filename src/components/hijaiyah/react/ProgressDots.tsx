import React from 'react';

interface Props {
    current: number;
    total: number;
}

export default function ProgressDots({ current, total }: Props) {
    return (
        <div className="flex flex-col items-center">
            <div className="text-sm font-bold text-[#0F4C5C]/60 mb-2">
                {current} dari {total}
            </div>
            <div className="flex gap-1.5 justify-center">
                {Array.from({ length: total }).map((_, i) => {
                    const isCompleted = i < current;
                    const isCurrent = i === current;
                    
                    return (
                        <div 
                            key={i}
                            className={`h-2 rounded-full transition-all duration-300 ${
                                isCompleted ? 'w-4 bg-[#83C5BE]' : 
                                isCurrent ? 'w-6 bg-[#FFD166]' : 
                                'w-2 bg-gray-200'
                            }`}
                        />
                    );
                })}
            </div>
        </div>
    );
}
