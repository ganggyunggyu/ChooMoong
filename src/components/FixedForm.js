import React, { useState } from 'react';
import KakaoLogin from './KakaoLogin';

export default function FixedForm() {
  const isModalView = () => {};

  return (
    <form
      style={{ border: '2px solid #E3DAB1' }}
      className="FixedCenter flex flex-col items-center justify-center gap-3 bg-white h-auto p-5 rounded-lg z-10 relative"
    >
      <div
        onClick={() => isModalView()}
        className="absolute top-2 right-2 bg-red-400 hover:bg-red-500 rounded-full w-5 h-5 flex items-center justify-center cursor-pointer	"
      >
        <span className="">X</span>
      </div>
      <h1>추뭉</h1>
      <input placeholder="ID" className=" rounded-md p-1  focus:bg-slate-100 w-10/12" type="text" />
      <input
        placeholder="PASSWORD"
        className=" rounded-md w-10/12 p-1 focus:bg-slate-100"
        type="password"
      />
      <button type="button" className="w-10/12 p-1 hover:bg-slate-100 rounded-md">
        LOGIN !
      </button>
      <KakaoLogin />
    </form>
  );
}
