import { motion } from 'motion/react';
import { Zap, Target, Eye, Award, Users } from 'lucide-react';

interface AboutPageProps {
  t: (key: string) => string;
}

// Определение мобильного устройства
const isMobileDevice = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
};

export function AboutPage({ t }: AboutPageProps) {
  const isMobile = isMobileDevice();
  
  const values = [
    { icon: Zap, title: t('aboutValue1'), text: t('aboutValue1Text') },
    { icon: Award, title: t('aboutValue2'), text: t('aboutValue2Text') },
    { icon: Users, title: t('aboutValue3'), text: t('aboutValue3Text') },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      {/* Global background elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
        {!isMobile && (
          <>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          </>
        )}
      </div>

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 10 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.3 : 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            {isMobile ? (
              <h1 className="text-5xl md:text-7xl mb-6 text-yellow-400">
                {t('aboutTitle')}
              </h1>
            ) : (
              <h1 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
                {t('aboutTitle')}
              </h1>
            )}
            <p className="text-xl text-gray-300 leading-relaxed">
              {t('aboutText1')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-16">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: isMobile ? 0 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: isMobile ? 0.3 : 0.6 }}
              className="relative group"
            >
              {/* Упрощенный фон для мобильных */}
              {!isMobile && (
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              )}
              <div className="relative bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-2xl p-8 h-full">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-yellow-500" />
                </div>
                <h2 className="text-3xl mb-4">{t('aboutMission')}</h2>
                <p className="text-gray-300 leading-relaxed">
                  {t('aboutMissionText')}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isMobile ? 0 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: isMobile ? 0.3 : 0.6 }}
              className="relative group"
            >
              {/* Упрощенный фон для мобильных */}
              {!isMobile && (
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              )}
              <div className="relative bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-2xl p-8 h-full">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-yellow-500" />
                </div>
                <h2 className="text-3xl mb-4">{t('aboutVision')}</h2>
                <p className="text-gray-300 leading-relaxed">
                  {t('aboutVisionText')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-16">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 10 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: isMobile ? 0.3 : 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl mb-4">{t('aboutValues')}</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: isMobile ? 10 : 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: isMobile ? 0.3 : 0.6, delay: isMobile ? 0 : index * 0.1 }}
                  {...(!isMobile && { whileHover: { y: -10, scale: 1.02 } })}
                  className="relative group"
                >
                  {/* Blur эффект только на десктопе */}
                  {!isMobile && (
                    <div className="absolute inset-0 bg-yellow-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                  <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 group-hover:border-yellow-500/50 rounded-2xl p-8 transition-all">
                    <div className={`w-14 h-14 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-4 ${!isMobile && 'group-hover:bg-yellow-500/30'} transition-colors`}>
                      <Icon className="w-7 h-7 text-yellow-500" />
                    </div>
                    <h3 className="text-2xl mb-3">{value.title}</h3>
                    <p className="text-gray-400">{value.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 10 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: isMobile ? 0.3 : 0.6 }}
            className="relative max-w-5xl mx-auto"
          >
            {/* Blur эффект только на десктопе */}
            {!isMobile && (
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-yellow-500/10 to-yellow-500/20 rounded-3xl blur-2xl" />
            )}
            <div className="relative bg-gradient-to-br from-gray-900 to-black border border-yellow-500/30 rounded-3xl p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl text-yellow-500 mb-2">325+</div>
                  <div className="text-gray-400">Стаций</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl text-yellow-500 mb-2">10K+</div>
                  <div className="text-gray-400">Пользователей</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl text-yellow-500 mb-2">24/7</div>
                  <div className="text-gray-400">Поддержка</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl text-yellow-500 mb-2">99%</div>
                  <div className="text-gray-400">Доступность</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 10 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: isMobile ? 0.3 : 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl mb-6">{t('aboutText3')}</h2>
            {isMobile ? (
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-xl hover:bg-yellow-400 transition-colors shadow-lg shadow-yellow-500/50">
                {t('downloadApp')}
              </button>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-500 text-black px-8 py-4 rounded-xl hover:bg-yellow-400 transition-colors shadow-lg shadow-yellow-500/50"
              >
                {t('downloadApp')}
              </motion.button>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}