import React, { useState } from 'react';
import { calculateChineseZodiac, ZODIAC_SIGNS } from '../data/zodiacData.ts';
import { Calculator, CheckCircle2, ArrowRight, Sparkles, BookOpen, Heart, ShieldAlert, Award } from 'lucide-react';

interface ZodiacCalculatorProps {
  onOpenTerminalWithYear: (year: number) => void;
  onViewSignDetails: (remainder: number) => void;
}

const PRESET_YEARS = [
  { year: 1990, label: "1990 (Senaryo: At)" },
  { year: 1984, label: "1984 (Fare)" },
  { year: 2000, label: "2000 (Ejderha)" },
  { year: 2008, label: "2008 (Fare)" },
  { year: 2024, label: "2024 (Ejderha)" },
  { year: 2026, label: "2026 (At - Yang Ateş)" }
];

export const ZodiacCalculator: React.FC<ZodiacCalculatorProps> = ({
  onOpenTerminalWithYear,
  onViewSignDetails,
}) => {
  const [yearInput, setYearInput] = useState<string>("1990");
  const [activeYear, setActiveYear] = useState<number>(1990);

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setYearInput(val);
    const parsed = parseInt(val, 10);
    if (!isNaN(parsed) && parsed > 0 && parsed <= 3000) {
      setActiveYear(parsed);
    }
  };

  const handleSelectPreset = (year: number) => {
    setYearInput(year.toString());
    setActiveYear(year);
  };

  const analysis = calculateChineseZodiac(activeYear);
  const { sign, element, remainder, quotient } = analysis;

  return (
    <div className="space-y-8">
      {/* Hero Intro with Enes Öztürk Signature Tag */}
      <div className="bg-gradient-to-r from-red-950/40 via-amber-950/30 to-slate-900/60 border border-amber-900/40 rounded-2xl p-6 lg:p-8 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-amber-500/15 pb-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs text-amber-400 font-medium mb-1">
              <span>Java 101 Eğitimi</span>
              <span aria-hidden="true">·</span>
              <span>Modulo Algoritması</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-300 font-semibold">Hazırlayan: Enes Öztürk</span>
            </div>
            <h1 className="text-2xl lg:text-3xl font-bold tracking-tight text-white font-display">
              Çin Zodyağı Burç Hesaplayıcı
            </h1>
          </div>
          <div className="text-xs text-slate-400 bg-slate-900/80 px-3 py-2 rounded-lg border border-slate-800">
            Formül: <span className="font-code text-amber-400">Doğum Yılı % 12 = Kalan</span>
          </div>
        </div>

        <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
          4000 yıllık Çin astrolojisi döngüsünde 12 hayvan burcu bulunur. Kişinin doğum yılının 12 ile bölümünden kalan sayı, doğrudan burcunu tayin eder. Aşağıdaki hesaplayıcıdan yılınızı girerek sonucu ve adım adım matematiksel modülasyonu inceleyebilirsiniz.
        </p>

        {/* Input & Quick Selector */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
          <div className="md:col-span-5">
            <label htmlFor="birthYear" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
              Doğum Yılınızı Giriniz:
            </label>
            <div className="relative">
              <input
                id="birthYear"
                type="number"
                min="1"
                max="2500"
                value={yearInput}
                onChange={handleYearChange}
                placeholder="Örn: 1990"
                className="w-full bg-slate-900/90 border-2 border-amber-500/40 focus:border-amber-400 focus:ring-2 focus:ring-amber-500/20 text-white font-code text-xl font-bold rounded-xl px-4 py-3 outline-none transition-all tabular-nums"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 font-code pointer-events-none">
                Yıl
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <span className="block text-xs text-slate-400 mb-2">Örnek Test Yılları (Hızlı Seç):</span>
            <div className="flex flex-wrap gap-2">
              {PRESET_YEARS.map((item) => (
                <button
                  key={item.year}
                  onClick={() => handleSelectPreset(item.year)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                    activeYear === item.year
                      ? 'bg-amber-500 text-slate-950 font-semibold shadow-md shadow-amber-500/20'
                      : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 border border-slate-700/60'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Calculation & Result Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Math Step & Modulo breakdown */}
        <div className="lg:col-span-5 space-y-5">
          <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
              <Calculator className="w-4 h-4 text-amber-400" />
              <span>Adım Adım Matematiksel Hesaplama</span>
            </h2>

            <div className="space-y-4 text-xs">
              <div className="bg-slate-950/80 rounded-xl p-4 border border-slate-800/80 font-code space-y-2">
                <div className="text-slate-400">1. Tam Bölme İşlemi:</div>
                <div className="text-white text-sm font-semibold">
                  {activeYear} ÷ 12 = <span className="text-amber-400">{quotient}</span> <span className="text-xs text-slate-400 font-normal">(bölüm)</span>
                </div>
                <div className="text-slate-400 pt-1">2. Modulo (Kalan) Formülü:</div>
                <div className="text-white text-sm font-semibold">
                  {activeYear} - ({quotient} × 12) = <span className="text-emerald-400 text-base font-bold">{remainder}</span>
                </div>
                <div className="pt-2 border-t border-slate-800 text-amber-300 text-xs font-semibold">
                  {activeYear} % 12 == <span className="text-base text-emerald-400 underline">{remainder}</span>
                </div>
              </div>

              {/* Remainder Matching Rule */}
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
                <div className="text-amber-300 font-semibold mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Kural Eşleşmesi (Kalan {remainder})</span>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Doğum Tarihi % 12 = <span className="text-white font-bold">{remainder}</span> ➜ <span className="text-amber-400 font-bold">{sign.name} ({sign.hanzi})</span>
                </p>
                {activeYear === 1990 && (
                  <div className="mt-2 text-[11px] text-emerald-400 font-medium bg-emerald-950/40 border border-emerald-900/60 rounded px-2.5 py-1">
                    ✓ Verilen senaryo başarıyla sağlandı: 1990 % 12 = 10 ➜ At
                  </div>
                )}
              </div>

              {/* Element by Last Digit Rule */}
              <div className="bg-slate-950/50 border border-slate-800 rounded-xl p-4">
                <div className="text-slate-300 font-semibold mb-1 text-xs">
                  Geleneksel Element &amp; Kök (Son Rakam Kuralı):
                </div>
                <p className="text-slate-400 text-xs">
                  Yılın son rakamı <span className="text-white font-bold font-code">{activeYear % 10}</span> olduğu için elementi: <span className="text-amber-300 font-semibold">{element.name} ({element.yinYang})</span>
                </p>
              </div>

              {/* Interactive terminal trigger */}
              <button
                onClick={() => onOpenTerminalWithYear(activeYear)}
                className="w-full py-2.5 px-4 bg-slate-800 hover:bg-slate-700/80 active:scale-98 border border-slate-700 text-amber-300 rounded-xl font-medium text-xs transition-all flex items-center justify-center gap-2"
              >
                <span>Bu Yılı Java Terminalinde Simüle Et</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Quick Remainder List (0-11) Indicator */}
          <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5">
            <div className="text-xs font-semibold text-slate-300 mb-3 flex items-center justify-between">
              <span>12 Kalan Tablosu (0 - 11):</span>
              <span className="text-[11px] text-amber-400 font-mono">Aktif: {remainder}</span>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
              {ZODIAC_SIGNS.map((s) => (
                <button
                  key={s.remainder}
                  onClick={() => onViewSignDetails(s.remainder)}
                  className={`p-2 rounded-lg text-center transition-all ${
                    s.remainder === remainder
                      ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/30 scale-105'
                      : 'bg-slate-950/60 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                  title={`${s.remainder} ➜ ${s.name}`}
                >
                  <div className="text-xs font-code">{s.remainder}</div>
                  <div className="text-[11px] truncate">{s.name}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Calculated Zodiac Result Card */}
        <div className="lg:col-span-7">
          <div className="bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border-2 border-amber-500/40 rounded-2xl p-6 lg:p-8 shadow-xl shadow-black/40 relative">
            
            {/* Header Badge & Title */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-5">
              <div>
                <div className="text-xs text-amber-400/90 font-medium mb-1 flex items-center gap-2">
                  <span>Doğum Yılı: {activeYear}</span>
                  <span aria-hidden="true">·</span>
                  <span>Kalan: {remainder}</span>
                  <span aria-hidden="true">·</span>
                  <span>{element.yinYang} {element.name}</span>
                </div>
                <h3 className="text-3xl font-extrabold text-white font-display flex items-center gap-3">
                  <span>{sign.name}</span>
                  <span className="text-2xl text-amber-400 font-normal">{sign.hanzi}</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 font-sans font-medium">
                    {sign.chineseName}
                  </span>
                </h3>
                <p className="text-xs text-slate-400 mt-1 italic">
                  "{sign.tagline}"
                </p>
              </div>

              {/* Big Hanzi Character Graphic */}
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                <span className="text-3xl font-display text-amber-400">{sign.hanzi}</span>
              </div>
            </div>

            {/* Key Attributes Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-5 border-b border-slate-800 text-xs">
              <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                <div className="text-slate-400 text-[11px] mb-1">Sabit Element</div>
                <div className="font-semibold text-white flex items-center gap-1">
                  <span>{sign.fixedElementIcon}</span>
                  <span>{sign.fixedElement}</span>
                </div>
              </div>
              <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                <div className="text-slate-400 text-[11px] mb-1">Kutup (Enerji)</div>
                <div className="font-semibold text-amber-300">{sign.yinYang}</div>
              </div>
              <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                <div className="text-slate-400 text-[11px] mb-1">Uğurlu Sayılar</div>
                <div className="font-semibold text-white font-code">{sign.luckyNumbers.join(', ')}</div>
              </div>
              <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                <div className="text-slate-400 text-[11px] mb-1">Uğurlu Renkler</div>
                <div className="font-semibold text-white truncate">{sign.luckyColors.join(', ')}</div>
              </div>
            </div>

            {/* Personality & Strengths */}
            <div className="py-5 space-y-4 text-xs">
              <div>
                <h4 className="text-slate-200 font-semibold mb-1.5 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Karakteristik Özellikler &amp; Doğa</span>
                </h4>
                <p className="text-slate-300 leading-relaxed text-xs">
                  {sign.personality}
                </p>
              </div>

              {/* Strengths & Weaknesses Split */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="bg-emerald-950/20 border border-emerald-900/40 rounded-xl p-3">
                  <div className="text-emerald-400 font-semibold mb-2 flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" />
                    <span>Güçlü Yönleri</span>
                  </div>
                  <ul className="space-y-1 text-slate-300">
                    {sign.strengths.map((st, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="text-emerald-400">✓</span>
                        <span>{st}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-red-950/20 border border-red-900/40 rounded-xl p-3">
                  <div className="text-rose-400 font-semibold mb-2 flex items-center gap-1">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    <span>Dikkat Edilmesi Gerekenler</span>
                  </div>
                  <ul className="space-y-1 text-slate-300">
                    {sign.weaknesses.map((wk, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="text-rose-400">!</span>
                        <span>{wk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Compatibility & Recent Years */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                  <div className="text-slate-400 text-[11px] mb-1 flex items-center gap-1">
                    <Heart className="w-3 h-3 text-rose-400" />
                    <span>En Uyumlu Olduğu Burçlar:</span>
                  </div>
                  <div className="text-amber-300 font-medium">
                    {sign.compatibleSigns.join(' · ')}
                  </div>
                </div>

                <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                  <div className="text-slate-400 text-[11px] mb-1">
                    Bu Burcun Diğer Yılları (12'şer yıl arayla):
                  </div>
                  <div className="text-slate-300 font-code text-[11px] truncate">
                    {sign.recentYears.join(', ')}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer with prompt scenario confirmation & Enes Öztürk Signature */}
            <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400">
              <div>
                Çin Zodyağı Burcunuz: <span className="text-amber-400 font-bold text-sm">{sign.name}</span>
              </div>
              <div className="font-medium text-slate-300 flex items-center gap-1.5">
                <span>İmza:</span>
                <span className="text-amber-400 font-semibold">Enes Öztürk</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
