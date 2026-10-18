import React, { useState } from 'react';
import { ZODIAC_SIGNS, ZodiacSign } from '../data/zodiacData.ts';
import { Search, Sparkles, X, Heart, Award, ShieldAlert, ArrowRight } from 'lucide-react';

interface ZodiacWheelProps {
  onSelectYear: (year: number) => void;
  selectedRemainder?: number;
}

export const ZodiacWheel: React.FC<ZodiacWheelProps> = ({
  onSelectYear,
  selectedRemainder,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeModalSign, setActiveModalSign] = useState<ZodiacSign | null>(null);

  const filteredSigns = ZODIAC_SIGNS.filter((sign) => {
    const term = searchTerm.toLowerCase().trim();
    if (!term) return true;
    const matchesName = sign.name.toLowerCase().includes(term);
    const matchesHanzi = sign.hanzi.includes(term);
    const matchesElement = sign.fixedElement.toLowerCase().includes(term);
    const matchesRemainder = sign.remainder.toString() === term;
    const matchesYear = sign.recentYears.some((y) => y.toString().includes(term));
    return matchesName || matchesHanzi || matchesElement || matchesRemainder || matchesYear;
  });

  return (
    <div className="space-y-8">
      {/* Header & Search */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="text-xs text-amber-400 font-semibold mb-1">
              4000 Yıllık Gelenek · 12 Hayvanlı Türk/Çin Takvimi Döngüsü
            </div>
            <h2 className="text-2xl font-bold text-white font-display">
              12 Hayvan Zodyak Halkası &amp; Ansiklopedisi
            </h2>
            <p className="text-xs text-slate-300 mt-1 max-w-2xl">
              12 burcun her biri eşit aralıklarla sıralanır. Bir doğum yılının 12'ye bölümünden kalan sayı (0-11) o burcun temsilcisidir. Herhangi bir burca tıklayarak detaylı astrolojik özelliklerini inceleyebilirsiniz.
            </p>
          </div>

          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Burç, yıl (örn: 1990) veya element ara..."
              className="w-full bg-slate-950 border border-slate-700/80 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
            />
          </div>
        </div>
      </div>

      {/* 12 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredSigns.map((sign) => {
          const isSelected = selectedRemainder === sign.remainder;

          return (
            <div
              key={sign.remainder}
              onClick={() => setActiveModalSign(sign)}
              className={`group bg-slate-900/70 hover:bg-slate-800/80 border rounded-2xl p-5 cursor-pointer transition-all duration-200 relative overflow-hidden flex flex-col justify-between ${
                isSelected
                  ? 'border-amber-500 shadow-lg shadow-amber-500/20 ring-1 ring-amber-500'
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* Top Row: Remainder & Hanzi */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="text-[11px] font-code px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-amber-400">
                    Kalan: <span className="font-bold">{sign.remainder}</span> (Yıl % 12 == {sign.remainder})
                  </div>
                  <span className="text-2xl font-display text-amber-400/80 group-hover:text-amber-300 transition-colors">
                    {sign.hanzi}
                  </span>
                </div>

                {/* Name & Tagline */}
                <h3 className="text-xl font-bold text-white font-display group-hover:text-amber-300 transition-colors flex items-center gap-2">
                  <span>{sign.name}</span>
                  <span className="text-xs text-slate-400 font-sans font-normal">
                    {sign.chineseName}
                  </span>
                </h3>

                <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                  {sign.tagline}
                </p>

                {/* Attributes */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 grid grid-cols-2 gap-2 text-[11px]">
                  <div>
                    <span className="text-slate-500 block">Element:</span>
                    <span className="text-slate-300 font-medium">
                      {sign.fixedElementIcon} {sign.fixedElement}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Kutup:</span>
                    <span className="text-amber-300 font-medium">{sign.yinYang}</span>
                  </div>
                </div>

                <div className="mt-3 text-[11px] text-slate-400">
                  <span className="text-slate-500 block">Örnek Yıllar:</span>
                  <span className="font-code text-slate-300 truncate block">
                    {sign.recentYears.slice(-4).join(', ')}
                  </span>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 group-hover:text-amber-300 transition-colors">
                <span>Detayları İncele</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>

      {filteredSigns.length === 0 && (
        <div className="text-center py-12 bg-slate-900/40 rounded-2xl border border-slate-800 text-slate-400 text-sm">
          Aramanızla eşleşen burç bulunamadı. Lütfen burç adı (örn: "At", "Horoz") veya bir yıl (örn: 1990) deneyin.
        </div>
      )}

      {/* Detail Modal */}
      {activeModalSign && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-amber-500/40 rounded-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setActiveModalSign(null)}
              className="absolute right-4 top-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-start gap-4 border-b border-slate-800 pb-5">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                <span className="text-3xl font-display text-amber-400">{activeModalSign.hanzi}</span>
              </div>
              <div>
                <div className="text-xs text-amber-400 font-mono mb-1">
                  Kalan: {activeModalSign.remainder} · {activeModalSign.fixedElement} Elementi · {activeModalSign.yinYang}
                </div>
                <h3 className="text-2xl font-bold text-white font-display flex items-center gap-2">
                  <span>{activeModalSign.name}</span>
                  <span className="text-sm text-slate-400 font-sans font-normal">
                    {activeModalSign.chineseName}
                  </span>
                </h3>
                <p className="text-xs text-slate-300 mt-1 italic">
                  "{activeModalSign.tagline}"
                </p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="py-6 space-y-4 text-xs">
              <div>
                <h4 className="font-semibold text-white mb-1">Mitolojik Sembolizm</h4>
                <p className="text-slate-300 leading-relaxed">
                  {activeModalSign.description}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-1">Karakter &amp; Doğa</h4>
                <p className="text-slate-300 leading-relaxed">
                  {activeModalSign.personality}
                </p>
              </div>

              {/* Strengths & Weaknesses */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="bg-emerald-950/20 border border-emerald-900/30 rounded-xl p-3">
                  <div className="text-emerald-400 font-semibold mb-1 flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" />
                    <span>Güçlü Yönler</span>
                  </div>
                  <ul className="space-y-1 text-slate-300">
                    {activeModalSign.strengths.map((s, i) => (
                      <li key={i}>• {s}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-950/20 border border-red-900/30 rounded-xl p-3">
                  <div className="text-rose-400 font-semibold mb-1 flex items-center gap-1">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    <span>Zayıf Yönler</span>
                  </div>
                  <ul className="space-y-1 text-slate-300">
                    {activeModalSign.weaknesses.map((w, i) => (
                      <li key={i}>• {w}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Compatibility & Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                  <span className="text-slate-500 block text-[11px]">Uğurlu Sayılar:</span>
                  <span className="font-code text-white font-semibold">
                    {activeModalSign.luckyNumbers.join(', ')}
                  </span>
                </div>
                <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                  <span className="text-slate-500 block text-[11px]">Uğurlu Renkler:</span>
                  <span className="text-white font-semibold">
                    {activeModalSign.luckyColors.join(', ')}
                  </span>
                </div>
                <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                  <span className="text-slate-500 block text-[11px]">Uyumlu Burçlar:</span>
                  <span className="text-amber-300 font-semibold">
                    {activeModalSign.compatibleSigns.join(', ')}
                  </span>
                </div>
              </div>

              {/* Recent Years */}
              <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                <span className="text-slate-500 block text-[11px] mb-1">
                  Bu Burca Ait Yıllar:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeModalSign.recentYears.map((yr) => (
                    <button
                      key={yr}
                      onClick={() => {
                        onSelectYear(yr);
                        setActiveModalSign(null);
                      }}
                      className="px-2 py-1 bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-slate-300 text-xs font-code rounded border border-slate-700/80 transition-colors"
                    >
                      {yr}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Formül: <code className="text-amber-300 font-code">Yıl % 12 == {activeModalSign.remainder}</code></span>
              <span className="text-slate-300">İmza: <strong className="text-amber-400">Enes Öztürk</strong></span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
