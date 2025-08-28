import React, { useState, useEffect } from 'react';
import { ArrowUp, Linkedin, Github, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentYear = new Date().getFullYear();
  const [forceRender, setForceRender] = useState(0);

  // Force re-render when language changes
  useEffect(() => {
    const handleLanguageChange = () => {
      setForceRender(prev => prev + 1);
    };

    i18n.on('languageChanged', handleLanguageChange);
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { name: t('nav.home'), href: '#hero' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <footer
      className='relative py-12 bg-tech-dark border-t border-tech-dark/50 text-foreground'
      key={forceRender}
    >
      <div className='container mx-auto px-6'>
        <div className='flex flex-col md:flex-row justify-between items-center mb-8'>
          <div className='mb-6 md:mb-0 text-start'>
            <a href='#' className='text-3xl font-bold text-primary'>
              {t('footer.name')}
            </a>
            <p className='mt-2 text-secondary-foreground max-w-md'>
              {t('footer.description')}
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
            &copy; {currentYear} IgorJFS. {t('footer.copyright')}
          </p>

          <div className='mt-4 md:mt-0 flex flex-wrap gap-4'>
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                className='text-sm hover:text-primary transition-colors'
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={scrollToTop}
              className='p-3 rounded-full bg-primary/20 text-primary hover:bg-primary/50 transition-all mb-6'
              aria-label={t('footer.scrollToTop')}
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
