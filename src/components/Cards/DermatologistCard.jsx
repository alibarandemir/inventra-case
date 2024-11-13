import React from 'react';
import Doctor from '../../assets/doctor.jpg'

export default function DermatologistCard({ imageUrl, name, experience, rating }) {
  return (
    <div className="w-[400px] h-48 flex bg-white shadow-lg rounded overflow-hidden">
      {/* Sol Tarafta Fotoğraf */}
      <img
        src={Doctor}
        alt={name}
        className="w-1/3 h-full object-cover"
      />

      {/* Sağ Tarafta Bilgiler */}
      <div className="p-4 flex flex-col justify-between w-2/3">
        {/* Doktor Adı */}
        <h3 className="text-lg text-black font-semibold">{name}</h3>

        {/* Doktor Deneyimi */}
        <p className="text-gray-600 text-sm">Experience: {experience} years</p>

        {/* Doktor Puanı */}
        <p className="text-yellow-500 text-sm">Rating: ⭐ {rating}</p>

        {/* Know More Butonu */}
        <button className="mt-2 px-2 py-2 bg-black text-white text-sm rounded-2xl hover:opacity-80">
          Know More
        </button>
      </div>
    </div>
  );
}
