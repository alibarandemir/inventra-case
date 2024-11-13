import React, { useState, useEffect } from 'react';
import Title from '../Title/Title';
import CarouselComponent from '../Carousel/Carousel';
import ProductConcernsCard from '../Cards/ProductConcernsCard';
import { useAppContext } from '../../Context/AppContext';

export default function ProductsForConcerns() {
    const { userInfo } = useAppContext();
    const [concerns, setConcerns] = useState([]);
    useEffect(() => {
        if (userInfo) {
            setConcerns(userInfo.concerns || []);
        }
    }, [userInfo]); 

    if (!userInfo) {
        return <div>Loading</div>;
    }
    return (
        <div className="mt-20">
            <Title topTitle="Product for Your Concerns" subTitle="Dont worry" />
            
            {concerns.length > 0 ? (
                <CarouselComponent slidesPerView={4}  spaceBetween='50'>
                    {concerns.map((item) => (
                        <ProductConcernsCard key={item.id} {...item} />
                    ))}
                </CarouselComponent>
            ) : (
                <div>No concerns available</div> 
            )}
        </div>
    );
}
