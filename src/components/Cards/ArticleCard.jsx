import React from 'react';
import { HeartOutlined,ClockCircleOutlined,BookOutlined } from '@ant-design/icons';
import article from '../../assets/article.jpeg'

export default function ArticleCard({title, readingNum, readingTime }) {
  return (
    <div className="border rounded-lg shadow-lg p-4 max-w-sm mx-auto h-[340px] bg-white">
      {/* Fotoğraf */}
      <img
        src={article}
        alt="Article"
        className="w-full h-48 object-cover rounded-lg mb-4"
      />

      {/* Başlık ve Kaydetme İkonu */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-black">{title}</h3>
        <HeartOutlined className="text-red-500 cursor-pointer" />
      </div>

      {/* Okunma Sayısı ve Ortalama Okuma Süresi */}
      <div className="flex items-center justify-between text-sm text-gray-500">
        <p className='flex gap-x-2'><BookOutlined/><span>{readingNum} Readers</span></p>
        <p className='flex gap-x-2'><ClockCircleOutlined/><span>{readingTime} mins</span></p>
      </div>
    </div>
  );
}
