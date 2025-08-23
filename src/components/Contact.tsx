import { Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { showMessage } from '@/lib/toastifyMessage';
import { useState } from 'react';
import emailjs from 'emailjs-com';

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        'service_id', // substitui pelo ID do serviço
        'template_id', // substitui pelo ID do template
        e.currentTarget,
        'public_key', // substitui pela public key da sua conta
      );

      showMessage.success('Message sent successfully!');
    } catch (error) {
      console.error(error);
      showMessage.error('Failed to send message. Try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id='contact' className='py-24 px-4 relative bg-secondary/30'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
          Get In <span className='text-primary'> Touch</span>
        </h2>

        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          <div className='space-y-8 justify-center'>
            <h3 className='text-2xl font-semibold mb-6'>
              {' '}
              Contact Information
            </h3>
            <div className='flex flex-col justify-center'>
              <div className='space-y-6 justify-center'>
                <div className='flex items-start space-x-4'>
                  <div className='p-3 rounded-full bg-red-300/10'>
                    <Mail className='h-6 w-6 text-red-300' />{' '}
                  </div>
                  <div>
                    <h4 className='font-medium'>Email</h4>
                    <a
                      href='mailto:igormp.dev@gmail.com'
                      className='text-muted-foreground hover:text-primary transition-colors'
                    >
                      igormp.dev@gmail.com
                    </a>
                  </div>
                </div>
                <div className='flex items-start space-x-4'>
                  <div className='p-3 rounded-full bg-primary/10'>
                    <Phone className='h-6 w-6 text-primary' />{' '}
                  </div>
                  <div>
                    <h4 className='font-medium'> Phone</h4>
                    <a
                      href='tel:+55 (22) 99857-5344'
                      className='text-muted-foreground hover:text-primary transition-colors'
                    >
                      +55 (22) 99857-5344
                    </a>
                  </div>
                </div>
                <div className='flex items-start space-x-4'>
                  <div className='p-3 rounded-full bg-cyan-300/10'>
                    <MapPin className='h-6 w-6 text-cyan-300' />{' '}
                  </div>
                  <div>
                    <h4 className='font-medium'> Location</h4>
                    <a className='text-muted-foreground hover:text-primary transition-colors'>
                      Rio de Janeiro, Brazil
                    </a>
                  </div>
                </div>
              </div>

              <div className='pt-8'>
                <h4 className='font-medium mb-4'> Connect With Me</h4>
                <div className='flex space-x-4 justify-center'>
                  <a
                    className='p-3 rounded-full bg-cyan-400/10 hover:bg-cyan-400/20 transition-colors'
                    href='https://www.linkedin.com/in/igor-moraes/'
                    target='_blank'
                  >
                    <Linkedin />
                  </a>
                  <a
                    className='p-3 rounded-full bg-cyan-400/10 hover:bg-cyan-400/20 transition-colors'
                    href='https://github.com/igorJFS'
                    target='_blank'
                  >
                    <Github />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-card p-8 rounded-lg shadow-xs'>
            <h3 className='text-2xl font-semibold mb-6'> Send a Message</h3>

            <form className='space-y-6' onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium mb-2'
                >
                  {' '}
                  Your Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  required
                  className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                  placeholder='John Silverland'
                />
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium mb-2'
                >
                  {' '}
                  Your Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  required
                  className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                  placeholder='john@gmail.com'
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium mb-2'
                >
                  {' '}
                  Your Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  required
                  className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none'
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type='submit'
                disabled={isSubmitting}
                className={cn(
                  'cosmic-button w-full flex items-center justify-center gap-2',
                )}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
