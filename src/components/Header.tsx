'use client';

import { useState } from 'react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggle } = useTheme();

  return (
    <header className={`fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/10 ${isDark ? 'bg-[#0f172a]/80' : 'bg-[#30504F]/80'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <a href="/">
              <Image src="/assets/logo.png" alt="Awra Tech" width={120} height={120} className="object-contain cursor-pointer" />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <a href="/#home" className="text-white hover:text-[#00FFAB] transition">Home</a>
            <a href="/#about" className="text-white hover:text-[#00FFAB] transition">About</a>
            <a href="/#services" className="text-white hover:text-[#00FFAB] transition">Services</a>
            <a href="/#team" className="text-white hover:text-[#00FFAB] transition">Meet Team</a>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button onClick={toggle} className="text-white hover:text-[#00FFAB] transition-all p-2 hover:scale-110 cursor-pointer">
              {isDark ? <MdLightMode size={24} /> : <MdDarkMode size={24} />}
            </button>
            <a href="/news" className="text-[#00FFAB] font-bold text-lg hover:scale-110 transition-transform duration-300">News / Blog</a>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggle} className="text-white hover:text-[#00FFAB] transition-all p-2 cursor-pointer">
              {isDark ? <MdLightMode size={24} /> : <MdDarkMode size={24} />}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="relative w-10 h-10 flex items-center justify-center group">
              <div className="relative w-6 h-5 flex flex-col justify-between">
                <span className={`block h-0.5 bg-[#00FFAB] rounded-full transition-all duration-300 origin-left ${isMenuOpen ? 'rotate-45 w-7' : 'w-6'}`}></span>
                <span className={`block h-0.5 bg-[#00FFAB] rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-0' : 'w-5 opacity-100 scale-100'}`}></span>
                <span className={`block h-0.5 bg-[#00FFAB] rounded-full transition-all duration-300 origin-left ${isMenuOpen ? '-rotate-45 w-7' : 'w-6'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-slideDown border-t border-white/10 mt-2 pt-4">
            <a href="/#home" className="block py-3 px-4 text-white hover:text-[#00FFAB] hover:bg-white/5 rounded-lg transition-all transform hover:translate-x-2">Home</a>
            <a href="/#about" className="block py-3 px-4 text-white hover:text-[#00FFAB] hover:bg-white/5 rounded-lg transition-all transform hover:translate-x-2">About</a>
            <a href="/#services" className="block py-3 px-4 text-white hover:text-[#00FFAB] hover:bg-white/5 rounded-lg transition-all transform hover:translate-x-2">Services</a>
            <a href="/#team" className="block py-3 px-4 text-white hover:text-[#00FFAB] hover:bg-white/5 rounded-lg transition-all transform hover:translate-x-2">Meet Team</a>
            <a href="/news" className="block py-3 px-4 text-[#00FFAB] font-bold text-lg hover:bg-white/5 rounded-lg transition-all transform hover:translate-x-2 hover:scale-105">News / Blog</a>
          </div>
        )}
      </nav>
    </header>
  );
}
