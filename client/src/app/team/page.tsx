import Image from 'next/image';
import { FaLinkedin, FaGithub, FaBriefcase } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Elyas Yenealem',
    role: 'Founder & Full Stack Developer',
    image: '/images/elyas.png',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    portfolio: 'https://portfolio.com'
  },
  {
    name: 'Tenbite Daniel',
    role: 'Mobile App Developer & UI/UX Designer',
    image: '/images/team/member2.jpg',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    portfolio: 'https://portfolio.com'
  },
  {
    name: 'Yonas',
    role: 'Social Media Manager & Video Editor',
    image: '/images/team/member3.jpg',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    portfolio: 'https://portfolio.com'
  },
  {
    name: 'Samuel',
    role: 'Communications & Marketing Specialist',
    image: '/images/team/member4.jpg',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    portfolio: 'https://portfolio.com'
  },
];

export default function Team() {
  return (
    <main className="pt-32 pb-20 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#00FFAB] text-sm font-medium mb-2">04. THE TEAM</p>
          <h1 className="text-4xl md:text-5xl font-light text-white">
            Expert Minds Behind the Tech
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={400}
                  className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              
              <h3 className="text-white text-xl font-light mb-1">{member.name}</h3>
              <p className="text-[#00FFAB] text-sm mb-3">{member.role}</p>
              
              <div className="flex gap-3">
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
    </main>
  );
}
