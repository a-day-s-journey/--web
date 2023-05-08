import * as Svgs from '@assets/svgs';

import React, { FunctionComponent, HTMLProps } from 'react';

import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

export interface HeaderLayoutProps {
  title?: string;
  leftButtonRender?: () => JSX.Element;
  rightButtonRender?: () => JSX.Element;
}

const Header: FunctionComponent<HeaderProps> = ({ title, leftButtonRender, rightButtonRender }) => {
  return (
    <div className={cx('header-container')}>
      <div className={cx('header-container-fix')}>
        <div className={cx('button-wrapper', 'button-wrapper-left')}>
          {leftButtonRender ? (
            leftButtonRender()
          ) : (
            <button>
              <Svgs.ArrowLeft />
            </button>
          )}
        </div>
        <div className={cx('title-wrapper')}>{title}</div>
        <div className={cx('button-wrapper', 'button-wrapper-right')}>
          {
            rightButtonRender && rightButtonRender()
            //   : (
            //     <button>
            //       <Svgs.ArrowLeft />
            //     </button>
            //   )
          }
        </div>
      </div>
    </div>
  );
};

export default Header;
export interface HeaderProps extends HTMLProps<HTMLDivElement>, HeaderLayoutProps {}
