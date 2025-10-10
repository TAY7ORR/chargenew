// Общие данные товаров (не зависят от языка)
export interface EquipmentItemBase {
  id: string;
  imageUrl: string;
  inStock: boolean;
}

// Локализованные данные товара
export interface EquipmentItemTranslation {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  specs: {
    label: string;
    value: string;
  }[];
  features: string[];
}

// Полный товар (комбинация общих и локализованных данных)
export interface EquipmentItem extends EquipmentItemBase, EquipmentItemTranslation {}

export interface MarketTranslations {
  equipment: {
    title: string;
    subtitle: string;
    backToPartners: string;
    viewDetails: string;
    inStock: string;
    outOfStock: string;
    specifications: string;
    features: string;
    contactForPurchase: string;
    backToEquipment: string;
    category: string;
    contactForPrice: string;
  };
  categories: {
    station: string;
    powerbank: string;
    accessories: string;
  };
  items: EquipmentItemTranslation[];
}

// Общие данные товаров (изображения и наличие)
export const equipmentBaseData: EquipmentItemBase[] = [
  {
    id: 'fastcharge station p8',
    imageUrl: 'https://fastcharge.az/images/1600%2C1443x1487%2B83%2B112/16414580/WhatsAppImage2025-05-13at13.11.13-bXYIbCzi0IPjndvHMgy7nA.jpeg',
    inStock: true,
  },
  {
    id: 'fc-pro-10000',
    imageUrl: 'https://fastcharge.az/images/1600%2C1600x1574%2B0%2B25/16414608/WhatsAppImage2025-05-13at13.10.19-bcx-CBgUEJttF2jhyZT1vA.jpeg',
    inStock: false,
  },
  {
    id: 'FastCharge POWER',
    imageUrl: 'https://fastcharge.az/images/1600%2C1600x1421%2B0%2B89/16416003/WhatsAppImage2025-05-13at13.09.57-qml7cSs7fkSzek-K6GTreg.jpeg',
    inStock: true,
  },
];

