export interface Project {
  image: string;
  title: string;
  description: string;
  techStack: string[];
  liveLink?: string;
  qrImage?: string;
  menuLink?: string;
}

export const projects: Project[] = [
  {
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=400&fit=crop',
    title: 'The URB — Digital Menu & Website',
    description: 'A full-stack restaurant platform for The URB featuring a stunning promotional landing page and a live QR-powered digital menu. Each branch manager or admin can independently control, edit, and update their menu in real time — no developer needed. Customers simply scan the QR code placed on their table to instantly browse the full menu with categories, photos, and pricing. Built end-to-end with Next.js for both frontend and backend.',
    techStack: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'MongoDB', 'NextAuth'],
    liveLink: 'https://the-urb.vercel.app/',
    qrImage: '/qr-code-menu.png',
    menuLink: 'https://the-urb.vercel.app/menu',
  },
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
  {
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=300&h=400&fit=crop',
    title: 'Nova Studio Ethiopia',
    description: "Premier creative production agency website based in Addis Ababa, Ethiopia. Features multilingual support (English/Amharic), professional photography and videography showcase, social media management services, and digital marketing solutions with modern UI/UX.",
    techStack: ['React', 'TypeScript', 'TailwindCSS', 'i18next', 'Vite', 'EmailJS'],
    liveLink: 'https://novastudio.et',
  },
  {
    image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=300&h=400&fit=crop',
    title: 'Kab Creative Lab',
    description: 'A full-stack web application for managing creative portfolios, projects, and client communications. Features an admin panel, user dashboard, portfolio showcase with media gallery, and secure JWT authentication.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'TailwindCSS'],
    liveLink: 'https://kabcreativelab.com',
  },
];
