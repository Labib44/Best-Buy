import React from 'react';
import Categorys from '../../Categorys/Categorys';
import Contact from '../../Contact/Contact';
import Pricing from '../../Pricing/Pricing';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Categorys></Categorys>
           <Pricing></Pricing>
            <Contact></Contact>
        </div>
    );
};

export default Home;