'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, QrCode } from 'lucide-react';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  techStack: string[];
  liveLink?: string;
  qrImage?: string;
  menuLink?: string;
  index: number;
}

export default function ProjectCard({ image, title, description, techStack, liveLink, qrImage, menuLink, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.4, 0.25, 1] }}
      className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-[#00FFAB]/50 hover:bg-white/10 transition-all group flex flex-col h-full"
    >
      {qrImage ? (
        <div className="relative h-64 flex items-end justify-center flex-shrink-0 overflow-hidden">
          {/* Background restaurant image — fully visible, no crop */}
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain opacity-25 transition-transform duration-700 group-hover:scale-105"
          />
          {/* Dark atmospheric overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

          {/* Ambient light glow from candle/lamp */}
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-amber-400/10 blur-2xl"
          />

          {/* TABLE SCENE */}
          <div className="relative z-10 w-full flex flex-col items-center pb-3">

            {/* QR Stand — card holder */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 + 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              className="flex flex-col items-center"
            >
              {/* The card itself */}
              <div className="relative bg-gradient-to-b from-[#fefce8] to-[#fef9c3] rounded-t-xl rounded-b-sm shadow-2xl border border-amber-200/60 px-3 pt-3 pb-2 flex flex-col items-center gap-1.5 w-[110px]">
                {/* Top logo strip */}
                <div className="w-full flex items-center justify-center gap-1 mb-0.5">
                  <div className="h-[1px] flex-1 bg-amber-400/50" />
                  <span className="text-[7px] font-black tracking-[0.2em] text-amber-700 uppercase">The URB</span>
                  <div className="h-[1px] flex-1 bg-amber-400/50" />
                </div>

                {/* Real QR code */}
                <div className="bg-white rounded-md p-1 shadow-inner border border-amber-100">
                  <Image
                    src={qrImage}
                    alt="Scan QR to view menu"
                    width={76}
                    height={76}
                    className="rounded block"
                  />
                </div>

                {/* Scan label */}
                <p className="text-[7.5px] font-bold tracking-[0.15em] text-amber-700 uppercase text-center leading-tight">
                  Scan to View Menu
                </p>

                {/* Bottom decorative line */}
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
              </div>

              {/* Metal stand pole */}
              <div className="w-[3px] h-5 bg-gradient-to-b from-zinc-400 to-zinc-600 shadow-sm" />

              {/* Stand base */}
              <div className="w-10 h-[5px] rounded-full bg-gradient-to-r from-zinc-500 via-zinc-300 to-zinc-500 shadow-md" />
            </motion.div>

            {/* Table surface */}
            <div className="relative w-full mt-1">
              {/* Table top edge highlight */}
              <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-amber-900/60 to-transparent" />
              {/* Table surface */}
              <div className="w-full h-4 bg-gradient-to-b from-[#3b1f0a]/80 to-[#2a1506]/90" />
            </div>
          </div>

          {/* Scan pulse animation around QR */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-[68px] left-1/2 -translate-x-1/2 w-[110px] h-[130px] rounded-xl border border-amber-400/50 pointer-events-none"
          />
        </div>
      ) : (
        <div className="relative h-64 overflow-hidden flex-shrink-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-white/70 text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4 flex-1 content-start">
          {techStack.map((tech, i) => (
            <span key={i} className="px-3 py-1 bg-[#00FFAB]/10 text-[#00FFAB] text-xs rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-4">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#00FFAB] hover:text-[#00e69a] font-medium transition-colors text-sm"
            >
              View Project <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {menuLink && (
            <a
              href={menuLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#d4a843] hover:text-[#f0c060] font-medium transition-colors text-sm"
            >
              Live Menu <QrCode className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
