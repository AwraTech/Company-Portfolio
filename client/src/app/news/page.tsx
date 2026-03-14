'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

export default function NewsPage() {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen flex items-center justify-center px-4 ${isDark ? 'bg-[#0f172a]' : 'bg-[#30504F]'}`}>
      <div className="text-center">

        {/* Animated robot/person */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <svg width="120" height="160" viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Antenna */}
            <motion.line
              x1="60" y1="10" x2="60" y2="28"
              stroke="#00FFAB" strokeWidth="3" strokeLinecap="round"
              animate={{ scaleY: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
            <motion.circle
              cx="60" cy="8" r="5" fill="#00FFAB"
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />

            {/* Head */}
            <motion.rect
              x="30" y="28" width="60" height="50" rx="14"
              fill="#00FFAB"
              animate={{ y: [28, 24, 28] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
            />

            {/* Eyes */}
            <motion.rect x="42" y="42" width="12" height="10" rx="4" fill="#0f172a"
              animate={{ scaleY: [1, 0.1, 1] }}
              transition={{ repeat: Infinity, duration: 3, delay: 1 }}
            />
            <motion.rect x="66" y="42" width="12" height="10" rx="4" fill="#0f172a"
              animate={{ scaleY: [1, 0.1, 1] }}
              transition={{ repeat: Infinity, duration: 3, delay: 1 }}
            />

            {/* Mouth */}
            <rect x="46" y="60" width="28" height="5" rx="2.5" fill="#0f172a" />

            {/* Body */}
            <motion.rect
              x="25" y="82" width="70" height="55" rx="16"
              fill="#00FFAB" opacity="0.85"
              animate={{ y: [82, 78, 82] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
            />

            {/* Chest light */}
            <motion.circle
              cx="60" cy="108" r="8" fill="#0f172a"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
            />

            {/* Arms */}
            <motion.rect
              x="4" y="86" width="18" height="38" rx="9"
              fill="#00FFAB" opacity="0.85"
              animate={{ rotate: [-10, 10, -10], originX: '50%', originY: '0%' }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            />
            <motion.rect
              x="98" y="86" width="18" height="38" rx="9"
              fill="#00FFAB" opacity="0.85"
              animate={{ rotate: [10, -10, 10], originX: '50%', originY: '0%' }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            />

            {/* Legs */}
            <rect x="36" y="136" width="18" height="22" rx="9" fill="#00FFAB" opacity="0.7" />
            <rect x="66" y="136" width="18" height="22" rx="9" fill="#00FFAB" opacity="0.7" />
          </svg>
        </motion.div>

        {/* Coming Soon text */}
        <motion.p
          className="text-[#00FFAB] text-sm font-medium mb-3 tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          News & Blog
        </motion.p>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Coming{' '}
          <motion.span
            className="text-[#00FFAB]"
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            Soon!
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-white/60 text-base sm:text-lg max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          We are working on something great. Our blog and news section will be live shortly. Stay tuned!
        </motion.p>

        {/* Animated dots */}
        <motion.div
          className="flex justify-center gap-2 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full bg-[#00FFAB]"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
              transition={{ repeat: Infinity, duration: 1.2, delay: i * 0.2 }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
