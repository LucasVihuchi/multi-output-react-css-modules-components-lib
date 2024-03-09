import React from 'react';
import styles from './Button.module.css';
import { type ButtonProps } from './types';
import clsx from 'clsx';

const Button = ({
  children,
  onClick,
  onAuxClick,
  disabled
}: ButtonProps): JSX.Element | null => (
  <button
    className={clsx([
      styles['lib-button'],
      disabled && styles['lib-button--disabled']
    ])}
    onClick={onClick}
    onAuxClick={onAuxClick}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
