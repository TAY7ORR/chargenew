import { motion } from 'motion/react';
import { DollarSign, TrendingUp, Wrench, Sparkles, BarChart3, HeadphonesIcon, Building2 } from 'lucide-react';
import type { Page } from '../App';

interface PartnersPageProps {
  t: (key: string) => string;
  setCurrentPage: (page: Page) => void;
}

export function PartnersPage({ t }: PartnersPageProps) {

  const benefits = [
    { icon: DollarSign, title: t('partnerBenefit1'), text: t('partnerBenefit1Text') },
    { icon: TrendingUp, title: t('partnerBenefit2'), text: t('partnerBenefit2Text') },
    { icon: Wrench, title: t('partnerBenefit3'), text: t('partnerBenefit3Text') },
    { icon: Sparkles, title: t('partnerBenefit4'), text: t('partnerBenefit4Text') },
    { icon: BarChart3, title: t('partnerBenefit5'), text: t('partnerBenefit5Text') },
    { icon: HeadphonesIcon, title: t('partnerBenefit6'), text: t('partnerBenefit6Text') },
  ];

  const partners = [
    'CoffeeLab',
    'Baku Mall',
    'Hard Rock Café',
    'Park Bulvar',
    'Nizami Cinema',
    '28 Mall',
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      {/* Global background elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
              {t('partnersTitle')}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {t('partnersText')}
            </p>

            {/* Equipment Button - скрыто для будущей доработки */}
            {/* <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              onClick={() => setCurrentPage('equipment')}
              className="mt-8 inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-xl hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] transition-all duration-300 group"
            >
              <Box className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>{t('equipment')}</span>
            </motion.button> */}
          </motion.div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="relative py-16">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl mb-4">{t('partnersSubtitle')}</h2>
            <p className="text-xl text-gray-400">Присоединяйтесь к лучшим заведениям Баку</p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-yellow-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 group-hover:border-yellow-500/50 rounded-2xl p-8 h-32 flex items-center justify-center transition-all">
                    <Building2 className="w-8 h-8 text-yellow-500/50 absolute top-4 right-4" />
                    <span className="text-xl">{partner}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative py-16">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl mb-4">Что мы предлагаем</h2>
            <p className="text-xl text-gray-400">Преимущества сотрудничества с Fast Charge</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-yellow-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 group-hover:border-yellow-500/50 rounded-2xl p-6 h-full transition-all">
                    <div className="w-14 h-14 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-yellow-500/30 transition-colors">
                      <Icon className="w-7 h-7 text-yellow-500" />
                    </div>
                    <h3 className="text-xl mb-3">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partner Form - Убрано */}

      {/* Stats */}
      <section className="relative py-16">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative max-w-5xl mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-yellow-500/10 to-yellow-500/20 rounded-3xl blur-2xl" />
            <div className="relative bg-gradient-to-br from-gray-900 to-black border border-yellow-500/30 rounded-3xl p-12">
              <h3 className="text-2xl md:text-3xl text-center mb-8">Наши результаты</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl text-yellow-500 mb-2">50+</div>
                  <div className="text-gray-400">Партнеров</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl text-yellow-500 mb-2">100K+</div>
                  <div className="text-gray-400">Аренд в месяц</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl text-yellow-500 mb-2">95%</div>
                  <div className="text-gray-400">Довольных партнеров</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl text-yellow-500 mb-2">24/7</div>
                  <div className="text-gray-400">Поддержка</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}