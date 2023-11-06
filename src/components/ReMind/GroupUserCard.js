import React from 'react';
import Styles from './GroupUserCard.module.css';

export default function GroupUserCard({ userName, buttonText, onClick }) {
  return (
    <div className="flex items-center p-1">
      <p>{userName}</p>
      <div className="grow" />
      {buttonText ? (
        <button
          onClick={onClick}
          className={`${Styles.GroupUserCardButton} px-1 border border-red-300 rounded-md hover:bg-red-300`}
        >
          {buttonText}
        </button>
      ) : null}
    </div>
  );
}
