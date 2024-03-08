import styles from './Button.module.css';
import { ButtonProps } from "./types";

const Button = ({ children, onClick, onAuxClick, disabled }: ButtonProps) => (
  <button className={styles['lib-button']} onClick={onClick} onAuxClick={onAuxClick} disabled={disabled}>
    {children}
  </button>
);

export default Button;
