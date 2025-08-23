import { StarBackground } from '@/components/StarBackground';
import { ThemeToggle } from '../components/ThemeToggle';
import { useEffect } from 'react';
import { Link } from 'react-router';

export const NotFound = () => {
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
          404
        </h1>

        {/* Mensagem */}
        <p className='text-lg md:text-2xl text-muted-foreground'>
          Ops... Page Not Found D:
        </p>
        <p>No worries, you can always go back to the homepage.</p>

        {/* Botão voltar */}
        <Link to='/' className='inline-block cosmic-button mt-6'>
          Back to Home
        </Link>
      </div>
    </div>
  );
};
