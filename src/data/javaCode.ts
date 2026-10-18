export interface JavaSnippet {
  id: string;
  title: string;
  subtitle: string;
  difficulty: string;
  code: string;
  fileName: string;
  summary: string;
}

export const JAVA_SNIPPETS: JavaSnippet[] = [
  {
    id: "switch-case",
    title: "1. Klasik Switch-Case Çözümü",
    subtitle: "Patika.dev / Üniversite Java 101 Standardı",
    difficulty: "Temel Seviye",
    fileName: "CinZodyagi.java",
    summary: "Kullanıcıdan Scanner sınıfı ile doğum yılı alınır, % 12 ile kalan hesaplanır ve switch-case kontrol yapısıyla burç belirlenir.",
    code: `import java.util.Scanner;

/**
 * Program: Çin Zodyağı Hesaplama Programı
 * Açıklama: Kullanıcıdan doğum yılını alıp 12 ile bölümünden
 *           kalanına göre Çin Zodyağı burcunu hesaplar.
 * 
 * @author Enes Öztürk
 * @version 1.0
 */
public class CinZodyagi {
    public static void main(String[] args) {
        // Değişken tanımlamaları
        int dogumYili;
        int kalan;
        String cinZodyagi = "";

        // Scanner nesnesi oluşturuluyor
        Scanner input = new Scanner(System.in);

        // Kullanıcıdan veri girişi
        System.out.print("Doğum Yılınızı Giriniz : ");
        dogumYili = input.nextInt();

        // Geçerli bir yıl kontrolü (Opsiyonel ama iyi mühendislik pratiği)
        if (dogumYili < 0) {
            System.out.println("Hata: Geçersiz doğum yılı girdiniz!");
            input.close();
            return;
        }

        // 12 ile bölümünden kalanı hesaplama (Mod operatörü: %)
        kalan = dogumYili % 12;

        // Kalan değere göre burç eşleştirmesi
        switch (kalan) {
            case 0:
                cinZodyagi = "Maymun";
                break;
            case 1:
                cinZodyagi = "Horoz";
                break;
            case 2:
                cinZodyagi = "Köpek";
                break;
            case 3:
                cinZodyagi = "Domuz";
                break;
            case 4:
                cinZodyagi = "Fare";
                break;
            case 5:
                cinZodyagi = "Öküz";
                break;
            case 6:
                cinZodyagi = "Kaplan";
                break;
            case 7:
                cinZodyagi = "Tavşan";
                break;
            case 8:
                cinZodyagi = "Ejderha";
                break;
            case 9:
                cinZodyagi = "Yılan";
                break;
            case 10:
                cinZodyagi = "At";
                break;
            case 11:
                cinZodyagi = "Koyun";
                break;
            default:
                cinZodyagi = "Bilinmeyen Burç";
                break;
        }

        // Sonucu ekrana formatlı yazdırma
        System.out.println("Çin Zodyağı Burcunuz : " + cinZodyagi);
        System.out.println("----------------------------------------");
        System.out.println("Geliştirici : Enes Öztürk");

        // Kaynak sızıntısını önlemek için Scanner kapatılır
        input.close();
    }
}`
  },
  {
    id: "array-lookup",
    title: "2. Dizi (Array) Tabanlı Çözüm",
    subtitle: "Temiz Kod & O(1) Zaman Karmaşıklığı",
    difficulty: "Orta Seviye",
    fileName: "CinZodyagiDizi.java",
    summary: "12'li döngüyü sabit boyutlu String dizisine indeksleyerek switch-case kalabalığından kurtaran sade ve profesyonel yaklaşım.",
    code: `import java.util.Scanner;

/**
 * Çin Zodyağı Hesaplama (Dizi / Array Eşleme Yaklaşımı)
 * 
 * @author Enes Öztürk
 */
public class CinZodyagiDizi {
    // 0'dan 11'e kalan indekslerine karşılık gelen burç dizisi
    private static final String[] ZODYAK_BURCLARI = {
        "Maymun",  // 0
        "Horoz",   // 1
        "Köpek",   // 2
        "Domuz",   // 3
        "Fare",    // 4
        "Öküz",    // 5
        "Kaplan",  // 6
        "Tavşan",  // 7
        "Ejderha", // 8
        "Yılan",   // 9
        "At",      // 10
        "Koyun"    // 11
    };

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Doğum Yılınızı Giriniz : ");

        if (scanner.hasNextInt()) {
            int yil = scanner.nextInt();

            if (yil >= 0) {
                // Modulo işlemi doğrudan dizi indeksine eşleşir
                int indeks = yil % 12;
                String burc = ZODYAK_BURCLARI[indeks];

                System.out.println("Çin Zodyağı Burcunuz : " + burc);
                System.out.println("Hazırlayan: Enes Öztürk");
            } else {
                System.out.println("Lütfen pozitif bir yıl giriniz!");
            }
        } else {
            System.out.println("Hata: Sayısal bir değer girilmelidir!");
        }

        scanner.close();
    }
}`
  },
  {
    id: "enhanced-switch",
    title: "3. Modern Java Switch Expression",
    subtitle: "Java 14+ Yeni Nesil Sözdizimi",
    difficulty: "İleri Seviye",
    fileName: "CinZodyagiModern.java",
    summary: "Java 14 ve sonrasında gelen Switch Expressions (oklu -> sözdizimi) ile 'break' yazmaya gerek kalmadan doğrudan değer döndürür.",
    code: `import java.util.Scanner;

/**
 * Modern Java 14+ Switch Expression ile Çin Zodyağı
 * 
 * @author Enes Öztürk
 */
public class CinZodyagiModern {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.print("Doğum Yılınızı Giriniz : ");
        int yil = scan.nextInt();

        // Switch Expression: Değer doğrudan değişkene atanır, break gerekmez
        String burc = switch (Math.abs(yil) % 12) {
            case 0  -> "Maymun";
            case 1  -> "Horoz";
            case 2  -> "Köpek";
            case 3  -> "Domuz";
            case 4  -> "Fare";
            case 5  -> "Öküz";
            case 6  -> "Kaplan";
            case 7  -> "Tavşan";
            case 8  -> "Ejderha";
            case 9  -> "Yılan";
            case 10 -> "At";
            case 11 -> "Koyun";
            default -> "Tanımsız";
        };

        System.out.println("Çin Zodyağı Burcunuz : " + burc);
        System.out.println("İmza: Enes Öztürk");
        scan.close();
    }
}`
  }
];

