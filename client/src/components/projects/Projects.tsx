"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { useTheme } from '@/context/ThemeContext';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Projects() {
	const { isDark } = useTheme();
	const featuredProjects = projects.slice(0, 3);

	return (
		<section id="projects" className={`py-16 px-4 ${isDark ? 'bg-[#0f172a]' : 'bg-[#30504F]'}`}>
			<div className="max-w-7xl mx-auto">
				<p className="text-[#00FFAB] text-sm font-medium mb-2 text-center tracking-widest uppercase">
					03. PROJECTS
				</p>
				<motion.h2
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
					className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-white"
				>
					Featured Projects
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{
						duration: 0.7,
						delay: 0.15,
						ease: [0.25, 0.4, 0.25, 1],
					}}
					className="text-white/80 text-center mb-12 max-w-2xl mx-auto text-sm md:text-base"
				>
					A selection of our best work — web apps, mobile apps, and software solutions built for real clients with real impact.
				</motion.p>

				{/* 3 Featured Projects Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
					{featuredProjects.map((project, index) => (
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
				</div>

				{/* Clean More Projects Button */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 0.5, delay: 0.15 }}
					className="mt-12 flex justify-center items-center"
				>
					<Link
						href="/projects"
						className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#00FFAB] text-[#0f172a] font-semibold text-sm sm:text-base hover:bg-[#00e69a] transition-all duration-200"
					>
						<span>More Projects</span>
						<ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
					</Link>
				</motion.div>
			</div>
		</section>
	);
}
