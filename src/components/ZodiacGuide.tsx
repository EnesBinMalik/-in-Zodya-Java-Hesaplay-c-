import React from 'react';
import { ZODIAC_SIGNS } from '../data/zodiacData.ts';
import { BookOpen, Compass, Flame, Droplets, Mountain, Trees, Shield } from 'lucide-react';

export const ZodiacGuide: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Intro Article */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 lg:p-8 space-y-4">
        <div className="text-xs text-amber-400 font-semibold">
          Astrolojik ve Matematiksel Temeller · Enes Öztürk
        </div>
        <h2 className="text-2xl lg:text-3xl font-bold text-white font-display">
          Çin Zodyağı Nedir ve Nasıl Hesaplanır?
        </h2>
        <div className="text-sm text-slate-300 leading-relaxed space-y-3">
          <p>
            <strong className="text-white">Çin Zodyağı (Shengxiao - 生肖)</strong>, yaklaşık <strong>4000 yıldır</strong> kullanılan kadim bir Doğu astrolojisi ve takvim sistemidir. İnsanları 12 değişik hayvan burcu ve sembollerle tanımlar.
          </p>
          <p>
            Batı astrolojisinin aksine Çin Zodyağı gökyüzündeki yıldız takımyıldızlarına değil, 12 burcun eşit aralıklarla (10 derece genişliğinde) sıralandığı bir <strong className="text-amber-300">hayvan halkasına</strong> ve Jüpiter'in Güneş etrafındaki yaklaşık 12 yıllık yörünge döngüsüne dayanır.
          </p>
        </div>
      </div>

      {/* Modulo Math Breakdown Table as in prompt */}
      <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
          <div>
            <h3 className="text-lg font-bold text-white font-display">
              Çin Zodyağı Hesaplama Tablosu (Modulo 12)
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Kişinin doğum yılının 12 ile bölümünde kalan sayı doğrudan burcunu belirler:
            </p>
          </div>
          <div className="font-code text-xs text-amber-400 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
            Formül: Doğum Tarihi % 12
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {ZODIAC_SIGNS.map((sign) => (
            <div
              key={sign.remainder}
              className={`p-3.5 rounded-xl border flex items-center justify-between transition-all ${
                sign.remainder === 10
                  ? 'bg-amber-500/10 border-amber-500/40 text-amber-300'
                  : 'bg-slate-950/60 border-slate-800/80 text-slate-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center font-code font-bold text-xs text-amber-400">
                  %{sign.remainder}
                </span>
                <div>
                  <div className="font-semibold text-white text-sm flex items-center gap-1.5">
                    <span>{sign.name}</span>
                    <span className="text-xs text-slate-400 font-normal">({sign.hanzi})</span>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Kalan = {sign.remainder} {sign.remainder === 10 ? '➜ Senaryo (1990)' : ''}
                  </div>
                </div>
              </div>
              <span className="text-xl font-display text-amber-400/80">{sign.hanzi}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 5 Elements Breakdown */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-4">
        <h3 className="text-lg font-bold text-white font-display">
          5 Temel Element (Wu Xing) ve Doğum Yılı Son Rakamı
        </h3>
        <p className="text-xs text-slate-300 leading-relaxed">
          Çin astrolojisinde her yıl sadece bir hayvana değil, aynı zamanda 5 elementten birine bağlıdır. Element, doğum yılının son rakamına göre belirlenir:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 pt-2">
          <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800 text-center space-y-2">
            <div className="w-10 h-10 mx-auto rounded-full bg-slate-800 flex items-center justify-center text-slate-200">
              <Shield className="w-5 h-5" />
            </div>
            <div className="font-bold text-slate-200 text-sm">Metal</div>
            <div className="text-[11px] text-amber-300 font-mono">Son Rakam: 0, 1</div>
            <div className="text-[11px] text-slate-400">Örn: 1990 (Metal At)</div>
          </div>

          <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800 text-center space-y-2">
            <div className="w-10 h-10 mx-auto rounded-full bg-sky-950 flex items-center justify-center text-sky-400">
              <Droplets className="w-5 h-5" />
            </div>
            <div className="font-bold text-sky-300 text-sm">Su (Water)</div>
            <div className="text-[11px] text-sky-400 font-mono">Son Rakam: 2, 3</div>
            <div className="text-[11px] text-slate-400">Örn: 1992, 1993</div>
          </div>

          <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800 text-center space-y-2">
            <div className="w-10 h-10 mx-auto rounded-full bg-emerald-950 flex items-center justify-center text-emerald-400">
              <Trees className="w-5 h-5" />
            </div>
            <div className="font-bold text-emerald-300 text-sm">Ağaç (Wood)</div>
            <div className="text-[11px] text-emerald-400 font-mono">Son Rakam: 4, 5</div>
            <div className="text-[11px] text-slate-400">Örn: 1984, 1985</div>
          </div>

          <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800 text-center space-y-2">
            <div className="w-10 h-10 mx-auto rounded-full bg-red-950 flex items-center justify-center text-rose-400">
              <Flame className="w-5 h-5" />
            </div>
            <div className="font-bold text-rose-300 text-sm">Ateş (Fire)</div>
            <div className="text-[11px] text-rose-400 font-mono">Son Rakam: 6, 7</div>
            <div className="text-[11px] text-slate-400">Örn: 1986, 2026</div>
          </div>

          <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800 text-center space-y-2">
            <div className="w-10 h-10 mx-auto rounded-full bg-amber-950 flex items-center justify-center text-amber-400">
              <Mountain className="w-5 h-5" />
            </div>
            <div className="font-bold text-amber-300 text-sm">Toprak (Earth)</div>
            <div className="text-[11px] text-amber-400 font-mono">Son Rakam: 8, 9</div>
            <div className="text-[11px] text-slate-400">Örn: 1988, 1989</div>
          </div>
        </div>
      </div>

      {/* The Great Race Myth (Büyük Yarış Efsanesi) */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-3">
        <h3 className="text-lg font-bold text-white font-display flex items-center gap-2">
          <Compass className="w-5 h-5 text-amber-400" />
          <span>Büyük Yarış (The Great Race) Efsanesi</span>
        </h3>
        <p className="text-xs text-slate-300 leading-relaxed">
          Efsaneye göre Yeşim İmparator (Jade Emperor), takvimdeki 12 yılı adlandırmak için tüm hayvanları nehir geçme yarışına davet etmiştir. Güçlü Öküz'ün sırtına atlayan kurnaz Fare, bitiş çizgisine son anda zıplayarak birinci gelmiş; arkasından Öküz, cesur Kaplan, çevik Tavşan ve uçarak gelen Ejderha nehri tamamlamıştır. Yılan, At, Koyun, Maymun, Horoz, Köpek ve son olarak Domuz çizgiyi geçerek 12'li zodyak halkasını oluşturmuştur.
        </p>
        <div className="text-xs text-amber-400/90 font-medium pt-2">
          Program ve Tasarım İmzası: Enes Öztürk
        </div>
      </div>
    </div>
  );
};
