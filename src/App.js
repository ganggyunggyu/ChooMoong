import KakaoMap from './components/KakaoMap';
import { useState } from 'react';
import FixedForm from './components/FixedForm';
import './App.css';
import ModalOpenButton from './components/SidbarOpenButton/ModalOpenButton';
import GroupCard from './components/ReMind/GroupCard';
import GroupHome from './components/ReMind/pages/GroupHome';

function App() {
  const [sidebarView, setSidebarView] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div>
      <GroupHome />

      {isLogin ? <FixedForm /> : null}
      {/* <KakaoMap /> */}
      {/* <ModalOpenButton></ModalOpenButton> */}
    </div>
  );
}

export default App;
