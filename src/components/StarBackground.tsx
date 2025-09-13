import { useEffect, useState } from 'react';

type Star = {
  id: number;
  size: number;
  x: number;
  y: number;
  opacity: number;
  animationDuration: number;
};

type Meteor = {
  id: number;
  size: number;
  x: number;
  y: number;
  delay: number;
  animationDuration: number;
};

export const StarBackground = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [meteors, setMeteors] = useState<Meteor[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setIsDarkMode(isDark);
    };

    checkTheme();

    // Only generate stars/meteors in dark mode
    if (document.documentElement.classList.contains('dark')) {
      generateStars();
      generateMeteors();
    }

    const handleResize = () => {
      if (document.documentElement.classList.contains('dark')) {
        generateStars();
      }
    };

    // Watch for theme changes
    const observer = new MutationObserver(() => {
      checkTheme();
      if (document.documentElement.classList.contains('dark')) {
        generateStars();
        generateMeteors();
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000,
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 5;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }

    setMeteors(newMeteors);
  };

  return (
    <div
      className={`fixed inset-0 overflow-hidden pointer-events-none z-0 ${isDarkMode ? 'block' : 'hidden'}`}
    >
      {stars.map(star => (
        <div
          key={star.id}
          className='star animate-pulse-subtle'
          style={{
            width: star.size + 'px',
            height: star.size + 'px',
            left: star.x + '%',
            top: star.y + '%',
            opacity: star.opacity,
            animationDuration: star.animationDuration + 's',
          }}
        />
      ))}

      {meteors.map(meteor => (
        <div
          key={meteor.id}
          className='meteor animate-meteor'
          style={{
            width: meteor.size * 50 + 'px',
            height: meteor.size * 2 + 'px',
            left: meteor.x + '%',
            top: meteor.y + '%',
            animationDuration: meteor.animationDuration + 's',
          }}
        />
      ))}
    </div>
  );
};
