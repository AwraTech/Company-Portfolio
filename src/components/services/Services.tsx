'use client';

import { motion } from 'framer-motion';
import { services } from '@/data/services';
import ServiceCard from './ServiceCard';
import { useTheme } from '@/context/ThemeContext';

export default function Services() {
  const { isDark } = useTheme();
  
  return (
    <section id="services" className={`py-16 px-4 ${isDark ? 'bg-[#0f172a]' : 'bg-[#30504F]'}`}>
      <div className="max-w-7xl mx-auto">
        <p className="text-[#00FFAB] text-sm font-medium mb-2 text-center">02. SERVICES</p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-white"
        >
          Our Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-white/80 text-center mb-12 max-w-2xl mx-auto text-sm md:text-base"
        >
          We offer comprehensive solutions to help your business thrive in the digital world
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
