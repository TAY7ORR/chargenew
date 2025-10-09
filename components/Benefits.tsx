import { motion } from 'motion/react';
import { Zap, Wifi, MapPin, DollarSign } from 'lucide-react';
import { useState, useEffect } from 'react';

interface BenefitsProps {
  t: (key: string) => string;
}

export function Benefits({ t }: BenefitsProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const benefits = [
    {
      icon: Zap,
      title: t('benefit1Title'),
      text: t('benefit1Text'),
      color: 'yellow',
    },
    {
      icon: Wifi,
      title: t('benefit2Title'),
      text: t('benefit2Text'),
      color: 'yellow',
    },
    {
      icon: MapPin,
      title: t('benefit3Title'),
      text: t('benefit3Text'),
      color: 'yellow',
    },
    {
      icon: DollarSign,
      title: t('benefit4Title'),
      text: t('benefit4Text'),
      color: 'yellow',
    },
  ];

  return (
    <section id="benefits" className="py-24 bg-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={!isMobile ? { scale: 1.05, y: -10 } : {}}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-8 h-full hover:border-yellow-400/50 transition-all duration-300">
                  {/* Icon */}
                  <div className="mb-6 relative">
                    <div className="w-16 h-16 bg-yellow-400/10 rounded-2xl flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors">
                      <Icon className="w-8 h-8 text-yellow-400" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl mb-3 text-white group-hover:text-yellow-400 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {benefit.text}
                  </p>

                  {/* Hover glow - только на десктопе */}
                  {!isMobile && (
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 to-yellow-400/0 group-hover:from-yellow-400/5 group-hover:to-yellow-400/10 rounded-2xl transition-all duration-300 pointer-events-none" />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}