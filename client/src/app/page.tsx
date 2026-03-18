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
		title: "Founder",
		role: "Full Stack Developer",
		image: "/images/ela.png",
		linkedin: "https://www.linkedin.com/in/elyasyenealem?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
		github: "https://github.com/dopi95",
		portfolio: "https://elyasyenealem.netlify.app",
	},
	{
		name: "Tenbite Daniel",
		title: "Founder",
		role: "Full Stack Developer",
		image: "/images/tim.png",
		linkedin: "https://www.linkedin.com/in/tenbite-daniel?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
		github: "https://github.com/tenbite-daniel",
		portfolio: "https://tenbitedaniel.vercel.app/",
	},
	{
		name: "Dagim Sisay",
		title: "Co-Founder",
		role: "Full Stack Developer",
		image: "/images/dagi.png",
		linkedin: "https://www.linkedin.com/in/dagim-sisay-545a03323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
		github: "https://github.com/dagimsisay6",
		portfolio: "https://portfolio.com",
	},
	{
		name: "Bereket Eshete",
		title: "Co-Founder",
		role: "Backend & AI Developer",
		image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop",
		linkedin: "https://www.linkedin.com/in/bereket-eshete-7171a0323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
		github: "https://github.com/Bereket-Eshete",
		portfolio: "https://portfolio.com",
	},
	{
		name: "Samuel Eliyas",
		title: "Co-Founder",
		role: "Communications & Marketing",
		image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop",
		linkedin: "https://www.linkedin.com/in/samuel-eliyas-030762323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
		github: "https://github.com/Samieliyas",
		portfolio: "https://portfolio.com",
	},
	{
		name: "Yonas Nibret",
		title: "Co-Founder",
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
						<p className="text-[#00FFAB] text-sm font-medium mb-2 tracking-widest uppercase">04. The Team</p>
						<h2 className="text-4xl md:text-5xl font-bold text-white">
							Expert Minds Behind the Tech
						</h2>
						<p className="text-white/60 mt-4 max-w-xl mx-auto text-sm">The people who design, build, and grow Awra Tech every day.</p>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
						{teamMembers.map((member, index) => (
							<div key={index} className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#00FFAB]/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,171,0.07)]">
								{/* Image */}
								<div className="relative w-full overflow-hidden bg-black/20" style={{ aspectRatio: '3/4' }}>
									<Image
										src={member.image}
										alt={member.name}
										fill
										sizes="(max-width: 768px) 100vw, 400px"
										quality={100}
										className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
									/>
									{/* Gradient overlay */}
									<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
								</div>

								{/* Info */}
								<div className="p-5">
									<span className="inline-block px-3 py-0.5 bg-[#00FFAB]/10 text-[#00FFAB] text-xs font-semibold rounded-full mb-2 tracking-wide uppercase">
										{member.title}
									</span>
									<h3 className="text-white text-lg font-semibold leading-tight">{member.name}</h3>
									<p className="text-[#00FFAB]/80 text-sm mt-1 mb-4 font-medium">{member.role}</p>

									<div className="flex gap-4 border-t border-white/10 pt-4">
										<a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#0077B5] hover:text-[#005f8e] hover:scale-110 transition-all duration-200">
											<FaLinkedin size={26} />
										</a>
										<a href={member.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/70 hover:scale-110 transition-all duration-200">
											<FaGithub size={26} />
										</a>
										<a href={member.portfolio} target="_blank" rel="noopener noreferrer" className="text-[#00FFAB] hover:text-[#00e69a] hover:scale-110 transition-all duration-200">
											<svg className="w-[26px] h-[26px]" fill="currentColor" viewBox="0 0 24 24">
												<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
											</svg>
										</a>
									</div>
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
