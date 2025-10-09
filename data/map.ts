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
}

// Mock data for locations in Baku
export const locations: Location[] = [
  {
    id: '1',
    name: {
      ru: 'Dinner Döner',
      en: 'Dinner Döner',
      az: 'Dinner Döner',
    },
    address: {
      ru: '69 ул. Истиглалият, Bakı 1000',
      en: '69 Istiglaliyyat St, Baku 1000',
      az: 'Istiglaliyyat küçəsi 69, Bakı 1000',
    },
    lat: 40.368891064256744, 
    lng: 49.833677210106835,
    available: 5,
    returnable: 3,
    totalSlots: 10,
    code: 'PB001',
    closed: false,
    image: 'https://avatars.mds.yandex.net/get-altay/10376970/2a0000018defb7081ed5713b13a9dc39c628/L_height',
    workingHours: {
      ru: '12:00 - 01:00',
      en: '12:00 PM - 1:00 AM',
      az: '12:00 - 01:00',
    },
  },
  {
    id: '2',
    name: {
      ru: '4 Loft Cafe',
      en: '4 Loft Cafe',
      az: '4 Loft Cafe',
    },
    address: {
      ru: 'улица Тагиева Гаджи Зейналабдина, 27A, Баку',
      en: '27A Taghiyeva Gadji Zeynalabdin Street, Baku',
      az: 'Təğiyev Gədji Zeynalabdin küçəsi 27A, Bakı',
    },
    lat: 40.370700, 
    lng: 49.838146,
    available: 12,
    returnable: 0,
    totalSlots: 12,
    code: 'CC002',
    closed: false,
    image: 'https://avatars.mds.yandex.net/get-altay/3569559/2a0000017b0d15eed01fa0cc00e5dccf3219/XXXL.jpg',
    workingHours: {
      ru: '11:00 - 00:00',
      en: '11:00 AM - 12:00 AM',
      az: '11:00 - 00:00',
    },
  },
  {
    id: '3',
    name: {
      ru: 'Cafe Botanist',
      en: 'Cafe Botanist',
      az: 'Cafe Botanist',
    },
    address: {
      ru: 'улица академика Мирасадулла Миргасымова, 41B, Баку',
      en: '41B Academician Mirasadulla Mirgasimov Street, Baku',
      az: 'Mirasadulla Mirqasımov küçəsi 41B, Bakı',
    },
    lat: 40.395606,
    lng: 49.840672,
    available: 0,
    returnable: 8,
    totalSlots: 8,
    code: 'TM003',
    closed: false,
    image: 'https://avatars.mds.yandex.net/get-altay/16161139/2a00000197d5a4274a7776ab0e2a71ba9aeb/XXXL.jpg',
    workingHours: {
      ru: '10:00 - 22:00',
      en: '10:00 AM - 10:00 PM',
      az: '10:00 - 22:00',
    },
  },  
  {
    id: '4',
    name: {
      ru: 'TEST CLOSED',
      en: 'TEST CLOSED',
      az: 'TEST CLOSED',
    },
    address: {
      ru: 'CLOSED',
      en: 'CLOSED',
      az: 'CLOSED',
    },
    lat: 40.417063,
    lng: 49.814183,
    available: 0,
    returnable: 8,
    totalSlots: 8,
    code: 'TM003',
    closed: true,
    image: 'https://avatars.mds.yandex.net/get-altay/16161139/2a00000197d5a4274a7776ab0e2a71ba9aeb/XXXL.jpg',
    workingHours: {
      ru: 'CLOSED',
      en: 'CLOSED',
      az: 'CLOSED',
    },
  },
  
];

// Get marker color based on location status
export function getMarkerColor(location: Location): string {
  if (location.closed) return '#ef4444'; // red
  if (location.available > 0 && location.returnable > 0) return '#3b82f6'; // blue
  if (location.available > 0 && location.returnable === 0) return '#22c55e'; // green
  return '#9ca3af'; // gray
}
