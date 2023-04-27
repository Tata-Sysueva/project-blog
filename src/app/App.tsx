import './styles/index.scss';
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { useTheme } from './providers/ThemeProviders';
import { Sidebar } from 'widgets/Sidebar';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  )
}
