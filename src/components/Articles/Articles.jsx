import React from 'react'
import Title from '../Title/Title'
import ArticleCard from '../Cards/ArticleCard'
import CarouselComponent from '../Carousel/Carousel'
import { useAppContext } from '../../Context/AppContext'

export default function Articles() {
  const {articles}= useAppContext()
  return (
    <div>
        <Title topTitle='Articles' subTitle='Short-But-Sweat Reads'/>
        <CarouselComponent spaceBetween='50' slidesPerView='4' >
        {
            articles.map((item) => (
          <ArticleCard key={item.id} {...item} />
            ))
        }
        </CarouselComponent>
        
    </div>
  )
}
