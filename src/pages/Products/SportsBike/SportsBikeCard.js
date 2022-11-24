import React from 'react';
import { Link } from 'react-router-dom';

const SportsBikeCard = ({ spBike }) => {
    console.log(spBike);
    const { _id, name, picture, details, location, originalPrice, sellerName, usedTime, price } = spBike;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Seller:{sellerName}</p>
                <p>Old Price:$ {originalPrice }</p>
                <p>New Price:$ {price }</p>
                <p>Used Time:{ usedTime}</p>
                <p>Location:{location }</p>
                <p>Details:{details}</p>
                <div className="card-actions justify-end">
                    <Link to='/' className="btn btn-primary">Buy Now</Link>
                    
                </div>
            </div>
        </div>
    );
};

export default SportsBikeCard;