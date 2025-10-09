import { motion } from 'motion/react';
import { DollarSign, TrendingUp, Wrench, Sparkles, BarChart3, HeadphonesIcon, Building2, Send } from 'lucide-react';
import { useState } from 'react';

interface PartnersPageProps {
  t: (key: string) => string;
}

export function PartnersPage({ t }: PartnersPageProps) {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Partner form submitted:', formData);
    alert('Спасибо за интерес! Мы свяжемся с вами в ближайшее время.');
    setFormData({ company: '', name: '', email: '', phone: '', message: '' });
  };

  const benefits = [
    { icon: DollarSign, title: t('partnerBenefit1'), text: t('partnerBenefit1Text') },
    { icon: TrendingUp, title: t('partnerBenefit2'), text: t('partnerBenefit2Text') },
    { icon: Wrench, title: t('partnerBenefit3'), text: t('partnerBenefit3Text') },
    { icon: Sparkles, title: t('partnerBenefit4'), text: t('partnerBenefit4Text') },
    { icon: BarChart3, title: t('partnerBenefit5'), text: t('partnerBenefit5Text') },
    { icon: HeadphonesIcon, title: t('partnerBenefit6'), text: t('partnerBenefit6Text') },
  ];

  const partners = [
    'CoffeeLab',
    'Baku Mall',
    'Hard Rock Café',
    'Park Bulvar',
    'Nizami Cinema',
    '28 Mall',
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 via-transparent to-transparent" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-yellow-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
              {t('partnersTitle')}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {t('partnersText')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl mb-4">{t('partnersSubtitle')}</h2>
            <p className="text-xl text-gray-400">Присоединяйтесь к лучшим заведениям Баку</p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-yellow-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 group-hover:border-yellow-500/50 rounded-2xl p-8 h-32 flex items-center justify-center transition-all">
                    <Building2 className="w-8 h-8 text-yellow-500/50 absolute top-4 right-4" />
                    <span className="text-xl">{partner}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl mb-4">Что мы предлагаем</h2>
            <p className="text-xl text-gray-400">Преимущества сотрудничества с Fast Charge</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-yellow-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 group-hover:border-yellow-500/50 rounded-2xl p-6 h-full transition-all">
                    <div className="w-14 h-14 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-yellow-500/30 transition-colors">
                      <Icon className="w-7 h-7 text-yellow-500" />
                    </div>
                    <h3 className="text-xl mb-3">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partner Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-3xl blur-2xl" />
              <div className="relative bg-gradient-to-br from-gray-900 to-black border border-yellow-500/30 rounded-3xl p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl mb-4">{t('partnerFormTitle')}</h2>
                  <p className="text-gray-400">
                    Заполните форму, и мы свяжемся с вами в ближайшее время
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm text-gray-400 mb-2">
                        {t('companyPlaceholder')}
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-black border border-gray-800 focus:border-yellow-500/50 rounded-xl px-4 py-3 outline-none transition-colors"
                        placeholder={t('companyPlaceholder')}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="partner-name" className="block text-sm text-gray-400 mb-2">
                        {t('namePlaceholder')}
                      </label>
                      <input
                        type="text"
                        id="partner-name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-black border border-gray-800 focus:border-yellow-500/50 rounded-xl px-4 py-3 outline-none transition-colors"
                        placeholder={t('namePlaceholder')}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="partner-email" className="block text-sm text-gray-400 mb-2">
                        {t('emailPlaceholder')}
                      </label>
                      <input
                        type="email"
                        id="partner-email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-black border border-gray-800 focus:border-yellow-500/50 rounded-xl px-4 py-3 outline-none transition-colors"
                        placeholder={t('emailPlaceholder')}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm text-gray-400 mb-2">
                        {t('phonePlaceholder')}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-black border border-gray-800 focus:border-yellow-500/50 rounded-xl px-4 py-3 outline-none transition-colors"
                        placeholder={t('phonePlaceholder')}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="partner-message" className="block text-sm text-gray-400 mb-2">
                      {t('messagePlaceholder')}
                    </label>
                    <textarea
                      id="partner-message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full bg-black border border-gray-800 focus:border-yellow-500/50 rounded-xl px-4 py-3 outline-none transition-colors resize-none"
                      placeholder="Расскажите о вашем заведении..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-yellow-500 text-black py-4 rounded-xl hover:bg-yellow-400 transition-colors shadow-lg shadow-yellow-500/50 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>{t('becomePartner')}</span>
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative max-w-5xl mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-yellow-500/10 to-yellow-500/20 rounded-3xl blur-2xl" />
            <div className="relative bg-gradient-to-br from-gray-900 to-black border border-yellow-500/30 rounded-3xl p-12">
              <h3 className="text-2xl md:text-3xl text-center mb-8">Наши результаты</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl text-yellow-500 mb-2">50+</div>
                  <div className="text-gray-400">Партнеров</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl text-yellow-500 mb-2">100K+</div>
                  <div className="text-gray-400">Аренд в месяц</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl text-yellow-500 mb-2">95%</div>
                  <div className="text-gray-400">Довольных партнеров</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl text-yellow-500 mb-2">24/7</div>
                  <div className="text-gray-400">Поддержка</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}