import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { AppPage } from './pages/AppPage';
import { SupportPage } from './pages/SupportPage';
import { PartnersPage } from './pages/PartnersPage';
import { WebPage } from './pages/WebPage';

export type Language = 'ru' | 'en' | 'az';
export type Page = 'home' | 'about' | 'app' | 'support' | 'partners' | 'web';

export interface Translations {
  ru: Record<string, string | string[]>;
  en: Record<string, string | string[]>;
  az: Record<string, string | string[]>;
}

export const translations: Translations = {
  ru: {
    home: 'Главная',
    about: 'О нас',
    app: 'Приложение',
    web: 'Карта',
    support: 'Поддержка',
    partners: 'Сотрудничество',
    downloadApp: 'Скачать приложение',
    webTitle: 'Найди ближайшую станцию Fast Charge',
    webSubtitle: 'Интерактивная карта Баку с точками аренды повербанков',
    legendPickupOnly: 'Можно только забрать',
    legendBoth: 'Можно забрать и вернуть',
    legendReturnOnly: 'Можно только вернуть',
    legendClosed: 'Закрыто',
    availableToPickup: 'Доступно для забора',
    availableToReturn: 'Можно вернуть',
    locationCode: 'Код заведения',
    pickUpHere: 'Получить отсюда',
    continueRoute: 'Продолжить маршрут',
    locationClosed: 'Заведение временно закрыто',
    viewMap: 'Карта',
    viewList: 'Список',
    filterAll: 'Все',
    filterPickup: 'Получить',
    filterReturn: 'Вернуть',
    workingHours: 'Режим работы',
    locationAddress: 'Адрес',
    availablePickupOfTotal: 'Доступно для получения',
    availableReturnOfTotal: 'Доступно для возврата',
    mapTheme: 'Тема карты',
    darkMap: 'Темная',
    lightMap: 'Светлая',
    showOtherIcons: 'Показывать другие значки',
    heroTitle: 'Fast Charge — заряжайся в любом месте!',
    heroSubtitle: 'Аренда повербанков по всему Баку. Быстро, удобно, доступно.',
    appStore: 'Скачать в App Store',
    googlePlay: 'Скачать в Google Play',
    benefit1Title: 'Мгновенная аренда',
    benefit1Text: 'Найди станцию и арендуй повербанк за секунды',
    benefit2Title: 'Всегда на связи',
    benefit2Text: 'Не беспокойся о разряженном телефоне',
    benefit3Title: 'Возврат где удобно',
    benefit3Text: 'Верни повербанк в любой станции Fast Charge',
    benefit4Title: 'Доступные цены',
    benefit4Text: 'Платная аренда с минутной тарификацией',
    howItWorksTitle: 'Как это работает',
    step1Title: 'Найди станцию Fast Charge',
    step1Text: 'Используй карту в приложении',
    step2Title: 'Отсканируй QR-код',
    step2Text: 'Открой камеру и сканируй',
    step3Title: 'Заряжайся',
    step3Text: 'Получи повербанк и заряжайся',
    faqTitle: 'Часто задаваемые вопросы',
    faq1Q: 'Где находятся станции Fast Charge?',
    faq1A: 'Наши станции расположены в торговых центрах, кафе, ресторанах и других популярных местах по всему Баку. Используй карту в приложении, чтобы найти ближайшую станцию.',
    faq2Q: 'Как оплатить аренду?',
    faq2A: 'Оплата производится через приложение с помощью банковской карты. Мы принимаем все основные карты.',
    faq3Q: 'Что делать, если повербанк не возвращается?',
    faq3A: 'Свяжитесь с нашей службой поддержки через приложение или по электронной почте. Мы поможем решить проблему.',
    faq4Q: 'Сколько стоит аренда?',
    faq4A: 'Первые полтора часа — 1.5 AZN, второй час — 1.5 AZN, третий час — 0.5 AZN. Весь день обойдётся всего в 3.5 AZN.',
    aboutTitle: 'О Fast Charge',
    aboutText1: 'Fast Charge — это инновационная платформа для аренды повербанков в Баку. Мы создали сеть станций по всему городу, чтобы вы всегда оставались на связи.',
    aboutText2: 'Наша миссия — сделать зарядку устройств простой, быстрой и доступной для каждого. Мы верим, что технологии должны упрощать жизнь, а не усложнять её.',
    aboutText3: 'Присоединяйтесь к тысячам пользователей, которые уже выбрали Fast Charge!',
    aboutMission: 'Наша миссия',
    aboutMissionText: 'Мы стремимся сделать зарядку устройств простой и доступной для всех жителей и гостей Баку. Наша цель — создать самую удобную сеть станций для аренды повербанков.',
    aboutVision: 'Наше видение',
    aboutVisionText: 'Мы видим будущее, где никто не беспокоится о разряженной батарее. Fast Charge станет неотъемлемой частью городской инфраструктуры.',
    aboutValues: 'Наши ценности',
    aboutValue1: 'Инновации',
    aboutValue1Text: 'Используем передовые технологии',
    aboutValue2: 'Надежность',
    aboutValue2Text: 'Всегда на связи с вами',
    aboutValue3: 'Простота',
    aboutValue3Text: 'Максимально удобный сервис',
    appTitle: 'Наше приложение',
    appText: 'Арендуй повербанк в один клик. Скачай приложение и получи доступ к сети станций Fast Charge по всему Баку.',
    appFeature1: 'Интерактивная карта',
    appFeature1Text: 'Найди ижашую станцию на карте в реальном времени',
    appFeature2: 'Быстрая аренда',
    appFeature2Text: 'Отсканируй QR-код и получи повербанк за секунды',
    appFeature3: 'История аренды',
    appFeature3Text: 'Отслеживай все свои аренды и расходы',
    appFeature4: 'Уведомления',
    appFeature4Text: 'Получай напоминания о возврате повербанка',
    appFeature5: 'Безопасная оплата',
    appFeature5Text: 'Платежи защищены современным шифрованием',
    appFeature6: 'Поддержка 24/7',
    appFeature6Text: 'Служба поддержки всегда готова помочь',
    supportTitle: 'Свяжись с нами',
    supportText: 'Есть вопросы или предложения? Мы всегда рады помочь!',
    namePlaceholder: 'Ваше имя',
    emailPlaceholder: 'Email',
    messagePlaceholder: 'Ваше сообщение',
    sendButton: 'Отправить',
    contactEmail: 'sales@fastcharge.az',
    contactPhone: '+994 55 275-55-55',
    contactAddress: 'Баку, Азербайджан',
    workingHoursText: 'Поддержка: 24/7',
    partnersTitle: 'Сотрудничай с Fast Charge',
    partnersSubtitle: 'С нами уже работают',
    partnersText: 'Разместите станцию Fast Charge в вашем заведении и привлекайте больше клиентов.',
    partnerBenefit1: 'Дополнительный доход',
    partnerBenefit1Text: 'Получайте процент от каждой аренды',
    partnerBenefit2: 'Привлечение клиентов',
    partnerBenefit2Text: 'Больше посетителей благодаря нашему сервису',
    partnerBenefit3: 'Бесплатная установка',
    partnerBenefit3Text: 'Мы устанавливаем и обслуживаем оборудование',
    partnerBenefit4: 'Брендинг',
    partnerBenefit4Text: 'Современное оборудование для вашего заведения',
    partnerBenefit5: 'Аналитика',
    partnerBenefit5Text: 'Доступ к статистике использования',
    partnerBenefit6: 'Техподдержка',
    partnerBenefit6Text: 'Быстрое решение любых проблем',
    becomePartner: 'Стать партнером',
    partnerFormTitle: 'Заявка на сотрудничество',
    companyPlaceholder: 'Название компании',
    phonePlaceholder: 'Телефон',
    footerAbout: 'Fast Charge — современный сервис аренды повербанков в Баку.',
    footerLinks: 'Быстрые ссылки',
    footerSocial: 'Социальные сети',
    copyright: '© 2025 Fast Charge. Все права защищены.',
  },
  en: {
    home: 'Home',
    about: 'About',
    app: 'App',
    web: 'Map',
    support: 'Support',
    partners: 'Partnership',
    downloadApp: 'Download App',
    webTitle: 'Find the nearest Fast Charge station',
    webSubtitle: 'Interactive map of Baku with power bank rental locations',
    legendPickupOnly: 'Pick up only',
    legendBoth: 'Can pick up & return',
    legendReturnOnly: 'Return only',
    legendClosed: 'Closed',
    availableToPickup: 'Available to pick up',
    availableToReturn: 'Available to return',
    locationCode: 'Location code',
    pickUpHere: 'Pick up here',
    continueRoute: 'Continue Route',
    locationClosed: 'Location temporarily closed',
    viewMap: 'Map',
    viewList: 'List',
    filterAll: 'All',
    filterPickup: 'Pick up',
    filterReturn: 'Return',
    workingHours: 'Working Hours',
    locationAddress: 'Address',
    availablePickupOfTotal: 'Available to pick up',
    availableReturnOfTotal: 'Available to return',
    mapTheme: 'Map Theme',
    darkMap: 'Dark',
    lightMap: 'Light',
    showOtherIcons: 'Show other icons',
    heroTitle: 'Fast Charge — charge anywhere!',
    heroSubtitle: 'Power bank rental across Baku. Fast, convenient, accessible.',
    appStore: 'Download on App Store',
    googlePlay: 'Download on Google Play',
    benefit1Title: 'Instant Rental',
    benefit1Text: 'Find a station and rent a power bank in seconds',
    benefit2Title: 'Always Connected',
    benefit2Text: 'Never worry about a dead phone',
    benefit3Title: 'Return Anywhere',
    benefit3Text: 'Return the power bank at any Fast Charge station',
    benefit4Title: 'Affordable Prices',
    benefit4Text: 'Pay-as-you-go pricing by the minute',
    howItWorksTitle: 'How It Works',
    step1Title: 'Find a Fast Charge station',
    step1Text: 'Use the map in the app',
    step2Title: 'Scan the QR code',
    step2Text: 'Open camera and scan',
    step3Title: 'Charge up',
    step3Text: 'Get your power bank and charge',
    faqTitle: 'Frequently Asked Questions',
    faq1Q: 'Where are Fast Charge stations located?',
    faq1A: 'Our stations are located in shopping malls, cafes, restaurants, and other popular places throughout Baku. Use the map in the app to find the nearest station.',
    faq2Q: 'How to pay for rental?',
    faq2A: 'Payment is made through the app using a bank card. We accept all major cards.',
    faq3Q: 'What if the power bank is not returned?',
    faq3A: 'Contact our support team via the app or email. We will help resolve the issue.',
    faq4Q: 'How much does it cost?',
    faq4A: 'First 1.5 hours — 1.5 AZN, second hour — 1.5 AZN, third hour — 0.5 AZN. The whole day costs only 3.5 AZN.',
    aboutTitle: 'About Fast Charge',
    aboutText1: 'Fast Charge is an innovative power bank rental platform in Baku. We created a network of stations across the city so you stay connected always.',
    aboutText2: 'Our mission is to make device charging simple, fast, and accessible for everyone. We believe technology should simplify life, not complicate it.',
    aboutText3: 'Join thousands of users who have already chosen Fast Charge!',
    aboutMission: 'Our Mission',
    aboutMissionText: 'We strive to make device charging simple and accessible for all residents and visitors of Baku. Our goal is to create the most convenient power bank rental network.',
    aboutVision: 'Our Vision',
    aboutVisionText: 'We envision a future where no one worries about a dead battery. Fast Charge will become an integral part of urban infrastructure.',
    aboutValues: 'Our Values',
    aboutValue1: 'Innovation',
    aboutValue1Text: 'Using cutting-edge technology',
    aboutValue2: 'Reliability',
    aboutValue2Text: 'Always there for you',
    aboutValue3: 'Simplicity',
    aboutValue3Text: 'Maximum user convenience',
    appTitle: 'Our App',
    appText: 'Rent a power bank with one click. Download the app and get access to Fast Charge stations throughout Baku.',
    appFeature1: 'Interactive Map',
    appFeature1Text: 'Find the nearest station on the map in real-time',
    appFeature2: 'Quick Rental',
    appFeature2Text: 'Scan QR code and get power bank in seconds',
    appFeature3: 'Rental History',
    appFeature3Text: 'Track all your rentals and expenses',
    appFeature4: 'Notifications',
    appFeature4Text: 'Get reminders to return the power bank',
    appFeature5: 'Secure Payment',
    appFeature5Text: 'Payments protected by modern encryption',
    appFeature6: '24/7 Support',
    appFeature6Text: 'Support team always ready to help',
    supportTitle: 'Contact Us',
    supportText: 'Have questions or suggestions? We are always happy to help!',
    namePlaceholder: 'Your name',
    emailPlaceholder: 'Email',
    messagePlaceholder: 'Your message',
    sendButton: 'Send',
    contactEmail: 'sales@fastcharge.az',
    contactPhone: '+994 55 275-55-55',
    contactAddress: 'Baku, Azerbaijan',
    workingHoursText: 'Support: 24/7',
    partnersTitle: 'Partner with Fast Charge',
    partnersSubtitle: 'Already working with us',
    partnersText: 'Place a Fast Charge station at your venue and attract more customers.',
    partnerBenefit1: 'Additional Income',
    partnerBenefit1Text: 'Get a percentage from each rental',
    partnerBenefit2: 'Customer Attraction',
    partnerBenefit2Text: 'More visitors thanks to our service',
    partnerBenefit3: 'Free Installation',
    partnerBenefit3Text: 'We install and maintain the equipment',
    partnerBenefit4: 'Branding',
    partnerBenefit4Text: 'Modern equipment for your venue',
    partnerBenefit5: 'Analytics',
    partnerBenefit5Text: 'Access to usage statistics',
    partnerBenefit6: 'Tech Support',
    partnerBenefit6Text: 'Quick resolution of any issues',
    becomePartner: 'Become a Partner',
    partnerFormTitle: 'Partnership Application',
    companyPlaceholder: 'Company name',
    phonePlaceholder: 'Phone',
    footerAbout: 'Fast Charge — modern power bank rental service in Baku.',
    footerLinks: 'Quick Links',
    footerSocial: 'Social Media',
    copyright: '© 2025 Fast Charge. All rights reserved.',
  },
  az: {
    home: 'Əsas',
    about: 'Haqqımızda',
    app: 'Tətbiq',
    web: 'Xəritə',
    support: 'Dəstək',
    partners: 'Əməkdaşlıq',
    downloadApp: 'Tətbiqi Yüklə',
    webTitle: 'Ən yaxın Fast Charge stansiyasını tap',
    webSubtitle: 'Powerbank icarəsi məkanları ilə Bakının interaktiv xəritəsi',
    legendPickupOnly: 'Yalnız götürmək olar',
    legendBoth: 'Götürmək və qaytarmaq olar',
    legendReturnOnly: 'Yalnız qaytarmaq olar',
    legendClosed: 'Bağlıdır',
    availableToPickup: 'Götürmək üçün əlçatandır',
    availableToReturn: 'Qaytarmaq üçün əlçatandır',
    locationCode: 'Məkan kodu',
    pickUpHere: 'Buradan götür',
    continueRoute: 'Marşruta davam et',
    locationClosed: 'Məkan müvəqqəti bağlıdır',
    viewMap: 'Xəritə',
    viewList: 'Siyahı',
    filterAll: 'Hamısı',
    filterPickup: 'Götürmək',
    filterReturn: 'Qaytarmaq',
    workingHours: 'İş Saatları',
    locationAddress: 'Ünvan',
    availablePickupOfTotal: 'Götürmək üçün əlçatandır',
    availableReturnOfTotal: 'Qaytarmaq üçün əlçatandır',
    mapTheme: 'Xəritə Mövzusu',
    darkMap: 'Tünd',
    lightMap: 'İşıqlı',
    showOtherIcons: 'Digər ikonaları göstər',
    heroTitle: 'Fast Charge — hər yerdə şarj ol!',
    heroSubtitle: 'Bakının hər yerində powerbank icarəsi. Sürətli, rahat, əlçatan.',
    appStore: 'App Store-dan yüklə',
    googlePlay: 'Google Play-dən yüklə',
    benefit1Title: 'Ani İcarə',
    benefit1Text: 'Stansiya tap və saniyələr ərzində powerbank icarəyə götür',
    benefit2Title: 'Həmişə Əlaqədə',
    benefit2Text: 'Telefonun boşalması barədə narahat olma',
    benefit3Title: 'İstənilən Yerdə Qaytarma',
    benefit3Text: 'Powerbank-ı istənilən Fast Charge stansiyasında qaytara bilərsən',
    benefit4Title: 'Münasib Qiymətlər',
    benefit4Text: 'Dəqiqəlik tarif ilə ödəniş',
    howItWorksTitle: 'Necə İşləyir',
    step1Title: 'Fast Charge stansiyası tap',
    step1Text: 'Tətbiqdəki xəritədən istifadə et',
    step2Title: 'QR kodu skan et',
    step2Text: 'Kameranı aç və skan et',
    step3Title: 'Şarj ol',
    step3Text: 'Powerbank-ı götür və şarj ol',
    faqTitle: 'Tez-tez Verilən Suallar',
    faq1Q: 'Fast Charge stansiyaları haradadır?',
    faq1A: 'Bizim stansiyalar ticarət mərkəzlərində, kafelərdə, restoranlarda və Bakının digər məşhur yerlərində yerləşir. Ən yaxın stansiyanı tapmaq üçün tətbiqdəki xəritədən istifadə edin.',
    faq2Q: 'İcarə haqqını necə ödəmək olar?',
    faq2A: 'Ödəniş bank kart ilə tətbiq vasitəsilə həyata keçirilir. Biz bütün əsas kartları qəbul edirik.',
    faq3Q: 'Powerbank qaytarılmırsa nə etməli?',
    faq3A: 'Tətbiq və ya e-poçt vasitəsilə dəstək xidmətimizlə əlaqə saxlayın. Problemi həll etməyə kömək edəcəyik.',
    faq4Q: 'İcarə nə qədər başa gəlir?',
    faq4A: 'İlk 1.5 saat — 1.5 AZN, ikinci saat — 1.5 AZN, üçüncü saat — 0.5 AZN. Bütün gün cəmi 3.5 AZN.',
    aboutTitle: 'Fast Charge Haqqında',
    aboutText1: 'Fast Charge — Bakıda powerbank icarəsi üzrə innovativ platformadır. Biz şəhərin hər yerində stansiyalar şəbəkəsi yaratdıq ki, siz həmişə əlaqədə olasınız.',
    aboutText2: 'Bizim missiyamız cihazların şarj edilməsini sadə, sürətli və hər kəs üçün əlçatan etməkdir. Biz inanırıq ki, texnologiya həyatı mürəkkəbləşdirməməli, sadələşdirməlidir.',
    aboutText3: 'Artıq Fast Charge-i seçən minlərlə istifadəçiyə qoşul!',
    aboutMission: 'Bizim Missiya',
    aboutMissionText: 'Bakının bütün sakinləri və qonaqları üçün cihazların şarj edilməsini sadə və əlçatan etməyə çalışırıq. Məqsədimiz ən rahat powerbank icarəsi şəbəkəsini yaratmaqdır.',
    aboutVision: 'Bizim Baxış',
    aboutVisionText: 'Biz heç kimin boş batareyadan narahat olmadığı gələcək görürük. Fast Charge şəhər infrastrukturunun ayrılmaz hissəsinə çevriləcək.',
    aboutValues: 'Bizim Dəyərlər',
    aboutValue1: 'İnnovasiya',
    aboutValue1Text: 'Qabaqcıl texnologiyalardan istifadə',
    aboutValue2: 'Etibarlılıq',
    aboutValue2Text: 'Həmişə sizinlə',
    aboutValue3: 'Sadəlik',
    aboutValue3Text: 'Maksimum istifadəçi rahatlığı',
    appTitle: 'Bizim Tətbiq',
    appText: 'Bir kliklə powerbank icarəyə götür. Tətbiqi yüklə və Bakının hər yerində Fast Charge stansiyalarına giriş əldə et.',
    appFeature1: 'İnteraktiv Xəritə',
    appFeature1Text: 'Real vaxtda xəritədə ən yaxın stansiyanı tap',
    appFeature2: 'Sürətli İcarə',
    appFeature2Text: 'QR kodu skan et və saniyələrdə powerbank əldə et',
    appFeature3: 'İcarə Tarixçəsi',
    appFeature3Text: 'Bütün icarələrinizi və xərclərinizi izləyin',
    appFeature4: 'Bildirişlər',
    appFeature4Text: 'Powerbank-ı qaytarmaq üçün xatırlatmalar alın',
    appFeature5: 'Təhlükəsiz Ödəniş',
    appFeature5Text: 'Ödənişlər müasir şifrələmə ilə qorunur',
    appFeature6: '24/7 Dəstək',
    appFeature6Text: 'Dəstək komandası həmişə kömək etməyə hazırdır',
    supportTitle: 'Bizimlə Əlaqə',
    supportText: 'Sualınız və ya təklifiniz var? Kömək etməyə həmişə hazırıq!',
    namePlaceholder: 'Adınız',
    emailPlaceholder: 'Email',
    messagePlaceholder: 'Mesajınız',
    sendButton: 'Göndər',
    contactEmail: 'sales@fastcharge.az',
    contactPhone: '+994 55 275-55-55',
    contactAddress: 'Bakı, Azərbaycan',
    workingHoursText: 'Dəstək: 24/7',
    partnersTitle: 'Fast Charge ilə Əməkdaşlıq Et',
    partnersSubtitle: 'Artıq bizimlə işləyirlər',
    partnersText: 'Fast Charge stansiyasını müəssisənizdə yerləşdirin və daha çox müştəri cəlb edin.',
    partnerBenefit1: 'Əlavə Gəlir',
    partnerBenefit1Text: 'Hər icarədən faiz əldə edin',
    partnerBenefit2: 'Müştəri Cəlbi',
    partnerBenefit2Text: 'Xidmətimiz sayəsində daha çox ziyarətçi',
    partnerBenefit3: 'Pulsuz Quraşdırma',
    partnerBenefit3Text: 'Avadanlığı quraşdırır və xidmət göstəririk',
    partnerBenefit4: 'Brendinq',
    partnerBenefit4Text: 'Müəssisəniz üçün müasir avadanlıq',
    partnerBenefit5: 'Analitika',
    partnerBenefit5Text: 'İstifadə statistikasına çıxış',
    partnerBenefit6: 'Texniki Dəstək',
    partnerBenefit6Text: 'Hər hansı problemin tez həlli',
    becomePartner: 'Tərəfdaş Ol',
    partnerFormTitle: 'Əməkdaşlıq Müraciəti',
    companyPlaceholder: 'Şirkət adı',
    phonePlaceholder: 'Telefon',
    footerAbout: 'Fast Charge — Bakıda müasir powerbank icarəsi xidməti.',
    footerLinks: 'Sürətli Keçidlər',
    footerSocial: 'Sosial Şəbəkələr',
    copyright: '© 2025 Fast Charge. Bütün hüquqlar qorunur.',
  },
};

