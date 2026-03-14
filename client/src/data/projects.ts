export interface Project {
  image: string;
  title: string;
  description: string;
  techStack: string[];
  liveLink?: string;
}

export const projects: Project[] = [
  {
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&h=400&fit=crop',
    title: 'BiruhKids Pediatric Specialty Clinic',
    description: 'A comprehensive digital healthcare platform for pediatric care with multi-role authentication, online appointment booking, AI-powered chatbot, bilingual support, and a full admin dashboard.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS', 'Puter.js'],
    liveLink: 'https://biruhkidsclinic.com',
  },
  {
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=300&h=400&fit=crop',
    title: 'Bluelight Academy SMS',
    description: 'A comprehensive full-stack school management system built for Bluelight Academy in Addis Ababa. Features complete administrative control over students, employees, payments, and system management with advanced role-based access control.',
    techStack: ['Next.js', 'Node.js', 'Express.js', 'MongoDB', 'TypeScript', 'Brevo'],
  },
  {
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=300&h=400&fit=crop',
    title: 'Ghion Homes Real Estate',
    description: 'A professional real estate sales consultant website for displaying available properties, providing detailed information to potential buyers, and facilitating easy communication for consultations and inquiries.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'PostgreSQL'],
    liveLink: 'https://ghionhomessales.com',
  },
];
