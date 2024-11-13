import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import React from 'react';

export default function ResultCard({ name, rating, comment }) {
  // rating değerini 0 ile 5 arasında sınırlamak
  const validRating = Math.min(Math.max(rating, 0), 5);

  return (
    <div className="border rounded-lg shadow-lg p-4 max-w-sm mx-auto bg-white">
      {/* Avatar ve İsim */}
      <div className="flex gap-x-4 items-center mb-4">
        <Avatar icon={<UserOutlined/>} />
        <h2 className="text-lg text-black font-semibold">{name}</h2>
      </div>

      {/* Puan (Yıldızlarla) */}
      <div className="flex items-center mb-4 gap-x-3">
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i} className={i < validRating ? 'text-yellow-400' : 'text-gray-300'}>
            ★
          </span>
        ))}
        <p className='text-black'>{rating}</p>
      </div>

      {/* Yorum */}
      <p className="text-gray-600">{comment}</p>
    </div>
  );
}
