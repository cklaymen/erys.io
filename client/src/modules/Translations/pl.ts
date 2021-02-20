import Translation, { TranslationKey } from "./Translation";
import { COMPANY_NAME, COMPANY_NAME_WITHOUT_OWNER_NAME } from "src/const";

const HOME_PATH_TITLE = `${COMPANY_NAME_WITHOUT_OWNER_NAME} - producent oprogramowania na zamówienie`;

const pl: Translation = {
  [TranslationKey.INIT_BUBBLE_MESSAGE]:
    "Zajmuję się tworzeniem oprogramowania (złożonych <1>aplikacji webowych</1> jak i prostych <3>stron internetowych</3>). Chętnie podejmuję się realizacji dedykowanych rozwiązań, które mogą zautomatyzować bądź usprawnić zadania w Państwa działalności. Wykorzystuję <5>nowoczesne technologie</5>, które zapewniają sprawne i bezpieczne działanie programu. Posiadam odpowiednie <7>wykształcenie</7> oraz <9>doświadczenie</9> w tym kierunku. Więcej o mnie dowiesz się <11><0>tutaj</0></11>",
  [TranslationKey.QUESTION_ABOUT_WEB_APPS]: "Co to jest aplikacja webowa?",
  [TranslationKey.ANSWER_ABOUT_WEB_APPS]:
    "Aplikacja webowa to, w pewnym uproszczeniu, program komputerowy działający w oknie przeglądarki internetowej. Przykładem aplikacji webowej są: YouTube, Facebook, Allegro, Netflix oraz wiele innych. Bardziej szczegółowo mówiąc, aplikacja webowa działa za pośrednictwem serwera www, który dostarcza treści oraz funkcjonalności - w odróżnieniu do tradycyjnego programu komputerowego, który jest instalowany bezpośrednio na dysku użytkownika. Jedną z zalet takich aplikacji jest łatwy dostęp z dowolnego urządzenia, które ma połączenie z siecią.",
  [TranslationKey.QUESTION_ABOUT_WEBSITES]: "Co to jest strona internetowa?",
  [TranslationKey.ANSWER_ABOUT_WEBSITES]:
    "Strona internetowa to zbiór treści, połączonych ze sobą za pomocą odnośników, dostępnych pod danym adresem elektronicznym. Celem strony internetowej jest dostarczenie informacji do odbiorcy. W odróżnieniu do aplikacji webowej, która dostarcza funkcjonalności i wymaga interakcji ze strony użytkownika.",
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
    "Projektowanie oraz tworzenie oprogramowania na zamówienie z wykorzystaniem technologii webowych. Rozwiązania dopasowane do indywidualnych potrzeb klienta.",
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
    "Administruję serwerem, konfiguruję domeny oraz zajmuję się pozostałymi elementami, które związane są z poprawnym działaniem oprogramowania.",
  [TranslationKey.MORE_ABOUT_SERVICES]: "Dowiedz się więcej o usługach",
  [TranslationKey.STEPS]: "Etapy współpracy",
  [TranslationKey.STEPS_SHORT_DESCRIPTION]:
    "Proces związany z tworzeniem oprogramowania będzie się różnił w zależności od projektu, jednak w każdym z nich wyróżnić można następujące etapy:",
  [TranslationKey.NEED_ANALYSIS_STEP_TITLE]: "Analiza potrzeb",
  [TranslationKey.NEED_ANALYSIS_STEP_DESCRIPTION]:
    "Po wstępnej wiadomości, w której opiszesz czego potrzebujesz umówimy się na rozmowę, na której ustalimy szczegóły oraz wyjaśnimy niejasności. Znając dokładnie potrzeby przedstawię najlepsze możliwe rozwiązanie.",
  [TranslationKey.GRAPHIC_DESIGN_STEP_TITLE]: "Projekt wizualny",
  [TranslationKey.GRAPHIC_DESIGN_STEP_DESCRIPTION]:
    "Po dostarczeniu potrzebnych materiałów przygotuję projekt graficzny aplikacji lub, gdy posiadasz własny projekt, upewnię się czy jest on zgodny z ustaleniami.",
  [TranslationKey.CREATING_APP_STEP_TITLE]: "Tworzenie aplikacji",
  [TranslationKey.CREATING_APP_STEP_DESCRIPTION]:
    "Na podstawie projektu wizualnego zostanie stworzona w pełni funkcjonalna aplikacja.",
  [TranslationKey.SUPPORT_STEP_TITLE]: "Wsparcie",
  [TranslationKey.SUPPORT_STEP_DESCRIPTION]:
    "Po zaakceptowaniu gotowej aplikacji zostaje ona zainstalowana na serwerze. Udzielone zostaje wsparcie na jej prawidłowe działanie. W razie potrzeby zawsze istnieje możliwośc późniejszej modyfikacji programu.",
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
  [TranslationKey.COOKIES_SHORT_DESCRIPTION]:
    "<0>🍪</0> Wykorzystuję pliki cookies - więcej szczegółów <2>tutaj</2>.",
  [TranslationKey.COOKIES_POLICY]: "Polityka cookies",
  [TranslationKey.COOKIES_POLICY_DESCRIPTION]:
    "<0>W celach dostosowania strony do potrzeb użytkowników oraz gromadzenia statystyk witryna ta wykorzystuje pliki cookies. Pliki te nie zawierają żadnych danych osobowych, a informacje w nich zawarte wykorzystywane są do:</0><1><0>Zbierania statystyk odnośnie użytkowników odwiedzających witrynę z wykorzystaniem narzędzi Google Analytics - szczegóły dotyczące działania znajdują się pod adresem <1>https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage</1>,</0><1>Obserwowania aktywności odwiedzających z wykorzystaniem narzędzi Hotjar do tworzenia tzw. map cieplnych, które odwzorowują np.najczęściej klikane elementy - szczegóły dotyczące działania znajdują się pod adresem <1>https://help.hotjar.com/hc/en-us/articles/115011789248-Hotjar-Cookies</1>,</1><2>Dopasowania zawartości strony do preferencji użytkownika poprzez zapamiętanie wybranych ustawień.</2></1><2>Użytkownik w każdej chwili może zmienić ustawienia przeglądarki internetowej w celu włączenia lub wyłączenia obsługi wspomnianych plików. Instrukcje dla poszczególnych przeglądarek znajdują się pod wymienionymi adresami:</2><3><0>Google Chrome - <1>https://support.google.com/chrome/answer/95647?hl=pl</1></0><1>Mozilla Firefox - <1>https://support.mozilla.org/pl/kb/ciasteczka</1></1><2>Internet Explorer - <1>https://support.microsoft.com/pl-pl/help/17442/windows-internet-explorer-delete-manage-cookies</1></2><3>Safari - <1>https://support.apple.com/pl-pl/guide/safari/sfri11471/mac</1></3></3>",
  [TranslationKey.PAGE_NOT_FOUND]: "Nie znaleziono strony o podanym adresie 😔",
  [TranslationKey.SERVER_ERROR]: "Błąd połączenia",
  [TranslationKey.SERVER_ERROR_MESSAGE]:
    "Nie udało się połączyć z serwerem 😔. Spróbuj ponownie za jakiś czas. Jeżeli problem nie ustąpi napisz do mnie.",
  [TranslationKey.BLOG]: "Blog",

  // *** Works data ***
  [TranslationKey.INVOICE_CONVERTER_TITLE]: "Konwerter faktur",
  [TranslationKey.INVOICE_CONVERTER_DESCRIPTION]:
    "Aplikacja webowa służąca do konwertowania pliku z fakturami. Dzięki niej zautomatyzowano proces księgowania dużej ilości faktur, przez co oszczędzono pracę księgowych, a tym samym pieniądze klienta.",
  [TranslationKey.EDUCATION_GAME_TITLE]: "Gra edukacyjna",
  [TranslationKey.EDUCATION_GAME_DESCRIPTION]:
    "Gra językowa typu Taboo wykonana w nowoczesnych technologiach webowych. Wzorowana na grze karcianej stworzonej przez klienta. Zawiera szereg funkcjonalności ułatwiających prowadzenie nauczycielowi zajęć. Wersja dostępna online jest szczególnie przydatna w dobie istniejących ograniczeń w kontaktach bezpośrednich. Realizacja obejmowała: analizę potrzeb, projekt interfejsu aplikacji (z zachowaniem kolorystyki oraz znaków szczególnych wersji karcianej), jej wykonanie oraz wdrożenie.",

  // *** Route meta data ***
  [TranslationKey.HOME_PATH_TITLE]: HOME_PATH_TITLE,
  [TranslationKey.HOME_PATH_DESCRIPTION]:
    "Tworzę oprogramowanie na zamówienie z wykorzystaniem technologii webowych 📱💻🖥🌎🔥 - zarówno złożone aplikacje webowe jak i proste strony internetowe. Napisz czego potrzebujesz, a przedstawię najlepsze możliwe rozwiązania.",
  [TranslationKey.HOME_PATH_KEYWORDS]:
    "producent oprogramowania,programista żory,programista rybnik,strony internetowe żory,strony internetowe rybnik,aplikacje żory,aplikacje rybnik,javascript,react,node",
  [TranslationKey.ABOUT_PATH_TITLE]: `O mnie | Programista freelancer Żory, Rybnik, Gliwice, Katowice`,
  [TranslationKey.ABOUT_PATH_DESCRIPTION]:
    "Jestem informatykiem programistą. Działam zdalnie na terenie całego kraju, a w miejscowościach: Żory, Rybnik, Gliwice, Katowice i okolice chętnie spotkam się osobiście. Posiadam doświadczenie w tworzeniu programów w technologiach webowych oraz stron internetowych.",
  [TranslationKey.ABOUT_PATH_KEYWORDS]:
    "o mnie, programista żory, programista rybnik, programista gliwice, programista katowice, producent oprogramowania żory, inżynier, magister, informatyk",
  [TranslationKey.SERVICES_PATH_TITLE]: `Usługi programistyczne | Oprogramowanie biznesowe, aplikacje webowe, strony internetowe`,
  [TranslationKey.SERVICES_PATH_DESCRIPTION]:
    "Tworzę dedykowane rozwiązania według wytycznych zamawiającego: programy i strony internetowe z wykorzystaniem technologii webowych: React, Node i pokrewne. Podejmuję się współprac z innymi zespołami wytwarzającymi oprogramowanie.",
  [TranslationKey.SERVICES_PATH_KEYWORDS]:
    "producent oprogramowania, strony internetowe, javascript, typescript, usługi programistyczne, oferta, react, node, aplikacje",
  [TranslationKey.WORKS_PATH_TITLE]: `Realizacje | Dedykowane oprogramowanie React, Node, GraphQL`,
  [TranslationKey.WORKS_PATH_DESCRIPTION]: `Dedykowane programy oraz strony internetowe, które wykonałem jako firma ${COMPANY_NAME}.`,
  [TranslationKey.WORKS_PATH_KEYWORDS]:
    "portfolio, projekty, strony internetowe, aplikacje",
  [TranslationKey.COOKIES_POLICY_PATH_TITLE]: `Polityka cookies | ${HOME_PATH_TITLE}`,
  [TranslationKey.COOKIES_POLICY_PATH_DESCRIPTION]: `Zasady wykorzystywania ciasteczek przez stronę firmy ${COMPANY_NAME} - erys.io`,
  [TranslationKey.COOKIES_POLICY_PATH_KEYWORDS]:
    "zasady cookies, polityka strony, polityka prywatności",
  [TranslationKey.BLOG_PATH_TITLE]: "Blog programistyczny | ERYS'",
  [TranslationKey.BLOG_PATH_DESCRIPTION]:
    "Publikacje dotyczące głównie technicznych aspektów programowania w nowoczesnych technologiach webowych. Typescript, React, Node oraz pokrewne.",
  [TranslationKey.NOT_FOUND_PATH_TITLE]: `404 | ${HOME_PATH_TITLE}`,
  [TranslationKey.BLOG_PATH_KEYWORDS]:
    "blog programistyczny, nowoczesne programowanie, react, node, javascript, typescript",

  // *** Route paths translations ***
  [TranslationKey.ABOUT_PATH]: "o-mnie",
  [TranslationKey.SERVICES_PATH]: "uslugi",
  [TranslationKey.WORKS_PATH]: "realizacje",
  [TranslationKey.COOKIES_POLICY_PATH]: "polityka-cookies",
  [TranslationKey.BLOG_PATH]: "blog",
};

export default pl;
