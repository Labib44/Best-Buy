import React from 'react';
import './Banner.css'
import img1 from '../../../Assets/sports .jpeg'
import img2 from '../../../Assets/cruiser.jpg'
import img3 from '../../../Assets/naked.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full img-modify">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full" alt=''/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute  transform -translate-y-1/2 left-1/3 bottom-0">
                    <h1 className='text-6xl font-bold text-slate-700'>Sports Bike</h1>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" alt=''/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute  transform -translate-y-1/2 left-1/3 bottom-0">
                    <h1 className='text-6xl font-bold text-slate-700'>Cruiser Bike</h1>
                </div>
                
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" alt=''/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute  transform -translate-y-1/2 left-1/3 bottom-0">
                    <h1 className='text-6xl font-bold text-slate-700'>Naked Sports Bike</h1>
                </div>
            </div>
           
        </div>
    );
};

export default Banner;