import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle, XCircle, Zap, Mail, Phone, Image as ImageIcon } from 'lucide-react';
import { marketData, getEquipmentItem } from '../data/market';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import type { Language, Page } from '../App';

interface EquipmentDetailPageProps {
  language: Language;
  equipmentId: string | null;
  setCurrentPage: (page: Page) => void;
}

export function EquipmentDetailPage({ language, equipmentId, setCurrentPage }: EquipmentDetailPageProps) {
  const data = marketData[language];
  const item = equipmentId ? getEquipmentItem(language, equipmentId) : null;

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <p className="text-gray-400 mb-4">
            {language === 'ru' && 'Оборудование не найдено'}
            {language === 'en' && 'Equipment not found'}
            {language === 'az' && 'Avadanlıq tapılmadı'}
          </p>
          <button
            onClick={() => setCurrentPage('equipment')}
            className="text-yellow-500 hover:text-yellow-400 transition-colors"
          >
            {data.equipment.backToEquipment}
          </button>
        </div>
      </div>
    );
  }

  const getCategoryIcon = (category: string) => {
    if (category === data.categories.station || category === 'Station' || category === 'Stansiya') {
      return '⚡';
    } else if (category === data.categories.powerbank || category === 'Power Bank' || category === 'Powerbank') {
      return '🔋';
    } else {
      return '📦';
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden" style={{ backgroundColor: '#000000' }}>
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-[800px] h-[800px] rounded-full opacity-20 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, #FFD700 0%, transparent 70%)',
            top: '5%',
            right: '5%',
            animation: 'float 12s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute w-[600px] h-[600px] rounded-full opacity-15 blur-[100px]"
          style={{
            background: 'radial-gradient(circle, #FFD700 0%, transparent 70%)',
            bottom: '10%',
            left: '5%',
            animation: 'float 15s ease-in-out infinite 3s',
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-24">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => setCurrentPage('equipment')}
          className="mb-8 inline-flex items-center gap-2 text-gray-400 hover:text-yellow-500 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>{data.equipment.backToEquipment}</span>
        </motion.button>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="flex-grow">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-6xl">{getCategoryIcon(item.category)}</span>
                  <div>
                    <p className="text-sm text-yellow-500 mb-1">{item.category}</p>
                    <h1 className="text-4xl md:text-5xl bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent">
                      {item.name}
                    </h1>
                  </div>
                </div>
                <p className="text-xl text-gray-400 leading-relaxed">
                  {item.shortDescription}
                </p>
              </div>

              {/* Status */}
              <div className="flex flex-col gap-4">
                <div className={`px-4 py-2 rounded-xl text-sm flex items-center gap-2 justify-center ${
                  item.inStock 
                    ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                    : 'bg-red-500/10 text-red-400 border border-red-500/20'
                }`}>
                  {item.inStock ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      {data.equipment.inStock}
                    </>
                  ) : (
                    <>
                      <XCircle className="w-4 h-4" />
                      {data.equipment.outOfStock}
                    </>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative overflow-hidden rounded-3xl border border-gray-800/50 group-hover:border-yellow-500/30 transition-colors duration-300">
                <div className="aspect-[16/9] bg-gradient-to-br from-gray-900/50 to-black/50 relative flex items-center justify-center p-8">
                  <ImageWithFallback
                    src={item.imageUrl}
                    alt={item.name}
                    className="max-w-full max-h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-2 text-yellow-500">
                      <ImageIcon className="w-5 h-5" />
                      <span className="text-sm">{item.name}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="p-8 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl border border-gray-800/50">
              <p className="text-gray-300 leading-relaxed text-lg">
                {item.fullDescription}
              </p>
            </div>
          </motion.div>

          {/* Specifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-3xl text-white mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-yellow-500/20 flex items-center justify-center border border-yellow-500/30">
                <Zap className="w-5 h-5 text-yellow-500" />
              </div>
              {data.equipment.specifications}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {item.specs.map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  className="p-4 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-xl border border-gray-800/50 hover:border-yellow-500/30 transition-colors"
                >
                  <div className="flex justify-between items-center gap-4">
                    <span className="text-gray-400">{spec.label}</span>
                    <span className="text-white">{spec.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl text-white mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-yellow-500/20 flex items-center justify-center border border-yellow-500/30">
                ✨
              </div>
              {data.equipment.features}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {item.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                  className="flex items-start gap-3 p-4 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-xl border border-gray-800/50 hover:border-yellow-500/30 transition-colors"
                >
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2.5 shadow-[0_0_8px_rgba(255,215,0,0.6)]" />
                  <span className="text-gray-300 leading-relaxed">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-yellow-500/10 to-transparent rounded-2xl blur-xl" />
              <div className="relative p-8 md:p-12 rounded-2xl bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-sm border border-yellow-500/30">
                <div className="text-center">
                  <h3 className="text-3xl text-white mb-4">
                    {data.equipment.contactForPurchase}
                  </h3>
                  <p className="text-gray-400 mb-2 max-w-2xl mx-auto">
                    {language === 'ru' && 'Наша команда готова ответить на все ваши вопросы и помочь с оформлением заказа. Свяжитесь с нами удобным для вас способом.'}
                    {language === 'en' && 'Our team is ready to answer all your questions and help with placing an order. Contact us in a way that is convenient for you.'}
                    {language === 'az' && 'Komandamız bütün suallarınıza cavab verməyə və sifariş verməkdə kömək etməyə hazırdır. Sizə uyğun olan üsulla bizimlə əlaqə saxlayın.'}
                  </p>
                  <p className="text-sm text-yellow-500/80 mb-8">
                    {data.equipment.contactForPrice}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="mailto:sales@fastcharge.az"
                      className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-xl hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] transition-all duration-300 group"
                    >
                      <Mail className="w-5 h-5" />
                      <span>sales@fastcharge.az</span>
                    </a>
                    <a
                      href="tel:+994552755555"
                      className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-yellow-500/30 text-yellow-500 rounded-xl hover:bg-yellow-500/10 hover:border-yellow-500/50 transition-all duration-300 group"
                    >
                      <Phone className="w-5 h-5" />
                      <span>+994 55 275-55-55</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.2;
          }
          33% {
            transform: translate(30px, -30px) scale(1.05);
            opacity: 0.25;
          }
          66% {
            transform: translate(-20px, 20px) scale(0.95);
            opacity: 0.15;
          }
        }
      `}</style>
    </div>
  );
}
