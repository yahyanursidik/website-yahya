import React, { useRef, useState } from 'react';

interface Props {
    audioPath?: string;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

export default function AudioButton({ audioPath, size = 'md', className = '' }: Props) {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const playAudio = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        
        if (!audioPath) return;

        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(err => console.error("Audio playback failed:", err));
            setIsPlaying(true);
        }
    };

    const handleEnded = () => {
        setIsPlaying(false);
    };

    const sizeClasses = {
        sm: 'w-10 h-10',
        md: 'w-14 h-14',
        lg: 'w-20 h-20'
    };

    const iconSizes = {
        sm: 'w-5 h-5',
        md: 'w-6 h-6',
        lg: 'w-10 h-10'
    };

    if (!audioPath) return null;

    return (
        <>
            <button 
                onClick={playAudio}
                className={`rounded-full flex items-center justify-center transition-transform active:scale-90 shadow-sm hover:shadow ${
                    isPlaying ? 'bg-[#FFD166] text-[#0F4C5C]' : 'bg-[#E3F0E5] text-[#0F4C5C] hover:bg-[#83C5BE] hover:text-white'
                } ${sizeClasses[size]} ${className}`}
                aria-label="Play audio"
            >
                {isPlaying ? (
                    <svg className={iconSizes[size]} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M11 5L6 9H2v6h4l5 4V5z" />
                    </svg>
                ) : (
                    <svg className={iconSizes[size]} fill="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M11 5L6 9H2v6h4l5 4V5z" />
                    </svg>
                )}
            </button>
            <audio 
                ref={audioRef} 
                src={audioPath} 
                onEnded={handleEnded}
                preload="auto"
                className="hidden"
            />
        </>
    );
}
