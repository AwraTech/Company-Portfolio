export interface Testimonial {
  picture?: string;
  name: string;
  company: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Dr. Fasil Menbere',
    company: 'Pediatric Specialist, CEO & Founder at BiruhKids',
    text: 'Awra Tech built us a platform that truly reflects our mission. The system is fast, reliable, and our patients and staff love using it. From the AI chatbot to the appointment booking, every feature was crafted with care and precision.',
  },
  {
    name: 'Yenealem A.',
    company: 'Founder & CEO at Bluelight Academy',
    text: 'The school management system Awra Tech delivered has completely transformed how we operate. Managing students, employees, and payments is now seamless. Their team was professional, communicative, and delivered beyond our expectations.',
  },
  {
    name: 'Mulugeta D.',
    company: 'Real Estate Sales Consultant at Ghion Homes',
    text: 'My website has made a huge difference in how clients find and contact me. It looks professional, loads fast, and clearly presents all my property listings. Awra Tech understood exactly what I needed and delivered it perfectly.',
  },
];
