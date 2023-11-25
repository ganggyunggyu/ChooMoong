import React from 'react';
import Search from './Search';
import KakaoLogin from './KakaoLogin';
import { isLoginState, userInfoState } from '../atoms';
import { useRecoilValue } from 'recoil';
export default function HeaderBar() {
  const userInfo = useRecoilValue(userInfoState);
  const isLogin = useRecoilValue(isLoginState);
  return (
    <div className="fixed top-0 z-10 w-screen h-14 bg-white border border-b flex items-center justify-center shadow-lg">
      <div className="w-11/12 flex items-center justify-between">
        <div>로고</div>
        <div>
          <Search />
        </div>
        {!isLogin && <button>로그인</button>}
        <div className="flex gap-2">
          <KakaoLogin />
          <button
            onClick={() => {
              console.log(userInfo);
            }}
          >
            로그인 성공
          </button>
          <button>카카오 친구목록</button>
        </div>
      </div>
    </div>
  );
}
