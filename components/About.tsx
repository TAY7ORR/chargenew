import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Zap, Users, Target } from 'lucide-react';

interface AboutProps {
  t: (key: string) => string;
}

export function About({ t }: AboutProps) {
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

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl mb-8">
              {t('aboutTitle')}
            </h2>

            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white/80 text-lg leading-relaxed"
              >
                {t('aboutText1')}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-white/80 text-lg leading-relaxed"
              >
                {t('aboutText2')}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-yellow-400 text-lg"
              >
                {t('aboutText3')}
              </motion.p>
            </div>
          </motion.div>

          {/* Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Zap, label: '1000+', sublabel: 'Аренд в день' },
                { icon: Users, label: '5000+', sublabel: 'Пользователей' },
                { icon: Target, label: '50+', sublabel: 'Станций' },
                { icon: Zap, label: '24/7', sublabel: 'Поддержка' },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-6 hover:border-yellow-400/50 transition-all group"
                  >
                    <Icon className="w-8 h-8 text-yellow-400 mb-4 group-hover:scale-110 transition-transform" />
                    <div className="text-2xl text-white mb-1">{stat.label}</div>
                    <div className="text-sm text-white/60">{stat.sublabel}</div>
                  </motion.div>
                );
              })}
            </div>

            {/* Decorative element */}
            <motion.div
              className="absolute -bottom-10 -right-10 w-40 h-40 border-4 border-yellow-400/20 rounded-full"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <div className="absolute top-0 left-1/2 w-4 h-4 bg-yellow-400 rounded-full -translate-x-1/2 -translate-y-1/2" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}