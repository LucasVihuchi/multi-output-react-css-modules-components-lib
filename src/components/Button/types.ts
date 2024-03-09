import { type ButtonHTMLAttributes } from 'react';

export type ButtonProps = Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'onClick' | 'onAuxClick' | 'disabled'>
