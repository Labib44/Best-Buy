import React from 'react';
import { FaBeer,FaWeebly } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SportsBikeCard = ({ spBike,setBike,setWish }) => {
    // console.log(spBike);
    const { _id, name, picture, details, location, originalPrice, sellerName, usedTime, price,date } = spBike;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className='grid mt-0 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 '>
               <div>
               <p>Seller:{sellerName}</p>
                <p>Old Price:$ {originalPrice }</p>
                <p>New Price:$ {price }</p>
                
               </div>
               <div>
               <p>Used Time:{ usedTime}</p>
                <p>Location:{location }</p>
                <p>Date: {date}</p>
               </div>
                </div>
                <p>Details:{details}</p>
                <div className="card-actions justify-between">
                {/* <Link to={`/dashboard/wishlist/${_id}`} className="btn btn-primary"><FaWeebly className='text-4xl mt-2'></FaWeebly></Link> */}
                    
                    <label onClick={()=>setWish(spBike)} htmlFor="wish-modal" className="btn btn-primary">Wish List</label>
                    <label onClick={()=>setBike(spBike)} htmlFor="booking-modal" className="btn btn-primary">Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default SportsBikeCard;