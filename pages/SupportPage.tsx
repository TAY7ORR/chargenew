import { motion } from 'motion/react';
import { Mail, MapPin, Clock, Send, Instagram, MessageCircle } from 'lucide-react';
import { useState } from 'react';

interface SupportPageProps {
  t: (key: string) => string;
  setCurrentPage: (page: 'home' | 'about' | 'app' | 'support' | 'partners') => void;
}

export function SupportPage({ t, setCurrentPage }: SupportPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to your backend
    alert('Спасибо! Ваше сообщение отправлено.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: t('contactEmail'), href: 'mailto:sales@fastcharge.az' },
    { icon: MessageCircle, label: 'WhatsApp', value: '+994 77 225 55 55', href: 'http://wa.me/994772255555' },
    { icon: MapPin, label: 'Адрес', value: t('contactAddress'), href: null },
    { icon: Clock, label: t('workingHours'), value: t('workingHoursText'), href: null },
  ];

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/fastcharge.az/' },
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
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
              {t('supportTitle')}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {t('supportText')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="relative py-16">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl mb-8">Контактная информация</h2>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  const content = (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center group-hover:bg-yellow-500/30 transition-colors flex-shrink-0">
                        <Icon className="w-6 h-6 text-yellow-500" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">{item.label}</div>
                        <div className="text-lg">{item.value}</div>
                      </div>
                    </motion.div>
                  );
                  
                  return item.href ? (
                    <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                      {content}
                    </a>
                  ) : (
                    content
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h3 className="text-xl mb-4">Мы в соцсетях</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 bg-gray-900 border border-gray-800 hover:border-yellow-500/50 rounded-xl flex items-center justify-center group transition-all"
                      >
                        <Icon className="w-5 h-5 text-gray-400 group-hover:text-yellow-500 transition-colors" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-2xl blur-xl" />
                <div className="relative bg-gradient-to-br from-gray-900 to-black border border-yellow-500/30 rounded-2xl p-8">
                  <h2 className="text-3xl mb-6">Напишите нам</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                        {t('namePlaceholder')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-black border border-gray-800 focus:border-yellow-500/50 rounded-xl px-4 py-3 outline-none transition-colors"
                        placeholder={t('namePlaceholder')}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                        {t('emailPlaceholder')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-black border border-gray-800 focus:border-yellow-500/50 rounded-xl px-4 py-3 outline-none transition-colors"
                        placeholder={t('emailPlaceholder')}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                        {t('messagePlaceholder')}
                      </label>
                      <textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={6}
                        className="w-full bg-black border border-gray-800 focus:border-yellow-500/50 rounded-xl px-4 py-3 outline-none transition-colors resize-none"
                        placeholder={t('messagePlaceholder')}
                        required
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-yellow-500 text-black py-4 rounded-xl hover:bg-yellow-400 transition-colors shadow-lg shadow-yellow-500/50 flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      <span>{t('sendButton')}</span>
                    </motion.button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="relative py-16">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl mb-4">Не нашли ответ на свой вопрос?</h2>
            <p className="text-xl text-gray-400 mb-8">
              Посетите раздел FAQ на главной странице или свяжитесь с нами напрямую
            </p>
            <motion.button
              onClick={() => {
                setCurrentPage('home');
                // Set hash to trigger scroll to FAQ section
                setTimeout(() => {
                  const faqElement = document.getElementById('faq');
                  if (faqElement) {
                    faqElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }, 100);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gray-900 border border-yellow-500/30 hover:border-yellow-500/50 text-white px-8 py-4 rounded-xl transition-all"
            >
              Перейти к FAQ
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}