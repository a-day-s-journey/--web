import React, { FunctionComponent, HTMLProps } from 'react';

import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

export interface InputLayoutProps {
  className?: string;
  required?: boolean;
  title?: string;
}

const Label: FunctionComponent<LabelProps> = ({ required, className, title }) => {
  return (
    <div className={cx('Label', className)}>
      {title}
      {required && <span className={cx('required')}>*</span>}
    </div>
  );
};

export default Label;
export interface LabelProps extends HTMLProps<HTMLDivElement>, InputLayoutProps {}
