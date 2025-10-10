export interface Location {
  id: string;
  name: {
    ru: string;
    en: string;
    az: string;
  };
  address: {
    ru: string;
    en: string;
    az: string;
  };
  lat: number;
  lng: number;
  available: number;
  returnable: number;
  totalSlots: number;
  code: string;
  closed: boolean;
  image: string;
  workingHours: {
    ru: string;
    en: string;
    az: string;
  };
  // Машиночитаемое время работы (24-часовой формат)
  // Если работает через полночь, endHour будет меньше startHour
  // Пример: 12:00 - 01:00 = startHour: 12, endHour: 1
  schedule?: {
    startHour: number;
    startMinute: number;
    endHour: number;
    endMinute: number;
  };
}

// Mock data for locations in Baku
export const locations: Location[] = [
  {
    id: "1",
    name: {
      ru: "Dinner Döner",
      en: "Dinner Döner",
      az: "Dinner Döner",
    },
    address: {
      ru: "69 ул. Истиглалият, Bakı 1000",
      en: "69 Istiglaliyyat St, Baku 1000",
      az: "Istiglaliyyat küçəsi 69, Bakı 1000",
    },
    lat: 40.368891064256744,
    lng: 49.833677210106835,
    available: 5,
    returnable: 3,
    totalSlots: 10,
    code: "NEW001",
    closed: false,
    image: "https://avatars.mds.yandex.net/get-altay/10376970/2a0000018defb7081ed5713b13a9dc39c628/L_height",
    workingHours: {
      ru: "12:00 - 01:00",
      en: "12:00 PM - 1:00 AM",
      az: "12:00 - 01:00",
    },
    schedule: {
      startHour: 12,
      startMinute: 0,
      endHour: 1,
      endMinute: 0,
    },
  },
  {
    id: "2",
    name: {
      ru: "4 Loft Cafe",
      en: "4 Loft Cafe",
      az: "4 Loft Cafe",
    },
    address: {
      ru: "улица Тагиева Гаджи Зейналабдина, 27A, Баку",
      en: "27A Taghiyeva Gadji Zeynalabdin Street, Baku",
      az: "Təğiyev Gədji Zeynalabdin küçəsi 27A, Bakı",
    },
    lat: 40.3707,
    lng: 49.838146,
    available: 12,
    returnable: 0,
    totalSlots: 12,
    code: "NEW002",
    closed: false,
    image: "https://avatars.mds.yandex.net/get-altay/3569559/2a0000017b0d15eed01fa0cc00e5dccf3219/XXXL.jpg",
    workingHours: {
      ru: "11:00 - 00:00",
      en: "11:00 AM - 12:00 AM",
      az: "11:00 - 00:00",
    },
    schedule: {
      startHour: 11,
      startMinute: 0,
      endHour: 0,
      endMinute: 0,
    },
  },
  {
    id: "3",
    name: {
      ru: "Cafe Botanist",
      en: "Cafe Botanist",
      az: "Cafe Botanist",
    },
    address: {
      ru: "улица академика Мирасадулла Миргасымова, 41B, Баку",
      en: "41B Academician Mirasadulla Mirgasimov Street, Baku",
      az: "Mirasadulla Mirqasımov küçəsi 41B, Bakı",
    },
    lat: 40.395606,
    lng: 49.840672,
    available: 0,
    returnable: 8,
    totalSlots: 8,
    code: "NEW003",
    closed: false,
    image: "https://avatars.mds.yandex.net/get-altay/16161139/2a00000197d5a4274a7776ab0e2a71ba9aeb/XXXL.jpg",
    workingHours: {
      ru: "10:00 - 22:00",
      en: "10:00 AM - 10:00 PM",
      az: "10:00 - 22:00",
    },
    schedule: {
      startHour: 10,
      startMinute: 0,
      endHour: 22,
      endMinute: 0,
    },
  },
  {
    id: "4",
    name: {
      ru: "Coffeemania Next",
      en: "Coffeemania Next",
      az: "Coffeemania Next",
    },
    address: {
      ru: "улица Ашуга Моллы Джумы, 46",
      en: "Ashug Molla Juma Street, 46",
      az: "46e Aşıq Molla Cümə, Bakı",
    },
    lat: 40.41275146765815,
    lng: 49.85448882146292,
    available: 7,
    returnable: 0,
    totalSlots: 8,
    code: "NEW004",
    closed: false,
    image: "https://coffeemania.com/wp-content/uploads/2024/02/1-5.webp",
    workingHours: {
      ru: "09:00 - 23:00",
      en: "09:00 AM - 11:00 PM",
      az: "09:00 - 23:00",
    },
    schedule: {
      startHour: 9,
      startMinute: 0,
      endHour: 23,
      endMinute: 0,
    },
  },
  {
    id: "5",
    name: {
      ru: "Кафе и ресторан Невше",
      en: "Neshve cafe & restaurant",
      az: "Neshve cafe & restaurant",
    },
    address: {
      ru: "улица Ахмеда Раджабли, 148",
      en: "40, 1075 Ahmad Rajabli, Baku",
      az: "40, 1075 Əhməd Rəcəbli, Bakı",
    },
    lat: 40.409186,
    lng: 49.864466,
    available: 7,
    returnable: 1,
    totalSlots: 8,
    code: "NEW005",
    closed: false,
    image: "https://avatars.mds.yandex.net/get-altay/13216594/87102e2afc5cc08ff31e2c7a32d1c0cf.jpg/XXXL.jpg",
    workingHours: {
      ru: "09:00 - 23:00",
      en: "09:00 AM - 11:00 PM",
      az: "09:00 - 23:00",
    },
    schedule: {
      startHour: 9,
      startMinute: 0,
      endHour: 23,
      endMinute: 0,
    },
  },
  {
    id: "6",
    name: {
      ru: "Coffemania Нариманов",
      en: "Coffemania Narimanov",
      az: "Coffemania Nərimanov",
    },
    address: {
      ru: "Баку, ул. Ага Нейматуллы, 179",
      en: "51 Agha Neymatulla, Baku",
      az: "CV49+3XJ, 51 Ağa Neymətulla, Bakı",
    },
    lat: 40.405467,
    lng: 49.869713,
    available: 8,
    returnable: 0,
    totalSlots: 8,
    code: "NEW006",
    closed: false,
    image: "https://avatars.mds.yandex.net/get-altay/16323929/2a000001985184ff15d3a4040b913bf110dc/XXXL",
    workingHours: {
      ru: "09:00 - 2300",
      en: "09:00 AM - 11:00 PM",
      az: "09:00 - 23:00",
    },
    schedule: {
      startHour: 9,
      startMinute: 0,
      endHour: 23,
      endMinute: 0,
    },
  },
  {
    id: "7",
    name: {
      ru: "Vapiano Ganjlik Mall",
      en: "Vapiano Ganjlik Mall",
      az: "Vapiano Ganjlik Mall",
    },
    address: {
      ru: "Баку, просп. Фатали Хана Хойского, этаж 3",
      en: "Ganjlik Mall, Fatali Xan Xoyski, Bakı",
      az: "Ganjlik Mall, Fətəli Xan Xoyski, Bakı",
    },
    lat: 40.400372,
    lng: 49.853733,
    available: 8,
    returnable: 0,
    totalSlots: 8,
    code: "NEW007",
    closed: false,
    image: "https://avatars.mds.yandex.net/get-altay/11374564/2a000001930191c7cc157d0ef9bdceb846e8/XXXL.jpg",
    workingHours: {
      ru: "09:00 - 23:00",
      en: "09:00 AM - 11:00 PM",
      az: "09:00 - 23:00",
    },
    schedule: {
      startHour: 9,
      startMinute: 0,
      endHour: 23,
      endMinute: 0,
    },
  },
  {
    id: "8",
    name: {
      ru: "Coffeemoon",
      en: "Coffeemoon",
      az: "Coffeemoon",
    },
    address: {
      ru: "улица Джейхуна Гаджибейли, 128",
      en: "132b Jeyhunbey Hajibeyli, Baku",
      az: "132b Ceyhunbəy Hacıbəyli, Bakı",
    },
    lat: 40.390874,
    lng: 49.84632,
    available: 7,
    returnable: 0,
    totalSlots: 8,
    code: "NEW008",
    closed: false,
    image: "https://avatars.mds.yandex.net/get-altay/14683384/2a00000197da6b6101f13ee80cfb231fa5f1/XXXL.jpg",
    workingHours: {
      ru: "09:00 - 23:00",
      en: "09:00 AM - 11:00 PM",
      az: "09:00 - 23:00",
    },
    schedule: {
      startHour: 9,
      startMinute: 0,
      endHour: 23,
      endMinute: 0,
    },
  },
  {
    id: "9",
    name: {
      ru: "Glass Restaurant & Music hall",
      en: "Glass Restaurant & Music hall",
      az: "Glass Restaurant & Music hall",
    },
    address: {
      ru: "Тбилисский проспект 27, Баку 1000",
      en: "27 Tbilisi Avenue, Baku 1000",
      az: "27 Tbilisi prospekti, Bakı 1000",
    },
    lat: 40.39109599302193,
    lng: 49.82318682739231,
    available: 5,
    returnable: 3,
    totalSlots: 8,
    code: "NEW009",
    closed: false,
    image: "https://monyo.az/v4/uploads/a_803_202202272156071734656374.jpg",
    workingHours: {
      ru: "09:00 - 23:00",
      en: "09:00 AM - 11:00 PM",
      az: "09:00 - 23:00",
    },
    schedule: {
      startHour: 9,
      startMinute: 0,
      endHour: 23,
      endMinute: 0,
    },
  },
  {
    id: "10",
    name: {
      ru: "Leblebi Lounge",
      en: "Leblebi Lounge",
      az: "Leblebi Lounge",
    },
    address: {
      ru: "Улица Академика Шафаата Мехтиева, Баку",
      en: "Academician Shafaat Mehdiyev Street, Baku",
      az: "Akademik Şəfaət Mehdiyev Küçəsi, Bakı",
    },
    lat: 40.38653047233919,
    lng: 49.81527948628467,
    available: 7,
    returnable: 0,
    totalSlots: 8,
    code: "NEW010",
    closed: false,
    image: "https://avatars.mds.yandex.net/get-altay/6514890/2a0000018b2c7762e7dd28a00d96f35b381d/XXXL.jpg",
    workingHours: {
      ru: "09:00 - 23:00",
      en: "09:00 AM - 11:00 PM",
      az: "09:00 - 23:00",
    },
    schedule: {
      startHour: 9,
      startMinute: 0,
      endHour: 23,
      endMinute: 0,
    },
  },
  {
    id: "11",
    name: {
      ru: "Первый Фитнес",
      en: "1st Fitness",
      az: "1st Fitness",
    },
    address: {
      ru: "70 Самеда Вургуна, Баку 1000",
      en: "70 Samad Vurgun, Baku 1000",
      az: "70 Səməd Vurğun, Bakı 1000",
    },
    lat: 40.38378671189558,
    lng: 49.83900805277423,
    available: 6,
    returnable: 1,
    totalSlots: 8,
    code: "NEW011",
    closed: false,
    image: "https://avatars.mds.yandex.net/get-altay/10494556/2a0000018e541eba19e603c16ee6a6f16925/XXXL.jpg",
    workingHours: {
      ru: "09:00 - 23:00",
      en: "09:00 AM - 11:00 PM",
      az: "09:00 - 23:00",
    },
    schedule: {
      startHour: 9,
      startMinute: 0,
      endHour: 23,
      endMinute: 0,
    },
  },
  {
    id: "12",
    name: {
      ru: "Jasmine Restaraunt",
      en: "Jasmine Restaraunt",
      az: "Jasmine Restaraunt",
    },
    address: {
      ru: "проспект Аббас Кули-Ага Бакиханова, 14",
      en: "6 Bakikhanov Street, Baku 1022",
      az: "6 Bakıxanov Küçəsi, Bakı 1022",
    },
    lat: 40.386975,
    lng: 49.829342,
    available: 8,
    returnable: 0,
    totalSlots: 8,
    code: "NEW012",
    closed: false,
    image: "https://avatars.mds.yandex.net/get-altay/9720767/2a000001891437dd7405bc2b24fbb98ba7ae/XXXL.jpg",
    workingHours: {
      ru: "09:00 - 23:00",
      en: "09:00 AM - 11:00 PM",
      az: "09:00 - 23:00",
    },
    schedule: {
      startHour: 9,
      startMinute: 0,
      endHour: 23,
      endMinute: 0,
    },
  },
  {
    id: "13",
    name: {
      ru: "Fuzzy Coffee & Wine",
      en: "Fuzzy Coffee & Wine",
      az: "Fuzzy Coffee & Wine",
    },
    address: {
      ru: "Баку, Ясамальский район, улица Джафара Джабарли, 58",
      en: "Lotfi Zadeh Technology Center, Caspian Plaza, Jafar Jabbarli, 44 17th floor, Baku 1065",
      az: "Lotfi Zadeh Technology Center, Caspian Plaza, Jafar Jabbarli, 44 17th floor, Baku 1065",
    },
    lat: 40.385291,
    lng: 49.828715,
    available: 8,
    returnable: 0,
    totalSlots: 8,
    code: "NEW013",
    closed: false,
    image: "https://avatars.mds.yandex.net/get-altay/9720767/2a0000018938b90a348cf18a18f0754daacb/XXXL.jpg",
    workingHours: {
      ru: "09:00 - 23:00",
      en: "09:00 AM - 11:00 PM",
      az: "09:00 - 23:00",
    },
    schedule: {
      startHour: 9,
      startMinute: 0,
      endHour: 23,
      endMinute: 0,
    },
  },
  {
    id: "14",
    name: {
      ru: "Globus Center",
      en: "Globus Center",
      az: "Globus Center",
    },
    address: {
      ru: "улица Джафара Джабарли, 47",
      en: "609 Jafar Jabbarli Street, Baku",
      az: "609 Cəfər Cabbarlı küçəsi, Bakı",
    },
    lat: 40.385154,
    lng: 49.827985,
    available: 3,
    returnable: 3,
    totalSlots: 8,
    code: "NEW014",
    closed: false,
    image: "https://avatars.mds.yandex.net/get-altay/16136409/2a00000198bb4de0d3e575eb9b5c44b54447/XXXL.jpg",
    workingHours: {
      ru: "09:00 - 23:00",
      en: "09:00 AM - 11:00 PM",
      az: "09:00 - 23:00",
    },
    schedule: {
      startHour: 9,
      startMinute: 0,
      endHour: 23,
      endMinute: 0,
    },
  },
  {
    id: "15",
    name: {
      ru: "Cafe Botanist - Caspian Plaza",
      en: "Cafe Botanist - Caspian Plaza",
      az: "Cafe Botanist - Caspian Plaza",
    },
    address: {
      ru: "улица Зиварбек Ахмедбеков, 80",
      en: "80 Ziverbey Ahmadbeyov Street, Baku 1065",
      az: "80 Zivərbəy Əhmədbəyov küçəsi, Bakı 1065",
    },
    lat: 40.385242,
    lng: 49.82921,
    available: 6,
    returnable: 2,
    totalSlots: 8,
    code: "NEW015",
    closed: false,
    image: "https://avatars.mds.yandex.net/get-altay/15413593/2a0000019826a3ef0010270c3d90017c2ad3/XXXL.jpg",
    workingHours: {
      ru: "09:00 - 23:00",
      en: "09:00 AM - 11:00 PM",
      az: "09:00 - 23:00",
    },
    schedule: {
      startHour: 9,
      startMinute: 0,
      endHour: 23,
      endMinute: 0,
    },
  },
  {
    id: "16",
    name: {
      ru: "Fitway",
      en: "Fitway",
      az: "Fitway",
    },
    address: {
      ru: "улица Басти Багировой, 11A",
      en: "Besti Bagirova 11a, Baku 1000",
      az: "Besti Bagirova 11a, Baku 1000",
    },
    lat: 40.384448,
    lng: 49.8254,
    available: 7,
    returnable: 1,
    totalSlots: 8,
    code: "NEW016",
    closed: false,
    image: "https://avatars.mds.yandex.net/get-altay/13061180/2a0000018edf9f27663f8969c8181a41c8f9/XXXL.jpg",
    workingHours: {
      ru: "09:00 - 23:00",
      en: "09:00 AM - 11:00 PM",
      az: "09:00 - 23:00",
    },
    schedule: {
      startHour: 9,
      startMinute: 0,
      endHour: 23,
      endMinute: 0,
    },
  },
  {
    id: "17",
    name: {
      ru: "Haven Cyberlounge",
      en: "Haven Cyberlounge",
      az: "Haven Cyberlounge",
    },
    address: {
      ru: "улица Академика Шафаята Мехтиева, 88",
      en: "88 Shafayat Mehdiyev Street, Baku",
      az: "88 Şəfayət Mehdiyev Küçəsi, Bakı",
    },
    lat: 40.37526097952097,
    lng: 49.817653683867036,
    available: 6,
    returnable: 0,
    totalSlots: 8,
    code: "NEW017",
    closed: false,
    image: "https://avatars.mds.yandex.net/get-altay/16503558/2a00000197dc79321420f43fe9366145c2ef/XXXL.jpg",
    workingHours: {
      ru: "09:00 - 23:00",
      en: "09:00 AM - 11:00 PM",
      az: "09:00 - 23:00",
    },
    schedule: {
      startHour: 9,
      startMinute: 0,
      endHour: 23,
      endMinute: 0,
    },
  },
  {
    id: "18",
    name: {
      ru: "Buyukfurat",
      en: "Buyukfurat",
      az: "Buyukfurat",
    },
    address: {
      ru: "улица Бахтияра Вахабзаде, 48",
      en: "9RG7+6JF, Bəxtiyar Vahabzadə, Bakı",
      az: "9RG7+6JF, Bəxtiyar Vahabzadə, Bakı",
    },
    lat: 40.375478,
    lng: 49.813916,
    available: 7,
    returnable: 1,
    totalSlots: 8,
    code: "NEW018",
    closed: false,
    image: "https://avatars.mds.yandex.net/get-altay/9847279/2a0000018dfedda969d7604c823765940de9/XXXL.jpg",
    workingHours: {
      ru: "09:00 - 23:00",
      en: "09:00 AM - 11:00 PM",
      az: "09:00 - 23:00",
    },
    schedule: {
      startHour: 9,
      startMinute: 0,
      endHour: 23,
      endMinute: 0,
    },
  },
  {
    id: "19",
    name: {
      ru: "Coffeemoon",
      en: "Coffeemoon",
      az: "Coffeemoon",
    },
    address: {
      ru: "9RG8+C6R, проспект Гусейна Джавида 149д, Баку",
      en: "9RG8+C6R, 149d Huseyn Javid Avenue, Baku",
      az: "9RG8+C6R, 149d Hüseyn Cavid Prospekti, Bakı",
    },
    lat: 40.376143510710975,
    lng: 49.81561846660222,
    available: 8,
    returnable: 0,
    totalSlots: 8,
    code: "NEW019",
    closed: false,
    image: "https://avatars.mds.yandex.net/get-altay/9831711/2a0000018e0f947d5f4e6edef62267e85749/XXXL.jpg",
    workingHours: {
      ru: "09:00 - 23:00",
      en: "09:00 AM - 11:00 PM",
      az: "09:00 - 23:00",
    },
    schedule: {
      startHour: 9,
      startMinute: 0,
      endHour: 23,
      endMinute: 0,
    },
  },
  {
    id: "20",
    name: {
      ru: "Darvish Tea House",
      en: "Darvish Tea House",
      az: "Darvish Tea House",
    },
    address: {
      ru: "9RC6+8JQ, Мамед Рахим, Баку",
      en: "9RC6+8JQ, Mammad Rahim, Bakı",
      az: "9RC6+8JQ, Mammad Rahim, Bakı",
    },
    lat: 40.37082718447217,
    lng: 49.81161053270165,
    available: 3,
    returnable: 1,
    totalSlots: 8,
    code: "NEW020",
    closed: false,
    image: "https://avatars.mds.yandex.net/get-altay/15416005/2a00000197df580109030a61a19f975efc67/XXXL.jpg",
    workingHours: {
      ru: "09:00 - 23:00",
      en: "09:00 AM - 11:00 PM",
      az: "09:00 - 23:00",
    },
    schedule: {
      startHour: 9,
      startMinute: 0,
      endHour: 23,
      endMinute: 0,
    },
  },
  {
    id: "21",
    name: {
      ru: "Yaban PUB",
      en: "Yaban PUB",
      az: "Yaban PUB",
    },
    address: {
      ru: "улица Микаила Мушфига, 35H",
      en: "9R89+2VV, 10 Mikayil Mushfig, Baku 1073",
      az: "9R89+2VV, 10 Mikayil Müşfiq, Bakı 1073",
    },
    lat: 40.365059,
    lng: 49.819694,
    available: 8,
    returnable: 0,
    totalSlots: 8,
    code: "NEW021",
    closed: false,
    image: "https://avatars.mds.yandex.net/get-altay/10926933/2a0000018bbb68d2aa0b1f2b5c3307d05af5/XXXL.jpg",
    workingHours: {
      ru: "09:00 - 23:00",
      en: "09:00 AM - 11:00 PM",
      az: "09:00 - 23:00",
    },
    schedule: {
      startHour: 9,
      startMinute: 0,
      endHour: 23,
      endMinute: 0,
    },
  },
  {
    id: "22",
    name: {
      ru: "Coffeemania",
      en: "Coffeemania",
      az: "Coffeemania",
    },
    address: {
      ru: "Дяниз Молл, Баку",
      en: "Xtravaganza DM, Bakı",
      az: "Xtravaganza DM, Bakı",
    },
    lat: 40.358172,
    lng: 49.837317,
    available: 8,
    returnable: 0,
    totalSlots: 8,
    code: "NEW022",
    closed: false,
    image: "https://avatars.mds.yandex.net/get-altay/14033308/2a0000019300fd636f6e8f17062099305abc/XXXL.jpg",
    workingHours: {
      ru: "09:00 - 23:00",
      en: "09:00 AM - 11:00 PM",
      az: "09:00 - 23:00",
    },
    schedule: {
      startHour: 9,
      startMinute: 0,
      endHour: 23,
      endMinute: 0,
    },
  },
  {
    id: "23",
    name: {
      ru: "Hamambath",
      en: "Hamambath",
      az: "Hamambath",
    },
    address: {
      ru: "Баку, Сальянское шоссе, 10",
      en: "Baku, Salyanskoe shosse, 10",
      az: "Baku, Salyanskoe shosse, 10",
    },
    lat: 40.305712,
    lng: 49.772416,
    available: 7,
    returnable: 1,
    totalSlots: 8,
    code: "NEW023",
    closed: false,
    image: "https://avatars.mds.yandex.net/get-altay/16789805/2a000001990b0feaaa6e1163acb7897a3072/XXXL.jpg",
    workingHours: {
      ru: "09:00 - 23:00",
      en: "09:00 AM - 11:00 PM",
      az: "09:00 - 23:00",
    },
    schedule: {
      startHour: 9,
      startMinute: 0,
      endHour: 23,
      endMinute: 0,
    },
  },
  {
    id: "24",
    name: {
      ru: "Homebridge",
      en: "Homebridge",
      az: "Homebridge",
    },
    address: {
      ru: "Баку, Сальянское шоссе, 14",
      en: "Baku, Salyanskoe shosse, 14",
      az: "Baku, Salyanskoe shosse, 14",
    },
    lat: 40.304761,
    lng: 49.773066,
    available: 8,
    returnable: 0,
    totalSlots: 8,
    code: "NEW024",
    closed: false,
    image: "https://avatars.mds.yandex.net/get-altay/15157522/2a00000193c46eae7c4a05e915f1df8b8bb2/XXXL.jpg",
    workingHours: {
      ru: "09:00 - 23:00",
      en: "09:00 AM - 11:00 PM",
      az: "09:00 - 23:00",
    },
    schedule: {
      startHour: 9,
      startMinute: 0,
      endHour: 23,
      endMinute: 0,
    },
  },
  {
    id: "25",
    name: {
      ru: "Кофемания Ахмедли",
      en: "Coffeemania Ahmadli",
      az: "Coffeemania Ahmadli",
    },
    address: {
      ru: "улица Магомеда Хади, 101C",
      en: "Məhəmməd Hadi, Bakı",
      az: "Mahammad Hadi, Bakı",
    },
    lat: 40.387664,
    lng: 49.954176,
    available: 8,
    returnable: 0,
    totalSlots: 8,
    code: "NEW025",
    closed: false,
    image: "https://avatars.mds.yandex.net/get-altay/910613/2a00000186e1ce2e98efa0104dfe33122bea/XXXL.jpg",
    workingHours: {
      ru: "09:00 - 23:00",
      en: "09:00 AM - 11:00 PM",
      az: "09:00 - 23:00",
    },
    schedule: {
      startHour: 9,
      startMinute: 0,
      endHour: 23,
      endMinute: 0,
    },
  },
  {
    id: "26",
    name: {
      ru: "Seven Rooms Boutique Hotel",
      en: "Seven Rooms Boutique Hotel",
      az: "Seven Rooms Boutique Hotel",
    },
    address: {
      ru: "Баку, ул. Бёюк Гала, 27",
      en: "27 Boyuk Qala, Bakı",
      az: "27 Boyuk Qala, Bakı",
    },
    lat: 40.366461,
    lng: 49.835945,
    available: 8,
    returnable: 0,
    totalSlots: 8,
    code: "NEW026",
    closed: false,
    image: "https://avatars.mds.yandex.net/get-altay/5179687/2a0000018f9d814e8c4746a79d771fda0e48/XXXL.jpg",
    workingHours: {
      ru: "09:00 - 23:00",
      en: "09:00 AM - 11:00 PM",
      az: "09:00 - 23:00",
    },
    schedule: {
      startHour: 9,
      startMinute: 0,
      endHour: 23,
      endMinute: 0,
    },
  },
  {
    id: "27",
    name: {
      ru: "Qaynana Restaurant",
      en: "Qaynana Restaurant",
      az: "Qaynana Restaurant",
    },
    address: {
      ru: "Баку, ул. Кичик Гала, 65",
      en: "Kichik Qala, Bakı",
      az: "Kichik Qala, Bakı",
    },
    lat: 40.368638,
    lng: 49.835869,
    available: 8,
    returnable: 0,
    totalSlots: 8,
    code: "NEW027",
    closed: false,
    image: "https://avatars.mds.yandex.net/get-altay/14381528/2a000001945a1d7d3391e205e709b3ead934/XXXL.jpg",
    workingHours: {
      ru: "09:00 - 23:00",
      en: "09:00 AM - 11:00 PM",
      az: "09:00 - 23:00",
    },
    schedule: {
      startHour: 9,
      startMinute: 0,
      endHour: 23,
      endMinute: 0,
    },
  },
  {
    id: "28",
    name: {
      ru: "IVA Restaurant",
      en: "IVA Restaurant",
      az: "IVA Restaurant",
    },
    address: {
      ru: "Баку, ул. Азиза Алиева, 19",
      en: "19 Aziz Aliyev Street, Baku 1000",
      az: "19 Əziz Əliyev küçəsi, Bakı 1000",
    },
    lat: 40.368521,
    lng: 49.837359,
    available: 8,
    returnable: 0,
    totalSlots: 8,
    code: "NEW028",
    closed: false,
    image: "https://avatars.mds.yandex.net/get-altay/15395175/2a000001980fb0b6cabd64a7754da46ccc6f/XXXL.jpg",
    workingHours: {
      ru: "09:00 - 23:00",
      en: "09:00 AM - 11:00 PM",
      az: "09:00 - 23:00",
    },
    schedule: {
      startHour: 9,
      startMinute: 0,
      endHour: 23,
      endMinute: 0,
    },
  },
  {
    id: "29",
    name: {
      ru: "Pakhlava lounge",
      en: "Pakhlava lounge",
      az: "Pakhlava lounge",
    },
    address: {
      ru: "ул. Мирзаага Алиева, 46Б, Баку 1009",
      en: "46B Mirzaaga Aliyev Street, Baku 1009",
      az: "46B Mirzəağa Əliyev Küçəsi, Bakı 1009",
    },
    lat: 40.37519723885935,
    lng: 49.834245297679566,
    available: 6,
    returnable: 0,
    totalSlots: 8,
    code: "NEW029",
    closed: false,
    image: "https://bakuguide.com/images/places/840/pakhlava-3.png",
    workingHours: {
      ru: "09:00 - 23:00",
      en: "09:00 AM - 11:00 PM",
      az: "09:00 - 23:00",
    },
    schedule: {
      startHour: 9,
      startMinute: 0,
      endHour: 23,
      endMinute: 0,
    },
  },
  {
    id: "30",
    name: {
      ru: "VAPIANO",
      en: "VAPIANO",
      az: "VAPIANO",
    },
    address: {
      ru: "Баку, ул. Узеира Гаджибекова, 4",
      en: "6 Uzeyir Hajibeyov, Baku 1000",
      az: "6 Üzeyir Hacıbəyov, Bakı 1000",
    },
    lat: 40.371038,
    lng: 49.840906,
    available: 8,
    returnable: 0,
    totalSlots: 8,
    code: "NEW030",
    closed: false,
    image: "https://avatars.mds.yandex.net/get-altay/9895050/2a00000192fff21d78254956f764a09d319d/XXXL.jpg",
    workingHours: {
      ru: "09:00 - 23:00",
      en: "09:00 AM - 11:00 PM",
      az: "09:00 - 23:00",
    },
    schedule: {
      startHour: 9,
      startMinute: 0,
      endHour: 23,
      endMinute: 0,
    },
  }
];

