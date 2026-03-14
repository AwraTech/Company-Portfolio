"use client";

import heroBg from "../assets/hero-bg.jpg";
import { useTheme } from '@/context/ThemeContext';

const HeroSection = () => {
  const { isDark } = useTheme();
  
  return (
    <section id="home" className={`relative min-h-screen flex items-start pb-32 pt-32 lg:items-center lg:pb-0 ${isDark ? 'bg-[#0f172a]' : 'bg-[#30504F]'}`}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg.src})` }}
      />
      <div className={`absolute inset-0 ${isDark ? 'bg-[#0f172a]/60' : 'bg-[#30504F]/60'}`}></div>
      <div className="container relative z-10 mt-0 lg:-mt-32">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#00FFAB]" />
            <span className="section-label">SINCE 2023</span>
          </div>
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl mb-6 font-bold">
            Engineering the{" "}
            <span className="text-[#00FFAB] italic">Next</span> Digital Era
          </h1>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8 max-w-lg">
            Bespoke software solutions crafted with precision. From concept to deployment, we scale your vision.
          </p>
          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-[#00FFAB] text-black font-semibold text-sm rounded-lg hover:bg-[#00e69a] transition-all"
            >
              View Work
            </a>
            <a
              href="/contact"
              className="px-6 py-3 border-2 border-white text-white font-semibold text-sm rounded-lg hover:border-[#00FFAB] hover:text-[#00FFAB] transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;