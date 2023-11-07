import KakaoMap from './components/KakaoMap';
import { useState } from 'react';
import FixedForm from './components/FixedForm';
import './App.css';
import ModalOpenButton from './components/SidbarOpenButton/ModalOpenButton';
import GroupCard from './components/ReMind/GroupCard';
import GroupHome from './components/ReMind/pages/GroupHome';
import { Route, Routes } from 'react-router-dom';
import KakaoAuth from './components/KakaoAuth';
import { useRecoilValue } from 'recoil';
import { isLoginState, userInfoState } from './atoms';

function App() {
  const userInfo = useRecoilValue(userInfoState);
  const isLogin = useRecoilValue(isLoginState);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {isLogin ? null : <FixedForm />}
              <KakaoMap />
            </>
          }
        />
        <Route path="/auth" element={<KakaoAuth />} />
      </Routes>
    </div>
  );
}

export default App;
