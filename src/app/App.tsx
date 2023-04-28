import './styles/index.scss';
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { useTheme } from './providers/ThemeProviders';
import { Sidebar } from 'widgets/Sidebar';
import { useAsync } from 'react-use';
import { initI18n } from 'shared/config/i18n';

export const App = () => {
  const { theme } = useTheme();
  const i18nState = useAsync(() => initI18n());

  if (i18nState.loading) {
    return <div>Loading...</div>;
  }

  if (i18nState.error) {
    return <div>i18n loading error: {i18nState.error.message}</div>;
  }

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
