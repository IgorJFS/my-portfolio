import React, { useState, useRef } from 'react';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';

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
  const [activeCategory, setActiveCategory] = useState('All');
  const ref = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Chronos Pomodoro React',
      description:
        'A modern Pomodoro timer built with React + TypeScript + Vite. Focus cycles, short/long breaks, task history, theming and mobile responsive design.',
      image: '/pomodoro.png',
      category: 'Web Development',
      technologies: ['ReactJS', 'CSS', 'React-Router', 'Typescript'],
      liveUrl: '#',
      githubUrl: 'https://github.com/vieira-klgwn/TaskSync-V2.git',
    },
    {
      id: 2,
      title: 'Discord-DevPosting bot Typescript',
      description:
        'A robust, modular Discord bot for fetching and posting IT/developer job listings from remoteOk API, with features for error reporting, message cleanup, scheduling, and slash command management.',
      image: '/discordbot.png',
      category: 'Web Development',
      technologies: ['NodeJS', 'Express', 'TypeScript', 'discord.js', 'API'],
      liveUrl: '#',
      githubUrl: 'https://github.com/vieira-klgwn/dapp-commence.git',
    },
    {
      id: 3,
      title: 'Tailwind Responsive DevHouse',
      description:
        'An embedded system project that integrates IoT devices with a focus on security. Its main purpose is to allow users to control lights remotely',
      image: '/devHouse.png',
      category: 'Web Development',
      technologies: ['HTML', 'CSS', 'Tailwind', 'Typescript'],
      liveUrl: '#',
      githubUrl:
        'https://github.com/vieira-klgwn/Embedded-Sysetms-Web-Based-Light-Scheduler.git',
    },
    {
      id: 4,
      title: 'Uber Website Layout Tailwind',
      description:
        'An Uber-like layout using Tailwind CSS and Javascript. The layout includes a header, a blog section, main content area, CTA section, and a footer. All with responsive design in mind. (Mobile-first approach)',
      image: '/uber.png',
      category: 'Web Development',
      technologies: ['HTML', 'CSS', 'Tailwind', 'Typescript'],
      liveUrl: '#',
      githubUrl:
        'https://github.com/vieira-klgwn/Springboot-HospitalManagementSystem.git',
    },
    {
      id: 5,
      title: 'Simple Login Page Tailwind',
      description:
        'A simple and modern login page built with Tailwind CSS. Fully responsive with a clean design, using utility classes for layout, forms, and styling.',
      image: '/login.png',
      category: 'Web Development',
      technologies: ['HTML', 'CSS', 'Tailwind', 'JavaScript'],
      liveUrl: '#',
      githubUrl: 'https://github.com/vieira-klgwn/GonXKillua-Pygame-Game.git',
    },
    {
      id: 6,
      title: 'Modern Digital Clock JavaScript',
      description:
        'A digital clock built with JavaScript that displays the current time and updates every second.',
      image: '/modernClock.png',
      category: 'Web Development',
      technologies: ['HTML', 'CSS', 'SASS', 'JavaScript'],
      liveUrl: '#',
      githubUrl: 'https://github.com/vieira-klgwn/my_project.git',
    },
    {
      id: 7,
      title: 'Data Analysis Dashboard',
      description:
        'Interactive dashboard analyzing global salaries across multiple roles in the data industry from 2020 to 2025. Built with Python, Streamlit, and Plotly for dynamic filtering and visualization.',
      image: '/data-dashboard.png',
      category: 'Data Analysis',
      technologies: ['Python', 'Pandas', 'Streamlit', 'Matplotlib'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 8,
      title: 'Bootstrap-Tindog-Layout',
      description:
        'A small project simulating a Tinder-style app for dogs, built with Bootstrap 5.0. Fully mobile-responsive, it uses Bootstrap’s grid system and components to display dog profiles in a playful and clean interface.',
      image: '/tindog.png',
      category: 'Web Development',
      technologies: ['HTML', 'CSS', 'Tailwind', 'JavaScript'],
      liveUrl: '#',
      githubUrl: 'https://github.com/vieira-klgwn/GonXKillua-Pygame-Game.git',
    },
    {
      id: 9,
      title: 'Full-Stack YelpCamp Project (Project still under dev)',
      description:
        'A comprehensive full-stack web application that allows users to create, view, and review campgrounds. Built with Node.js, Express, TypeScript, EJS templating, Bootstrap for styling, and MongoDB for data storage. Features user authentication, CRUD operations for campgrounds and reviews, and a responsive design.',
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
      liveUrl: '#',
      githubUrl: 'https://github.com/vieira-klgwn/dapp-commence.git',
    },
  ];

  const categories = ['All', 'Web Development', 'Data Analysis'];

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter(project => project.category === activeCategory);

  return (
    <section id='projects' className='py-24 relative overflow-hidden px-6'>
      <div className='container mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold mb-4 opacity-0 animate-fade-in animate-delay-100'>
            Featured <span className='text-primary'>Work</span>
          </h2>
          <p className='text-secondary-foreground max-w-2xl mx-auto opacity-0 animate-fade-in animate-delay-200'>
            Here are some of my recent projects. Each project was carefully
            crafted with attention to detail, performance, and user experience.
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
                  <span className='px-2 py-1 text-xs rounded-full bg-primary/20 text-tech-light-blue'>
                    {project.category}
                  </span>
                </div>
                <p className='text-foreground mb-5'>{project.description}</p>
                <div className='flex flex-wrap gap-2 mb-5'>
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className='px-2 py-1 bg-primary/20 rounded-md text-xs text-secondary-foreground'
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
          <a href='#' className='cosmic-button inline-flex items-center'>
            Check My GitHub <ArrowRight className='ml-2 h-5 w-5' />
          </a>
        </div>
      </div>
    </section>
  );
};
