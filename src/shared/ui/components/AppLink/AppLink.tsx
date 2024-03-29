import { Link, type LinkProps } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: React.FC<AppLinkProps> = ({
  className = '',
  theme = AppLinkTheme.PRIMARY,
  children,
  to,
  ...otherProps
}) => (
  <Link
    {...otherProps}
    to={to}
    className={classNames(cls.appLink, {}, [className, cls[theme]])}
  >
    {children}
  </Link>
);
