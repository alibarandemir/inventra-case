import React from 'react';
import product2 from '../../assets/product2.jpg'

export default function NewProductCard({ id, name, price }) {
  return (
    <div className="max-w-sm xl:w-80 h-[350px] rounded overflow-hidden bg-white shadow-lg cursor-pointer hover:opacity-90 text-black">
      <img
        src={product2}
        alt={name}
        className="w-full h-48 object-contain"
      />
      <div className="px-4 py-4 flex flex-col justify-between h-[120px]">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <div className="flex justify-start fixed bottom-3">
          <p className="text-gray-600 font-semibold">${price}</p>
        </div>
      </div>
    </div>
  );
}
