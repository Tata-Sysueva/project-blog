import type en from './locales/en.json';
import { supportedLocales } from './i18n.constants';
import { ArrayValues } from 'shared/helpers.types';

export type AppLocale = ArrayValues<typeof supportedLocales>;
export type I18nNamespaces = keyof typeof en;
