import { motion } from 'motion/react';
import { Zap, Instagram } from 'lucide-react';
import type { Language, Page } from '../App';

interface FooterProps {
  t: (key: string) => string;
  language: Language;
  setLanguage: (lang: Language) => void;
  setCurrentPage: (page: Page) => void;
}

export function Footer({ t, language, setLanguage, setCurrentPage }: FooterProps) {
  const handleNavigation = (page: Page) => {
    setCurrentPage(page);
  };

  const links: { key: string; page: Page }[] = [
    { key: 'home', page: 'home' },
    { key: 'about', page: 'about' },
    { key: 'app', page: 'app' },
    { key: 'web', page: 'web' },
    { key: 'support', page: 'support' },
    { key: 'partners', page: 'partners' },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/fastcharge.az/' },
  ];

  const languages: Language[] = ['az', 'en', 'ru'];

  return (
    <footer className="bg-black border-t border-white/10 relative overflow-hidden">
      {/* Lightning line effect */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
        animate={{
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <motion.div
              className="flex items-center gap-2 mb-4"
              whileHover={{ scale: 1.05 }}
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
                  }}
                >
                  <Zap className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                </motion.div>
              </div>
              <span className="text-xl text-white">
                Fast <span className="text-yellow-400">Charge</span>
              </span>
            </motion.div>
            <p className="text-white/60 max-w-md mb-4">
              {t('footerAbout')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">{t('footerLinks')}</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.key}>
                  <button
                    onClick={() => handleNavigation(link.page)}
                    className="text-white/60 hover:text-yellow-400 transition-colors"
                  >
                    {t(link.key)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Language */}
          <div>
            <h4 className="text-white mb-4">{t('footerSocial')}</h4>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:border-yellow-400/50 hover:bg-yellow-400/10 transition-all group"
                  >
                    <Icon className="w-5 h-5 text-white/60 group-hover:text-yellow-400 transition-colors" />
                  </motion.a>
                );
              })}
            </div>

            {/* Language Switcher */}
            <div className="flex items-center gap-2">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-3 py-1 rounded-lg transition-all text-sm ${
                    language === lang
                      ? 'bg-yellow-400 text-black'
                      : 'bg-white/5 text-white/60 hover:bg-white/10'
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm">
            {t('copyright')}
          </p>
        </div>
      </div>

      {/* Bottom glow effect */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent blur-sm"
        animate={{
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
    </footer>
  );
}