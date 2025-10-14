import { motion } from 'motion/react';
import { Mail, MapPin, Clock, Instagram, MessageCircle, Phone } from 'lucide-react';

interface SupportPageProps {
  t: (key: string) => string;
  setCurrentPage: (page: 'home' | 'about' | 'app' | 'support' | 'partners') => void;
}

export function SupportPage({ t, setCurrentPage }: SupportPageProps) {

  const contactInfo = [
    { icon: Mail, label: 'Email', value: t('contactEmail'), href: 'mailto:fastcharge@fastcharge.az' },
    { icon: Phone, label: 'Телефон', value: '+994 77 225 55 55', href: 'tel:+994772255555' },
    { icon: MessageCircle, label: 'WhatsApp', value: '+994 77 225 55 55', href: 'https://wa.me/994772255555' },
    { icon: MapPin, label: 'Офис', value: 'Bakı, Nərimanov rayonu, Yusif Vəzir Çəmənzəminli küçəsi, 14', href: null },
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
                        target="_blank"
                        rel="noopener noreferrer"
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

            {/* Office Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-2xl blur-xl" />
                <div className="relative bg-gradient-to-br from-gray-900 to-black border border-yellow-500/30 rounded-2xl p-6 h-full flex flex-col">
                  <h2 className="text-3xl mb-4">Наш офис</h2>
                  
                  {/* Address */}
                  <div className="mb-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                      <p className="text-lg text-gray-300">
                        Bakı şəhəri, Nərimanov rayonu,<br />
                        Yusif Vəzir Çəmənzəminli küçəsi, 14
                      </p>
                    </div>
                  </div>

                  {/* Google Map - Занимает оставшееся пространство */}
                  <div className="flex-1 rounded-xl overflow-hidden" style={{ minHeight: '400px' }}>
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d759.5826363123366!2d49.8312815696604!3d40.401527619494715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDI0JzA1LjUiTiA0OcKwNDknNTQuOSJF!5e0!3m2!1sru!2saz!4v1760472527164!5m2!1sru!2saz"
                      className="w-full h-full"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Fast Charge Office Location"
                    />
                  </div>
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