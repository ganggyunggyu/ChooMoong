import React from 'react';
import KakaoMap from './KakaoMap';
import Sidebar from '../components/Sidebar';

export default function Main() {
  return (
    <div>
      <Sidebar />
      <KakaoMap />
    </div>
  );
}
