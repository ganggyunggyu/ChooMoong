/** @format */

import React from 'react';

export default function FixedForm() {
  return (
    <form
      style={{ border: '2px solid #E3DAB1' }}
      className='FixedCenter flex flex-col items-center justify-center gap-3 bg-white h-auto p-3 rounded-lg z-10'
    >
      <h1>추뭉</h1>
      <input
        placeholder='ID'
        className='text-center rounded-md w-48'
        type='text'
      />
      <input
        placeholder='PASSWORD'
        className='text-center rounded-md w-48'
        type='password'
      />
      <button type='button' className='w-6/12'>
        LOGIN !
      </button>
    </form>
  );
}
