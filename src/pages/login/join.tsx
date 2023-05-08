import * as A from '@components/atoms';
import * as M from '@components/molecules';

import React, { useState } from 'react';

import classNames from 'classnames/bind';
import { numberToPhoneNumber } from '@utils/format';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);
function Join() {
  const [phoneInfo, setPhoneInfo] = useState<{ [key: string]: any }>({
    number: '',
    authNumber: '',
    getAuthNumber: false,
    isValid: false,
  });
  const [userInfoStep, setUserInfoStep] = useState<{ [key: string]: any }>();
  const [userInfo, setUserInfo] = useState<{ [key: string]: any }[]>([
    {
      id: 1,
      title: '초등학교 정보를 입력해주세요.',
      formData: [
        { question: '학교명', isRequired: true, value: '' },
        { question: '졸업년도', isRequired: true, value: '' },
      ],
    },
    {
      id: 2,
      title: '중학교 정보를 입력해주세요.',
      formData: [
        { question: '학교명', isRequired: true, value: '' },
        { question: '졸업년도', isRequired: true, value: '' },
      ],
    },
    {
      id: 3,
      title: '고등학교 정보를 입력해주세요.',
      formData: [
        { question: '학교명', isRequired: true, value: '' },
        { question: '졸업년도', isRequired: true, value: '' },
      ],
    },
    {
      id: 4,
      title: '현재 거주중인 지역을 입력해주세요.',
      formData: [{ question: '지역', isRequired: true, value: '' }],
    },
    {
      id: 5,
      skippable: true,
      title: 'MBTI를 적어주세요.',
      formData: [{ question: 'MBTI', isRequired: true, value: '' }],
    },
  ]);
  function handleChange({ infoName, key, value }) {
    if (infoName === 'phoneInfo') {
      setPhoneInfo({ ...phoneInfo, [key]: value });
    }
    if (infoName === 'userInfoStep') {
      setUserInfoStep({ ...userInfoStep, [key]: value });
    }
  }
  return (
    <div className={cx('signup-container')}>
      <M.Header title={'회원가입'} />
      <div className={cx('form-container')}>
        {phoneInfo?.isValid ? (
          <div className={cx('user-info-container')}>
            {userInfoStep?.title}
            {userInfoStep?.formData?.map((item, index) => {
              return (
                <div className={cx('form-wrapper')} key={item?.question + userInfoStep?.id + index}>
                  <A.Label title={item?.question} required={item?.isRequired} />
                  <A.Input
                    onChange={(value) => {
                      const formDataTemp = userInfoStep['formData'];
                      formDataTemp[index] = { ...item, ['value']: value };
                      handleChange({
                        infoName: 'userInfoStep',
                        key: 'formData',
                        value: formDataTemp,
                      });
                    }}
                    value={item?.value}
                  />
                </div>
              );
            })}
            <A.Button
              buttonType={'default'}
              onClick={() => {
                userInfo[userInfoStep.id - 1] = userInfoStep;
                setUserInfo(userInfo);
                if (userInfoStep.id === userInfo?.length) {
                  console.log(userInfo);
                } else {
                  setUserInfoStep(userInfo?.filter((step) => step?.id === userInfoStep?.id + 1)[0]);
                }
              }}
              isFull
            >
              {userInfoStep.id === userInfo?.length ? '완료' : '다음'}
            </A.Button>
            {userInfoStep?.skippable && <div className={cx('skip-btn')}>건너뛰기</div>}
          </div>
        ) : (
          <div className={cx('phonecheck-container')}>
            <h1>휴대폰 번호를 인증해주세요</h1>
            <A.Input
              isNumeric
              placeholder="휴대폰 번호를 입력해주세요."
              onChange={(value) => {
                handleChange({
                  infoName: 'phoneInfo',
                  key: 'number',
                  value: value.replace('-', ''),
                });
              }}
              value={numberToPhoneNumber(phoneInfo?.number)}
            />
            {phoneInfo?.getAuthNumber && (
              <A.Input
                isNumeric
                placeholder="인증번호를 입력해주세요."
                onChange={(value) => {
                  handleChange({
                    infoName: 'phoneInfo',
                    key: 'authNumber',
                    value: value,
                  });
                }}
                value={phoneInfo?.authNumber}
                label={'인증시간'}
              />
            )}
            <A.Button
              buttonType={'default'}
              onClick={() => {
                if (phoneInfo.getAuthNumber) {
                  handleChange({
                    infoName: 'phoneInfo',
                    key: 'isValid',
                    value: true,
                  });
                  setUserInfoStep(userInfo[0]);
                } else {
                  handleChange({
                    infoName: 'phoneInfo',
                    key: 'getAuthNumber',
                    value: true,
                  });
                }
              }}
              isFull
            >
              {phoneInfo.getAuthNumber ? '다음' : '인증문자 받기'}
            </A.Button>
          </div>
        )}
      </div>
    </div>
  );
}
export default Join;
export const path = '/join';
