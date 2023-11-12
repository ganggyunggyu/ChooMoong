import KakaoMap from './components/KakaoMap';
import { useState } from 'react';
import FixedForm from './components/FixedForm';

import { Route, Routes } from 'react-router-dom';
import KakaoAuth from './components/KakaoAuth';
import { useRecoilValue } from 'recoil';
import { isLoginState, userInfoState } from './atoms';
import HeaderBar from './components/HeaderBar';

function App() {
  const userInfo = useRecoilValue(userInfoState);
  const isLogin = useRecoilValue(isLoginState);
  const [signModal, setSignModal] = useState(false);

  return (
    <div>
      <HeaderBar />
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
