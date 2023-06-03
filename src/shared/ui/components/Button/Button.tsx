import { type ButtonHTMLAttributes, type FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  type?: 'button' | 'submit' | 'reset';
  label?: string;
  isDisabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
  className = '',
  children,
  theme = ThemeButton.CLEAR,
  type,
  label,
  isDisabled,
  ...otherProps
}) => (
  <button
    {...otherProps}
    className={classNames(cls.button, {}, [className, cls[theme]])}
    type={type || 'button'}
    disabled={isDisabled}
  >
    {label ?? children}
  </button>
);
