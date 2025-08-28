import React, { useState, useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

interface Skill {
  name: string;
  level: number;
  category: 'languages' | 'frameworks' | 'databases' | 'tools';
  icon?: React.ReactNode;
}

export const SkillsSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [selectedCategory, setSelectedCategory] =
    useState<string>('frameworks');
  const progressRef = useRef<HTMLDivElement>(null);
  const [forceRender, setForceRender] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

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

  const skills: Skill[] = [
    { name: 'HTML/CSS', level: 95, category: 'languages' },
    { name: 'JavaScript', level: 95, category: 'languages' },
    { name: 'TypeScript', level: 90, category: 'languages' },
    { name: 'Python', level: 75, category: 'languages' },

    { name: 'React', level: 90, category: 'frameworks' },
    { name: 'Next.js', level: 85, category: 'frameworks' },
    { name: 'Node.js', level: 90, category: 'frameworks' },
    { name: 'Express', level: 85, category: 'frameworks' },
    { name: 'Mongoose', level: 80, category: 'frameworks' },
    { name: 'Tailwind CSS', level: 95, category: 'frameworks' },
    { name: 'Bootstrap', level: 90, category: 'frameworks' },
    { name: 'Pandas', level: 80, category: 'frameworks' },

    { name: 'MySQL', level: 85, category: 'databases' },
    { name: 'PostgreSQL', level: 80, category: 'databases' },
    { name: 'MongoDB', level: 90, category: 'databases' },

    { name: 'VS Code', level: 100, category: 'tools' },
    { name: 'Git/GitHub', level: 95, category: 'tools' },
    { name: 'RESTful API', level: 90, category: 'tools' },
    { name: 'Docker', level: 75, category: 'tools' },
    { name: 'Google Cloud', level: 60, category: 'tools' },
    { name: 'Figma', level: 55, category: 'tools' },
  ];

  const categories = [
    { id: 'languages', name: t('skills.categories.languages') },
    { id: 'frameworks', name: t('skills.categories.frameworks') },
    { id: 'databases', name: t('skills.categories.databases') },
    { id: 'tools', name: t('skills.categories.tools') },
  ];

  const filteredSkills = skills.filter(
    skill => skill.category === selectedCategory,
  );

  return (
    <section
      id='skills'
      className='py-10 relative overflow-hidden px-6 bg-tech-dark/50'
      key={forceRender}
    >
      <div className='container mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold mb-4 opacity-0 animate-fade-in animate-delay-100'>
            {t('skills.title')}{' '}
            <span className='text-primary'>{t('skills.titleHighlight')}</span>
          </h2>
          <p className='text-secondary-foreground max-w-2xl mx-auto opacity-0 animate-fade-in animate-delay-200'>
            {t('skills.description')}
          </p>
        </div>

        <div className='mb-12'>
          <div className='flex flex-wrap justify-center gap-3 mb-12'>
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                    : 'bg-tech-dark/50 text-secondary-foreground hover:bg-tech-dark/80'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div ref={ref} className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {filteredSkills.map((skill, index) => (
              <div
                key={skill.name}
                className='tech-card group opacity-0 animate-fade-in'
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <div className='flex justify-between items-center mb-2'>
                  <h3 className='font-medium'>{skill.name}</h3>
                  <span className='text-primary-gradient font-semibold'>
                    {skill.level}%
                  </span>
                </div>
                <div className='skill-progress'>
                  <div
                    ref={progressRef}
                    className='skill-progress-bar'
                    style={{
                      width: inView ? `${skill.level}%` : '0%',
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
