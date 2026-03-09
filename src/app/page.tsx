import Services from '@/components/services/Services';
import Projects from '@/components/projects/Projects';
import Testimonials from '@/components/testimonials/Testimonials';

export default function Home() {
  return (
    <main>
      <Services />
      <Projects />
      <Testimonials />
    </main>
  );
}
