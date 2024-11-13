import React from 'react'
import Title from '../Title/Title'
import DermatologistCard from '../Cards/DermatologistCard'
import CarouselComponent from '../Carousel/Carousel';
import { useAppContext } from '../../Context/AppContext';

export default function () {
    const {doctors}= useAppContext()
    if(!doctors){
      return <div>Loading</div>
    }
  return (
    <div>
        <Title topTitle='Consult Dermatologist'/>
        <CarouselComponent spaceBetween='80' slidesPerView='3' >
        {
            doctors.map((item) => (
          <DermatologistCard key={item.id} {...item} />
            ))
        }
        </CarouselComponent>
    </div>
  )
}
