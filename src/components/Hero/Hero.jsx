import React from 'react';
import { Carousel } from 'antd';
import hero1 from '../../assets/hero1.webp'; // Import yerel dosyayı
import hero2 from '../../assets/hero2.webp';
import hero3 from '../../assets/hero3.webp';
import CarouselComponent from '../Carousel/Carousel';

export default function Hero() {
  const carouselItems = [
    {
      image: hero1, // Yerel dosya kullanımı
      title: 'AI Enhanced Personalized Beauty',
      description: 'Unlock the secrets of your skin',
    },
    {
      image: hero2,
      title: 'Unforgettable Quality',
      description: 'Make every moment count with unforgettableu experiences.',
    },
    {
      image: hero3,
      title: 'Your Journey Starts Here',
      description: 'Find the perfect destination for your next journey.',
    },
  ];

  return (
    <div className="hero-container w-full h-[80vh] relative">
      <div className="flex flex-col text-black mt-12 text-left">
        <h2>Welcome Back, <span className="text-2xl font-bold">Buse</span></h2>
        <p className="text-gray-600">Lets Take Care off!</p>
      </div>
      <CarouselComponent isSingleSlide={true} autoplay={true}>
        {carouselItems.map((item, index) => (
          <div key={index} className="h-[80vh]">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }} // Doğru image URL
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-white text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{item.title}</h1>
                <p className="text-lg md:text-2xl max-w-lg">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </CarouselComponent>
    </div>
  );
}