export interface MathStep {
  stepNumber: number;
  title: string;
  explanation: string;
  formula: string;
  codeSnippet: string;
}

export const JAVA_CONCEPTS_EXPLANATION: MathStep[] = [
  {
    stepNumber: 1,
    title: "Scanner Sınıfı ile Konsoldan Veri Okuma",
    explanation: "Java'da kullanıcı girdisi almak için java.util.Scanner kütüphanesi kullanılır. System.in akışı üzerinden input.nextInt() metodu ile tam sayı okunur.",
    formula: "Scanner input = new Scanner(System.in); int dogumYili = input.nextInt();",
    codeSnippet: "System.out.print(\"Doğum Yılınızı Giriniz : \");\ndogumYili = input.nextInt();"
  },
  {
    stepNumber: 2,
    title: "Mod Alma (%) Operatörü",
    explanation: "Çin Zodyağı 12 yıllık döngüye dayanır. Bir yılın 12'ye bölümünden kalan (0 ile 11 arası) tam olarak burcun sırasını belirler.",
    formula: "kalan = dogumYili % 12 (Örn: 1990 % 12 = 10)",
    codeSnippet: "int kalan = dogumYili % 12;"
  },
  {
    stepNumber: 3,
    title: "Koşullu Eşleme (Switch-Case veya Dizi)",
    explanation: "Kalan değerine (0-11) göre ilgili hayvan burcu seçilir. Klasik ödevlerde switch-case tercih edilirken, büyük sistemlerde O(1) dizi erişimi daha verimlidir.",
    formula: "kalan == 10 ➜ \"At\"",
    codeSnippet: "case 10:\n    cinZodyagi = \"At\";\n    break;"
  },
  {
    stepNumber: 4,
    title: "Formatlı Çıktı ve Kaynak Yönetimi",
    explanation: "Ekrana istenen senaryoya uygun çıktı basılır ve bellek sızıntısını önlemek için Scanner nesnesi .close() ile sonlandırılır.",
    formula: "System.out.println(\"Çin Zodyağı Burcunuz : \" + cinZodyagi);",
    codeSnippet: "System.out.println(\"Çin Zodyağı Burcunuz : \" + cinZodyagi);\ninput.close();"
  }
];
