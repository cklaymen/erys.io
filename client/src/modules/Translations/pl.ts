import { TranslationKey } from "./Translation";
import { COMPANY_NAME } from "src/const";

const pl = {
  [TranslationKey.INIT_BUBBLE_MESSAGE]:
    "Zajmuję się tworzeniem oprogramowania (złożonych <1>aplikacji webowych</1> jak i prostych <3>stron internetowych</3>). Chętnie podejmuję się realizacji dedykowanych rozwiązań, które mogą zautomatyzować bądź usprawnić zadania w Państwa działalności. Wykorzystuję <5>nowoczesne technologie</5>, które zapewniają sprawne i bezpieczne działanie programu. Posiadam odpowiednie <7>wykształcenie</7> oraz <9>doświadczenie</9> w tym kierunku. Więcej o mnie dowiesz się <11><0>tutaj</0></11>",
  [TranslationKey.QUESTION_ABOUT_WEB_APPS]: "Co to jest aplikacja webowa?",
  [TranslationKey.ANSWER_ABOUT_WEB_APPS]:
    "Aplikacja webowa to, w pewnym uproszczeniu, program komputerowy działający w oknie przeglądarki internetowej. Przykładem aplikacji webowej są: YouTube, Facebook, Allegro, Netflix oraz wiele innych. Bardziej szczegółowo mówiąc, aplikacja webowa działa za pośrednictwem serwera www, który dostarcza treści oraz funkcjonalności - w odróżnieniu do tradycyjnego programu komputerowego, który jest instalowany bezpośrednio na dysku użytkownika. Jedną z zalet takich aplikacji jest łatwy dostęp z dowolnego urządzenia, które ma połączenie z siecią.",
  [TranslationKey.QUESTION_ABOUT_WEBSITES]: "Co to jest strona internetowa?",
  [TranslationKey.ANSWER_ABOUT_WEBSITES]:
    "Strona internetowa to zbiór treści, połączonych ze sobą za pomocą odnośników, dostępnych pod danym adresem elektronicznym. Celem strony internetowej jest dostarczenie informacji do odbiorcy. W odróżnieniu od aplikacji webowej, która dostarcza funkcjonalności i wymaga interakcji ze strony użytkownika.",
  [TranslationKey.QUESTION_ABOUT_MODERN_TECHNOLOGIES]:
    "Jakie technologie są wykorzystywane do tworzenia oprogramowania?",
  [TranslationKey.ANSWER_ABOUT_MODERN_TECHNOLOGIES]:
    "Do tworzenia oprogramowania wykorzystuję rozwiązania oparte o język programowania JavaScript (TypeScript), są to m.in. ReactJS oraz NodeJS. W zależności od zapotrzebowania wykorzystuję bazy danych MySQL lub MongoDB. Korzystam również z takich narzędzi jak GIT, Docker oraz Jenkins.",
  [TranslationKey.QUESTION_ABOUT_EDUCATION]: "Jakie wykształcenie Pan posiada?",
  [TranslationKey.ANSWER_ABOUT_EDUCATION]:
    "Ukończyłem studia magisterskie oraz inżynierskie na kierunku Informatyka wydziału Automatyki, Elektroniki i Informatyki Politechniki Śląskiej w Gliwicach. Moją specjalizacją jest Internet i Technologie Sieciowe. Moje prace dyplomowe były na temat “Webowy system do sterowania urządzeniami domowymi” oraz “Przewidywanie produkcji energii elektrycznej w instalacjach fotowoltaicznych na podstawie prognozy pogody”.",
  [TranslationKey.QUESTION_ABOUT_EXPERIENCE]:
    "Jakie doświadczenie Pan posiada?",
  [TranslationKey.ANSWER_ABOUT_EXPERIENCE]:
    "Przez ponad dwa lata pracowałem w firmie (Gorrion Software House w Gliwicach) wytwarzającej oprogramowanie. Pracowałem nad projektem serwisu społecznościowego private.center, który brał udział w kampanii Kickstarter. W 2013 roku stworzyłem serwis do testów na prawo jazdy (prawkobazapytan). Ponadto mam na swoim koncie kilka własnych projektów, w tym gry na przeglądarkę internetową, które tworzyłem będąc jeszcze w liceum.",
  [TranslationKey.SERVICES]: "Usługi",
  [TranslationKey.SERVICES_SHORT_DESCRIPTION]:
    "Świadczę usługi z zakresu szeroko pojętego programowania, skupiając się na mojej specjalizacji - czyli technologiach internetowych. Wyróżniłem 3 główne grupy zadań, którymi się zajmuję.",
  [TranslationKey.SERVICES_DESCRIPTION]: `Zajmuję się tworzeniem oprogramowania na zamówienie oraz wszystkim innym związanym z jego poprawnym uruchomieniem i dalszym działaniem. Są to rozwiązania "szyte na miarę" według wcześniejszych rozmów i ustaleń z zamawiającym. Do swoich realizacji wykorzystuję technologie webowe, dzięki czemu tworzony program dostosowany jest do różnych urządzeń oraz systemów operacyjnych, ponieważ działa z wykorzystaniem przeglądarki internetowej.

  Świadczę również usługi programistyczne związane z rozwojem oprogramowania w technologiach webowych - jako tzw. fullstack developer. Przywiązuję dużą uwagę do jakości tworzonego kodu oraz optymalizacji działania programu.`,
  [TranslationKey.SERVICES_DESCRIPTION_SUMMARY]:
    "Skontaktuj się ze mną i napisz, czego potrzebujesz. Umówimy się na rozmowę, na której omówimy szczegóły i wyjaśnimy niejasności. Znając potrzeby przedstawię możliwe oraz najlepiej dopasowane rozwiązania.",
  [TranslationKey.WEB_APPS_SITES]: "Aplikacje webowe | Strony internetowe",
  [TranslationKey.WEB_APPS_SITES_SERVICE_SHORT_DESCRIPTION]:
    "Projektowanie oraz tworzenie w pełni funkcjonalnych aplikacji webowych i stron internetowych. Rozwiązania dopasowane do indywidualnych potrzeb klienta.",
  [TranslationKey.WEB_APPS_SITES_SERVICE_DESCRIPTION]:
    "Projektuję oraz tworzę od postaw dedykowane oprogramowanie według konkretnych wytycznych zamawiającego. W zaleności od potrzeby jest to:<1><0>Rozbudowana aplikacja webowa, na którą składa się część działająca na serwerze oraz część działająca na urządzeniu użytkownika,</0><1>Strona internetowa z możliwością edycji treści, która również wymaga części działającej na serwerze oraz na urządzeniu użytkownika,</1><2>Statyczna strona internetowa, której treść nie jest możliwa do bezpośredniej modyfikacji.</2></1>Poszczególne rozwiązanie proponowane jest na podstawie wcześniejszych rozmów i ustaleń z zamawiającym.",
  [TranslationKey.CODING]: "Programowanie",
  [TranslationKey.CODING_SERVICE_SHORT_DESCRIPTION]:
    "Realizacja zadań związanych z rozwijaniem oprogramowania w technologiach webowych, takich jak m.in.: JavaScript (TypeScript), ReactJS, NodeJS z zachowaniem dobrych praktyk i czystego kodu.",
  [TranslationKey.CODING_SERVICE_DESCRIPTION]:
    "Podejmuję się zadań związanych z rozwijaniem oprogramowania w technologiach webowych. Mogą to być modyfikacje istniejących programów lub współpraca z zespołem przy tworzeniu nowego produktu. Technologie, z którymi mam największe doświadczenie to React oraz Node. Obsługuję bazy danych relacyjne (MySQL) oraz zorientowane na dokumenty (MongoDB). Na codzień korzystam z Docker-a i systemu kontroli wersji GIT.",
  [TranslationKey.SERVER_DOMAIN]: "Serwer oraz domena",
  [TranslationKey.SERVER_DOMAIN_SERVICE_SHORT_DESCRIPTION]:
    "Administracja serwerem, konfiguracja domeny oraz wszystko inne związane z poprawnym działaniem oprogramowania.",
  [TranslationKey.SERVER_DOMAIN_SERVICE_DESCRIPTION]:
    "Administracja serwerem, konfiguracja domeny oraz wszystko inne związane z poprawnym działaniem oprogramowania.",
  [TranslationKey.MORE_ABOUT_SERVICES]: "Dowiedz się więcej o usługach",
  [TranslationKey.STEPS]: "Etapy współpracy",
  [TranslationKey.STEPS_SHORT_DESCRIPTION]:
    "Proces związany z tworzeniem oprogramowania będzie się różnił w zależności od projektu, jednak w każdym z nich wyróżnić można następujące etapy:",
  [TranslationKey.NEED_ANALYSIS_STEP_TITLE]: "Analiza potrzeb",
  [TranslationKey.NEED_ANALYSIS_STEP_DESCRIPTION]:
    "Napisz czym się zajmujesz oraz czego potrzebujesz. Przedstawię możliwości oraz najlepiej dopasowane rozwiązanie.",
  [TranslationKey.GRAPHIC_DESIGN_STEP_TITLE]: "Projekt wizualny",
  [TranslationKey.GRAPHIC_DESIGN_STEP_DESCRIPTION]:
    "Przygotowany zostanie projekt graficzny aplikacji lub, gdy posiadasz własny projekt, upewnię się czy jest zgodny z ustaleniami.",
  [TranslationKey.CREATING_APP_STEP_TITLE]: "Tworzenie aplikacji",
  [TranslationKey.CREATING_APP_STEP_DESCRIPTION]:
    "Na podstawie projektu wizualnego zostanie stworzona w pełni funkcjonalna aplikacja.",
  [TranslationKey.SUPPORT_STEP_TITLE]: "Wsparcie",
  [TranslationKey.SUPPORT_STEP_DESCRIPTION]:
    "Po zaakceptowaniu gotowej aplikacji zostaje ona zainstalowana na serwerze. Udzielone zostaje wsparcie na jej prawidłowe działanie.",
  [TranslationKey.TECHNOLOGIES]: "Technologie",
  [TranslationKey.TECHNOLOGIES_SHORT_DESCRIPTION]:
    "W swoich realizacjach wykorzystuję nowoczesne technologie. Jestem na bieżąco z coraz to nowszymi rozwiązanami z dziedziny webdev. Dzięki temu tworzone przeze mnie oprogramowanie jest wydajne, bezpieczne oraz przyjemne w obsłudze.",
  [TranslationKey.ABOUT_ME]: "O mnie",
  [TranslationKey.ABOUT_ME_SHORT_DESCRIPTION]:
    "Jestem programistą, web deweloperem. Tworzę dedykowane oprogramowanie oparte o technologie internetowe. Napisz do mnie czego potrzebujesz, a przedstawię najlepsze możliwe rozwiązania.",
  [TranslationKey.CONTACT]: "Kontakt",
  [TranslationKey.WORKS]: "Realizacje",
  [TranslationKey.ABOUT_ME_DESCRIPTION]:
    "Jestem informatykiem programistą. Ukończyłem studia magisterskie oraz inżynierskie na Politechnice Śląskiej w Gliwicach. Komputerami oraz programowaniem interesuję się od wczesnych lat, co potwierdzają moje projekty z tamtego okresu. Będąc w liceum stworzyłem aplikację z bazą pytań na prawo jazdy, z której wówczas korzystała większość osób przygotowujących się do tego egzaminu. W trakcie studiów współtworzyłem projekt serwisu społecznościowego private.center oraz pracowałem w firmie tworzącej oprogramowanie. Brałem również udział w prezentacjach oraz warsztatach, na temat dobrych praktyk oraz nowych technologii, które były organizowane na terenie uczelni lub poza nią przez różne firmy programistyczne z Gliwic.",
  [TranslationKey.ABOUT_COMPANY]: "O firmie",
  [TranslationKey.ABOUT_COMPANY_DESCRIPTION]:
    "Po ukończeniu studiów postanowiłem założyć własną działalność gospodarczą, ponieważ cenię sobie niezależność oraz pracę na własny rachunek. Wierzę, że moja pasja do programowania przyczyni się do zadowolenia z dostarczanych przeze mnie usług.",
  [TranslationKey.WORKS_DESCRIPTION]: `Spis projektów, które wykonałem jako "${COMPANY_NAME}".`,
  [TranslationKey.USED_TECHNOLOGIES]: "Wykorzystane technologie",

  // *** Works data ***
  [TranslationKey.INVOICE_CONVERTER_TITLE]: "Konwerter faktur",
  [TranslationKey.INVOICE_CONVERTER_DESCRIPTION]:
    "Aplikacja webowa służąca do konwertowania pliku z fakturami. Dzięki niej zautomatyzowano proces księgowania dużej ilości faktur, przez co oszczędzono pracę księgowych, a tym samym pieniądze klienta.",

  // *** Route paths translations ***
  [TranslationKey.ABOUT_PATH]: "o-mnie",
  [TranslationKey.SERVICES_PATH]: "uslugi",
  [TranslationKey.WORKS_PATH]: "realizacje",
};

export default pl;
