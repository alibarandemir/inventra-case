import React from 'react';
import Title from '../Title/Title';
import Analyze from '../../assets/analyze.jpg';

export default function SkinAnalyze() {
  return (
    <div>
      <Title topTitle="Know Your Skin" />
      <div className="flex flex-col lg:flex-row bg-white rounded-lg lg:h-[400px] h-auto p-4 lg:p-0">
        {/* Sol Taraftaki Metin */}
        <div className="flex flex-col justify-center text-center lg:text-left mx-auto lg:mx-32 mb-4 lg:mb-0">
          <h3 className="text-gray-900 font-bold text-xl mb-3">Let's Personalize Your Profile</h3>
          <button className="bg-black text-white px-6 py-2 rounded-2xl">Start Now</button>
        </div>
        {/* Fotoğraf */}
        <img 
          src={Analyze} 
          alt="Analyze" 
          className="w-full  h-64 lg:h-full object-cover rounded-md" 
        />
      </div>
    </div>
  );
}
