import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Skills } from '@/components/sections/skills';
import { Experience } from '@/components/sections/experience';
import { Projects } from '@/components/sections/projects';
import { Deployment } from '@/components/sections/deployment';
import { Architecture } from '@/components/sections/architecture';
import { GitHubStats } from '@/components/sections/github-stats';
import { Testimonials } from '@/components/sections/testimonials';
import { Blog } from '@/components/sections/blog';
import { Contact } from '@/components/sections/contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Deployment />
      <Architecture />
      <GitHubStats />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  );
}
