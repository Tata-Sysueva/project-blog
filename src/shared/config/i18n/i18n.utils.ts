import { supportedLocales } from './i18n.constants';
import { AppLocale } from './i18n.types';


export const isSupportedLocale = (lang?: string): lang is AppLocale =>
  supportedLocales.includes(lang as AppLocale);
