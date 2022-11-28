import React from 'react';
import Advertis from '../../Advertis/Advertis';
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
            <Advertis></Advertis>
            <Contact></Contact>
        </div>
    );
};

export default Home;