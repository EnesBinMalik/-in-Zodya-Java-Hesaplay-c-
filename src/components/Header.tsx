import React from 'react';
import { Terminal, Download, Sparkles } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onDownloadCode: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onDownloadCode,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#0b0f17]/95 backdrop-blur-md border-b border-slate-800/80 px-4 lg:px-8 py-3.5 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a 
          href="#hesapla" 
          onClick={(e) => { e.preventDefault(); setActiveTab('calculator'); }}
          className="text-lg font-bold tracking-tight text-amber-400 hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <span className="text-xl">🐉</span>
          <span className="font-display tracking-wider">Çin Zodyağı</span>
          <span className="text-xs text-slate-400 font-normal font-sans hidden sm:inline">· Java 101</span>
        </a>

        {/* Zone 2: Navigation Links (Single-line, 4-5 items) */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <button
            onClick={() => setActiveTab('calculator')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-amber-300 ${
              activeTab === 'calculator' ? 'text-amber-400 font-semibold border-b-2 border-amber-400 pb-0.5' : 'text-slate-400'
            }`}
          >
            Hesaplayıcı
          </button>
          <button
            onClick={() => setActiveTab('terminal')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-amber-300 flex items-center gap-1.5 ${
              activeTab === 'terminal' ? 'text-amber-400 font-semibold border-b-2 border-amber-400 pb-0.5' : 'text-slate-400'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Java Terminali</span>
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-amber-300 ${
              activeTab === 'code' ? 'text-amber-400 font-semibold border-b-2 border-amber-400 pb-0.5' : 'text-slate-400'
            }`}
          >
            Kaynak Kod
          </button>
          <button
            onClick={() => setActiveTab('wheel')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-amber-300 ${
              activeTab === 'wheel' ? 'text-amber-400 font-semibold border-b-2 border-amber-400 pb-0.5' : 'text-slate-400'
            }`}
          >
            12 Burç Rehberi
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onDownloadCode}
            className="px-3.5 py-1.5 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 active:scale-98 rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5"
            title="CinZodyagi.java dosyasını indir"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Java Dosyasını İndir</span>
            <span className="sm:hidden">İndir</span>
          </button>
        </div>
      </div>
    </header>
  );
};
