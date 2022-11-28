import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertisCard from './AdvertisCard';

const Advertis = () => {
    const { data:advertis=[] } = useQuery({
        queryKey: ['advertis'],
        queryFn: () => fetch('http://localhost:5000/advertis')
            .then(res => res.json())
    });
    return (
        <div>
            <div className='text-center m-5 p-5'>
                <h3 className='text-4xl font-bold text-primary'>Advertisement</h3>

            </div>
            <div className='grid mt-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    advertis.map(adver => <AdvertisCard
                        key={adver.id}
                        adver={adver}
                    >

                    </AdvertisCard>)
                }

            </div>
        </div>
    );
};

export default Advertis;