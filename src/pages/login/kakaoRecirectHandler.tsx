import React, { useEffect, useState } from 'react';

import axios from 'axios';

const { Kakao } = window;
function KakaoRecirectHandler() {
  interface UserInfoType {
    [index: string]: string; //HTMLElement; //React.ReactNode;
  }
  const [token, setToken] = useState<string>('');
  const [userInfo, setUserInfo] = useState<UserInfoType | undefined>(undefined);
  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get('code');
    const grant_type = 'authorization_code';
    const client_id = process.env.REACT_APP_KAKAO_CLIENT_ID;
    axios
      .post(
        `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=${window.location.origin}/login/oauth&code=${code}`,
        {
          headers: {
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
          },
        },
      )
      .then((res) => {
        console.log(res);
        setToken(res?.data?.access_token ?? '');
        Kakao.Auth.setAccessToken(res.data.access_token);
        Kakao.API.request({
          url: '/v2/user/me',
          success: function (response: any) {
            console.log(response);
            setUserInfo(response?.kakao_account);
          },
          fail: function (error: any) {
            console.log(error);
          },
        });
      });
  }, []);
  // TODO callback url login으로 변경하고 해당 함수따로 만들기

  return (
    <div>
      kakao login 완료
      <br />
      {token && `token: ${token}`}
      <br />
      {userInfo && `email: ${userInfo?.email}`}
      <br />
      결과 값 보는 방법: 개발자도구-network
    </div>
  );
}
export default KakaoRecirectHandler;
export const path = '/login/oauth';
/*
/oauth/token response
{
  "access_token": "O-AN58PBh_0lNk-LQr2J84vtgk6hqYxlIanksFNhCinI2gAAAYfdwaY0",
  "expires_in": 7199,
  "refresh_token": "8CAaXQofRq7xRB0VyLV5pI7clYwopGXXNnFpwu6DCinI2gAAAYfdwaYy",
  "refresh_token_expires_in": 5183999,
  "scope": "age_range birthday gender",
  "token_type": "bearer"
}

/user/me response
{
  "connected_at": "2023-05-02T15:06:09Z",
  "id": 2772779538,
  "kakao_account": {
    "age_range": "20~29",
    "age_range_needs_agreement": false,
    "birthday": "0522",
    "birthday_needs_agreement": false,
    "birthday_type": "SOLAR",
    "gender": "female",
    "gender_needs_agreement": false,
    "has_age_range": true,
    "has_birthday": true,
    "has_gender": true
  }
}
*/
