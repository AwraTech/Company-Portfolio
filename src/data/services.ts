import { Code, Palette, Smartphone, Globe, Database, Zap } from 'lucide-react';

export interface Service {
  icon: any;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies for optimal performance and user experience.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces designed to engage users and enhance brand identity.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps that deliver seamless experiences on any device.',
  },
  {
    icon: Globe,
    title: 'Digital Marketing',
    description: 'Strategic campaigns to boost your online presence and drive measurable business growth.',
  },
  {
    icon: Database,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and services to power your business operations efficiently.',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Speed up your applications and improve user satisfaction with expert optimization techniques.',
  },
];
