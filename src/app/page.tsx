import Image from 'next/image';
import { FaLinkedin, FaGithub, FaBriefcase } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Elyas Yenealem',
    role: 'Full Stack Developer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    portfolio: 'https://portfolio.com'
  },
  {
    name: 'Tenbite Daniel',
    role: 'Full Stack Developer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=400&fit=crop',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    portfolio: 'https://portfolio.com'
  },
  {
    name: 'Dagim Sisay',
    role: 'Full Stack Developer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    portfolio: 'https://portfolio.com'
  },
  {
    name: 'Bereket Eshete',
    role: 'Backend & AI Developer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    portfolio: 'https://portfolio.com'
  },
  {
    name: 'Samuel Eliyas',
    role: 'UI/UX Designer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    portfolio: 'https://portfolio.com'
  },
  {
    name: 'Yonas Nibret',
    role: 'Social Media Manager',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=400&fit=crop',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    portfolio: 'https://portfolio.com'
  }
];

export default function Home() {
  return (
    <main className="pt-20 min-h-screen">
      <section id="team" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#00FFAB] text-sm font-medium mb-2">04. THE TEAM</p>
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
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" 
                     className="text-gray-400 hover:text-[#00FFAB] transition-colors">
                    <FaLinkedin size={20} />
                  </a>
                  <a href={member.github} target="_blank" rel="noopener noreferrer"
                     className="text-gray-400 hover:text-[#00FFAB] transition-colors">
                    <FaGithub size={20} />
                  </a>
                  <a href={member.portfolio} target="_blank" rel="noopener noreferrer"
                     className="text-gray-400 hover:text-[#00FFAB] transition-colors">
                    <FaBriefcase size={20} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
