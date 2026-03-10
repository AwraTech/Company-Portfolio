'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  techStack: string[];
  liveLink: string;
  index: number;
}

export default function ProjectCard({ image, title, description, techStack, liveLink, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-[#00FFAB]/50 hover:bg-white/10 transition-all group"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-white/70 text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, index) => (
            <span key={index} className="px-3 py-1 bg-[#00FFAB]/10 text-[#00FFAB] text-xs rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#00FFAB] hover:text-[#00e69a] font-medium transition-colors text-sm"
        >
          View Project <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
}
