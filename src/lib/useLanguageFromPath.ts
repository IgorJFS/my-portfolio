import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';

export const useLanguageFromPath = () => {
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    const path = location.pathname;
    const newLanguage = path.includes('/pt-br') ? 'pt' : 'en';

    if (i18n.language !== newLanguage) {
      i18n.changeLanguage(newLanguage);
    }
  }, [location.pathname, i18n]);
};
