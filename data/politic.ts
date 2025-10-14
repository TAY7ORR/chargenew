export interface PolicyTranslations {
  legalNotice: {
    title: string;
    lastUpdated: string;
    sections: {
      company: {
        title: string;
        content: string;
      };
      service: {
        title: string;
        content: string;
      };
      terms: {
        title: string;
        content: string[];
      };
      liability: {
        title: string;
        content: string;
      };
      contact: {
        title: string;
        content: string;
      };
    };
  };
  privacyPolicy: {
    title: string;
    lastUpdated: string;
    sections: {
      intro: {
        title: string;
        content: string;
      };
      dataCollection: {
        title: string;
        content: string[];
      };
      dataUsage: {
        title: string;
        content: string[];
      };
      dataSecurity: {
        title: string;
        content: string;
      };
      cookies?: {
        title: string;
        content: string;
      };
      changes?: {
        title: string;
        content: string;
      };
      contact?: {
        title: string;
        content: string;
      };
    };
  };
}


export const policyData: Record<'ru' | 'en' | 'az', PolicyTranslations> = {
  ru: {
    legalNotice: {
      title: 'Юридическое уведомление',
      lastUpdated: 'Последнее обновление: Октябрь 2025',
      sections: {
        company: {
          title: 'О компании',
          content: 'Fast Charge является современным сервисом аренды повербанков, зарегистрированным и действующим на территории Азербайджанской Республики. Наша платформа предоставляет удобные решения для зарядки мобильных устройств в городе Баку и прилегающих территориях.',
        },
        service: {
          title: 'Описание услуг',
          content: 'Fast Charge предоставляет услуги краткосрочной аренды портативных зарядных устройств (повербанков) через сеть автоматизированных станций. Пользователи могут взять повербанк в любой точке обслуживания и вернуть его в любой другой станции Fast Charge в пределах зоны покрытия.',
        },
        terms: {
          title: 'Условия использования',
          content: [
            'Пользователь обязуется использовать арендованное оборудование бережно и по назначению',
            'Все платежи осуществляются через мобильное приложение с использованием безопасных платежных систем',
            'В случае утери или повреждения повербанка пользователь несет финансовую ответственность согласно тарифам',
            'Fast Charge оставляет за собой право изменять тарифы и условия обслуживания с предварительным уведомлением пользователей',
            'Использование сервиса подразумевает полное согласие с настоящими условиями и политикой конфиденциальности',
          ],
        },
        liability: {
          title: 'Ограничение ответственности',
          content: 'Fast Charge не несет ответственности за любой ущерб, причиненный пользовательским устройствам в результате использования арендованных повербанков. Все оборудование проходит регулярную проверку качества, однако пользователь использует сервис на свой собственный риск. Fast Charge не несет ответственности за косвенные убытки или упущенную выгоду.',
        },
        contact: {
          title: 'Контактная информация',
          content: 'По всем вопросам, связанным с юридическими аспектами работы сервиса, вы можете обратиться по адресу: sales@fastcharge.az или по телефону: +994 55 275-55-55. Наша служба поддержки работает круглосуточно.',
        },
      },
    },
    privacyPolicy: {
      title: 'Политика конфиденциальности',
      lastUpdated: 'Последнее обновление: Октябрь 2025',
      sections: {
        intro: {
          title: 'Введение',
          content: 'Fast Charge серьезно относится к защите вашей конфиденциальности. Настоящая политика конфиденциальности описывает, какую информацию мы собираем, как мы ее используем и какие права у вас есть в отношении ваших персональных данных.',
        },
        dataCollection: {
          title: 'Собираемые данные',
          content: [
            'Личная информация: имя, номер телефона, адрес электронной почты',
            'Платежная информация: данные банковской карты (обрабатываются через защищенные платежные шлюзы)',
            'Данные об использовании: история аренды, местоположение станций, время использования',
            'Техническая информация: IP-адрес, тип устройства, версия приложения',
            'Геолокация: для отображения ближайших станций (только с вашего согласия)',
          ],
        },
        dataUsage: {
          title: 'Использование данных',
          content: [
            'Предоставление и улучшение наших услуг',
            'Обработка платежей и ведение учета транзакций',
            'Коммуникация с пользователями по вопросам обслуживания',
            'Предотвращение мошенничества и обеспечение безопасности',
            'Анализ использования сервиса для его оптимизации',
            'Соблюдение законодательных требований',
          ],
        },
        dataSecurity: {
          title: 'Безопасность данных',
          content: 'Мы применяем современные технологии шифрования и защиты данных. Вся передача информации осуществляется по защищенным каналам. Доступ к персональным данным имеют только уполномоченные сотрудники. Мы регулярно проводим аудит безопасности наших систем.',
        },
      },
    },
  },
  en: {
    legalNotice: {
      title: 'Legal Notice',
      lastUpdated: 'Last Updated: October 2025',
      sections: {
        company: {
          title: 'About the Company',
          content: 'Fast Charge is a modern power bank rental service, registered and operating in the Republic of Azerbaijan. Our platform provides convenient charging solutions for mobile devices in Baku city and surrounding areas.',
        },
        service: {
          title: 'Service Description',
          content: 'Fast Charge provides short-term rental services for portable charging devices (power banks) through a network of automated stations. Users can pick up a power bank at any service point and return it at any other Fast Charge station within the coverage area.',
        },
        terms: {
          title: 'Terms of Use',
          content: [
            'Users must use rented equipment carefully and for its intended purpose',
            'All payments are made through the mobile application using secure payment systems',
            'In case of loss or damage to the power bank, the user bears financial responsibility according to tariffs',
            'Fast Charge reserves the right to change tariffs and service conditions with prior notice to users',
            'Using the service implies full agreement with these terms and privacy policy',
          ],
        },
        liability: {
          title: 'Limitation of Liability',
          content: 'Fast Charge is not responsible for any damage caused to user devices as a result of using rented power banks. All equipment undergoes regular quality checks, however, users use the service at their own risk. Fast Charge is not liable for indirect damages or lost profits.',
        },
        contact: {
          title: 'Contact Information',
          content: 'For all questions related to legal aspects of the service, you can contact us at: sales@fastcharge.az or by phone: +994 55 275-55-55. Our support service operates 24/7.',
        },
      },
    },
    privacyPolicy: {
      title: 'Privacy Policy',
      lastUpdated: 'Last Updated: October 2025',
      sections: {
        intro: {
          title: 'Introduction',
          content: 'Fast Charge takes your privacy seriously. This privacy policy describes what information we collect, how we use it, and what rights you have regarding your personal data.',
        },
        dataCollection: {
          title: 'Data Collection',
          content: [
            'Personal information: name, phone number, email address',
            'Payment information: bank card details (processed through secure payment gateways)',
            'Usage data: rental history, station locations, usage time',
            'Technical information: IP address, device type, app version',
            'Geolocation: to display nearest stations (only with your consent)',
          ],
        },
        dataUsage: {
          title: 'Data Usage',
          content: [
            'Providing and improving our services',
            'Processing payments and maintaining transaction records',
            'Communicating with users regarding service matters',
            'Preventing fraud and ensuring security',
            'Analyzing service usage for optimization',
            'Complying with legal requirements',
          ],
        },
        dataSecurity: {
          title: 'Data Security',
          content: 'We employ modern encryption and data protection technologies. All information transmission is carried out through secure channels. Only authorized personnel have access to personal data. We regularly conduct security audits of our systems.',
        },
      },
    },
  },
  az: {
    legalNotice: {
      title: 'Hüquqi Bildiriş',
      lastUpdated: 'Son Yenilənmə: Oktyabr 2025',
      sections: {
        company: {
          title: 'Şirkət Haqqında',
          content: 'Fast Charge Azərbaycan Respublikasının ərazisində qeydiyyatdan keçmiş və fəaliyyət göstərən müasir powerbank icarəsi xidmətidir. Platformamız Bakı şəhərində və ətraf ərazilərdə mobil cihazların şarj edilməsi üçün rahat həllər təqdim edir.',
        },
        service: {
          title: 'Xidmətin Təsviri',
          content: 'Fast Charge avtomatlaşdırılmış stansiyalar şəbəkəsi vasitəsilə portativ şarj cihazlarının (powerbank) qısamüddətli icarəsi xidmətlərini təqdim edir. İstifadəçilər istənilən xidmət nöqtəsində powerbank götürə və əhatə daxilindəki istənilən digər Fast Charge stansiyasında qaytara bilərlər.',
        },
        terms: {
          title: 'İstifadə Şərtləri',
          content: [
            'İstifadəçi icarəyə götürülmüş avadanlığı diqqətlə və təyinatı üzrə istifadə etməyi öhdəsinə götürür',
            'Bütün ödənişlər təhlükəsiz ödəniş sistemlərindən istifadə edərək mobil tətbiq vasitəsilə həyata keçirilir',
            'Powerbank itirildiyi və ya zədələndiyi halda istifadəçi tariflərə uyğun olaraq maliyyə məsuliyyəti daşıyır',
            'Fast Charge istifadəçilərə əvvəlcədən bildiriş verməklə tarifləri və xidmət şərtlərini dəyişdirmək hüququnu özündə saxlayır',
            'Xidmətdən istifadə bu şərtlərə və məxfilik siyasətinə tam razılıq deməkdir',
          ],
        },
        liability: {
          title: 'Məsuliyyətin Məhdudlaşdırılması',
          content: 'Fast Charge icarəyə götürülmüş powerbank-lərdən istifadə nəticəsində istifadəçi cihazlarına dəyən hər hansı zərərə görə məsuliyyət daşımır. Bütün avadanlıq müntəzəm keyfiyyət yoxlamasından keçir, lakin istifadəçi xidmətdən öz riskinə istifadə edir. Fast Charge dolayı zərərlərə və ya itirdilmiş mənfəətə görə məsuliyyət daşımır.',
        },
        contact: {
          title: 'Əlaqə Məlumatları',
          content: 'Xidmətin hüquqi aspektləri ilə bağlı bütün suallar üzrə bizə müraciət edə bilərsiniz: sales@fastcharge.az və ya telefon: +994 55 275-55-55. Dəstək xidmətimiz 24/7 işləyir.',
        },
      },
    },
    privacyPolicy: {
      title: 'Məxfilik Siyasəti',
      lastUpdated: 'Son Yenilənmə: Oktyabr 2025',
      sections: {
        intro: {
          title: 'Giriş',
          content: 'Fast Charge məxfiliyinizin qorunmasına ciddi yanaşır. Bu məxfilik siyasəti hansı məlumatları topladığımızı, onlardan necə istifadə etdiyimizi və şəxsi məlumatlarınızla bağlı hansı hüquqlara malik olduğunuzu təsvir edir.',
        },
        dataCollection: {
          title: 'Toplanan Məlumatlar',
          content: [
            'Şəxsi məlumat: ad, telefon nömrəsi, e-poçt ünvanı',
            'Ödəniş məlumatı: bank kartı məlumatları (təhlükəsiz ödəniş şlüzləri vasitəsilə emal olunur)',
            'İstifadə məlumatları: icarə tarixçəsi, stansiya yerləri, istifadə vaxtı',
            'Texniki məlumat: IP ünvanı, cihaz növü, tətbiq versiyası',
            'Geolokasiya: ən yaxın stansiyaları göstərmək üçün (yalnız razılığınızla)',
          ],
        },
        dataUsage: {
          title: 'Məlumatların İstifadəsi',
          content: [
            'Xidmətlərimizin təqdim edilməsi və təkmilləşdirilməsi',
            'Ödənişlərin emalı və əməliyyat qeydlərinin aparılması',
            'Xidmət məsələləri üzrə istifadəçilərlə ünsiyyət',
            'Fırıldaqçılığın qarşısının alınması və təhlükəsizliyin təmin edilməsi',
            'Optimallaşdırma üçün xidmət istifadəsinin təhlili',
            'Qanunvericilik tələblərinə riayət',
          ],
        },
        dataSecurity: {
          title: 'Məlumatların Təhlükəsizliyi',
          content: 'Biz müasir şifrələmə və məlumat mühafizəsi texnologiyalarından istifadə edirik. Bütün məlumat ötürmə təhlükəsiz kanallar vasitəsilə həyata keçirilir. Şəxsi məlumatlara yalnız səlahiyyətli işçilər çıxış əldə edir. Sistemlərimizin təhlükəsizlik auditini müntəzəm aparırıq.',
        },

      },
    },
  },
};
