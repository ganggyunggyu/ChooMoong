import React from 'react';
import { KAKAOAPIKEY, REQUESTURL } from '../config';

export default function KakaoLogin() {
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAOAPIKEY}&redirect_uri=${REQUESTURL}&response_type=code`;

  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <button
      onClick={handleLogin}
      type="button"
      className="bg-yellow-400 rounded-md p-1 hover:bg-yellow-500 w-10/12"
    >
      KAKAO LOGIN !
    </button>
  );
}
