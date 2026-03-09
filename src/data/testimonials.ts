export interface Testimonial {
  picture?: string;
  name: string;
  company: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    picture: '/testimonials/client1.jpg',
    name: 'Sarah Johnson',
    company: 'Tech Innovations Inc',
    text: 'Working with this team was an absolute pleasure. They delivered our project on time and exceeded all expectations. Highly recommended!',
  },
  {
    name: 'Michael Chen',
    company: 'Digital Solutions Ltd',
    text: 'The level of professionalism and expertise demonstrated throughout our project was outstanding. They truly understand modern web development.',
  },
  {
    picture: '/testimonials/client3.jpg',
    name: 'Emily Rodriguez',
    company: 'StartUp Ventures',
    text: 'Our new platform has transformed our business. The team was responsive, creative, and delivered exactly what we needed.',
  },
  {
    name: 'David Thompson',
    company: 'Global Enterprises',
    text: 'Exceptional work from start to finish. The attention to detail and commitment to quality is unmatched. We will definitely work together again.',
  },
  {
    picture: '/testimonials/client5.jpg',
    name: 'Lisa Anderson',
    company: 'Creative Agency Co',
    text: 'They brought our vision to life with incredible precision. The final product was better than we could have imagined.',
  },
  {
    name: 'James Wilson',
    company: 'E-Commerce Plus',
    text: 'Outstanding service and support. The team went above and beyond to ensure our success. Truly a five-star experience.',
  },
];
