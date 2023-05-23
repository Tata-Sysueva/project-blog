import { useState } from 'react';

import { useTranslation } from 'react-i18next';

import { LanguageSwitcher } from 'features/LanguageSwitcher';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className = '' }) => {
  const [isCollapsed, setCollapsed] = useState(false);
  const [t] = useTranslation();

  const onToggle = () => {
    setCollapsed((isPrev) => !isPrev);
  };

  return (
    <div
      className={classNames(cls.sidebar, { [cls.collapsed]: isCollapsed }, [
        className
      ])}
    >
      <button
        type="button"
        onClick={onToggle}
      >
        {t('general_actions:toggle')}
      </button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  );
};
