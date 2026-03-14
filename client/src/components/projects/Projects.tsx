"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { useTheme } from '@/context/ThemeContext';

export default function Projects() {
	const { isDark } = useTheme();
	
	return (
		<section id="projects" className={`py-16 px-4 ${isDark ? 'bg-[#0f172a]' : 'bg-[#30504F]'}`}>
			<div className="max-w-7xl mx-auto">
				<p className="text-[#00FFAB] text-sm font-medium mb-2 text-center">
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
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{projects.map((project, index) => (
						<ProjectCard
							key={index}
							image={project.image}
							title={project.title}
							description={project.description}
							techStack={project.techStack}
							liveLink={project.liveLink}
							index={index}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
