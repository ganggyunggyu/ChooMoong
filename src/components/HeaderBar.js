import React from 'react';
import Search from './Search';

export default function HeaderBar() {
  return (
    <div className="fixed top-0 z-10 w-screen h-14 bg-white border border-b flex items-center justify-center shadow-lg">
      <div className="w-11/12 flex items-center justify-between">
        <div>로고</div>
        <div>
          <Search />
        </div>
        <div className="flex gap-2">
          <button>로그인</button>
        </div>
      </div>
    </div>
  );
}
