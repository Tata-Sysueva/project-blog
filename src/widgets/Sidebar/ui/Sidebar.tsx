import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const [ collapsed, setCollapsed ] = useState(false);

  const onToggle = () => {
    setCollapsed(prev => !prev);
  }

  return (
    <div className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}>
      <button onClick={onToggle}>Toggle</button>
      <div className={cls.switcher}>
        <ThemeSwitcher />
      </div>
    </div>
 );
}