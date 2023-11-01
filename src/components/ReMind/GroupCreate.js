import React from 'react';
import GroupInput from './GroupInput';

export default function GroupCreate() {
  return (
    <div className="flex flex-col items-center w-6/12 gap-5 mt-40 md:mt-20 transition-all">
      <h1 className="text-4xl">그룹 생성</h1>
      <form className="flex flex-col gap-5">
        <p>그룹 이름을 입력해주세요</p>
        <GroupInput />
        <p>초대할 멤버의 이름을 입력해주세요</p>
        <GroupInput buttonText="검색" />
        <p>멤버 목록</p>
        <ul className="flex flex-col gap-2">
          <li>멤버1</li>
          <li>멤버2</li>
          <li>멤ㅂ버3</li>
          <li>멤버4</li>
        </ul>
        <button className="border border-red-300 p-2 rounded-md hover:bg-red-300 hover:text-white transition-all">
          생성하기
        </button>
      </form>
    </div>
  );
}
