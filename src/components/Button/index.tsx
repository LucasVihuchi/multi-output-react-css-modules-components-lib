import React from 'react';
import styles from './Button.module.css';
import { type ButtonProps } from './types';

const Button = ({
  children,
  onClick,
  onAuxClick,
  disabled
}: ButtonProps): JSX.Element | null => (
  <button
    className={styles['lib-button']}
    onClick={onClick}
    onAuxClick={onAuxClick}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
