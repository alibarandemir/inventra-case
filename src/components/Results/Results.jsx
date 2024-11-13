import React from 'react'
import Title from '../Title/Title'
import { useAppContext } from '../../Context/AppContext'
import ResultCard from '../Cards/ResultCard'
import CarouselComponent from '../Carousel/Carousel'

export default function Results() {
    const {results}= useAppContext()
    
  return (
    <div>
        
        <Title topTitle='Our results'/>
        <CarouselComponent spaceBetween='80' slidesPerView='2' >
        {
            results.map((item) => (
          <ResultCard key={item.id} {...item} />
            ))
        }
        </CarouselComponent>
        
    </div>
  )
}
