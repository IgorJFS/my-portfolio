import { Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { showMessage } from '@/lib/toastifyMessage';
import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';

export const ContactSection = () => {
  const { t, i18n } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
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

      showMessage.success(t('contact.messages.success'));
    } catch (error) {
      console.error(error);
      showMessage.error(t('contact.messages.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id='contact'
      className='py-24 px-4 relative bg-secondary/30'
      key={forceRender}
    >
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
          {t('contact.title')}{' '}
          <span className='text-primary'>{t('contact.titleHighlight')}</span>
        </h2>

        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
          {t('contact.description')}
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          <div className='space-y-8 justify-center'>
            <h3 className='text-2xl font-semibold mb-6'>
              {t('contact.info.title')}
            </h3>
            <div className='flex flex-col justify-center'>
              <div className='space-y-6 justify-center'>
                <div className='flex items-start space-x-4'>
                  <div className='p-3 rounded-full bg-red-300/10'>
                    <Mail className='h-6 w-6 text-red-300' />{' '}
                  </div>
                  <div>
                    <h4 className='font-medium'>{t('contact.info.email')}</h4>
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
                    <h4 className='font-medium'>{t('contact.info.phone')}</h4>
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
                    <h4 className='font-medium'>
                      {t('contact.info.location')}
                    </h4>
                    <a className='text-muted-foreground hover:text-primary transition-colors'>
                      Rio de Janeiro, Brazil
                    </a>
                  </div>
                </div>
              </div>

              <div className='pt-8'>
                <h4 className='font-medium mb-4'>
                  {t('contact.info.connect')}
                </h4>
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
            <h3 className='text-2xl font-semibold mb-6'>
              {t('contact.form.title')}
            </h3>

            <form className='space-y-6' onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium mb-2'
                >
                  {t('contact.form.fields.name')}
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  required
                  className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                  placeholder={t('contact.form.placeholders.name')}
                />
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium mb-2'
                >
                  {t('contact.form.fields.email')}
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  required
                  className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                  placeholder={t('contact.form.placeholders.email')}
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium mb-2'
                >
                  {t('contact.form.fields.message')}
                </label>
                <textarea
                  id='message'
                  name='message'
                  required
                  className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none'
                  placeholder={t('contact.form.placeholders.message')}
                />
              </div>

              <button
                type='submit'
                disabled={isSubmitting}
                className={cn(
                  'cosmic-button w-full flex items-center justify-center gap-2',
                )}
              >
                {isSubmitting
                  ? t('contact.form.sending')
                  : t('contact.form.submit')}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
