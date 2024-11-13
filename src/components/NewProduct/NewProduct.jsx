import React from 'react'
import NewProductCard from '../Cards/NewProductCard';
import { useState,useEffect } from 'react';
import Title from '../Title/Title';
import CarouselComponent from '../Carousel/Carousel';
import { useAppContext } from '../../Context/AppContext';

export default function NewProduct() {
    const {newProducts}=useAppContext()
  return (
    <div className='mt-20'>
        <Title topTitle='Shop Brand-New Products' subTitle='New Products'/>
  
        <CarouselComponent slidesPerView='4' >
        {
            newProducts.map((item) => (
          <NewProductCard key={item.id} {...item} />
            ))
        }
        </CarouselComponent>

      
  </div>
  )
}
