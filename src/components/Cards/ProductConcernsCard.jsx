import React from 'react';
import product3 from '../../assets/product3.webp'
export default function ProductConcernsCard({ imageUrl, name, description }) {
  return (
    <div className="w-64 h-[380px] rounded overflow-hidden bg-white shadow-lg text-black flex flex-col">
      {/* Ürün Resmi */}
      <img
        src={product3}
        alt={name}
        className="w-full h-40  object-contain"
      />
      
      {/* Ürün İsmi ve Açıklaması */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 text-sm flex-grow">{description}</p>
      </div>

      {/* Alışveriş Butonu */}
      <div className="px-4 pb-4">
        <button className="w-full  text-indigo-800 py-2 rounded hover:opacity-65">
          Shop Now
        </button>
      </div>
    </div>
  );
}
