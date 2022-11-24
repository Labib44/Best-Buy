import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Category from './Category';


const Categorys = () => {
    const { data:categorysCollection=[] } = useQuery({
        queryKey: ['categorysCollection'],
        queryFn: () => fetch('http://localhost:5000/categorysCollection')
            .then(res => res.json())
    })
   
    return (
        <div>
            <div className='text-center m-5 p-5'>
                <h3 className='text-4xl font-bold text-primary'>Our Categorys</h3>

            </div>
            <div className='grid mt-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    categorysCollection.map(category => <Category
                        key={category.id}
                        category={category}
                    >

                    </Category>)
                }

            </div>
        </div>
    );
};

export default Categorys;