import React from 'react';
import GroupCard from '../GroupCard';
import GroupList from '../GroupList';
import GroupDetail from '../GroupDetail';
import GroupCreate from '../GroupCreate';

export default function GroupHome() {
  return (
    <div>
      <div className="flex">
        <GroupList />
        <div className="w-full flex items-centers justify-center">
          <GroupDetail />
          <GroupCreate />
        </div>
      </div>
    </div>
  );
}
