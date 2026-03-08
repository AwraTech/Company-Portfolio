'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const checkDarkMode = savedTheme === 'dark';
    setIsDark(checkDarkMode);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setEmail('');
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <footer className={`text-white py-12 pb-24 sm:pb-12 border-t border-white/10 ${isDark ? 'bg-[#0A192F]' : 'bg-[#30504F]'}`}>
      {/* Success Alert */}
      {showSuccess && (
        <div className="fixed top-24 right-4 z-50 bg-[#00FFAB] text-black px-6 py-4 rounded-lg shadow-2xl animate-slideDown flex items-center gap-3">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="font-semibold">Subscribed successfully!</span>
        </div>
      )}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/assets/logo.png" alt="Awra Tech" width={50} height={50} className="object-contain" />
              <h3 className="text-2xl font-bold">Awra Tech</h3>
            </div>
            <p className="text-white/70 text-base">
              A boutique digital agency specializing in high-performance web applications and enterprise cloud infrastructure.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-base">SERVICES</h4>
            <ul className="space-y-2 text-base text-white/70">
              <li><a href="#" className="hover:text-[#00FFAB] transition">Application Development</a></li>
              <li><a href="#" className="hover:text-[#00FFAB] transition">Web Development</a></li>
              <li><a href="#" className="hover:text-[#00FFAB] transition">Software Development</a></li>
              <li><a href="#" className="hover:text-[#00FFAB] transition">Social Media Management</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-base">COMPANY</h4>
            <ul className="space-y-2 text-base text-white/70">
              <li><a href="#about" className="hover:text-[#00FFAB] transition">About</a></li>
              <li><a href="#services" className="hover:text-[#00FFAB] transition">Services</a></li>
              <li><a href="#projects" className="hover:text-[#00FFAB] transition">Projects</a></li>
              <li><a href="/news" className="hover:text-[#00FFAB] transition">News</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mb-8 flex flex-col items-center text-center">
          <h4 className="font-semibold mb-4 text-base">Stay Updated</h4>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              required
              className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded text-white placeholder-white/50 focus:outline-none focus:border-[#00FFAB]"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-[#00FFAB] text-black font-semibold rounded hover:bg-[#00FFAB]/80 transition cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center text-base text-white/70">
          © 2026 Awra Tech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