// Получить текущее время в GMT+4 (Баку)
export function getBakuTime(): Date {
  const now = new Date();
  // Получаем UTC время и добавляем 4 часа (GMT+4)
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  return new Date(utc + (3600000 * 4));
}

// Проверить, работает ли локация в данный момент
export function isLocationOpen(location: Location): boolean {
  // Если локация помечена как закрытая - всегда закрыта
  if (location.closed) return false;
  
  // Если нет расписания - считаем что работает круглосуточно
  if (!location.schedule) return true;
  
  const bakuTime = getBakuTime();
  const currentHour = bakuTime.getHours();
  const currentMinute = bakuTime.getMinutes();
  const currentTotalMinutes = currentHour * 60 + currentMinute;
  
  const { startHour, startMinute, endHour, endMinute } = location.schedule;
  const startTotalMinutes = startHour * 60 + startMinute;
  const endTotalMinutes = endHour * 60 + endMinute;
  
  // Проверка работы через полночь (например, 12:00 - 01:00)
  if (endTotalMinutes < startTotalMinutes) {
    // Работает если время >= начала ИЛИ время < конца
    return currentTotalMinutes >= startTotalMinutes || currentTotalMinutes < endTotalMinutes;
  } else {
    // Обычный график (например, 10:00 - 22:00)
    return currentTotalMinutes >= startTotalMinutes && currentTotalMinutes < endTotalMinutes;
  }
}

