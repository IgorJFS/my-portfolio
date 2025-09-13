import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const ProjectsSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('');
  const ref = useRef<HTMLDivElement>(null);
  const [forceRender, setForceRender] = useState(0);

  // Initialize activeCategory after translations are loaded
  React.useEffect(() => {
    if (activeCategory === '') {
      setActiveCategory(t('projects.categories.all'));
    }
  }, [t, activeCategory]);

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

  const projects: Project[] = [
    {
      id: 1,
      title: t('projects.items.pomodoro.title'),
      description: t('projects.items.pomodoro.description'),
      image: '/pomodoro.png',
      category: 'Web Development',
      technologies: ['ReactJS', 'CSS', 'React-Router', 'Typescript'],
      liveUrl: 'https://chronos-pomodoro-react.vercel.app/',
      githubUrl: 'https://github.com/IgorJFS/Chronos-Pomodoro-React',
    },
    {
      id: 2,
      title: t('projects.items.discordBot.title'),
      description: t('projects.items.discordBot.description'),
      image: '/discordbot.png',
      category: 'Web Development',
      technologies: ['NodeJS', 'Express', 'TypeScript', 'discord.js', 'API'],
      liveUrl: '#https://github.com/IgorJFS/discord-DevPosting-bot',
      githubUrl: 'https://github.com/IgorJFS/discord-DevPosting-bot',
    },
    {
      id: 3,
      title: t('projects.items.devHouse.title'),
      description: t('projects.items.devHouse.description'),
      image: '/devHouse.png',
      category: 'Web Development',
      technologies: ['HTML', 'CSS', 'Tailwind', 'Typescript'],
      liveUrl: 'https://igorjfs.github.io/DevHouse/',
      githubUrl: 'https://github.com/IgorJFS/DevHouse',
    },
    {
      id: 4,
      title: t('projects.items.uberLayout.title'),
      description: t('projects.items.uberLayout.description'),
      image: '/uber.png',
      category: 'Web Development',
      technologies: ['HTML', 'CSS', 'Tailwind', 'Typescript'],
      liveUrl: 'https://igorjfs.github.io/Uber-Layout/',
      githubUrl: 'https://github.com/IgorJFS/Uber-Layout',
    },
    {
      id: 5,
      title: t('projects.items.grokkingAlgorithms.title'),
      description: t('projects.items.grokkingAlgorithms.description'),
      image: '/Grokking.png',
      category: 'Open Source',
      technologies: ['GitHub', 'TypeScript'],
      liveUrl: 'https://github.com/egonSchiele/grokking_algorithms',
      githubUrl:
        'https://github.com/egonSchiele/grokking_algorithms/pull/311#issuecomment-2845981911',
    },
    {
      id: 6,
      title: t('projects.items.dataDashboard.title'),
      description: t('projects.items.dataDashboard.description'),
      image: '/data-dashboard.png',
      category: 'Data Analysis',
      technologies: ['Python', 'Pandas', 'Streamlit', 'Matplotlib'],
      liveUrl: 'https://data-salary-dashboard.streamlit.app/',
      githubUrl: 'https://github.com/IgorJFS/Data-Salary-Dashboard',
    },
    {
      id: 8,
      title: t('projects.items.tindog.title'),
      description: t('projects.items.tindog.description'),
      image: '/tindog.png',
      category: 'Web Development',
      technologies: ['HTML', 'CSS', 'Tailwind', 'JavaScript'],
      liveUrl: 'https://igorjfs.github.io/Bootstrap-Tindog-Layout/',
      githubUrl: 'https://github.com/IgorJFS/Bootstrap-Tindog-Layout',
    },
    {
      id: 9,
      title: t('projects.items.yelpcamp.title'),
      description: t('projects.items.yelpcamp.description'),
      image: '/yelpcamp.png',
      category: 'Web Development',
      technologies: [
        'NodeJS',
        'Express',
        'TypeScript',
        'Ejs',
        'Bootstrap',
        'MongoDB',
        'API',
      ],
      liveUrl: '#https://github.com/IgorJFS/YelpCamp-Project',
      githubUrl: 'https://github.com/IgorJFS/YelpCamp-Project',
    },
    {
      id: 11,
      title: t('projects.items.heyputer.title'),
      description: t('projects.items.heyputer.description'),
      image: '/puter.png',
      category: 'Open Source',
      technologies: ['Markdown', 'Docs', 'GitHub'],
      liveUrl: 'https://github.com/HeyPuter/puter',
      githubUrl:
        'https://github.com/HeyPuter/puter/pull/1363#event-18692314220',
    },
    {
      id: 12,
      title: t('projects.items.seraui.title'),
      description: t('projects.items.seraui.description'),
      image: '/sera.png',
      category: 'Open Source',
      technologies: ['React', 'TypeScript', 'GitHub'],
      liveUrl: 'https://seraui.seraprogrammer.com/',
      githubUrl: 'https://github.com/seraui/seraui/pull/14#event-19064453564',
    },
    {
      id: 13,
      title: t('projects.items.heroUI.title'),
      description: t('projects.items.heroUI.description'),
      image: '/HeroUI.png',
      category: 'Open Source',
      technologies: ['React', 'Typescript', 'NextJS', 'GitHub'],
      liveUrl: 'https://www.heroui.com/',
      githubUrl:
        'https://github.com/heroui-inc/heroui/pull/5584#event-19423995404',
    },
  ];

  const categories = [
    t('projects.categories.all'),
    t('projects.categories.webDevelopment'),
    t('projects.categories.dataAnalysis'),
    t('projects.categories.openSource'),
  ];

  const filteredProjects =
    activeCategory === t('projects.categories.all')
      ? projects
      : projects.filter(project => {
          const categoryMap: Record<string, string> = {
            [t('projects.categories.webDevelopment')]: 'Web Development',
            [t('projects.categories.dataAnalysis')]: 'Data Analysis',
            [t('projects.categories.openSource')]: 'Open Source',
          };
          return project.category === categoryMap[activeCategory];
        });

  return (
    <section
      id='projects'
      className='py-10 relative overflow-hidden px-6'
      key={forceRender}
    >
      <div className='container mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold mb-4 opacity-0 animate-fade-in animate-delay-100'>
            {t('projects.title')}{' '}
            <span className='text-primary'>{t('projects.titleHighlight')}</span>
          </h2>
          <p className='text-secondary-foreground max-w-2xl mx-auto opacity-0 animate-fade-in animate-delay-200'>
            {t('projects.description')}
          </p>
        </div>

        <div className='mb-10 flex flex-wrap justify-center gap-3'>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-secondary-foreground hover:bg-tech-dark/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div
          ref={ref}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
        >
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className='glass-card group overflow-hidden rounded-2xl opacity-0 animate-fade-in'
              style={{ animationDelay: `${300 + index * 150}ms` }}
            >
              <div className='aspect-video overflow-hidden'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                />
              </div>
              <div className='p-6'>
                <div className='flex justify-between items-start mb-3'>
                  <h3 className='text-xl font-semibold align-middle'>
                    {project.title}
                  </h3>
                  <span className='px-2 py-1 text-xs rounded-full bg-primary/10'>
                    {(() => {
                      const categoryTranslations: Record<string, string> = {
                        'Web Development': t(
                          'projects.categories.webDevelopment',
                        ),
                        'Data Analysis': t('projects.categories.dataAnalysis'),
                        'Open Source': t('projects.categories.openSource'),
                      };
                      return (
                        categoryTranslations[project.category] ||
                        project.category
                      );
                    })()}
                  </span>
                </div>
                <p className='text-foreground mb-5'>{project.description}</p>
                <div className='flex flex-wrap gap-2 mb-5'>
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className='px-2 py-1 bg-primary/20 rounded-md text-xs '
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className='flex justify-between items-center'>
                  <div className='flex'>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='p-2 rounded-full text-primary hover:bg-primary/30 transition-colors duration-300'
                      >
                        <ExternalLink size={24} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='p-2 rounded-full text-primary hover:bg-primary/30 transition-colors duration-300'
                      >
                        <Github size={24} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-12 text-center opacity-0 animate-fade-in animate-delay-1000'>
          <a
            href='https://github.com/IgorJFS'
            target='_blank'
            rel='noopener noreferrer'
            className='cosmic-button inline-flex items-center'
          >
            {t('projects.cta')} <ArrowRight className='ml-2 h-5 w-5' />
          </a>
        </div>
      </div>
    </section>
  );
};
