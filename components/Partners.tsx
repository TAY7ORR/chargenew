import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { DollarSign, TrendingUp, Wrench } from 'lucide-react';

interface PartnersProps {
  t: (key: string) => string;
}

export function Partners({ t }: PartnersProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('partners');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const partners = [
    'Port Baku Mall',
    'CoffeeLab',
    'Hard Rock Café',
    'Nizami Cinema',
    'Park Boulevard',
    '28 Mall',
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: t('partnerBenefit1'),
      text: t('partnerBenefit1Text'),
    },
    {
      icon: TrendingUp,
      title: t('partnerBenefit2'),
      text: t('partnerBenefit2Text'),
    },
    {
      icon: Wrench,
      title: t('partnerBenefit3'),
      text: t('partnerBenefit3Text'),
    },
  ];

  return (
    <section id="partners" className="py-24 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [-50, 50, -50],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl mb-4">
            {t('partnersTitle')}
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
            {t('partnersText')}
          </p>
          <div className="w-24 h-1 bg-yellow-400 mx-auto" />
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl text-center mb-8 text-yellow-400">
            {t('partnersSubtitle')}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-xl p-6 flex items-center justify-center hover:border-yellow-400/50 transition-all group"
              >
                <span className="text-white/70 text-center text-sm group-hover:text-yellow-400 transition-colors">
                  {partner}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-8 hover:border-yellow-400/50 transition-all group"
              >
                <div className="w-16 h-16 bg-yellow-400/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow-400/20 transition-colors">
                  <Icon className="w-8 h-8 text-yellow-400" />
                </div>
                <h4 className="text-xl mb-3 text-white group-hover:text-yellow-400 transition-colors">
                  {benefit.title}
                </h4>
                <p className="text-white/60 leading-relaxed">
                  {benefit.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}