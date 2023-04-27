import { Link } from 'react-router-dom';
import './styles/index.scss';
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from './providers/ThemeProviders';
import { AppRouter } from './providers/router';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to="/">Главная</Link>
      <Link to="/about">О сайте</Link>
      <AppRouter />
    </div>
  )
}
