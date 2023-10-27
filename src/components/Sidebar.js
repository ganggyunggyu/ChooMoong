/** @format */

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
    display: 'absolute',
    top: '0',
    left: '0',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'solid 1px #ddd',
    background: '#C9ADA1',
    position: 'fixed',
    zIndex: '10',
    color: 'white',
  };
  return (
    <Resizable
      defaultSize={{ width: '20%', height: '100%' }}
      style={style}
      minWidth={'300px'}
      maxWidth={'80%'}
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
      <div className='flex items-center justify-center gap-3 p-3'>
        <input
          className='p-1 text-zinc-500 ring-black rounded-md'
          type='text'
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          className='p-1 rounded-md'
          style={{ background: '#C9ADA1', border: '2px solid #EAE0CC' }}
          onClick={(e) => {
            e.preventDefault();
            setSearchValue(input);
          }}
        >
          검색
        </button>
      </div>
      <div className='z-50 flex flex-col items-center justify-center gap-1 py-2'>
        <p className='p-1' style={{ borderBottom: '2px solid #EAE0CC' }}>
          검색 결과
        </p>
        {/* <p style={{ backgroundColor: '#C9ADA1' }} className='w-full h-2'></p> */}
        {searchMarkers.map((marker, i) => {
          return (
            <p
              onClick={() => setPosition(marker.position)}
              key={i}
              className='cursor-pointer'
            >
              {marker.content}
            </p>
          );
        })}
      </div>
      <div className='z-50 flex flex-col items-center justify-center gap-2 py-2'>
        <p className='p-1' style={{ borderBottom: '2px solid #EAE0CC' }}>
          추억의 장소들
        </p>
        {paths.map((path, i) => {
          return (
            <p key={i} className='cursor-pointer'>
              {path.address}
            </p>
          );
        })}
      </div>
    </Resizable>
  );
}