export default function App() {
  const [language, setLanguage] = useState<Language>('ru');
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPage]);

  // Защита от копирования
  useEffect(() => {
    const preventCopy = (e: ClipboardEvent) => {
      e.preventDefault();
      return false;
    };

    const preventContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    const preventKeyboardShortcuts = (e: KeyboardEvent) => {
      // Ctrl+C, Cmd+C, Ctrl+U, Cmd+U, F12, Ctrl+Shift+I, Cmd+Opt+I
      if (
        (e.ctrlKey && (e.key === 'c' || e.key === 'u' || e.key === 's')) ||
        (e.metaKey && (e.key === 'c' || e.key === 'u' || e.key === 's')) ||
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.metaKey && e.altKey && e.key === 'I')
      ) {
        e.preventDefault();
        return false;
      }
    };

    document.addEventListener('copy', preventCopy);
    document.addEventListener('cut', preventCopy);
    document.addEventListener('contextmenu', preventContextMenu);
    document.addEventListener('keydown', preventKeyboardShortcuts);

    return () => {
      document.removeEventListener('copy', preventCopy);
      document.removeEventListener('cut', preventCopy);
      document.removeEventListener('contextmenu', preventContextMenu);
      document.removeEventListener('keydown', preventKeyboardShortcuts);
    };
  }, []);

  const t = (key: string): string => {
    const value = translations[language][key];
    return typeof value === 'string' ? value : '';
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage t={t} setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutPage t={t} />;
      case 'app':
        return <AppPage t={t} />;
      case 'web':
        return <WebPage t={t} language={language} />;
      case 'support':
        return <SupportPage t={t} setCurrentPage={setCurrentPage} />;
      case 'partners':
        return <PartnersPage t={t} />;
      default:
        return <HomePage t={t} setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden" style={{ backgroundColor: '#000000' }}>
      <Header 
        language={language} 
        setLanguage={setLanguage} 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        t={t} 
      />
      <main style={{ backgroundColor: '#000000' }}>
        {renderPage()}
      </main>
      <Footer 
        t={t} 
        language={language} 
        setLanguage={setLanguage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}