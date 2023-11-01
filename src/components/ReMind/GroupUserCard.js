import React from 'react';

export default function GroupUserCard({ userName }) {
  return (
    <div className="flex items-center p-1">
      <p>{userName}</p>
      <div className="grow" />
      <button className="px-1 border border-red-300 rounded-md hover:bg-red-300">삭제</button>
    </div>
  );
}
