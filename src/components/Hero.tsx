import { ArrowDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

export const HeroSection = () => {
  const { t, i18n } = useTranslation();
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

  return (
    <section
      id='hero'
      className='relative min-h-screen flex items-center justify-center px-4'
      key={forceRender} // Force re-render with key
    >
      <div className='container max-w-4xl mx-auto items-center text-center z-10'>
        <div className='space-y-6'>
          <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
            <span className='opacity-0 animate-fade-in'>
              {t('hero.greeting')}
            </span>
            <span className='text-primary opacity-0 animate-fade-in-delay-1'>
              {' '}
              {t('hero.name')}
            </span>
            <span className='text-gradient ml-1 opacity-0 animate-fade-in-delay-2'>
              {' '}
              {t('hero.surname')}
            </span>
            <br />
            <span className='md:text-7xl text-primary ml-1 opacity-0 animate-fade-in-delay-2'>
              {' '}
              {t('hero.stack')}
            </span>
            <span className='md:text-7xl ml-1 opacity-0 animate-fade-in-delay-2'>
              {' '}
              {t('hero.specialty')}
            </span>
          </h1>
          <p className='text-lg md:text-xl text-foreground opacity-0 mx-auto animate-fade-in-delay-3'>
            {t('hero.description')}
          </p>
          <div className='pt-4 opacity-0 animate-fade-in-delay-4'>
            <a href='#projects' className='cosmic-button'>
              {t('hero.cta')}
            </a>
          </div>
        </div>
      </div>
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20 animate-bounce'>
        <span className='text-sm text-muted-foreground mb-2'>
          {t('hero.scroll')}
        </span>
        <ArrowDown className='h-5 w-5 text-primary' />
      </div>
    </section>
  );
};
