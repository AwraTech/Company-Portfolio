'use client';

import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/context/ThemeContext';

export default function Chatbot() {
  const pathname = usePathname();
  const { isDark } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  if (pathname === '/contact' || pathname === '/news') return null;

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-4 sm:bottom-8 sm:right-8 z-50 group transition-all duration-300 drop-shadow-2xl cursor-pointer"
      >
        <div className="relative">
          <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-2xl group-hover:shadow-[#00FFAB]/30 transition-all duration-300 group-hover:scale-110 border-2 border-[#00FFAB] ${isDark ? 'bg-[#0f172a]' : 'bg-[#30504F]'}`}>
            <div className="w-full h-full rounded-full flex items-center justify-center">
              {isOpen ? (
                <IoClose size={28} className="text-white" />
              ) : (
                <div className="relative animate-bounce" style={{ animationDuration: '2s' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" className="text-white">
                    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3.04 1.05 4.35L2 22l5.65-1.05C9.96 21.64 11.46 22 13 22h7c1.1 0 2-.9 2-2V12c0-5.52-4.48-10-10-10z" />
                    <circle cx="8" cy="12" r="2" fill="#00FFAB" className="animate-pulse" />
                    <circle cx="12" cy="12" r="2" fill="#00FFAB" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
                    <circle cx="16" cy="12" r="2" fill="#00FFAB" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
                  </svg>
                  <div className={`absolute -top-1 -right-1 w-4 h-4 bg-[#00FFAB] rounded-full animate-ping border-2 ${isDark ? 'border-[#0f172a]' : 'border-white'}`} />
                </div>
              )}
            </div>
          </div>

          {/* Hover label */}
          <div className={`absolute right-full mr-3 top-1/2 -translate-y-1/2 px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-xl border-2 border-[#00FFAB] ${isDark ? 'bg-[#0f172a] text-[#00FFAB]' : 'bg-[#30504F] text-[#00FFAB]'}`}>
            💬 Chat with Awra AI
            <div className={`absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent ${isDark ? 'border-l-[#0f172a]' : 'border-l-[#30504F]'}`} />
          </div>
        </div>
      </button>

      {/* Coming Soon Panel */}
      {isOpen && (
        <div className={`fixed bottom-28 right-4 sm:bottom-28 sm:right-8 z-40 w-[calc(100vw-2rem)] sm:w-[340px] max-w-[340px] rounded-2xl shadow-2xl overflow-hidden border ${isDark ? 'bg-[#0A192F]/95 border-white/10' : 'bg-[#30504F]/95 border-[#00FFAB]/20'}`}>
          {/* Header */}
          <div className="bg-[#30504F] p-4 flex items-center justify-between border-b border-[#00FFAB]/20">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#00FFAB]/20 border-2 border-[#00FFAB] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="8" r="4" fill="#00FFAB" />
                  <rect x="8" y="14" width="8" height="8" rx="4" fill="#00FFAB" />
                  <circle cx="10" cy="7" r="1.2" fill="#30504F" />
                  <circle cx="14" cy="7" r="1.2" fill="#30504F" />
                </svg>
              </div>
              <div>
                <h3 className="text-[#00FFAB] font-bold text-sm">Awra AI</h3>
                <p className="text-[#00FFAB]/60 text-xs">Virtual Assistant</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-[#00FFAB] hover:text-white transition-colors p-1 rounded-full hover:bg-[#00FFAB]/10">
              <IoClose size={22} />
            </button>
          </div>

          {/* Body */}
          <div className="flex flex-col items-center justify-center py-10 px-6 text-center">
            {/* Animated robot */}
            <svg
              width="80" height="105" viewBox="0 0 120 160" fill="none"
              className="mb-5 animate-bounce"
              style={{ animationDuration: '2.5s' }}
            >
              <line x1="60" y1="10" x2="60" y2="28" stroke="#00FFAB" strokeWidth="3" strokeLinecap="round" />
              <circle cx="60" cy="8" r="5" fill="#00FFAB" className="animate-ping" />
              <rect x="30" y="28" width="60" height="50" rx="14" fill="#00FFAB" />
              <rect x="42" y="42" width="12" height="10" rx="4" fill="#0f172a" />
              <rect x="66" y="42" width="12" height="10" rx="4" fill="#0f172a" />
              <rect x="46" y="60" width="28" height="5" rx="2.5" fill="#0f172a" />
              <rect x="25" y="82" width="70" height="55" rx="16" fill="#00FFAB" opacity="0.85" />
              <circle cx="60" cy="108" r="8" fill="#0f172a" className="animate-pulse" />
              <rect x="4" y="86" width="18" height="38" rx="9" fill="#00FFAB" opacity="0.85" />
              <rect x="98" y="86" width="18" height="38" rx="9" fill="#00FFAB" opacity="0.85" />
              <rect x="36" y="136" width="18" height="22" rx="9" fill="#00FFAB" opacity="0.7" />
              <rect x="66" y="136" width="18" height="22" rx="9" fill="#00FFAB" opacity="0.7" />
            </svg>

            <h3 className="text-white font-bold text-xl mb-2">
              Coming <span className="text-[#00FFAB]">Soon!</span>
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Awra AI is being trained and will be ready to assist you shortly. Stay tuned!
            </p>

            <div className="flex gap-2 mt-5">
              {[0, 1, 2].map(i => (
                <span
                  key={i}
                  className="w-2.5 h-2.5 rounded-full bg-[#00FFAB] animate-bounce"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
