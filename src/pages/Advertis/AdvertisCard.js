import React from 'react';
import { Link } from 'react-router-dom';

const AdvertisCard = ({ adver }) => {
    const { _id, name,  picture, originalPrice, sellerName, price, usedTime, location, date } = adver;
    return (
        <div className="card m-3 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={picture} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <div className='grid mt-6 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 mt-0'>
                    <div>
                        <p>Seller:{sellerName}</p>
                        <p>Old Price:$ {originalPrice}</p>
                        <p>New Price:$ {price}</p>

                    </div>
                    <div>
                        <p>Used Time:{usedTime}</p>
                        <p>Location:{location}</p>
                        <p>Date: {date}</p>
                    </div>
                </div>

            </div>
            <Link  className='btn btn-primary'>Book Now</Link>
        </div>
    );
};

export default AdvertisCard;