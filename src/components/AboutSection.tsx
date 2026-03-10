"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useTheme } from '@/context/ThemeContext';

const timeline = [
  {
    year: "2022",
    title: "Founded",
    desc: "AwraTech was born from a passion for building exceptional web experiences.",
  },
  {
    year: "2023",
    title: "First Major Project",
    desc: "Delivered a full-stack SaaS platform serving thousands of users.",
  },
  {
    year: "2024",
    title: "Team Growth",
    desc: "Expanded to a team of skilled developers, designers, and strategists.",
  },
  {
    year: "2025",
    title: "Going Global",
    desc: "Partnering with clients worldwide to build the future of the web.",
  },
];

const stats = [
  { num: "50+", label: "Projects Delivered" },
  { num: "30+", label: "Happy Clients" },
  { num: "3+", label: "Years Experience" },
  { num: "99%", label: "Client Satisfaction" },
];

const reasons = [
  "High-quality engineering",
  "Modern scalable tech stack",
  "Client-focused workflow",
  "Transparent communication",
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const AboutSection = () => {
  const { isDark } = useTheme();
  
  return (
    <section id="about" className={`py-24 md:py-32 -mt-1 ${isDark ? 'bg-[#0f172a]' : 'bg-[#30504F]'}`}>
      <div className="container mx-auto px-4 md:px-8">

        {/* ABOUT US INTRO */}
        <div className="text-center mb-16">
          <p className="text-[#00FFAB] text-sm font-medium mb-2">01. ABOUT US</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            We build technology<br />for the future.
          </h2>
          <p className="text-white/80 text-sm md:text-base lg:text-lg max-w-3xl mx-auto mb-12 leading-relaxed px-4">
            Awra Tech is a collaborative hub of engineers, designers, and strategists dedicated to pushing the boundaries of what's possible in the digital landscape.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-lg p-5 text-center">
              <div className="w-10 h-10 bg-[#00FFAB]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-[#00FFAB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-[#00FFAB] text-lg font-semibold mb-2">Our Mission</h3>
              <p className="text-white/70 text-sm">To democratize high-end tech solutions for businesses of all sizes through iterative innovation.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-5 text-center">
              <div className="w-10 h-10 bg-[#00FFAB]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-[#00FFAB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-[#00FFAB] text-lg font-semibold mb-2">Our Vision</h3>
              <p className="text-white/70 text-sm">Becoming the global benchmark for reliability and creativity in enterprise software development.</p>
            </div>
          </div>
        </div>

        {/* WHY AWRA SECTION */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <SectionHeading
              label="Why Awra"
              title="Built Different, By Design"
              description="We don't just build products — we craft experiences that leave lasting impressions."
              align="left"
            />

            <div className="grid sm:grid-cols-2 gap-4">
              {reasons.map((reason, i) => (
                <motion.div
                  key={reason}
                  {...fadeUp}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle
                    size={18}
                    className="text-[#00FFAB] flex-shrink-0"
                  />
                  <span className="text-sm text-foreground">
                    {reason}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* STATS */}
          <motion.div {...fadeUp} className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-center transition-all "
              >
                <div className="text-3xl font-display font-bold text-[#00FFAB]">
                  {stat.num}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* TIMELINE */}
        <div className="relative max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white text-center mb-12">Our Journey</h3>
          
          <div className="space-y-10">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative pl-20"
              >
                {/* Connecting line and dot */}
                {i < timeline.length - 1 && (
                  <div className="absolute left-14 top-8 w-0.5 h-full bg-[#00FFAB]/30" />
                )}
                <div className="absolute left-12 top-2 w-2 h-2 rounded-full bg-[#00FFAB]" />
                
                {/* Year */}
                <div className="absolute left-0">
                  <span className="text-[#00FFAB] font-bold text-lg">{item.year}</span>
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;