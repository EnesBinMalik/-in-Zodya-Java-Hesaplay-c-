import React, { useState } from 'react';
import { JAVA_SNIPPETS, JAVA_CONCEPTS_EXPLANATION } from '../data/javaCode.ts';
import { Copy, Check, Download, FileCode, CheckCircle2, Terminal } from 'lucide-react';

interface JavaCodeViewerProps {
  onDownloadFile: (fileName: string, content: string) => void;
  onOpenTerminal: () => void;
}

export const JavaCodeViewer: React.FC<JavaCodeViewerProps> = ({
  onDownloadFile,
  onOpenTerminal,
}) => {
  const [selectedSnippetId, setSelectedSnippetId] = useState<string>('switch-case');
  const [copied, setCopied] = useState<boolean>(false);

  const activeSnippet = JAVA_SNIPPETS.find((s) => s.id === selectedSnippetId) || JAVA_SNIPPETS[0];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    onDownloadFile(activeSnippet.fileName, activeSnippet.code);
  };

  return (
    <div className="space-y-8">
      {/* Code Header with Tabs */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-5">
          <div>
            <div className="text-xs text-amber-400 font-medium mb-1">
              Java 101 Temiz Kod Kütüphanesi · Enes Öztürk
            </div>
            <h2 className="text-2xl font-bold text-white font-display">
              Java Kaynak Kodu Çözümleri
            </h2>
            <p className="text-xs text-slate-300 mt-1">
              İstenen Çin Zodyağı ödevinin 3 farklı yazılım mimarisindeki tam ve çalışır Java kaynak kodları.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyCode}
              className="px-3.5 py-2 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg border border-slate-700 transition-all flex items-center gap-1.5 active:scale-95"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Kopyalandı!' : 'Kodu Kopyala'}</span>
            </button>
            <button
              onClick={handleDownload}
              className="px-3.5 py-2 text-xs font-semibold bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg transition-all flex items-center gap-1.5 active:scale-95 shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{activeSnippet.fileName} İndir</span>
            </button>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap gap-2">
          {JAVA_SNIPPETS.map((snippet) => (
            <button
              key={snippet.id}
              onClick={() => setSelectedSnippetId(snippet.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all text-left flex flex-col ${
                selectedSnippetId === snippet.id
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                  : 'bg-slate-950/60 hover:bg-slate-800 text-slate-300 border border-slate-800'
              }`}
            >
              <div className="flex items-center gap-2">
                <span>{snippet.title}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded ${
                  selectedSnippetId === snippet.id ? 'bg-slate-950/20 text-slate-950' : 'bg-slate-800 text-slate-400'
                }`}>
                  {snippet.difficulty}
                </span>
              </div>
              <span className={`text-[11px] font-normal ${
                selectedSnippetId === snippet.id ? 'text-slate-800' : 'text-slate-400'
              }`}>
                {snippet.subtitle}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Code Editor Window */}
      <div className="bg-[#0b101b] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
        {/* Editor Title Bar */}
        <div className="bg-[#0f1726] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileCode className="w-4 h-4 text-amber-400" />
            <span className="font-code text-xs text-slate-200 font-semibold">{activeSnippet.fileName}</span>
            <span className="text-[11px] text-slate-400 font-mono hidden sm:inline">· UTF-8 · Java</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[11px] text-amber-300 font-mono">
              İmza: Enes Öztürk
            </span>
            <button
              onClick={onOpenTerminal}
              className="text-[11px] text-slate-300 hover:text-white bg-slate-800/80 px-2 py-1 rounded border border-slate-700/60 flex items-center gap-1 transition-colors"
            >
              <Terminal className="w-3 h-3 text-amber-400" />
              <span>Terminalde Çalıştır</span>
            </button>
          </div>
        </div>

        {/* Code Content with Line Numbers */}
        <div className="p-4 sm:p-6 overflow-x-auto font-code text-xs sm:text-sm leading-relaxed text-slate-300">
          <pre className="grid grid-cols-[auto_1fr] gap-x-4">
            {activeSnippet.code.split('\n').map((line, idx) => (
              <React.Fragment key={idx}>
                <span className="text-slate-600 select-none text-right tabular-nums pr-2 border-r border-slate-800 text-xs">
                  {idx + 1}
                </span>
                <span className={`pl-2 ${
                  line.includes('Enes Öztürk') ? 'text-amber-300 font-bold bg-amber-500/10 rounded px-1' :
                  line.trim().startsWith('//') || line.trim().startsWith('*') || line.trim().startsWith('/*') ? 'text-slate-400 italic' :
                  line.includes('switch') || line.includes('case') || line.includes('break') || line.includes('import') || line.includes('public class') || line.includes('return') ? 'text-rose-400 font-semibold' :
                  line.includes('int ') || line.includes('String ') || line.includes('Scanner ') || line.includes('void ') ? 'text-cyan-400' :
                  line.includes('System.out.println') || line.includes('System.out.print') ? 'text-emerald-400' :
                  line.includes('%') ? 'text-amber-400 font-bold' :
                  'text-slate-200'
                }`}>
                  {line || ' '}
                </span>
              </React.Fragment>
            ))}
          </pre>
        </div>

        {/* Summary Footer */}
        <div className="bg-[#0e1624] p-3 px-5 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
          <span>{activeSnippet.summary}</span>
          <span className="text-[11px] font-mono text-amber-400/80">Enes Öztürk Çözümü</span>
        </div>
      </div>

      {/* Explanations of Java Concepts */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-white font-display flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-amber-400" />
          <span>Java Kod Yapısı ve Algoritma Analizi</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {JAVA_CONCEPTS_EXPLANATION.map((concept) => (
            <div key={concept.stepNumber} className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-400 text-xs font-bold font-mono flex items-center justify-center">
                  0{concept.stepNumber}
                </span>
                <h4 className="text-sm font-semibold text-white">
                  {concept.title}
                </h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {concept.explanation}
              </p>
              <div className="bg-slate-950/80 rounded-lg p-2.5 font-code text-[11px] text-amber-300 border border-slate-800">
                {concept.formula}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
