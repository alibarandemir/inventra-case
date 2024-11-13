import React from 'react';
import { StarFilled, HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import product1 from '../../assets/product1.webp'

export default function RecommendationCard({ name, price, discountPrice, rating, comments, concerns }) {
  return (
    <div className=" max-w-xl xl:w-72 border rounded-lg shadow-md p-4 flex flex-col items-center h-[500px] bg-white w-[300px]">
      {/* Favori İkonu */}
      <div className="w-full flex justify-end mb-2">
        <HeartOutlined className="text-xl cursor-pointer" />
      </div>
      
      {/* Ürün Görseli (Dummy görsel kullanıldı) */}
      <img
        src={product1}
        alt={name}
        className="w-32 h-36 mb-3"
      />
      
      {/* Ürün Adı ve Ek Bilgiler */}
      <h3 className="text-lg font-semibold text-center text-black">{name}</h3>
      <p className="text-sm text-gray-500 text-center">Glycolic Acid Blue Tonic 200 ml</p>
      
      {/* Fiyat Bilgisi */}
      <div className="text-center my-2">
        <span className="text-2xl font-bold text-black">₺ {price}</span>
        {discountPrice && (
          <span className="text-sm text-gray-400 line-through ml-2">₺ {discountPrice}</span>
        )}
      </div>
      
      {/* Derecelendirme ve Yorum Sayısı */}
      <div className="flex items-center mb-2">
        {[...Array(5)].map((_, index) => (
          <StarFilled
            key={index}
            className={index < rating ? "text-yellow-500" : "text-gray-300"}
          />
        ))}
        <span className="ml-2 text-gray-500">({comments} Comments)</span>
      </div>
      
      {/* Tespit Edilen Endişeler */}
      <div className="text-center mb-2">
        <h4 className="font-semibold text-sm text-gray-600">Detected Concerns</h4>
        <div className="flex justify-center space-x-3 mt-1">
          {concerns.map((concern, index) => (
            <span key={index} className="text-xs bg-gray-200 text-indigo-700 py-1 px-2 rounded-full">
              {concern}
            </span>
          ))}
        </div>
      </div>
      
      {/* Sepet ve Detay İkonları */}
      <div className="flex space-x-4 mt-3">
        <ShoppingCartOutlined className="text-2xl cursor-pointer text-black" />
        <button className="bg-yellow-400 p-2 rounded-full text-white font-semibold">
          Details
        </button>
      </div>
    </div>
  );
}
