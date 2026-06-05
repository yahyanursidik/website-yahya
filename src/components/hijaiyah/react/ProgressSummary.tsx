import React, { useEffect, useState } from 'react';

interface Progress {
    levels: string[];
    letters: string[];
}

export default function ProgressSummary() {
    const [progress, setProgress] = useState<Progress | null>(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        try {
            const stored = localStorage.getItem('hijaiyah-play-progress');
            if (stored) {
                setProgress(JSON.parse(stored));
            } else {
                setProgress({ levels: [], letters: [] });
            }
        } catch (e) {
            console.error("Failed to load progress", e);
            setProgress({ levels: [], letters: [] });
        }
    }, []);

    const resetProgress = () => {
        if (window.confirm('Apakah Anda yakin ingin menghapus semua progres belajar?')) {
            localStorage.removeItem('hijaiyah-play-progress');
            setProgress({ levels: [], letters: [] });
        }
    };

    if (!isMounted || !progress) {
        return <div className="h-40 flex items-center justify-center"><div className="w-8 h-8 border-4 border-[#83C5BE] border-t-transparent rounded-full animate-spin"></div></div>;
    }

    return (
        <div className="w-full">
            <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#83C5BE]/20 text-center">
                    <div className="text-4xl font-bold text-[#0F4C5C] mb-2">{progress.levels.length}</div>
                    <div className="text-sm text-[#0F4C5C]/70">Level Selesai</div>
                </div>
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#83C5BE]/20 text-center">
                    <div className="text-4xl font-bold text-[#FFD166] mb-2">{progress.letters.length}</div>
                    <div className="text-sm text-[#0F4C5C]/70">Huruf Dipelajari</div>
                </div>
            </div>

            <div className="flex justify-center mt-12">
                <button 
                    onClick={resetProgress}
                    className="text-xs text-red-400 hover:text-red-600 border border-transparent hover:border-red-200 px-4 py-2 rounded-full transition-colors"
                >
                    Reset Progres Belajar
                </button>
            </div>
        </div>
    );
}
