import { motion } from 'motion/react';
import { Apple, Smartphone } from 'lucide-react';

export function HowToUseQRPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl mb-6 bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
              How to Use QR Fast Charge
            </h1>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Download our app to start charging your devices on the go
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              {/* App Store Button */}
              <motion.a
                href="https://apps.apple.com/az/app/fast-charge-power-on-the-go/id6749755045"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="relative group w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-yellow-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 group-hover:border-yellow-500/50 rounded-2xl p-6 transition-all flex items-center gap-4 min-w-[280px]">
                  <div className="w-14 h-14 bg-yellow-500/20 rounded-xl flex items-center justify-center group-hover:bg-yellow-500/30 transition-colors">
                    <Apple className="w-8 h-8 text-yellow-500" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-gray-400">Download on the</div>
                    <div className="text-xl text-white">App Store</div>
                  </div>
                </div>
              </motion.a>

              {/* Google Play Button */}
              <motion.a
                href="https://play.google.com/store/apps/details?id=az.fastcharge"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="relative group w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-yellow-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 group-hover:border-yellow-500/50 rounded-2xl p-6 transition-all flex items-center gap-4 min-w-[280px]">
                  <div className="w-14 h-14 bg-yellow-500/20 rounded-xl flex items-center justify-center group-hover:bg-yellow-500/30 transition-colors">
                    <Smartphone className="w-8 h-8 text-yellow-500" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-gray-400">Get it on</div>
                    <div className="text-xl text-white">Google Play</div>
                  </div>
                </div>
              </motion.a>
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 p-6 bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800 rounded-2xl"
            >
              <p className="text-gray-400">
                Scan the QR code with your phone camera or click the buttons above to download Fast Charge app
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
