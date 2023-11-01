import React from 'react';

export default function GroupInput({ buttonText }) {
  return (
    <div className="border border-red-300 p-1 rounded-md flex gap-2">
      <input type="text" className=" p-1" />
      {buttonText ? (
        <button className="px-1 border border-red-300 rounded-md hover:bg-red-300 hover:text-white transition-all">
          {buttonText}
        </button>
      ) : null}
    </div>
  );
}
