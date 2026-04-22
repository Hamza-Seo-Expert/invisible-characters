import en from '@/locales/en.json';
import es from '@/locales/es.json';
import pt from '@/locales/pt.json';
import ar from '@/locales/ar.json';

const translations = { en, es, pt, ar };

export function getTranslations(lang) {
  return translations[lang] || translations['en'];
}

export const supportedLangs = ['en', 'es', 'pt', 'ar'];
export const rtlLangs = ['ar'];

export function isRTL(lang) {
  return rtlLangs.includes(lang);
}

export function getLangName(lang) {
  const names = {
    en: 'English',
    es: 'Español',
    pt: 'Português',
    ar: 'العربية',
  };
  return names[lang] || lang;
}
