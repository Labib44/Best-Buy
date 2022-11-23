import React from 'react';
import Category from './Category';
import sports from '../../Assets/sports .jpeg'
import cruiser from '../../Assets/cruiser.jpg'
import naked from '../../Assets/naked.jpg'

const Categorys = () => {
    const categoryData = [
        {
            id: 1,
            name: 'Sports Bike',
            discription: 'Here is lot of sports bike and good condition.',
            img: sports,
        },
        {
            id: 2,
            name: 'Cruiser Bike',
            discription: 'Here is lot of cruiser bike and good condition.',
            img: cruiser,
        },
        {
            id: 3,
            name: 'Naked Sports Bike',
            discription: 'Here is lot of naked bike and good condition.',
            img: naked,
        }
    ];
    return (
        <div>
            <div className='text-center m-5 p-5'>
                <h3 className='text-4xl font-bold text-primary'>Our Categorys</h3>

            </div>
            <div className='grid mt-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    categoryData.map(category => <Category
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