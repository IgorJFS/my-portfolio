import { StarBackground } from '@/components/StarBackground';
import { ThemeToggle } from '../components/ThemeToggle';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/Hero';
import { AboutSection } from '@/components/About';
import { SkillsSection } from '@/components/Skills';
import { Footer } from '@/components/Footer';
import { ProjectsSection } from '@/components/Projects';
import { ContactSection } from '@/components/Contact';
import { ToastProvider } from '@/components/ToastContainer';
import { useEffect } from 'react';

export const Home = () => {
  useEffect(() => {
    document.title = 'Igor Portfolio';
  }, []);
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
      <ThemeToggle />
      <StarBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <ToastProvider />
      <Footer />
    </div>
  );
};
