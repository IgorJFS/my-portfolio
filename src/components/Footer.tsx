import React from 'react';
import { ArrowUp, Linkedin, Github, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className='relative py-12 bg-tech-dark border-t border-tech-dark/50 text-foreground'>
      <div className='container mx-auto px-6'>
        <div className='flex flex-col md:flex-row justify-between items-center mb-8'>
          <div className='mb-6 md:mb-0 text-start'>
            <a href='#' className='text-3xl font-bold text-primary'>
              Igor Moraes Pereira
            </a>
            <p className='mt-2 text-secondary-foreground max-w-md'>
              A passionate Web developer building innovative digital solutions
              with a focus on performance and security.
            </p>
          </div>

          <div className='flex flex-col items-end'>
            <div className='flex space-x-4'>
              <a
                href='https://github.com/IgorJFS'
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 rounded-full bg-tech-dark/70 hover:bg-primary/50 text-secondary-foreground hover:text-tech-light-blue transition-all'
                aria-label='GitHub'
              >
                <Github size={20} />
              </a>
              <a
                href='https://www.linkedin.com/in/igor-moraes/'
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 rounded-full bg-tech-dark/70 hover:bg-primary/50 text-secondary-foreground hover:text-tech-light-blue transition-all'
                aria-label='LinkedIn'
              >
                <Linkedin size={20} />
              </a>
              <a
                href='mailto:igormp.dev@gmail.com'
                className='p-2 rounded-full hover:bg-primary/50 transition-all'
                aria-label='Email'
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className='pt-8 border-t border-tech-dark/50 flex flex-col md:flex-row justify-between items-center'>
          <p className='text-secondary-foreground text-sm'>
            &copy; {currentYear} IgorJFS. All rights reserved.
          </p>

          <div className='mt-4 md:mt-0 flex flex-wrap gap-4'>
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className='text-sm hover:text-primary transition-colors'
              >
                {item}
              </a>
            ))}
            <button
              onClick={scrollToTop}
              className='p-3 rounded-full bg-primary/20 text-primary hover:bg-primary/50 transition-all mb-6'
              aria-label='Scroll to top'
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
