import { motion } from 'motion/react';
import { Zap, Clock, Star, TrendingUp } from 'lucide-react';
import type { Page } from '../App';

interface PricingProps {
  t: (key: string) => string;
  setCurrentPage: (page: Page) => void;
}

export function Pricing({ t, setCurrentPage }: PricingProps) {
  const handleGoToApp = () => {
    setCurrentPage('app');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const plans = [
    {
      duration: '60',
      durationText: t('pricing60min'),
      price: '1.5',
      icon: Clock,
      popular: false,
      gradient: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-500/30',
      glowColor: 'rgba(59, 130, 246, 0.3)',
    },
    {
      duration: '120',
      durationText: t('pricing120min'),
      price: '3',
      icon: TrendingUp,
      popular: true,
      gradient: 'from-yellow-500/30 to-orange-500/30',
      borderColor: 'border-yellow-500/50',
      glowColor: 'rgba(250, 204, 21, 0.5)',
    },
    {
      duration: '24',
      durationText: t('pricingFullDay'),
      price: '3.5',
      icon: Star,
      popular: false,
      gradient: 'from-green-500/20 to-emerald-500/20',
      borderColor: 'border-green-500/30',
      glowColor: 'rgba(34, 197, 94, 0.3)',
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-block mb-6"
          >
            <Zap 
              className="w-16 h-16 mx-auto" 
              style={{
                color: '#facc15',
                fill: '#facc15',
                filter: 'drop-shadow(0 0 20px rgba(250, 204, 21, 0.8))'
              }}
            />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl mb-4">
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 bg-clip-text text-transparent">
              {t('pricingTitle')}
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t('pricingSubtitle')}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                  >
                    <div className="bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-bold shadow-lg shadow-yellow-500/50">
                      ⚡ {t('pricingPopular')}
                    </div>
                  </motion.div>
                )}

                {/* Card */}
                <motion.div
                  whileHover={{ scale: plan.popular ? 1.05 : 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-full"
                >
                  {/* Glow Effect */}
                  <div 
                    className="absolute inset-0 rounded-2xl blur-xl opacity-50"
                    style={{ 
                      background: plan.popular 
                        ? 'linear-gradient(135deg, rgba(250, 204, 21, 0.3), rgba(251, 146, 60, 0.3))'
                        : `${plan.glowColor}`
                    }}
                  />

                  {/* Card Content */}
                  <div className={`relative bg-gradient-to-br ${plan.gradient} backdrop-blur-sm border ${plan.borderColor} rounded-2xl p-8 h-full flex flex-col ${plan.popular ? 'ring-2 ring-yellow-500/50' : ''}`}>
                    {/* Icon */}
                    <div className="mb-6">
                      <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center ${plan.popular ? 'bg-yellow-500/20' : 'bg-white/10'}`}>
                        <Icon 
                          className={`w-8 h-8 ${plan.popular ? 'text-yellow-500' : 'text-white'}`}
                          style={plan.popular ? {
                            filter: 'drop-shadow(0 0 10px rgba(250, 204, 21, 0.8))'
                          } : {}}
                        />
                      </div>
                    </div>

                    {/* Duration */}
                    <h3 className="text-2xl text-center mb-2">
                      {plan.durationText}
                    </h3>

                    {/* Price */}
                    <div className="mb-6 text-center">
                      <div className="flex items-baseline justify-center gap-1">
                        <motion.span 
                          className={`text-5xl ${plan.popular ? 'text-yellow-500' : 'text-white'}`}
                          animate={plan.popular ? {
                            textShadow: [
                              '0 0 10px rgba(250, 204, 21, 0.5)',
                              '0 0 20px rgba(250, 204, 21, 0.8)',
                              '0 0 10px rgba(250, 204, 21, 0.5)',
                            ]
                          } : {}}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          {plan.price}
                        </motion.span>
                        <span className="text-2xl text-gray-400">₼</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-3 mb-6 flex-grow">
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Zap className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                        <span>{t('pricingFeature1')}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Zap className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                        <span>{t('pricingFeature2')}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Zap className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                        <span>{t('pricingFeature3')}</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      onClick={handleGoToApp}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-3 rounded-xl transition-all flex items-center justify-center ${
                        plan.popular
                          ? 'bg-yellow-500 text-black hover:bg-yellow-400 shadow-lg shadow-yellow-500/50'
                          : 'bg-white/10 hover:bg-white/20 border border-white/20'
                      }`}
                    >
                      <span className="text-center">{t('pricingCTA')}</span>
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center text-gray-500 mt-12 text-sm"
        >
          {t('pricingNote')}
        </motion.p>
      </div>
    </section>
  );
}
