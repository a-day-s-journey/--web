import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);
function Main2() {
  return (
    <div className={cx('main-container')}>
      <button>잘사니 메인2 페이지입니다.</button>
    </div>
  );
}
export default Main2;
export const path = '/main2';
