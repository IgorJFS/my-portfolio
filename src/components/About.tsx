import { Briefcase, Code, UserStar } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id='about' className='py-24 px-4 relative'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
          About <span className='text-primary'>Me</span>
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6'>
            <h3 className='text-2xl font-semibold'>Passionate Web Developer</h3>
            <p className='text-muted-foreground'>
              I am a passionate web developer with experience in building modern
              web applications. My journey in web development started with a
              curiosity to understand how games and websites work, and it has
              evolved into a full-fledged career.
            </p>
            <p className='text-muted-foreground'>
              I specialize in full-stack development, working with technologies
              like React, Typescript, Node.js, and various databases. I enjoy
              creating responsive, user-friendly, and performant web
              applications that solve real-world problems. And I also love to
              contribute to open-source projects and collaborate with other
              developers.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
              <a href='#contact' className='cosmic-button'>
                Get In Touch
              </a>
              <a
                href='/Igor_Moraes_Resume.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='rounded-full px-6 py-2 border border-primary text-primary hover:bg-primary hover:text-background transition-colors text-center'
              >
                Download Resume
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
                  <h4 className='font-semibold text-lg'>Web Development</h4>
                  <p>
                    Creating responsive websites and web applications using
                    modern frameworks
                  </p>
                </div>
              </div>
            </div>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <UserStar className='h-6 w-6 text-primary' />
                </div>
                <div className='sm:text-left'>
                  <h4 className='font-semibold text-lg'>Open Source</h4>
                  <p>
                    Contributing to open-source projects and collaborating with
                    other developers
                  </p>
                </div>
              </div>
            </div>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Briefcase className='h-6 w-6 text-primary' />
                </div>
                <div className='sm:text-left'>
                  <h4 className='font-semibold text-lg'>Project Management</h4>
                  <p>
                    Leading projects from conception to completion with agile
                    methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
