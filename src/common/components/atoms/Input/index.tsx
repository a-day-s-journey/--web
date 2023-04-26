// import { ButtonLayout, ButtonLayoutProps } from './styles';
import React, { FunctionComponent } from 'react';

import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

export interface InputLayoutProps {
  type?: 'text' | string;
  placeholder?: string;
}

const Input: FunctionComponent<InputProps> = ({ placeholder, type }) => {
  return <input className={cx('input')} type={type} placeholder={placeholder ?? ''} />;
};

export default Input;
export type InputProps = InputLayoutProps;
