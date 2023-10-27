/** @format */

import KakaoMap from './components/KakaoMap';
import { useState } from 'react';

function App() {
  const [sidebarView, setSidebarView] = useState(true);
  return (
    <div>
      <KakaoMap />
    </div>
  );
}

export default App;
