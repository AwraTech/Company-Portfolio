'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/projects/ProjectCard';
import { useTheme } from '@/context/ThemeContext';
import { Search, Sparkles, ArrowRight, Layers } from 'lucide-react';
import Link from 'next/link';

const CATEGORIES = [
  { label: 'All', value: 'all' },
  { label: 'Real Estate', value: 'real estate' },
  { label: 'Healthcare & Clinic', value: 'healthcare' },
  { label: 'Education & SMS', value: 'education' },
  { label: 'Restaurants & QR', value: 'restaurant' },
  { label: 'Creative & Agency', value: 'creative' },
];

export default function ProjectsPage() {
  const { isDark } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Search match
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.techStack.some((tech) => tech.toLowerCase().includes(query));

      // Category match
      if (!matchesSearch) return false;
      if (selectedCategory === 'all') return true;

      const titleAndDesc = (project.title + ' ' + project.description).toLowerCase();
      if (selectedCategory === 'real estate') {
        return titleAndDesc.includes('real estate') || titleAndDesc.includes('properties');
      }
      if (selectedCategory === 'healthcare') {
        return titleAndDesc.includes('pediatric') || titleAndDesc.includes('clinic') || titleAndDesc.includes('healthcare');
      }
      if (selectedCategory === 'education') {
        return titleAndDesc.includes('school') || titleAndDesc.includes('academy') || titleAndDesc.includes('sms');
      }
      if (selectedCategory === 'restaurant') {
        return titleAndDesc.includes('restaurant') || titleAndDesc.includes('menu') || titleAndDesc.includes('urb');
      }
      if (selectedCategory === 'creative') {
        return titleAndDesc.includes('creative') || titleAndDesc.includes('studio') || titleAndDesc.includes('agency');
      }

      return true;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className={`min-h-screen pt-24 pb-20 ${isDark ? 'bg-[#0f172a]' : 'bg-[#30504F]'}`}>
      {/* Top Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00FFAB]/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00FFAB]/10 border border-[#00FFAB]/30 text-[#00FFAB] text-xs font-semibold tracking-widest uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>03. Portfolio & Showcase</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Crafted with Precision. <br className="hidden sm:inline" />
            <span className="text-[#00FFAB]">Engineered for Impact.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Explore our end-to-end web applications, enterprise platforms, CRM ecosystems, and digital solutions built for forward-thinking businesses.
          </motion.p>

          {/* Search Bar & Filter Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl mx-auto mb-8"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects by name, technology (e.g., Next.js, AI, CRM)..."
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#00FFAB] focus:bg-white/10 transition-all text-sm backdrop-blur-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-xs px-2 py-1 rounded bg-white/10"
                >
                  Clear
                </button>
              )}
            </div>
          </motion.div>

          {/* Category Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto"
          >
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                    active
                      ? 'bg-[#00FFAB] text-[#0f172a] shadow-lg shadow-[#00FFAB]/20 font-semibold'
                      : 'bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 hover:text-white hover:border-[#00FFAB]/40'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="px-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2 text-white/70 text-sm">
            <Layers className="w-4 h-4 text-[#00FFAB]" />
            <span>
              Showing <strong className="text-white">{filteredProjects.length}</strong> of{' '}
              <strong className="text-white">{projects.length}</strong> projects
            </span>
          </div>

          {(selectedCategory !== 'all' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="text-xs text-[#00FFAB] hover:underline cursor-pointer"
            >
              Reset filters
            </button>
          )}
        </div>

        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 bg-white/5 border border-white/10 rounded-2xl p-8">
            <p className="text-white text-lg font-medium mb-2">No projects matched your search.</p>
            <p className="text-white/60 text-sm mb-6">Try searching with a different term or reset your filters.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 rounded-lg bg-[#00FFAB] text-[#0f172a] font-semibold text-sm hover:bg-[#00e69a] transition"
            >
              View All Projects
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  techStack={project.techStack}
                  liveLink={project.liveLink}
                  qrImage={project.qrImage}
                  menuLink={project.menuLink}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </div>
        )}
      </section>

      {/* Bottom CTA Section */}
      <section className="mt-24 px-4 max-w-5xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden p-8 sm:p-12 text-center bg-gradient-to-r from-white/5 via-white/10 to-white/5 border border-[#00FFAB]/30 shadow-[0_0_50px_rgba(0,255,171,0.06)]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00FFAB]/10 rounded-full blur-3xl pointer-events-none" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Have a project in mind?
          </h2>
          <p className="text-white/70 max-w-xl mx-auto text-sm sm:text-base mb-8">
            Whether you need a custom web application, enterprise software, or digital transformation, our team is ready to bring your vision into reality.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#00FFAB] text-[#0f172a] font-bold text-sm hover:bg-[#00e69a] transition-all hover:scale-105 shadow-lg shadow-[#00FFAB]/20"
            >
              Start Your Project <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+251978210810"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 border border-white/20 text-white font-medium text-sm hover:bg-white/10 transition"
            >
              Call +251 978 210 810
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

