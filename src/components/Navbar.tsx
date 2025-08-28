import { cn } from '@/lib/utils';
import { Menu, X, Globe } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const navItemsEN = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const navItemsPT = [
  { name: 'Início', href: '#hero' },
  { name: 'Sobre', href: '#about' },
  { name: 'Habilidades', href: '#skills' },
  { name: 'Projetos', href: '#projects' },
  { name: 'Contato', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [currentLang] = useState(() =>
    window.location.pathname.includes('/pt-br') ? 'PT' : 'EN',
  );
  const langMenuRef = useRef<HTMLDivElement>(null);

  const navItems = currentLang === 'PT' ? navItemsPT : navItemsEN;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        langMenuRef.current &&
        !langMenuRef.current.contains(event.target as Node)
      ) {
        setIsLangMenuOpen(false);
      }
    };

    if (isLangMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLangMenuOpen]);

  return (
    <>
      {/* Navbar principal */}
      <nav
        className={cn(
          'fixed w-full z-40 transition-all duration-300',
          isScrolled
            ? 'py-3 bg-background/50 backdrop-blur-xl shadow-xs'
            : 'py-5',
        )}
      >
        <div className='container flex items-center justify-between'>
          <div className='flex items-center space-x-4'>
            <a
              className='text-xl font-bold text-primary flex items-center'
              href='#hero'
            >
              <span className='relative z-10'>
                <span className='text-glow text-foreground'> Igor </span>{' '}
                Portfolio
              </span>
            </a>

            {/* Language Selector */}
            <div className='relative' ref={langMenuRef}>
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className='flex cursor-pointer items-center space-x-1 px-2 py-1 rounded-md text-foreground/80 hover:text-primary hover:bg-card/50 transition-all duration-300'
                aria-label='Language Selector'
              >
                <Globe size={16} />
                <span className='text-sm font-medium'>{currentLang}</span>
              </button>

              {/* Language Dropdown */}
              {isLangMenuOpen && (
                <div className='absolute top-full left-0 mt-1 bg-card border border-border rounded-md shadow-lg z-50 min-w-[80px]'>
                  <a
                    href='/'
                    className={cn(
                      'block w-full px-3 py-2 text-left text-sm hover:bg-foreground/10 transition-colors',
                      currentLang === 'EN' && 'bg-primary/20 text-primary',
                    )}
                  >
                    EN
                  </a>
                  <a
                    href='/pt-br'
                    className={cn(
                      'block w-full px-3 py-2 text-left text-sm hover:bg-foreground/10 transition-colors',
                      currentLang === 'PT' && 'bg-primary/20 text-primary',
                    )}
                  >
                    PT
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* desktop nav */}
          <div className='hidden md:flex space-x-8'>
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className='text-foreground/80 hover:text-primary transition-colors duration-300'
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* botão para ABRIR o menu mobile */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className='md:hidden p-2 text-foreground z-50'
            aria-label='Open Menu'
            title='Open Menu'
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* menu mobile  */}
      <div
        className={cn(
          'fixed inset-0 bg-background/95 backdrop-blur-md z-[51] flex flex-col items-center justify-center',
          'transition-all duration-300 md:hidden',
          isMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none',
        )}
      >
        {/* botão para FECHAR o menu mobile */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className='absolute top-4 right-4 p-2 text-foreground'
          aria-label='Close Menu'
          title='Close Menu'
        >
          <X size={24} />
        </button>

        <div className='flex flex-col space-y-8 text-xl'>
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className='text-foreground/80 hover:text-primary transition-colors duration-300'
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
