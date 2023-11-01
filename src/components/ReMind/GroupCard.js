/** @format */

import React from 'react';

export default function GroupCard() {
  return (
    <div className="flex min-w-fit md:w-full md:h-32 md:min-h-fit items-center justiy-center bg-red-400 text-white rounded-md cursor-pointer hover:bg-red-500 transition-all">
      <div className="w-6/12 md:h-32 flex items-center justify-center p-2">
        <img
          className="w-12 md:w-20 rounded-full"
          src="https://img.icons8.com/?size=128&id=ckaioC1qqwCu&format=png"
          alt=""
        />
      </div>
      <p className="w-6/12 md:text-center">그룹 이름</p>
    </div>
  );
}
