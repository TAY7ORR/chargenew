import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Apple, Play, Smartphone } from 'lucide-react';

interface AppSectionProps {
  t: (key: string) => string;
}

export function AppSection({ t }: AppSectionProps) {
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

    const element = document.getElementById('app');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="app" className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 right-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 md:order-1"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative max-w-sm mx-auto"
            >
              {/* Phone frame */}
              <div className="relative aspect-[9/19] bg-gradient-to-br from-gray-900 to-black rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-3xl z-10" />
                
                {/* Screen content */}
                <div className="relative h-full bg-gradient-to-b from-black via-gray-900 to-black p-8 flex flex-col">
                  {/* App header */}
                  <div className="flex items-center justify-between mb-8 pt-8">
                    <div className="flex items-center gap-2">
                      <Smartphone className="w-6 h-6 text-yellow-400" />
                      <span className="text-white">Fast Charge</span>
                    </div>
                    <div className="w-8 h-8 bg-yellow-400 rounded-full" />
                  </div>

                  {/* Map placeholder */}
                  <div className="flex-1 bg-gray-800/50 rounded-2xl border border-white/10 mb-6 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-3 h-3 bg-yellow-400 rounded-full"
                          style={{
                            left: `${20 + i * 15}%`,
                            top: `${30 + i * 10}%`,
                          }}
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Bottom card */}
                  <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-black text-sm opacity-80">Ближайшая станция</div>
                        <div className="text-black">200 м</div>
                      </div>
                      <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                        <Play className="w-6 h-6 text-yellow-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-yellow-400/20 rounded-[3rem] blur-3xl -z-10" />
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <h2 className="text-3xl md:text-5xl mb-6">
              {t('appTitle')}
            </h2>

            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              {t('appText')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-black border-2 border-white hover:bg-white hover:text-black transition-all group">
                <Apple className="mr-2 group-hover:scale-110 transition-transform" />
                {t('appStore')}
              </Button>
              <Button className="bg-yellow-400 text-black hover:bg-yellow-500 shadow-lg shadow-yellow-400/50 group">
                <Play className="mr-2 group-hover:scale-110 transition-transform" />
                {t('googlePlay')}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}