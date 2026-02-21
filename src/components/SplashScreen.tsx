import { motion, AnimatePresence } from 'framer-motion';

interface SplashScreenProps {
  isVisible: boolean;
}

export default function SplashScreen({ isVisible }: SplashScreenProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Ambient glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
          </div>

          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.2, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Glow ring */}
            <motion.div
              className="absolute -inset-6 bg-gradient-to-br from-primary/40 to-accent/40 rounded-full blur-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.6] }}
              transition={{ duration: 1.2, times: [0, 0.5, 1] }}
            />

            {/* Logo circle */}
            <motion.div 
              className="relative w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent/50 p-1 shadow-2xl shadow-primary/30"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <motion.span 
                  className="text-4xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent select-none"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  RP
                </motion.span>
              </div>
            </motion.div>
          </motion.div>

          {/* Loading bar */}
          <motion.div
            className="absolute bottom-20 left-1/2 -translate-x-1/2 w-48 h-1 bg-border rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
