import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

export const resources = {};

i18next.use(initReactI18next).init({
  fallbackLng: '',
  debug: true,
  resources,
});
