// import { ButtonLayout, ButtonLayoutProps } from './styles';
import React, { FunctionComponent, HTMLProps } from 'react';

import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

export interface ButtonLayoutProps {
  buttonType: 'primary' | 'ghost' | 'disabled' | 'default';
  buttonSize?: 'SM' | 'MD' | 'LG';
  isFull?: boolean;
}

const Button: FunctionComponent<ButtonProps> = ({ children, buttonSize, buttonType, isFull }) => {
  return (
    <button
      className={cx(
        'button',
        isFull && 'button-isFull',
        `button-${buttonType ?? 'default'}`,
        `button-${buttonSize ?? 'MD'}`,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
export interface ButtonProps extends HTMLProps<HTMLButtonElement>, ButtonLayoutProps {}
