import './styles/index.scss';
import { useAsync } from 'react-use';

import { initI18n } from 'shared/config/i18n';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProviders';
import { Theme } from './providers/ThemeProviders/lib/ThemeContext';

export const App = () => {
  const { theme } = useTheme();
  const i18nState = useAsync(() => initI18n());

  if (i18nState.loading) {
    return <div>Loading...</div>;
  }

  if (i18nState.error) {
    // eslint-disable-next-line i18next/no-literal-string -- This is not required for this line
    return <div>i18n loading error: {i18nState.error.message}</div>;
  }

  const appTheme = theme || Theme.LIGHT;

  return (
    <div className={classNames('app', {}, [appTheme])}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};
