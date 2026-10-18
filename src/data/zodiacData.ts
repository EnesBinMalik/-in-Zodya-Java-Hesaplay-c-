export interface ZodiacSign {
  remainder: number;
  name: string; // Turkish name
  chineseName: string; // Pinyin and hanzi
  hanzi: string;
  yinYang: 'Yang' | 'Yin';
  fixedElement: string;
  fixedElementIcon: string;
  colorTheme: string;
  accentHex: string;
  tagline: string;
  personality: string;
  strengths: string[];
  weaknesses: string[];
  luckyNumbers: number[];
  luckyColors: string[];
  luckyFlowers: string[];
  compatibleSigns: string[];
  incompatibleSigns: string[];
  recentYears: number[];
  description: string;
  symbolism: string;
}

export const ZODIAC_SIGNS: ZodiacSign[] = [
  {
    remainder: 0,
    name: "Maymun",
    chineseName: "猴 (Hóu)",
    hanzi: "猴",
    yinYang: "Yang",
    fixedElement: "Metal",
    fixedElementIcon: "⚙️",
    colorTheme: "amber",
    accentHex: "#F59E0B",
    tagline: "Zeki, Esprili ve Yaratıcı Mucit",
    personality: "Maymun burcunda doğanlar olağanüstü zekaları, pratik çözümleri ve mizahi yaklaşımlarıyla bilinirler. Meraklı ve öğrenmeye daima açıktırlar.",
    strengths: ["Üstün zeka", "Hızlı adaptasyon", "Espri yeteneği", "İkna kabiliyeti"],
    weaknesses: ["Sabırsızlık", "Hızlı sıkılma", "Bazen kibirli tavır"],
    luckyNumbers: [4, 9],
    luckyColors: ["Beyaz", "Altın", "Mavi"],
    luckyFlowers: ["Krizantem"],
    compatibleSigns: ["Öküz", "Tavşan"],
    incompatibleSigns: ["Kaplan", "Domuz"],
    recentYears: [1944, 1956, 1968, 1980, 1992, 2004, 2016, 2028],
    description: "Çin astrolojisinde Maymun, problem çözme dehası ve çevikliği simgeler. Karşılaştığı her engeli esnekliğiyle aşar.",
    symbolism: "Zeka, kıvraklık, yenilikçilik ve mizah."
  },
  {
    remainder: 1,
    name: "Horoz",
    chineseName: "鸡 (Jī)",
    hanzi: "鸡",
    yinYang: "Yin",
    fixedElement: "Metal",
    fixedElementIcon: "⚙️",
    colorTheme: "orange",
    accentHex: "#EA580C",
    tagline: "Dakik, Dürüst ve Gözlemci Lider",
    personality: "Horoz burcu insanları son derece dakik, düzenli, açık sözlü ve çalışkandır. Detaylara verdikleri önem ve organizasyon yetenekleri zirvededir.",
    strengths: ["Dakiklik", "Cesaret", "Gözlem gücü", "Çalışkanlık"],
    weaknesses: ["Aşırı eleştirel olma", "Mükemmeliyetçilik stresi", "İnatçılık"],
    luckyNumbers: [5, 7, 8],
    luckyColors: ["Altın Sarısı", "Kahverengi", "Sarı"],
    luckyFlowers: ["Gladyöl", "Horozibiği"],
    compatibleSigns: ["Öküz", "Yılan"],
    incompatibleSigns: ["Tavşan", "Köpek"],
    recentYears: [1945, 1957, 1969, 1981, 1993, 2005, 2017, 2029],
    description: "Şafağı müjdeleyen Horoz, uyanıklık ve sadakati temsil eder. Kendi fikirlerini cesurca savunmaktan çekinmez.",
    symbolism: "Dakiklik, sadakat, dürüstlük ve koruyuculuk."
  },
  {
    remainder: 2,
    name: "Köpek",
    chineseName: "狗 (Gǒu)",
    hanzi: "狗",
    yinYang: "Yang",
    fixedElement: "Toprak",
    fixedElementIcon: "🏔️",
    colorTheme: "yellow",
    accentHex: "#CA8A04",
    tagline: "Sadık, Adaletli ve Güvenilir Koruyucu",
    personality: "Köpek burcu insanları dürüstlük, vefa ve adalet duygusuyla tanınır. Sevdiklerini korumak için fedakarlık yapmaktan asla kaçınmazlar.",
    strengths: ["Sonsuz sadakat", "Adalet duygusu", "Güvenilirlik", "İçtenlik"],
    weaknesses: ["Aşırı endişe", "Karamsarlık", "Kolay güvenememe"],
    luckyNumbers: [3, 4, 9],
    luckyColors: ["Yeşil", "Kırmızı", "Mor"],
    luckyFlowers: ["Gül", "Orkide"],
    compatibleSigns: ["Tavşan", "Kaplan", "At"],
    incompatibleSigns: ["Ejderha", "Koyun", "Horoz"],
    recentYears: [1946, 1958, 1970, 1982, 1994, 2006, 2018, 2030],
    description: "Doğrunun ve masumun yanında duran Köpek, dostluğun ve ahlaki değerlerin en yüce temsilcisidir.",
    symbolism: "Sadakat, adalet, koruyuculuk ve samimiyet."
  },
  {
    remainder: 3,
    name: "Domuz",
    chineseName: "猪 (Zhū)",
    hanzi: "猪",
    yinYang: "Yin",
    fixedElement: "Su",
    fixedElementIcon: "🌊",
    colorTheme: "rose",
    accentHex: "#E11D48",
    tagline: "Cömert, Şefkatli ve Barışçıl Ruh",
    personality: "Domuz burcunda doğanlar samimi, yardımsever, hoşgörülü ve hayatın güzelliklerinden keyif almayı bilen kişilerdir. Kin tutmazlar.",
    strengths: ["Cömertlik", "İyimserlik", "Hoşgörü", "Çalışma azmi"],
    weaknesses: ["Kolay aldanma", "Aşırı saf niyet", "Fazla rahatlık"],
    luckyNumbers: [2, 5, 8],
    luckyColors: ["Sarı", "Gri", "Kahverengi", "Altın"],
    luckyFlowers: ["Ortanca", "Papatya"],
    compatibleSigns: ["Kaplan", "Tavşan", "Koyun"],
    incompatibleSigns: ["Yılan", "Maymun"],
    recentYears: [1947, 1959, 1971, 1983, 1995, 2007, 2019, 2031],
    description: "Çin geleneğinde Domuz zenginlik, bereket ve iyi talihin simgesidir. Çevresindekilere huzur ve neşe saçar.",
    symbolism: "Bereket, şans, cömertlik ve dürüstlük."
  },
  {
    remainder: 4,
    name: "Fare",
    chineseName: "鼠 (Shǔ)",
    hanzi: "鼠",
    yinYang: "Yang",
    fixedElement: "Su",
    fixedElementIcon: "🌊",
    colorTheme: "sky",
    accentHex: "#0284C7",
    tagline: "Kıvrak Zekalı, Girişimci ve Fırsatçı",
    personality: "Zodyak halkasının ilk burcu olan Fare, üstün sezgilere, hızlı düşünme yeteneğine ve olağanüstü tasarruf/kaynak yönetimi becerisine sahiptir.",
    strengths: ["Hızlı kavrama", "Tasarruf becerisi", "Uyum sağlama", "Girişimci ruh"],
    weaknesses: ["Aşırı hırs", "Ketumluk", "Eleştiriye kapalılık"],
    luckyNumbers: [2, 3],
    luckyColors: ["Mavi", "Altın", "Yeşil"],
    luckyFlowers: ["Zambak", "Afrika Menekşesi"],
    compatibleSigns: ["Öküz", "Ejderha", "Maymun"],
    incompatibleSigns: ["At", "Koyun"],
    recentYears: [1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020, 2032],
    description: "Büyük Yarış'ı zekasıyla birinci tamamlayan Fare, zodyak döngüsünün başlangıcını ve yeni fırsatları temsil eder.",
    symbolism: "Zeka, bereket, yeni başlangıçlar ve kurnazlık."
  },
  {
    remainder: 5,
    name: "Öküz",
    chineseName: "牛 (Niú)",
    hanzi: "牛",
    yinYang: "Yin",
    fixedElement: "Toprak",
    fixedElementIcon: "🏔️",
    colorTheme: "stone",
    accentHex: "#78716C",
    tagline: "Sabırlı, Güçlü ve Metanetli Temel Taşı",
    personality: "Öküz burcu insanları sarsılmaz kararlılıkları, dürüstlükleri ve çalışkanlıkları ile tanınırlar. Güvenilir ve sorumluluk sahibidirler.",
    strengths: ["Yorulmak bilmez güç", "Güvenilirlik", "Sabır", "Mantıklı düşünme"],
    weaknesses: ["Aşırı inatçılık", "Muhafazakarlık", "Duyguları saklama"],
    luckyNumbers: [1, 4],
    luckyColors: ["Beyaz", "Sarı", "Yeşil"],
    luckyFlowers: ["Lale", "Gül"],
    compatibleSigns: ["Fare", "Yılan", "Horoz"],
    incompatibleSigns: ["Kaplan", "Ejderha", "At", "Koyun"],
    recentYears: [1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021, 2033],
    description: "Tarımın ve sabrın sembolü olan Öküz, her zorluğu adım adım aşan istikrarlı gücü temsil eder.",
    symbolism: "Çalışkanlık, dayanıklılık, dürüstlük ve azim."
  },
  {
    remainder: 6,
    name: "Kaplan",
    chineseName: "虎 (Hǔ)",
    hanzi: "虎",
    yinYang: "Yang",
    fixedElement: "Ağaç",
    fixedElementIcon: "🌲",
    colorTheme: "emerald",
    accentHex: "#059669",
    tagline: "Cesur, Tutkulu ve Karizmatik Savaşçı",
    personality: "Kaplan burcu insanları bağımsız, gözü pek ve lider ruhludur. Haksızlığa tahammül edemez ve risk almaktan çekinmezler.",
    strengths: ["Korkusuzluk", "Doğal karizma", "Liderlik", "Yüksek adalet"],
    weaknesses: ["Dürtüsellik", "Otoriteye isyan", "Acelecilik"],
    luckyNumbers: [1, 3, 4],
    luckyColors: ["Mavi", "Gri", "Turuncu"],
    luckyFlowers: ["Sarı Zambak", "Cineraria"],
    compatibleSigns: ["Ejderha", "At", "Domuz"],
    incompatibleSigns: ["Öküz", "Yılan", "Maymun"],
    recentYears: [1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022, 2034],
    description: "Ormanın kralı Kaplan, kötülükleri kovan ve cesaret aşılayan koruyucu bir güç olarak saygı görür.",
    symbolism: "Cesaret, otorite, güç ve asalet."
  },
  {
    remainder: 7,
    name: "Tavşan",
    chineseName: "兔 (Tù)",
    hanzi: "兔",
    yinYang: "Yin",
    fixedElement: "Ağaç",
    fixedElementIcon: "🌲",
    colorTheme: "teal",
    accentHex: "#0D9488",
    tagline: "Zarif, Nazik ve Diplomatik Sanatçı",
    personality: "Tavşan burcunda doğanlar ince zevkleri, barışçıl tavırları ve nazik iletişim dilleri ile sevilirler. Çatışmadan kaçınırlar.",
    strengths: ["Zarafet", "Diplomasi", "Estetik duyu", "Merhamet"],
    weaknesses: ["Çekingenlik", "Kararsızlık", "Çatışmadan kaçma"],
    luckyNumbers: [3, 4, 6],
    luckyColors: ["Kırmızı", "Pembe", "Mor", "Mavi"],
    luckyFlowers: ["Nergis", "Yasemin"],
    compatibleSigns: ["Koyun", "Maymun", "Köpek", "Domuz"],
    incompatibleSigns: ["Horoz", "Fare"],
    recentYears: [1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023, 2035],
    description: "Ay tavşanı efsanesiyle ilişkilendirilen Tavşan, saflık, uzun ömür ve huzurun timsalidir.",
    symbolism: "Huzur, uzun ömür, zarafet ve nezaket."
  },
  {
    remainder: 8,
    name: "Ejderha",
    chineseName: "龙 (Lóng)",
    hanzi: "龙",
    yinYang: "Yang",
    fixedElement: "Toprak",
    fixedElementIcon: "🏔️",
    colorTheme: "red",
    accentHex: "#DC2626",
    tagline: "Görkemli, Asil ve İlahi Lider",
    personality: "12 burç arasındaki tek mitolojik canlı olan Ejderha; özgüven, şans ve güç timsalidir. Yüksek idealleri ve vizyonerliğiyle dikkat çeker.",
    strengths: ["Vizyon", "Büyük karizma", "Şans", "Yüksek enerji"],
    weaknesses: ["Kibir", "Aşırı talepkarlık", "Taviz vermeme"],
    luckyNumbers: [1, 6, 7],
    luckyColors: ["Altın", "Gümüş", "Grimsi Beyaz"],
    luckyFlowers: ["Ağartı Sümbülü", "Ejderha Ağacı"],
    compatibleSigns: ["Fare", "Kaplan", "Yılan"],
    incompatibleSigns: ["Öküz", "Koyun", "Köpek"],
    recentYears: [1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024, 2036],
    description: "İmparatorluk amblemi olan Ejderha, göklerin ve suların efendisidir; en uğurlu burç kabul edilir.",
    symbolism: "Güç, asalet, şans ve ilahi koruma."
  },
  {
    remainder: 9,
    name: "Yılan",
    chineseName: "蛇 (Shé)",
    hanzi: "蛇",
    yinYang: "Yin",
    fixedElement: "Ateş",
    fixedElementIcon: "🔥",
    colorTheme: "purple",
    accentHex: "#9333EA",
    tagline: "Bilge, Gizemli ve Derin Sezgisel",
    personality: "Yılan burcu insanları derin bir bilgeliğe, keskin felsefi zekaya ve gizemli bir cazibeye sahiptir. Düşünmeden hareket etmezler.",
    strengths: ["Derin sezgi", "Felsefi zeka", "Zarafet", "Sakinlik"],
    weaknesses: ["Kıskançlık", "Şüphecilik", "Soğuk görünüm"],
    luckyNumbers: [2, 8, 9],
    luckyColors: ["Siyah", "Kırmızı", "Sarı"],
    luckyFlowers: ["Orkide", "Kaktüs"],
    compatibleSigns: ["Ejderha", "Horoz"],
    incompatibleSigns: ["Kaplan", "Tavşan", "Yılan", "Domuz"],
    recentYears: [1941, 1953, 1965, 1977, 1989, 2001, 2013, 2025, 2037],
    description: "Küçük ejderha olarak da anılan Yılan, dönüşüm, yenilenme ve içsel bilgeliğin koruyucusudur.",
    symbolism: "Bilgelik, gizem, cazibe ve dönüşüm."
  },
  {
    remainder: 10,
    name: "At",
    chineseName: "马 (Mǎ)",
    hanzi: "马",
    yinYang: "Yang",
    fixedElement: "Ateş",
    fixedElementIcon: "🔥",
    colorTheme: "amber",
    accentHex: "#D97706",
    tagline: "Özgür Ruhlu, Enerjik ve Dinamik Gezgin",
    personality: "At burcunda doğanlar sınırsız enerjileri, bağımsızlık tutkuları ve sosyal yetenekleriyle öne çıkarlar. Kısıtlanmaktan nefret ederler.",
    strengths: ["Yüksek enerji", "Özgürlük aşkı", "Samimiyet", "Hızlı hareket"],
    weaknesses: ["Sabırsızlık", "Hemen pes etme", "Bencilce davranabilme"],
    luckyNumbers: [2, 3, 7],
    luckyColors: ["Sarı", "Yeşil"],
    luckyFlowers: ["Kala Zambağı", "Yasemin"],
    compatibleSigns: ["Kaplan", "Koyun", "Köpek"],
    incompatibleSigns: ["Fare", "Öküz"],
    recentYears: [1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026, 2038],
    description: "Senaryomuzdaki burç! Bozkırların rüzgarı At, durmaksızın ilerleyen yaşam sevincini ve özgürlük arzusunu temsil eder.",
    symbolism: "Özgürlük, hız, başarı, dayanıklılık ve coşku."
  },
  {
    remainder: 11,
    name: "Koyun",
    chineseName: "羊 (Yáng)",
    hanzi: "羊",
    yinYang: "Yin",
    fixedElement: "Toprak",
    fixedElementIcon: "🏔️",
    colorTheme: "emerald",
    accentHex: "#10B981",
    tagline: "Şefkatli, Sanatçı Ruhlu ve Barışçıl",
    personality: "Koyun (veya Keçi) burcu insanları son derece hassas, merhametli ve estetik duyguları gelişmiş kişilerdir. İyilik yapmayı severler.",
    strengths: ["Yüksek empati", "Sanatsal yetenek", "Nazik doğa", "Yumuşak kalplilik"],
    weaknesses: ["Melankoli", "Bağımlılık", "Karamsarlığa yatkınlık"],
    luckyNumbers: [2, 7],
    luckyColors: ["Kahverengi", "Kırmızı", "Mor"],
    luckyFlowers: ["Karanfil", "Çuha Çiçeği"],
    compatibleSigns: ["Tavşan", "At", "Domuz"],
    incompatibleSigns: ["Öküz", "Ejderha", "Köpek"],
    recentYears: [1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015, 2027, 2039],
    description: "Çin kültüründe barış, uyum ve sanatsal duyarlılığın sembolüdür; evde ve toplumda sükûneti sağlar.",
    symbolism: "Huzur, şefkat, estetik ve merhamet."
  }
];

