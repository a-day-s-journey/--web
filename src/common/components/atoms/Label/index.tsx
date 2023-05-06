import React, { FunctionComponent, HTMLProps } from 'react';

import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

export interface InputLayoutProps {
  className?: string;
  required?: boolean;
}

const Label: FunctionComponent<LabelProps> = ({ children, required, className }) => {
  return (
    <div className={cx('Label', className)}>
      {children}
      {required && <span className={cx('required')}>*</span>}
    </div>
  );
};

export default Label;
export interface LabelProps extends HTMLProps<HTMLDivElement>, InputLayoutProps {}
