import { motion } from 'motion/react';
import { Map, Scan, History, Bell, CreditCard, Headphones, Download, Apple, Zap } from 'lucide-react';

interface AppPageProps {
  t: (key: string) => string;
}

export function AppPage({ t }: AppPageProps) {
  const features = [
    { icon: Map, title: t('appFeature1'), text: t('appFeature1Text') },
    { icon: Scan, title: t('appFeature2'), text: t('appFeature2Text') },
    { icon: History, title: t('appFeature3'), text: t('appFeature3Text') },
    { icon: Bell, title: t('appFeature4'), text: t('appFeature4Text') },
    { icon: CreditCard, title: t('appFeature5'), text: t('appFeature5Text') },
    { icon: Headphones, title: t('appFeature6'), text: t('appFeature6Text') },
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
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
                {t('appTitle')}
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                {t('appText')}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="https://apps.apple.com/az/app/fast-charge-power-on-the-go/id6749755045"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 bg-black border border-gray-700 hover:border-yellow-500/50 px-6 py-3 rounded-xl transition-all group"
                >
                  <Apple className="w-8 h-8 group-hover:text-yellow-500 transition-colors" />
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Download on the</div>
                    <div className="text-sm">App Store</div>
                  </div>
                </motion.a>
                
                <motion.a
                  href="https://play.google.com/store/apps/details?id=az.fastcharge"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 bg-black border border-gray-700 hover:border-yellow-500/50 px-6 py-3 rounded-xl transition-all group"
                >
                  <Download className="w-8 h-8 group-hover:text-yellow-500 transition-colors" />
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Get it on</div>
                    <div className="text-sm">Google Play</div>
                  </div>
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                {/* Power Bank Illustration */}
                <div className="relative w-full max-w-sm mx-auto">
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
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-yellow-400/20 rounded-3xl blur-3xl -z-10" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl mb-4">Возможности приложения</h2>
            <p className="text-xl text-gray-400">Всё, что нужно для удобной аренды</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
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
                    <h3 className="text-xl mb-3">{feature.title}</h3>
                    <p className="text-gray-400">{feature.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-yellow-500/10 to-yellow-500/20 rounded-3xl blur-2xl" />
              <div className="relative bg-gradient-to-br from-gray-900 to-black border border-yellow-500/30 rounded-3xl p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl mb-8 text-center">Начни использовать сегодня</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-black">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl mb-2">Скачай приложение</h3>
                      <p className="text-gray-400">Доступно в App Store и Google Play</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-black">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl mb-2">Зарегистрируйся</h3>
                      <p className="text-gray-400">Быстрая регистрация за 30 секунд</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-black">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl mb-2">Арендуй повербанк</h3>
                      <p className="text-gray-400">Найди станцию и получи заряд</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl mb-6">Скачай Fast Charge прямо сейчас</h2>
            <p className="text-xl text-gray-400 mb-8">Присоединяйся к тысячам пользователей</p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="https://apps.apple.com/az/app/fast-charge-power-on-the-go/id6749755045"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 bg-yellow-500 text-black px-8 py-4 rounded-xl hover:bg-yellow-400 transition-colors shadow-lg shadow-yellow-500/50"
              >
                <Apple className="w-6 h-6" />
                <span>App Store</span>
              </motion.a>
              
              <motion.a
                href="https://play.google.com/store/apps/details?id=az.fastcharge"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 bg-yellow-500 text-black px-8 py-4 rounded-xl hover:bg-yellow-400 transition-colors shadow-lg shadow-yellow-500/50"
              >
                <Download className="w-6 h-6" />
                <span>Google Play</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}