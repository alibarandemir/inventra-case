import React, { useEffect, useState } from 'react';
import Title from '../Title/Title';
import { Carousel } from 'antd';
import CarouselComponent from '../Carousel/Carousel';
import RecommendationCard from '../Cards/RecommendationCard';
import { useAppContext } from '../../Context/AppContext';

export default function Recommendations() {
  const {userInfo}= useAppContext()
  if(!userInfo){
    return <div>Loading..</div>
  }

  return (
    <div className='mt-20'>
      <Title topTitle='Products Recommendations' subTitle='Based On Your Scan Results'/>
    
        <CarouselComponent slidesPerView='4' spaceBetween={40} >
        {
          userInfo.recommendations.map((item) => (
            <RecommendationCard key={item.id} {...item} />
          ))
        }
      </CarouselComponent>
  
        
    </div>
  );
}
