import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import type { Language, Page } from '../App';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  t: (key: string) => string;
}

export function Header({ language, setLanguage, currentPage, setCurrentPage, t }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleNavigation = (page: Page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
  };

  const menuItems: { key: string; page: Page }[] = [
    { key: 'app', page: 'app' },
    { key: 'support', page: 'support' },
    { key: 'web', page: 'web' },
    { key: 'partners', page: 'partners' },
    { key: 'about', page: 'about' },
  ];

  const languages: Language[] = ['az', 'en', 'ru'];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isMobile
          ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-yellow-500/10'
          : isScrolled
          ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-yellow-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center md:justify-between relative">
          {/* Mobile: invisible placeholder for symmetry */}
          <div className="md:hidden w-6" />
          
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2 cursor-pointer md:static absolute left-1/2 md:left-0 md:transform-none -translate-x-1/2"
            whileHover={{ scale: 1.05 }}
            onClick={() => handleNavigation('home')}
          >
            <div className="relative">
              <Zap className="w-8 h-8 fill-yellow-400 text-yellow-400" />
              <motion.div
                className="absolute inset-0 blur-md"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Zap className="w-8 h-8 fill-yellow-400 text-yellow-400" />
              </motion.div>
            </div>
            <span className="text-xl text-white">
              Fast <span className="text-yellow-400">Charge</span>
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavigation(item.page)}
                className={`transition-colors relative group ${
                  currentPage === item.page
                    ? 'text-yellow-400'
                    : 'text-white/80 hover:text-yellow-400'
                }`}
              >
                {item.page === 'web' ? (
                  <span className="flex items-center gap-1.5">
                    {t(item.key)}
                    <motion.span
                      animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, -15, 15, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Zap 
                        className="w-4 h-4" 
                        fill="currentColor"
                        style={{
                          filter: 'drop-shadow(0 0 8px rgba(250, 204, 21, 0.8))'
                        }}
                      />
                    </motion.span>
                  </span>
                ) : (
                  t(item.key)
                )}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-yellow-400 transition-all duration-300 ${
                    currentPage === item.page ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            ))}
          </nav>

          {/* Language Switcher & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-1 bg-white/10 rounded-full p-1">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-3 py-1 rounded-full transition-all text-sm ${
                    language === lang
                      ? 'bg-yellow-400 text-black'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500 shadow-lg shadow-yellow-400/50" onClick={() => handleNavigation('app')}>
              {t('downloadApp')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white relative z-10 ml-auto"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <nav className="flex flex-col gap-4 py-6">
                {menuItems.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => handleNavigation(item.page)}
                    className={`transition-colors text-left ${
                      currentPage === item.page
                        ? 'text-yellow-400'
                        : 'text-white/80 hover:text-yellow-400'
                    }`}
                  >
                    {item.page === 'web' ? (
                      <span className="flex items-center gap-2">
                        {t(item.key)}
                        <motion.span
                          animate={{
                            scale: [1, 1.3, 1],
                            rotate: [0, -15, 15, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <Zap 
                            className="w-4 h-4" 
                            fill="currentColor"
                            style={{
                              filter: 'drop-shadow(0 0 8px rgba(250, 204, 21, 0.8))'
                            }}
                          />
                        </motion.span>
                      </span>
                    ) : (
                      t(item.key)
                    )}
                  </button>
                ))}
                <div className="flex items-center gap-2 pt-4">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setLanguage(lang)}
                      className={`px-3 py-1 rounded-full transition-all text-sm ${
                        language === lang
                          ? 'bg-yellow-400 text-black'
                          : 'bg-white/10 text-white/60'
                      }`}
                    >
                      {lang.toUpperCase()}
                    </button>
                  ))}
                </div>
                <Button 
                  onClick={() => {
                    setCurrentPage('app');
                    setIsMobileMenuOpen(false);
                  }}
                  className="bg-yellow-400 text-black hover:bg-yellow-500 w-full"
                >
                  {t('downloadApp')}
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}