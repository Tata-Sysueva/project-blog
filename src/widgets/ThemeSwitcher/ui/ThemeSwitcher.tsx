import { useTheme } from 'app/providers/ThemeProviders';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import ToggleIcon from 'shared/assets/icons/theme-toggle-icon.svg'
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme();

  return (
    <Button 
      theme={ThemeButton.CLEAR}
      className={classNames(cls.themeSwitcher, {}, [className, cls[theme]])}
      onClick={toggleTheme}
    >
      <ToggleIcon />
    </Button>
 );
}