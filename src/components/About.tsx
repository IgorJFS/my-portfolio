import { Code, MonitorSmartphone, UserStar } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

export const AboutSection = () => {
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
    <section id='about' className='py-24 px-4 relative' key={forceRender}>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
          {t('about.title')}{' '}
          <span className='text-primary'>{t('about.titleHighlight')}</span>
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6'>
            <h3 className='text-2xl font-semibold'>{t('about.subtitle')}</h3>
            <p className='text-muted-foreground'>{t('about.description1')}</p>
            <p className='text-muted-foreground'>{t('about.description2')}</p>
            <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
              <a href='#contact' className='cosmic-button'>
                {t('about.cta1')}
              </a>
              <a
                href={t('about.resumeFile')}
                download
                className='rounded-full px-6 py-2 border border-primary text-primary hover:bg-primary hover:text-background transition-colors text-center'
              >
                {t('about.cta2')}
              </a>
            </div>
          </div>
          <div className='grid grid-cols-1 gap-6'>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Code className='h-6 w-6 text-primary' />
                </div>
                <div className='sm:text-left'>
                  <h4 className='font-semibold text-lg'>
                    {t('about.cards.webDev.title')}
                  </h4>
                  <p>{t('about.cards.webDev.description')}</p>
                </div>
              </div>
            </div>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <UserStar className='h-6 w-6 text-primary' />
                </div>
                <div className='sm:text-left'>
                  <h4 className='font-semibold text-lg'>
                    {t('about.cards.openSource.title')}
                  </h4>
                  <p>{t('about.cards.openSource.description')}</p>
                </div>
              </div>
            </div>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <MonitorSmartphone className='h-6 w-6 text-primary' />
                </div>
                <div className='sm:text-left'>
                  <h4 className='font-semibold text-lg'>
                    {t('about.cards.projectMgmt.title')}
                  </h4>
                  <p>{t('about.cards.projectMgmt.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
