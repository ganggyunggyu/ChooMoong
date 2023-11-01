import React from 'react';
import GroupCard from './GroupCard';
export default function GroupList() {
  const group = [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1];

  return (
    // <div className="sticky w-80 flex flex-col gap-3 p-3 overflow-y-scroll top-0">
    <div className="fixed md:sticky w-screen md:w-80 md:h-screen flex md:flex-col items-center overflow-x-scroll md:overflow-y-scroll gap-3 p-2">
      <div className="flex md:flex-col min-w-fit w-40 gap-3">
        <button className="p-2">새로운 그룹 만들기</button>
      </div>
      {group.map((el, i) => {
        return <GroupCard key={i} />;
      })}
    </div>
  );
}
