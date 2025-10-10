import { motion } from 'motion/react';
import { Scale, Building2, FileText, AlertCircle, Mail } from 'lucide-react';
import { policyData } from '../data/politic';
import type { Language } from '../App';

interface LegalNoticePageProps {
  language: Language;
}

export function LegalNoticePage({ language }: LegalNoticePageProps) {
  const data = policyData[language].legalNotice;

  const icons = [Scale, Building2, FileText, AlertCircle, Mail];

  return (
    <div className="relative min-h-screen overflow-hidden" style={{ backgroundColor: '#000000' }}>
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-[800px] h-[800px] rounded-full opacity-20 blur-[100px]"
          style={{
            background: 'radial-gradient(circle, #FFD700 0%, transparent 70%)',
            top: '10%',
            left: '10%',
            animation: 'pulse 8s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute w-[600px] h-[600px] rounded-full opacity-15 blur-[80px]"
          style={{
            background: 'radial-gradient(circle, #FFD700 0%, transparent 70%)',
            bottom: '20%',
            right: '10%',
            animation: 'pulse 10s ease-in-out infinite 2s',
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
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 mb-6 border border-yellow-500/30">
            <Scale className="w-10 h-10 text-yellow-500" />
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
            const Icon = icons[index] || FileText;
            
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
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 flex items-center justify-center border border-yellow-500/20 group-hover:border-yellow-500/40 transition-colors duration-300">
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
                            <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2.5" />
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

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 p-6 rounded-xl bg-gradient-to-r from-yellow-500/10 to-transparent border border-yellow-500/20"
        >
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-400 leading-relaxed">
              {language === 'ru' && 'Используя сервис Fast Charge, вы подтверждаете, что ознакомились и согласны с настоящим юридическим уведомлением. Если у вас есть вопросы, пожалуйста, свяжитесь с нами.'}
              {language === 'en' && 'By using the Fast Charge service, you confirm that you have read and agree to this legal notice. If you have any questions, please contact us.'}
              {language === 'az' && 'Fast Charge xidmətindən istifadə etməklə siz bu hüquqi bildirişi oxuduğunuzu və razılaşdığınızı təsdiq edirsiniz. Suallarınız varsa, bizimlə əlaqə saxlayın.'}
            </p>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
}
