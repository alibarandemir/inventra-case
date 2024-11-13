import React, { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';

export default function Searchbar() {
  const [searchText, setSearchText] = useState('');

  return (
    <div className="flex items-center rounded-full border border-gray-300 shadow-md bg-white px-4 py-2 w-full max-w-md">
      <SearchOutlined style={{ color: 'gray', fontSize: '20px', marginRight: '8px' }} />
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search for brand, product or category"
        className="flex-grow outline-none bg-transparent text-gray-700 placeholder-gray-400 text-base"
      />
    </div>
  );
}
