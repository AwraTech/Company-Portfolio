'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface TestimonialCardProps {
  picture?: string;
  name: string;
  company: string;
  text: string;
  index?: number;
}

export default function TestimonialCard({ picture, name, company, text, index = 0 }: TestimonialCardProps) {
  const getInitials = (name: string) =>
    name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4 hover:border-[#00FFAB]/40 hover:bg-white/8 transition-all duration-300 hover:shadow-[0_0_24px_rgba(0,255,171,0.08)] h-full"
    >
      {/* Quote icon */}
      <div className="text-[#00FFAB]/20 text-6xl font-serif leading-none select-none absolute top-4 right-5">"</div>

      {/* Stars */}
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4 text-[#00FFAB]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Text */}
      <p className="text-white/75 text-sm leading-relaxed flex-grow">"{text}"</p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-white/10">
        {picture ? (
          <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-[#00FFAB]/30 flex-shrink-0">
            <Image src={picture} alt={name} fill className="object-cover" />
          </div>
        ) : (
          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#00FFAB] to-[#00c98a] flex items-center justify-center text-black text-sm font-bold flex-shrink-0">
            {getInitials(name)}
          </div>
        )}
        <div className="min-w-0">
          <p className="font-semibold text-white text-sm leading-tight">{name}</p>
          <p className="text-[#00FFAB] text-xs leading-tight mt-0.5 truncate">{company}</p>
        </div>
      </div>
    </motion.div>
  );
}
