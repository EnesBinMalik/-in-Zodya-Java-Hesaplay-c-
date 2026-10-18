/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { ZodiacCalculator } from './components/ZodiacCalculator.tsx';
import { TerminalSimulator } from './components/TerminalSimulator.tsx';
import { JavaCodeViewer } from './components/JavaCodeViewer.tsx';
import { ZodiacWheel } from './components/ZodiacWheel.tsx';
import { ZodiacGuide } from './components/ZodiacGuide.tsx';
import { Footer } from './components/Footer.tsx';
import { JAVA_SNIPPETS } from './data/javaCode.ts';
import { Terminal, Calculator, Code, Compass, BookOpen, Check } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('calculator');
  const [selectedYear, setSelectedYear] = useState<number>(1990);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleDownloadJavaFile = (fileName: string = 'CinZodyagi.java', content?: string) => {
    const fileContent = content || JAVA_SNIPPETS[0].code;
    const blob = new Blob([fileContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showToast(`"${fileName}" başarıyla indirildi!`);
  };

  const handleOpenTerminalWithYear = (year: number) => {
    setSelectedYear(year);
    setActiveTab('terminal');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectYearFromWheel = (year: number) => {
    setSelectedYear(year);
    setActiveTab('calculator');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 flex flex-col selection:bg-amber-500 selection:text-slate-950">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-600 text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2">
          <Check className="w-4 h-4 text-emerald-200" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Bar */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onDownloadCode={() => handleDownloadJavaFile()}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Navigation Tabs Bar for easy switching */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl overflow-x-auto max-w-2xl mx-auto shadow-inner">
          <button
            onClick={() => setActiveTab('calculator')}
            className={`flex-1 py-2 px-3 text-xs font-medium rounded-lg transition-all flex items-center justify-center gap-1.5 whitespace-nowrap ${
              activeTab === 'calculator'
                ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>Hesaplayıcı</span>
          </button>
          
          <button
            onClick={() => setActiveTab('terminal')}
            className={`flex-1 py-2 px-3 text-xs font-medium rounded-lg transition-all flex items-center justify-center gap-1.5 whitespace-nowrap ${
              activeTab === 'terminal'
                ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Java Terminali</span>
          </button>

          <button
            onClick={() => setActiveTab('code')}
            className={`flex-1 py-2 px-3 text-xs font-medium rounded-lg transition-all flex items-center justify-center gap-1.5 whitespace-nowrap ${
              activeTab === 'code'
                ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            <span>Java Kodu</span>
          </button>

          <button
            onClick={() => setActiveTab('wheel')}
            className={`flex-1 py-2 px-3 text-xs font-medium rounded-lg transition-all flex items-center justify-center gap-1.5 whitespace-nowrap ${
              activeTab === 'wheel'
                ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>12 Burç Rehberi</span>
          </button>

          <button
            onClick={() => setActiveTab('guide')}
            className={`flex-1 py-2 px-3 text-xs font-medium rounded-lg transition-all flex items-center justify-center gap-1.5 whitespace-nowrap ${
              activeTab === 'guide'
                ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Nedir &amp; Tarihçe</span>
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'calculator' && (
          <ZodiacCalculator
            onOpenTerminalWithYear={handleOpenTerminalWithYear}
            onViewSignDetails={() => setActiveTab('wheel')}
          />
        )}

        {activeTab === 'terminal' && (
          <TerminalSimulator initialYear={selectedYear} />
        )}

        {activeTab === 'code' && (
          <JavaCodeViewer
            onDownloadFile={handleDownloadJavaFile}
            onOpenTerminal={() => setActiveTab('terminal')}
          />
        )}

        {activeTab === 'wheel' && (
          <ZodiacWheel
            onSelectYear={handleSelectYearFromWheel}
            selectedRemainder={selectedYear % 12}
          />
        )}

        {activeTab === 'guide' && (
          <ZodiacGuide />
        )}
      </main>

      {/* Footer with Enes Öztürk Signature */}
      <Footer onSelectTab={(tab) => { setActiveTab(tab); window.scrollTo({ top: 0, behavior: 'smooth' }); }} />
    </div>
  );
}
