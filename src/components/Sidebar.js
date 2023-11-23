import React, { useEffect, useState } from 'react';

import { Resizable } from 're-resizable';

export default function Sidebar({
  searchValue,
  setSearchValue,
  paths,
  searchMarkers,
  setPath,
  setPosition,
}) {
  const [input, setInput] = useState('');
  const style = {
    top: '0',
    left: '0',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'solid 1px #ddd',
    background: '#C9ADA1',
    position: 'fixed',
    color: 'white',
    opacity: '0.81',
    zIndex: '1',
  };
  return (
    <Resizable
      defaultSize={{ width: '20%', height: '100%' }}
      style={style}
      minWidth="300px"
      maxWidth="80%"
      enable={{
        top: false,
        right: true,
        bottom: false,
        left: false,
        topRight: false,
        bottomRight: false,
        bottomLeft: false,
        topLeft: false,
      }}
    >
      <div className="flex items-center justify-center gap-3 p-3  overflow-auto">
        <input
          className="p-1 text-zinc-500 ring-black rounded-md focus:ring-2 focus:ring-inset focus:ring-red-200"
          type="text"
          value={input}
          onChange={e => {
            setInput(e.target.value);
          }}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              setSearchValue(input);
            }
          }}
        />
        <button
          className="p-1 rounded-md"
          style={{ background: '#C9ADA1', border: '2px solid #EAE0CC' }}
          onClick={e => {
            e.preventDefault();
            setSearchValue(input);
          }}
        >
          검색
        </button>
      </div>
      <p className="text-center py-3" style={{ borderBottom: '2px solid #EAE0CC' }}>
        검색 결과
      </p>
      <div className="flex flex-col items-center gap-1 py-2 overflow-auto max-h-48">
        {/* <p style={{ backgroundColor: '#C9ADA1' }} className='w-full h-2'></p> */}
        {searchMarkers.map((marker, i) => {
          return (
            <p onClick={() => setPosition(marker.position)} key={i} className="cursor-pointer">
              {marker.content}
            </p>
          );
        })}
      </div>
      <p className="text-center py-3" style={{ borderBottom: '2px solid #EAE0CC' }}>
        추억의 장소들
      </p>
      <div className=" flex flex-col items-center gap-1 py-2 overflow-y-scroll max-h-48">
        {paths.map((path, i) => {
          return (
            <p key={i} className="cursor-pointer">
              {path.address}
            </p>
          );
        })}
      </div>
      <button className="bg-indigo-800 p-3 rounded-md hover:scale-150 transition-all">검색</button>
    </Resizable>
  );
}
