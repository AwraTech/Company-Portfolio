export interface Project {
  image: string;
  title: string;
  description: string;
  techStack: string[];
  liveLink: string;
}

export const projects: Project[] = [
  {
    image: '/projects/project1.jpg',
    title: 'E-Commerce Platform',
    description: 'A full-featured online shopping platform with payment integration and inventory management.',
    techStack: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    liveLink: 'https://example.com/project1',
  },
  {
    image: '/projects/project2.jpg',
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates and team collaboration features.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    liveLink: 'https://example.com/project2',
  },
  {
    image: '/projects/project3.jpg',
    title: 'Healthcare Dashboard',
    description: 'Medical data visualization dashboard for healthcare professionals with analytics.',
    techStack: ['Vue.js', 'Python', 'Django', 'Chart.js'],
    liveLink: 'https://example.com/project3',
  },
  {
    image: '/projects/project4.jpg',
    title: 'Social Media Platform',
    description: 'Modern social networking application with messaging, posts, and user profiles.',
    techStack: ['React Native', 'Firebase', 'Redux', 'Tailwind'],
    liveLink: 'https://example.com/project4',
  },
  {
    image: '/projects/project5.jpg',
    title: 'Real Estate Portal',
    description: 'Property listing and search platform with advanced filters and virtual tours.',
    techStack: ['Next.js', 'Prisma', 'AWS', 'Mapbox'],
    liveLink: 'https://example.com/project5',
  },
  {
    image: '/projects/project6.jpg',
    title: 'Fitness Tracking App',
    description: 'Personal fitness tracker with workout plans, progress tracking, and nutrition guides.',
    techStack: ['Flutter', 'Firebase', 'TensorFlow', 'REST API'],
    liveLink: 'https://example.com/project6',
  },
];
