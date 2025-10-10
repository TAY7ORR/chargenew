import { motion } from 'motion/react';
import { Shield, Database, Lock, UserCheck, Cookie, RefreshCw, Mail, Info } from 'lucide-react';
import { policyData } from '../data/politic';
import type { Language } from '../App';

interface PrivacyPolicyPageProps {
  language: Language;
}

export function PrivacyPolicyPage({ language }: PrivacyPolicyPageProps) {
  const data = policyData[language].privacyPolicy;

  const icons = [Info, Database, Lock, Shield, UserCheck, Cookie, RefreshCw, Mail];

  return (
    <div className="relative min-h-screen overflow-hidden" style={{ backgroundColor: '#000000' }}>
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-[700px] h-[700px] rounded-full opacity-20 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, #FFD700 0%, transparent 70%)',
            top: '5%',
            right: '5%',
            animation: 'float 12s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute w-[500px] h-[500px] rounded-full opacity-15 blur-[100px]"
          style={{
            background: 'radial-gradient(circle, #FFD700 0%, transparent 70%)',
            bottom: '10%',
            left: '5%',
            animation: 'float 15s ease-in-out infinite 3s',
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-24 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 mb-6 border border-yellow-500/30 relative">
            <div className="absolute inset-0 rounded-full bg-yellow-500/20 animate-ping" style={{ animationDuration: '3s' }} />
            <Shield className="w-10 h-10 text-yellow-500 relative z-10" />
          </div>
          <h1 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent">
            {data.title}
          </h1>
          <p className="text-gray-400">
            {data.lastUpdated}
          </p>
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-8">
          {Object.entries(data.sections).map(([key, section], index) => {
            const Icon = icons[index] || Shield;
            
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 hover:border-yellow-500/30 transition-all duration-300">
                  {/* Section Icon & Title */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 flex items-center justify-center border border-yellow-500/20 group-hover:border-yellow-500/40 transition-colors duration-300 group-hover:shadow-[0_0_20px_rgba(255,215,0,0.2)]">
                      <Icon className="w-6 h-6 text-yellow-500" />
                    </div>
                    <h2 className="text-2xl text-white pt-2">
                      {section.title}
                    </h2>
                  </div>

                  {/* Section Content */}
                  <div className="ml-16">
                    {Array.isArray(section.content) ? (
                      <ul className="space-y-4">
                        {section.content.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                            className="flex items-start gap-3 text-gray-300"
                          >
                            <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2.5 shadow-[0_0_8px_rgba(255,215,0,0.6)]" />
                            <span className="leading-relaxed">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-300 leading-relaxed">
                        {section.content}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-yellow-500/10 to-transparent rounded-xl blur-xl" />
          <div className="relative p-6 rounded-xl bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-sm border border-yellow-500/30">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center border border-yellow-500/30">
                <Lock className="w-5 h-5 text-yellow-500" />
              </div>
              <div>
                <h3 className="text-white mb-2">
                  {language === 'ru' && 'Ваша конфиденциальность важна для нас'}
                  {language === 'en' && 'Your Privacy Matters to Us'}
                  {language === 'az' && 'Məxfiliyiniz Bizim Üçün Vacibdir'}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {language === 'ru' && 'Мы постоянно работаем над улучшением защиты ваших данных и соблюдаем все международные стандарты безопасности. Если у вас есть вопросы или предложения, мы всегда готовы выслушать вас.'}
                  {language === 'en' && 'We are constantly working to improve the protection of your data and comply with all international security standards. If you have any questions or suggestions, we are always ready to listen.'}
                  {language === 'az' && 'Məlumatlarınızın qorunmasını təkmilləşdirmək üzrə daim işləyirik və bütün beynəlxalq təhlükəsizlik standartlarına riayət edirik. Suallarınız və ya təklifləriniz varsa, həmişə sizi dinləməyə hazırıq.'}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.2;
          }
          33% {
            transform: translate(30px, -30px) scale(1.05);
            opacity: 0.25;
          }
          66% {
            transform: translate(-20px, 20px) scale(0.95);
            opacity: 0.15;
          }
        }
      `}</style>
    </div>
  );
}
