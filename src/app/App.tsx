import './styles/index.scss';
import { useAsync } from 'react-use';

import { initI18n } from 'shared/config/i18n';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProviders';

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
  );
};
