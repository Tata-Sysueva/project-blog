import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/components/AppLink/AppLink';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className = '' }: NavbarProps) => {
  const [t] = useTranslation();

  return (
    <div
      className={classNames(cls.navbar, {}, [className])}
      data-testid="navbar"
    >
      <div className={cls.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to="/"
        >
          {t('navigation:main')}
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to="/about"
        >
          {t('navigation:about')}
        </AppLink>
      </div>
    </div>
  );
};
