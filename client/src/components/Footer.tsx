'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';

export default function Footer() {
  const { isDark } = useTheme();
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setEmail('');
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <footer className={`text-white py-12 pb-24 sm:pb-12 border-t border-white/10 ${isDark ? 'bg-[#0f172a]' : 'bg-[#30504F]'}`}>
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
            <p className="text-white/70 text-base mb-4">
              A boutique digital agency specializing in high-performance web applications and enterprise cloud infrastructure.
            </p>
            <ul className="space-y-2 text-sm text-white/70 mb-4">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-[#00FFAB] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <div>
                  <span className="text-white/50 text-xs block mb-1">Email:</span>
                  <a href="mailto:contact@awratech.com" className="block hover:text-[#00FFAB] transition">contact@awratech.com</a>
                  <a href="mailto:support@awratech.com" className="block hover:text-[#00FFAB] transition">support@awratech.com</a>
                  <a href="mailto:info@awratech.com" className="block hover:text-[#00FFAB] transition">info@awratech.com</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-[#00FFAB] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <div>
                  <span className="text-white/50 text-xs block mb-1">Phone:</span>
                  <a href="tel:+251978210810" className="block hover:text-[#00FFAB] transition">+251 978 210 810</a>
                  <a href="tel:+251967606906" className="block hover:text-[#00FFAB] transition">+251 967 606 906</a>
                </div>
              </li>
            </ul>
            <div>
              <span className="text-white/50 text-xs block mb-2">Follow Us:</span>
              <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/awratech" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#0077B5] transition-all hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://github.com/AwraTech" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#00FFAB] transition-all hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://youtube.com/@awratech" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FF0000] transition-all hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
              </a>
              <a href="https://tiktok.com/@awra.tech" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#00FFAB] transition-all hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/></svg>
              </a>
              <a href="https://www.instagram.com/awratech" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#E4405F] transition-all hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
            </div>
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
              <li><a href="/#about" className="hover:text-[#00FFAB] transition">About</a></li>
              <li><a href="/#services" className="hover:text-[#00FFAB] transition">Services</a></li>
              <li><a href="/#projects" className="hover:text-[#00FFAB] transition">Projects</a></li>
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
