import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { userInfoState, isLoginState } from '../atoms';
import { useNavigate } from 'react-router-dom';

export default function KakaoAuth() {
  const navigate = useNavigate();
  const setUserInfo = useSetRecoilState(userInfoState);
  const setIsLogin = useSetRecoilState(isLoginState);
  const CLIENT_ID = 'cdcc92eb3fb9484fa8ae2ca6e1eb5f62';
  const REDIRECT_URL = 'http://localhost:3000/auth';
  const code = new URL(window.location.href).searchParams.get('code');

  const getToken = async () => {
    try {
      const kakaoTokenUrl = `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&code=${code}`;
      const kakaoHeader = {
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      };
      const response = await axios.post(kakaoTokenUrl, null, { headers: kakaoHeader });
      const kakaoToken = response.data;

      getUserInfo(kakaoToken);
    } catch (error) {
      console.error('getToken 실패:', error);
    }
  };

  const getUserInfo = async kakaoToken => {
    try {
      const headers = {
        Authorization: `Bearer ${kakaoToken.access_token}`,
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      };
      const response = await axios.get('https://kapi.kakao.com/v2/user/me', { headers });
      setUserInfo(response.data);
      setIsLogin(true);
      navigate('/');
    } catch (error) {
      alert('getUserInfo 실패: ' + error);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <div className="w-screen h-screen flex items-center justify-center text-4xl">Loading..</div>
  );
}