export const marketData: Record<'ru' | 'en' | 'az', MarketTranslations> = {
  ru: {
    equipment: {
      title: 'Наше оборудование',
      subtitle: 'Современные решения для аренды повербанков',
      backToPartners: 'Назад к сотрудничеству',
      viewDetails: 'Подробнее',
      inStock: 'В наличии',
      outOfStock: 'Нет в наличии',
      specifications: 'Технические характеристики',
      features: 'Особенности',
      contactForPurchase: 'Связаться для заказа',
      backToEquipment: 'Назад к оборудованию',
      category: 'Категория',
      contactForPrice: 'Свяжитесь с нами для уточнения цены',
    },
    categories: {
      station: 'Станция',
      powerbank: 'Повербанк',
      accessories: 'Аксессуары',
    },
    items: [
      {
        id: 'fastcharge station p8',
        name: 'Fast Charge Station P-8',
        category: 'Станция',
        shortDescription: 'TEST',
        fullDescription: 'Test',
        specs: [
          { label: 'Test', value: 'Test' },
        ],
        features: [
          'Test',
        ],
      },
      {
        id: 'fc-pro-10000',
        name: 'Power Bank FC-Pro 10000mAh',
        category: 'Повербанк',
        shortDescription: 'TEST',
        fullDescription: 'Test',
        specs: [
          { label: 'Test', value: 'Test' },
        ],
        features: [
          'Test',
        ],
      },
      {
        id: 'FastCharge POWER',
        name: 'FastCharge POWER',
        category: 'Повербанк',
        shortDescription: 'TEST',
        fullDescription: 'Test',
        specs: [
          { label: 'Test', value: 'Test' },
        ],
        features: [
          'Test',
        ],
      },
    ],
  },
  en: {
    equipment: {
      title: 'Our Equipment',
      subtitle: 'Modern solutions for power bank rental',
      backToPartners: 'Back to Partnership',
      viewDetails: 'View Details',
      inStock: 'In Stock',
      outOfStock: 'Out of Stock',
      specifications: 'Specifications',
      features: 'Features',
      contactForPurchase: 'Contact for Order',
      backToEquipment: 'Back to Equipment',
      category: 'Category',
      contactForPrice: 'Contact us for pricing details',
    },
    categories: {
      station: 'Station',
      powerbank: 'Power Bank',
      accessories: 'Accessories',
    },
    items: [
      {
        id: 'fastcharge station p8',
        name: 'Fast Charge Station P-8',
        category: 'Station',
        shortDescription: 'TEST',
        fullDescription: 'Test',
        specs: [
          { label: 'Test', value: 'Test' },
        ],
        features: [
          'Test',
        ],
      },
      {
        id: 'fc-pro-10000',
        name: 'Power Bank FC-Pro 10000mAh',
        category: 'Station',
        shortDescription: 'TEST',
        fullDescription: 'Test',
        specs: [
          { label: 'Test', value: 'Test' },
        ],
        features: [
          'Test',
        ],
      },
      {
        id: 'FastCharge POWER',
        name: 'FastCharge POWER',
        category: 'Powerbank',
        shortDescription: 'TEST',
        fullDescription: 'Test',
        specs: [
          { label: 'Test', value: 'Test' },
        ],
        features: [
          'Test',
        ],
      },
    ],
  },
  az: {
    equipment: {
      title: 'Avadanlığımız',
      subtitle: 'Powerbank icarəsi üçün müasir həllər',
      backToPartners: 'Əməkdaşlığa qayıt',
      viewDetails: 'Ətraflı',
      inStock: 'Stokda var',
      outOfStock: 'Stokda yoxdur',
      specifications: 'Texniki xüsusiyyətlər',
      features: 'Xüsusiyyətlər',
      contactForPurchase: 'Sifariş üçün əlaqə',
      backToEquipment: 'Avadanlığa qayıt',
      category: 'Kateqoriya',
      contactForPrice: 'Qiymət məlumatı üçün bizimlə əlaqə saxlayın',
    },
    categories: {
      station: 'Stansiya',
      powerbank: 'Powerbank',
      accessories: 'Aksesuarlar',
    },
    items: [
      {
        id: 'fastcharge station p8',
        name: 'Fast Charge Station P-8',
        category: 'Stansiya',
        shortDescription: 'TEST',
        fullDescription: 'Test',
        specs: [
          { label: 'Test', value: 'Test' },
        ],
        features: [
          'Test',
        ],
      },
      {
        id: 'fc-pro-10000',
        name: 'Power Bank FC-Pro 10000mAh',
        category: 'Stansiya',
        shortDescription: 'TEST',
        fullDescription: 'Test',
        specs: [
          { label: 'Test', value: 'Test' },
        ],
        features: [
          'Test',
        ],
      },
      {
        id: 'FastCharge POWER',
        name: 'FastCharge POWER',
        category: 'Powerbank',
        shortDescription: 'TEST',
        fullDescription: 'Test',
        specs: [
          { label: 'Test', value: 'Test' },
        ],
        features: [
          'Test',
        ],
      },
    ],
  },
};

// Вспомогательная функция для получения полного товара
export function getEquipmentItem(language: 'ru' | 'en' | 'az', id: string): EquipmentItem | undefined {
  const translation = marketData[language].items.find(item => item.id === id);
  const base = equipmentBaseData.find(item => item.id === id);
  
  if (!translation || !base) return undefined;
  
  return { ...base, ...translation };
}

// Вспомогательная функция для получения всех товаров
export function getAllEquipmentItems(language: 'ru' | 'en' | 'az'): EquipmentItem[] {
  return marketData[language].items.map(translation => {
    const base = equipmentBaseData.find(item => item.id === translation.id);
    return { ...base!, ...translation };
  });
}
