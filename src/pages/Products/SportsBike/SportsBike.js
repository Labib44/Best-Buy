import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SportsBikeCard from './SportsBikeCard';

const SportsBike = () => {
    const categoryProduct=useLoaderData();
    console.log(categoryProduct);
    // const { data:productsCollection=[] } = useQuery({
    //     queryKey: ['productsCollection'],
    //     queryFn: () => fetch('http://localhost:5000/productsCollection')
    //         .then(res => res.json())
    // })
    return (
        <div className='grid mt-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                categoryProduct.map(spBike=><SportsBikeCard
                key={spBike._id}
                spBike={spBike}
                >

                </SportsBikeCard>)
            }
        </div>
    );
};

export default SportsBike;