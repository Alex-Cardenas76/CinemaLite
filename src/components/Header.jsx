import React from 'react';

const Header = () => {
    return (
        <header className="bg-slate-900 text-white shadow-lg sticky top-0 z-50 border-b border-slate-800">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3 group cursor-pointer">
                    {/* Logo SVG - Minimalist Yellow Film Roll */}
                    <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center transform transition-transform group-hover:rotate-12 group-hover:scale-105 shadow-yellow-500/20 shadow-lg">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            className="w-6 h-6 text-slate-900"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                            <line x1="7" y1="3" x2="7" y2="21" />
                            <line x1="17" y1="3" x2="17" y2="21" />
                            <line x1="3" y1="12" x2="21" y2="12" />
                            <line x1="3" y1="7" x2="7" y2="7" />
                            <line x1="3" y1="17" x2="7" y2="17" />
                            <line x1="17" y1="7" x2="21" y2="7" />
                            <line x1="17" y1="17" x2="21" y2="17" />
                        </svg>
                    </div>

                    <h1 className="text-2xl font-bold tracking-tight">
                        <span className="text-white">Cinema</span>
                        <span className="text-yellow-500">Lite</span>
                    </h1>
                </div>

                {/* Optional: Add navigation or user profile here if needed later */}
                <nav className="text-slate-400 text-sm font-medium hidden sm:block">
                    {/* Placeholder for future links */}
                    <span className="hover:text-yellow-500 transition-colors cursor-pointer">Descubrir</span>
                </nav>
            </div>
        </header>
    );
};

export default Header;
