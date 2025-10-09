import { motion } from 'motion/react';
import { MapPin, QrCode, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

interface HowItWorksProps {
  t: (key: string) => string;
}

export function HowItWorks({ t }: HowItWorksProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('how-it-works');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      icon: MapPin,
      title: t('step1Title'),
      text: t('step1Text'),
      number: '01',
    },
    {
      icon: QrCode,
      title: t('step2Title'),
      text: t('step2Text'),
      number: '02',
    },
    {
      icon: Zap,
      title: t('step3Title'),
      text: t('step3Text'),
      number: '03',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl mb-4">
            {t('howItWorksTitle')}
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative">
          {/* Connection lines */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5">
            <div className="relative w-full h-full max-w-4xl mx-auto">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isVisible ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-yellow-400/50 to-yellow-400/20"
                style={{ transformOrigin: 'left' }}
              />
            </div>
          </div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="text-center relative z-10">
                  {/* Step number */}
                  <motion.div
                    className="text-8xl absolute -top-8 left-1/2 -translate-x-1/2 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none"
                    whileHover={!isMobile ? { scale: 1.2 } : {}}
                  >
                    {step.number}
                  </motion.div>

                  {/* Icon container */}
                  <motion.div
                    whileHover={!isMobile ? { scale: 1.1, rotate: 5 } : {}}
                    className="relative inline-block mb-6"
                  >
                    <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl flex items-center justify-center relative z-10 shadow-lg shadow-yellow-400/50">
                      <Icon className="w-12 h-12 text-black" />
                    </div>
                    {/* Blur эффект - убираем на мобильных */}
                    {!isMobile && (
                      <motion.div
                        className="absolute inset-0 bg-yellow-400 rounded-3xl blur-xl"
                        animate={{
                          opacity: [0.3, 0.6, 0.3],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                      />
                    )}
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl md:text-2xl mb-3 text-white">
                    {step.title}
                  </h3>
                  <p className="text-white/70 max-w-xs mx-auto">
                    {step.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}