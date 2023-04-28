import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { MdLanguage } from 'react-icons/md';
import upperFirst from 'lodash/upperFirst';

export const LanguageSwitcher = () => {
  const [, { language, changeLanguage }] = useTranslation();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={() => {
        changeLanguage(language === 'en' ? 'ru' : 'en').catch((err) =>
          console.error(err)
        );
      }}
    >
      <MdLanguage />
      <p>{upperFirst(language)}</p>
    </Button>
  );
};