// Get marker color based on location status
export function getMarkerColor(location: Location, checkSchedule: boolean = true): string {
  // Проверяем расписание работы если включено
  if (checkSchedule && !isLocationOpen(location)) return '#ef4444'; // red - закрыто по расписанию
  
  if (location.closed) return '#ef4444'; // red
  if (location.available > 0 && location.returnable > 0) return '#3b82f6'; // blue
  if (location.available > 0 && location.returnable === 0) return '#22c55e'; // green
  return '#9ca3af'; // gray
}

// Интерфейс кластера
export interface LocationCluster {
  id: string;
  lat: number;
  lng: number;
  locations: Location[];
  count: number;
}

// Функция кластеризации маркеров
export function clusterLocations(
  locations: Location[],
  zoom: number,
  minDistance: number = 0.01 // Минимальное расстояние между маркерами для объединения в кластер
): (Location | LocationCluster)[] {
  // При зуме >= 14 не группируем маркеры
  if (zoom >= 14) {
    return locations;
  }

  const clusters: (Location | LocationCluster)[] = [];
  const processed = new Set<string>();

  // Увеличиваем дистанцию группировки для меньших зумов
  const distanceThreshold = minDistance * (15 - zoom);

  locations.forEach((location) => {
    if (processed.has(location.id)) return;

    // Находим все близкие локации
    const nearby = locations.filter((other) => {
      if (processed.has(other.id)) return false;
      const distance = Math.sqrt(
        Math.pow(location.lat - other.lat, 2) + Math.pow(location.lng - other.lng, 2)
      );
      return distance <= distanceThreshold;
    });

    // Если найдено больше одной локации - создаем кластер
    if (nearby.length > 1) {
      const avgLat = nearby.reduce((sum, loc) => sum + loc.lat, 0) / nearby.length;
      const avgLng = nearby.reduce((sum, loc) => sum + loc.lng, 0) / nearby.length;

      clusters.push({
        id: `cluster-${nearby.map(l => l.id).join('-')}`,
        lat: avgLat,
        lng: avgLng,
        locations: nearby,
        count: nearby.length,
      });

      nearby.forEach(loc => processed.add(loc.id));
    } else {
      // Одиночная локация
      clusters.push(location);
      processed.add(location.id);
    }
  });

  return clusters;
}

// Проверка, является ли элемент кластером
export function isCluster(item: Location | LocationCluster): item is LocationCluster {
  return 'count' in item && 'locations' in item;
}
