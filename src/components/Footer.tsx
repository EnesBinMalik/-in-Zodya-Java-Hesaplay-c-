import React from 'react';
import { Terminal, Code, Heart, Sparkles } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  return (
    <footer className="mt-20 border-t border-slate-800/80 bg-[#070b12] text-slate-400 py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Prominent Enes Öztürk Signature Callout Banner */}
        <div className="bg-gradient-to-r from-amber-950/40 via-slate-900 to-amber-950/40 border border-amber-500/30 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1">
            <div className="text-xs uppercase tracking-wider text-amber-400 font-semibold font-mono">
              Geliştirici &amp; Yazılım Mimarı
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              Enes Öztürk
            </div>
            <p className="text-xs text-slate-300 max-w-xl">
              Java ile Çin Zodyağı Hesaplama Algoritması, Modulo 12 matematiksel eşleme modeli ve interaktif terminal simülatörü çözümü.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => onSelectTab('terminal')}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 transition-colors flex items-center gap-2"
            >
              <Terminal className="w-3.5 h-3.5 text-amber-400" />
              <span>Terminali Çalıştır</span>
            </button>
            <button
              onClick={() => onSelectTab('code')}
              className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-xl transition-all flex items-center gap-2 shadow-md shadow-amber-500/20 active:scale-95"
            >
              <Code className="w-3.5 h-3.5" />
              <span>Java Kodunu İncele</span>
            </button>
          </div>
        </div>

        {/* Footer Navigation & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs pt-4 border-t border-slate-900 text-slate-400">
          <div className="flex items-center gap-2">
            <span>© 2026 Çin Zodyağı Java 101 Projesi</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-300 font-medium">Enes Öztürk İmzalı</span>
          </div>

          <div className="flex items-center gap-6 text-slate-400">
            <button onClick={() => onSelectTab('calculator')} className="hover:text-amber-400 transition-colors">
              Hesaplayıcı
            </button>
            <button onClick={() => onSelectTab('terminal')} className="hover:text-amber-400 transition-colors">
              Terminal
            </button>
            <button onClick={() => onSelectTab('code')} className="hover:text-amber-400 transition-colors">
              Java Kodu
            </button>
            <button onClick={() => onSelectTab('wheel')} className="hover:text-amber-400 transition-colors">
              12 Burç
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
