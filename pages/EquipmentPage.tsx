import { motion } from 'motion/react';
import { ArrowLeft, Box, Zap, CheckCircle, XCircle } from 'lucide-react';
import { marketData, getAllEquipmentItems } from '../data/market';
import type { Language, Page } from '../App';

interface EquipmentPageProps {
  language: Language;
  setCurrentPage: (page: Page) => void;
  setSelectedEquipmentId: (id: string) => void;
}

export function EquipmentPage({ language, setCurrentPage, setSelectedEquipmentId }: EquipmentPageProps) {
  const data = marketData[language];
  const items = getAllEquipmentItems(language);

  const handleViewDetails = (id: string) => {
    setSelectedEquipmentId(id);
    setCurrentPage('equipment-detail');
  };

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
          className="absolute w-[900px] h-[900px] rounded-full opacity-20 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, #FFD700 0%, transparent 70%)',
            top: '10%',
            left: '-10%',
            animation: 'float 15s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute w-[700px] h-[700px] rounded-full opacity-15 blur-[100px]"
          style={{
            background: 'radial-gradient(circle, #FFD700 0%, transparent 70%)',
            bottom: '10%',
            right: '-10%',
            animation: 'float 18s ease-in-out infinite 3s',
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-24">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => setCurrentPage('partners')}
          className="mb-8 inline-flex items-center gap-2 text-gray-400 hover:text-yellow-500 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>{data.equipment.backToPartners}</span>
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 mb-6 border border-yellow-500/30 relative">
            <div className="absolute inset-0 rounded-full bg-yellow-500/20 animate-ping" style={{ animationDuration: '3s' }} />
            <Box className="w-10 h-10 text-yellow-500 relative z-10" />
          </div>
          <h1 className="text-4xl md:text-6xl mb-4 bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent">
            {data.equipment.title}
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {data.equipment.subtitle}
          </p>
        </motion.div>

        {/* Equipment Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Card */}
              <div className="relative h-full bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-800/50 hover:border-yellow-500/30 transition-all duration-300 flex flex-col">
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl">{getCategoryIcon(item.category)}</span>
                  <div className={`px-3 py-1 rounded-full text-sm flex items-center gap-2 ${
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

                {/* Content */}
                <div className="flex-grow mb-6">
                  <h3 className="text-2xl text-white mb-2">
                    {item.name}
                  </h3>
                  <p className="text-sm text-yellow-500 mb-4">
                    {item.category}
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    {item.shortDescription}
                  </p>
                </div>

                {/* Button */}
                <div className="mt-auto pt-6 border-t border-gray-800/50">
                  <button
                    onClick={() => handleViewDetails(item.id)}
                    className="w-full py-3 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 text-yellow-500 border border-yellow-500/30 rounded-xl hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-600 hover:text-black hover:border-yellow-500 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] text-center"
                  >
                    {data.equipment.viewDetails}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-yellow-500/10 to-transparent rounded-2xl blur-xl" />
            <div className="relative p-8 rounded-2xl bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-sm border border-yellow-500/30">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center border border-yellow-500/30">
                  <Zap className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-xl text-white mb-2">
                    {language === 'ru' && 'Заинтересовались нашим оборудованием?'}
                    {language === 'en' && 'Interested in our equipment?'}
                    {language === 'az' && 'Avadanlığımızla maraqlanırsınız?'}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {language === 'ru' && 'Свяжитесь с нами для получения подробной информации о ценах, доставке и условиях сотрудничества.'}
                    {language === 'en' && 'Contact us for detailed information about prices, delivery, and partnership conditions.'}
                    {language === 'az' && 'Qiymətlər, çatdırılma və əməkdaşlıq şərtləri haqqında ətraflı məlumat üçün bizimlə əlaqə saxlayın.'}
                  </p>
                  <div className="flex flex-col gap-2 text-sm text-gray-400">
                    <p>📧 fastcharge@fastcharge.az</p>
                    <p>📱 +994 77 225-55-55</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
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
