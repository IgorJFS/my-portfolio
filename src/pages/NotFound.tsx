import { StarBackground } from '@/components/StarBackground';
import { ThemeToggle } from '../components/ThemeToggle';
import { useEffect } from 'react';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

export const NotFound = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = '404 Not Found - IgorJFS Portfolio';
  }, []);

  return (
    <div className='relative flex h-screen w-full flex-col items-center justify-center bg-background text-foreground text-center'>
      <StarBackground />
      <ThemeToggle />

      <div className='z-10 space-y-6 px-6'>
        {/* Número 404 */}
        <h1 className='text-7xl md:text-9xl font-extrabold tracking-widest text-primary-gradient'>
          {t('notFound.title')}
        </h1>

        {/* Mensagem */}
        <p className='text-lg md:text-2xl text-muted-foreground'>
          {t('notFound.message')}
        </p>
        <p>{t('notFound.description')}</p>

        {/* Botão voltar */}
        <Link
          to={window.location.pathname.includes('/pt-br') ? '/pt-br' : '/'}
          className='inline-block cosmic-button mt-6'
        >
          {t('notFound.cta')}
        </Link>
      </div>
    </div>
  );
};
