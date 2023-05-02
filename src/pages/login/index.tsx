import * as A from '@components/atoms';

import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const { Kakao } = window;
const cx = classNames.bind(styles);
function Login() {
  const loginWithKakao = () => {
    Kakao.Auth.authorize({
      redirectUri: `${window.location.origin}/login/oauth`,
      scope: 'gender,birthday,age_range,account_email',
    });
  };
  return (
    <div className={cx('login-container')}>
      <div>잘사니 로그인 페이지입니다.</div>
      <A.Button
        buttonType={'default'}
        onClick={() => {
          // Kakao.Auth.authorize({});
          loginWithKakao();
        }}
      >
        카카오로 로그인하기
      </A.Button>
    </div>
  );
}
export default Login;
export const path = '/login';
