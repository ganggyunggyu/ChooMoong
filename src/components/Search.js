import React from 'react';
import SearchIcon from './icon/SearchIcon';
import { useSetRecoilState } from 'recoil';
import { searchValueState } from '../atoms';

export default function Search() {
  const setSearchValue = useSetRecoilState(searchValueState);
  const inputValue = e => {
    setSearchValue(e.target.value);
  };
  return (
    <div className="p-1 border rounded flex items-center relative">
      <input
        onChange={e => {
          inputValue(e);
        }}
        className=" focus:bg-slate-100 w-10/12"
        type="text"
      />
      <button ㅐ className="absolute right-1" type="button">
        <SearchIcon />
      </button>
    </div>
  );
}
