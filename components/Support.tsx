import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, Instagram, Facebook, Linkedin } from 'lucide-react';
import { toast } from 'sonner';

interface SupportProps {
  t: (key: string) => string;
}

export function Support({ t }: SupportProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('support');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
  ];

  return (
    <section id="support" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl mb-4">
            {t('supportTitle')}
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            {t('supportText')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder={t('namePlaceholder')}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-black/50 border-white/10 text-white placeholder:text-white/40 focus:border-yellow-400 transition-colors"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder={t('emailPlaceholder')}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-black/50 border-white/10 text-white placeholder:text-white/40 focus:border-yellow-400 transition-colors"
                />
              </div>
              <div>
                <Textarea
                  placeholder={t('messagePlaceholder')}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="bg-black/50 border-white/10 text-white placeholder:text-white/40 focus:border-yellow-400 transition-colors resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-yellow-400 text-black hover:bg-yellow-500 shadow-lg shadow-yellow-400/50"
              >
                {t('sendButton')}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Email */}
            <motion.div
              whileHover={{ scale: 1.02, x: 10 }}
              className="flex items-center gap-4 p-6 bg-black/50 border border-white/10 rounded-xl hover:border-yellow-400/50 transition-all group"
            >
              <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors">
                <Mail className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <div className="text-white/60 text-sm mb-1">Email</div>
                <a href={`mailto:${t('contactEmail')}`} className="text-white hover:text-yellow-400 transition-colors">
                  {t('contactEmail')}
                </a>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              whileHover={{ scale: 1.02, x: 10 }}
              className="flex items-center gap-4 p-6 bg-black/50 border border-white/10 rounded-xl hover:border-yellow-400/50 transition-all group"
            >
              <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors">
                <Phone className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <div className="text-white/60 text-sm mb-1">Телефон</div>
                <a href={`tel:${t('contactPhone')}`} className="text-white hover:text-yellow-400 transition-colors">
                  {t('contactPhone')}
                </a>
              </div>
            </motion.div>

            {/* Social Media */}
            <div>
              <div className="text-white/60 text-sm mb-4">Социальные сети</div>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="w-12 h-12 bg-black/50 border border-white/10 rounded-xl flex items-center justify-center hover:border-yellow-400/50 hover:bg-yellow-400/10 transition-all group"
                    >
                      <Icon className="w-5 h-5 text-white/60 group-hover:text-yellow-400 transition-colors" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}