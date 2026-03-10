'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export default function ServiceCard({ icon: Icon, title, description, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      className="p-6 bg-white/5 border border-white/10 rounded-lg hover:border-[#00FFAB]/50 hover:bg-white/10 transition-all group"
    >
      <div className="w-12 h-12 bg-[#00FFAB]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#00FFAB]/20 transition-all">
        <Icon className="w-6 h-6 text-[#00FFAB]" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-white/70 text-sm">{description}</p>
    </motion.div>
  );
}
