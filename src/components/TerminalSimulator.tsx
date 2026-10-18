import React, { useState, useRef, useEffect } from 'react';
import { calculateChineseZodiac } from '../data/zodiacData.ts';
import { Terminal as TerminalIcon, Play, RotateCcw, Copy, Check, Info } from 'lucide-react';

interface TerminalSimulatorProps {
  initialYear?: number;
}

interface TerminalLog {
  id: string;
  type: 'command' | 'prompt' | 'input' | 'output' | 'error' | 'divider' | 'signature';
  text: string;
}

export const TerminalSimulator: React.FC<TerminalSimulatorProps> = ({
  initialYear = 1990,
}) => {
  const [currentInput, setCurrentInput] = useState<string>(initialYear.toString());
  const [copied, setCopied] = useState<boolean>(false);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const [logs, setLogs] = useState<TerminalLog[]>([
    { id: '1', type: 'command', text: 'enes@fedora:~/workspace$ javac CinZodyagi.java' },
    { id: '2', type: 'command', text: 'enes@fedora:~/workspace$ java CinZodyagi' },
    { id: '3', type: 'prompt', text: 'Doğum Yılınızı Giriniz : 1990' },
    { id: '4', type: 'output', text: 'Çin Zodyağı Burcunuz : At' },
    { id: '5', type: 'divider', text: '----------------------------------------' },
    { id: '6', type: 'signature', text: 'Programı Hazırlayan: Enes Öztürk' },
  ]);

  useEffect(() => {
    if (initialYear && initialYear.toString() !== currentInput) {
      runExecution(initialYear.toString());
    }
  }, [initialYear]);

  const runExecution = (yearStr: string) => {
    setIsRunning(true);
    const parsed = parseInt(yearStr.trim(), 10);

    const newLogs: TerminalLog[] = [
      ...logs,
      { id: Date.now() + '-cmd', type: 'command', text: 'enes@fedora:~/workspace$ java CinZodyagi' },
      { id: Date.now() + '-prompt', type: 'prompt', text: `Doğum Yılınızı Giriniz : ${yearStr}` },
    ];

    if (isNaN(parsed) || yearStr.trim() === '') {
      newLogs.push({
        id: Date.now() + '-err',
        type: 'error',
        text: 'Hata: Lütfen geçerli bir sayısal yıl giriniz! (InputMismatchException)',
      });
    } else if (parsed < 0) {
      newLogs.push({
        id: Date.now() + '-err',
        type: 'error',
        text: 'Hata: Doğum yılı negatif olamaz! Lütfen geçerli bir doğum yılı giriniz.',
      });
    } else {
      const result = calculateChineseZodiac(parsed);
      newLogs.push({
        id: Date.now() + '-out',
        type: 'output',
        text: `Çin Zodyağı Burcunuz : ${result.sign.name}`,
      });
      newLogs.push({
        id: Date.now() + '-div',
        type: 'divider',
        text: '----------------------------------------',
      });
      newLogs.push({
        id: Date.now() + '-sig',
        type: 'signature',
        text: 'Programı Hazırlayan: Enes Öztürk',
      });
    }

    setLogs(newLogs);
    setIsRunning(false);

    setTimeout(() => {
      terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentInput.trim()) {
      runExecution(currentInput);
    }
  };

  const handleReset = () => {
    setLogs([
      { id: '1', type: 'command', text: 'enes@fedora:~/workspace$ javac CinZodyagi.java' },
      { id: '2', type: 'command', text: 'enes@fedora:~/workspace$ java CinZodyagi' },
      { id: '3', type: 'prompt', text: 'Doğum Yılınızı Giriniz : 1990' },
      { id: '4', type: 'output', text: 'Çin Zodyağı Burcunuz : At' },
      { id: '5', type: 'divider', text: '----------------------------------------' },
      { id: '6', type: 'signature', text: 'Programı Hazırlayan: Enes Öztürk' },
    ]);
    setCurrentInput('1990');
  };

  const handleCopyLogs = () => {
    const text = logs.map((l) => l.text).join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Intro Header */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="text-xs text-amber-400 font-semibold mb-1 flex items-center gap-2">
              <span>Java Runtime Simulator (JRE 21)</span>
              <span aria-hidden="true">·</span>
              <span>CinZodyagi.java</span>
              <span aria-hidden="true">·</span>
              <span>İmza: Enes Öztürk</span>
            </div>
            <h2 className="text-xl font-bold text-white font-display">
              İnteraktif Java Konsol Simülatörü
            </h2>
            <p className="text-xs text-slate-300 mt-1 max-w-2xl">
              İstenen konsol senaryosunu gerçek bir JVM terminali gibi çalıştırın. Yıl değerini yazıp "Çalıştır"a basarak Java'daki <code className="text-amber-300">Scanner</code> ve <code className="text-amber-300">switch-case</code> davranışını test edebilirsiniz.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLogs}
              className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-all flex items-center gap-1.5"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Kopyalandı' : 'Konsolu Kopyala'}</span>
            </button>
            <button
              onClick={handleReset}
              className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-all flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Sıfırla</span>
            </button>
          </div>
        </div>
      </div>

      {/* Terminal Window */}
      <div className="bg-[#080d14] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl font-code">
        {/* Terminal Title Bar */}
        <div className="bg-[#0f1723] px-4 py-3 border-b border-slate-800 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="text-xs text-slate-400 ml-2 font-mono">bash — cin-zodyagi (CinZodyagi.java)</span>
          </div>
          <div className="text-[11px] text-amber-400/90 font-mono hidden sm:block">
            Geliştirici: Enes Öztürk
          </div>
        </div>

        {/* Terminal Logs Area */}
        <div className="p-5 min-h-[320px] max-h-[460px] overflow-y-auto space-y-1.5 text-xs sm:text-sm">
          {logs.map((log) => {
            if (log.type === 'command') {
              return (
                <div key={log.id} className="text-slate-400 font-mono flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">$</span>
                  <span>{log.text.replace('enes@fedora:~/workspace$ ', '')}</span>
                </div>
              );
            }
            if (log.type === 'prompt') {
              return (
                <div key={log.id} className="text-sky-300 font-semibold font-mono">
                  {log.text}
                </div>
              );
            }
            if (log.type === 'output') {
              return (
                <div key={log.id} className="text-amber-300 font-bold font-mono pl-2 border-l-2 border-amber-400">
                  {log.text}
                </div>
              );
            }
            if (log.type === 'error') {
              return (
                <div key={log.id} className="text-rose-400 font-semibold font-mono pl-2 border-l-2 border-rose-500">
                  {log.text}
                </div>
              );
            }
            if (log.type === 'divider') {
              return (
                <div key={log.id} className="text-slate-600 font-mono">
                  {log.text}
                </div>
              );
            }
            if (log.type === 'signature') {
              return (
                <div key={log.id} className="text-amber-400/90 font-mono font-medium pb-2">
                  {log.text}
                </div>
              );
            }
            return null;
          })}

          <div ref={terminalEndRef} />
        </div>

        {/* Terminal Input Bar */}
        <form onSubmit={handleFormSubmit} className="bg-[#0b121c] p-3 border-t border-slate-800 flex items-center gap-3">
          <div className="text-amber-400 text-xs font-mono font-bold whitespace-nowrap pl-2">
            Doğum Yılınızı Giriniz :
          </div>
          <input
            ref={inputRef}
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            placeholder="Örn: 1990"
            className="flex-1 bg-transparent text-white font-mono text-xs sm:text-sm outline-none placeholder-slate-600 font-bold"
            autoFocus
          />
          <button
            type="submit"
            disabled={isRunning}
            className="px-4 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap active:scale-95"
          >
            <Play className="w-3 h-3 fill-current" />
            <span>Çalıştır (Enter)</span>
          </button>
        </form>
      </div>

      {/* Quick Scenario Buttons */}
      <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 flex flex-wrap items-center gap-3 text-xs">
        <span className="text-slate-400 font-medium">Hızlı Senaryoları Test Et:</span>
        <button
          onClick={() => { setCurrentInput('1990'); runExecution('1990'); }}
          className="px-3 py-1 bg-slate-800 hover:bg-amber-500/20 text-amber-300 rounded-lg border border-slate-700 transition-colors font-mono"
        >
          1990 ➜ At (Kullanıcı Senaryosu)
        </button>
        <button
          onClick={() => { setCurrentInput('2000'); runExecution('2000'); }}
          className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg border border-slate-700 transition-colors font-mono"
        >
          2000 ➜ Ejderha
        </button>
        <button
          onClick={() => { setCurrentInput('1984'); runExecution('1984'); }}
          className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg border border-slate-700 transition-colors font-mono"
        >
          1984 ➜ Fare
        </button>
        <button
          onClick={() => { setCurrentInput('2026'); runExecution('2026'); }}
          className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg border border-slate-700 transition-colors font-mono"
        >
          2026 ➜ At
        </button>
        <button
          onClick={() => { setCurrentInput('-5'); runExecution('-5'); }}
          className="px-3 py-1 bg-slate-800 hover:bg-rose-500/20 text-rose-300 rounded-lg border border-slate-700 transition-colors font-mono"
        >
          -5 (Hata Kontrolü)
        </button>
      </div>
    </div>
  );
};
