import { Button } from './ui/button';
import { motion } from 'motion/react';
import { Zap, Apple, Play } from 'lucide-react';
import { useState, useEffect } from 'react';
import type { Page } from '../App';

interface HeroProps {
  t: (key: string) => string;
  setCurrentPage: (page: Page) => void;
}

export function Hero({ t }: HeroProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-yellow-950/20" />
        
        {/* Lightning effects - только на десктопе */}
        {!isMobile && (
          <>
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.5, 0.3, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </>
        )}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full"
            >
              <Zap className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="text-yellow-400 text-sm">Fast Charge</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl mb-6 leading-tight">
              {t('heroTitle')}
            </h1>

            <p className="text-lg md:text-xl text-white/70 mb-8 max-w-lg">
              {t('heroSubtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                className="bg-black border-2 border-white hover:bg-white hover:text-black transition-all group"
              >
                <a 
                  href="https://apps.apple.com/app/fastcharge" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Apple className="mr-2 group-hover:scale-110 transition-transform" />
                  {t('appStore')}
                </a>
              </Button>
              <Button 
                asChild
                className="bg-yellow-400 text-black hover:bg-yellow-500 shadow-lg shadow-yellow-400/50 group"
              >
                <a 
                  href="https://play.google.com/store/apps/details?id=az.fastcharge" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Play className="mr-2 group-hover:scale-110 transition-transform" />
                  {t('googlePlay')}
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Power Bank Visual */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative"
            >
              {/* Power Bank Illustration */}
              <div className="relative w-full max-w-md mx-auto">
                <div className="relative aspect-[3/4] bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl border border-white/10 overflow-hidden">
                  {/* Lightning bolt on power bank */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.8, 1, 0.8],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    >
                      <Zap className="w-32 h-32 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  </div>
                  
                  {/* Charging indicator */}
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-3/4">
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-yellow-400 to-yellow-300"
                        animate={{
                          width: ['0%', '100%'],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                    </div>
                  </div>
                </div>
                
                {/* Glow effect - только на десктопе */}
                {!isMobile && (
                  <div className="absolute inset-0 bg-yellow-400/20 rounded-3xl blur-3xl -z-10" />
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - только на десктопе */}
      {!isMobile && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-yellow-400 rounded-full"
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            />
          </div>
        </motion.div>
      )}
    </section>
  );
}