export interface YearAnalysis {
  year: number;
  remainder: number;
  sign: ZodiacSign;
  element: {
    name: string;
    chineseStem: string;
    yinYang: 'Yang' | 'Yin';
    nature: string;
    color: string;
  };
  quotient: number;
}

export function calculateChineseZodiac(birthYear: number): YearAnalysis {
  // Normalize year
  const normalizedYear = Math.abs(birthYear);
  const remainder = normalizedYear % 12;
  const quotient = Math.floor(normalizedYear / 12);
  const sign = ZODIAC_SIGNS[remainder];

  // Element calculation by last digit (Heavenly Stems)
  const lastDigit = normalizedYear % 10;
  let element = {
    name: "Metal",
    chineseStem: "Geng (庚)",
    yinYang: "Yang" as 'Yang' | 'Yin',
    nature: "Sertlik, keskinlik, adalet ve netlik",
    color: "#E2E8F0"
  };

  switch (lastDigit) {
    case 0:
      element = { name: "Metal", chineseStem: "Geng (庚)", yinYang: "Yang", nature: "Kararlılık, metanet ve adalet", color: "#F1F5F9" };
      break;
    case 1:
      element = { name: "Metal", chineseStem: "Xin (辛)", yinYang: "Yin", nature: "Zarafet, incelik ve netlik", color: "#E2E8F0" };
      break;
    case 2:
      element = { name: "Su (Water)", chineseStem: "Ren (壬)", yinYang: "Yang", nature: "Akışkanlık, bilgelik ve sezgisellik", color: "#38BDF8" };
      break;
    case 3:
      element = { name: "Su (Water)", chineseStem: "Gui (癸)", yinYang: "Yin", nature: "Hassasiyet, derinlik ve uyum", color: "#0EA5E9" };
      break;
    case 4:
      element = { name: "Ağaç / Tahta (Wood)", chineseStem: "Jia (甲)", yinYang: "Yang", nature: "Büyüme, vizyon ve gelişim", color: "#22C55E" };
      break;
    case 5:
      element = { name: "Ağaç / Tahta (Wood)", chineseStem: "Yi (乙)", yinYang: "Yin", nature: "Esneklik, nezaket ve uyum", color: "#16A34A" };
      break;
    case 6:
      element = { name: "Ateş (Fire)", chineseStem: "Bing (丙)", yinYang: "Yang", nature: "Tutku, dinamizm ve liderlik", color: "#EF4444" };
      break;
    case 7:
      element = { name: "Ateş (Fire)", chineseStem: "Ding (丁)", yinYang: "Yin", nature: "Aydınlanma, ilham ve sıcaklık", color: "#F97316" };
      break;
    case 8:
      element = { name: "Toprak (Earth)", chineseStem: "Wu (戊)", yinYang: "Yang", nature: "Sağlamlık, güven ve istikrar", color: "#EAB308" };
      break;
    case 9:
      element = { name: "Toprak (Earth)", chineseStem: "Ji (己)", yinYang: "Yin", nature: "Besleyicilik, üretkenlik ve pratiklik", color: "#CA8A04" };
      break;
  }

  return {
    year: birthYear,
    remainder,
    sign,
    element,
    quotient
  };
}
