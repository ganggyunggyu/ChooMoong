import KakaoMap from './pages/KakaoMap';
import { Route, Routes } from 'react-router-dom';
import KakaoAuth from './components/KakaoAuth';
import HeaderBar from './components/HeaderBar';
import Main from './pages/Main';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      <HeaderBar />
      <Routes>
        <Route path="/" element={<KakaoMap />} />
        <Route path="/auth" element={<KakaoAuth />} />
      </Routes>
    </div>
  );
}

export default App;
