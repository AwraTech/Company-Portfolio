'use client';

import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";

import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Services from "@/components/services/Services";
import Projects from "@/components/projects/Projects";
import Testimonials from "@/components/testimonials/Testimonials";
import { useTheme } from '@/context/ThemeContext';

const teamMembers = [
	{
		name: "Elyas Yenealem",
		role: "Full Stack Developer",
		image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
		linkedin: "https://www.linkedin.com/in/elyasyenealem?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
		github: "https://github.com/dopi95",
		portfolio: "https://elyasyenealem.netlify.app",
	},
	{
		name: "Tenbite Daniel",
		role: "Full Stack Developer",
		image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=400&fit=crop",
		linkedin: "https://www.linkedin.com/in/tenbite-daniel?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
		github: "https://github.com/tenbite-daniel",
		portfolio: "https://tenbitedaniel.vercel.app/",
	},
	{
		name: "Dagim Sisay",
		role: "Full Stack Developer",
		image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop",
		linkedin: "https://www.linkedin.com/in/dagim-sisay-545a03323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
		github: "https://github.com/dagimsisay6",
		portfolio: "https://portfolio.com",
	},
	{
		name: "Bereket Eshete",
		role: "Backend & AI Developer",
		image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop",
		linkedin: "https://www.linkedin.com/in/bereket-eshete-7171a0323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
		github: "https://github.com/Bereket-Eshete",
		portfolio: "https://portfolio.com",
	},
	{
		name: "Samuel Eliyas",
		role: "Communications & Marketing Specialist",
		image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop",
		linkedin: "https://www.linkedin.com/in/samuel-eliyas-030762323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
		github: "https://github.com/Samieliyas",
		portfolio: "https://portfolio.com",
	},
	{
		name: "Yonas Nibret",
		role: "UI/UX Designer & Video Editor",
		image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=400&fit=crop",
		linkedin: "https://linkedin.com",
		github: "https://github.com/Yonas20022",
		portfolio: "https://portfolio.com",
	},
];

export default function Home() {
	const { isDark } = useTheme();
	
	return (
		<main className="pt-20 min-h-screen">
			<HeroSection />
			<AboutSection />
			<Services />
			<Projects />
			<section id="team" className={`py-20 px-6 ${isDark ? 'bg-[#0f172a]' : 'bg-[#30504F]'}`}>
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<p className="text-[#00FFAB] text-sm font-medium mb-2">
							04. THE TEAM
						</p>
						<h2 className="text-4xl md:text-5xl font-light text-white">
							Expert Minds Behind the Tech
						</h2>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-8 md:px-0">
						{teamMembers.map((member, index) => (
							<div key={index} className="group text-center">
								<div className="relative overflow-hidden mb-4 rounded-lg">
									<Image
										src={member.image}
										alt={member.name}
										width={280}
										height={320}
										className="w-full h-[240px] object-cover transition-transform duration-300 group-hover:scale-105 rounded-lg"
									/>
								</div>
								<h3 className="text-white text-xl font-light mb-1">{member.name}</h3>
								<p className="text-[#00FFAB] text-sm mb-3">{member.role}</p>
								<div className="flex gap-3 justify-center">
									<a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#0077B5] hover:text-[#00FFAB] transition-colors">
										<FaLinkedin size={24} />
									</a>
									<a href={member.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#00FFAB] transition-colors">
										<FaGithub size={24} />
									</a>
									<a href={member.portfolio} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#00FFAB] transition-colors">
										<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
											<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
										</svg>
									</a>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			<Testimonials />
		</main>
	);
}
