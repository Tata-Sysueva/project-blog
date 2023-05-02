import { type ButtonHTMLAttributes, type FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  theme,
  type = 'button',
  ...otherProps
}) => (
  <button
    {...otherProps}
    className={classNames(cls.button, {}, [className, cls[theme]])}
    type={type || 'button'}
  >
    {children}
  </button>
);
