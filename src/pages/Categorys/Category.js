import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const {_id, name, discription, img, } = category;
    return (
        <div className="card m-3 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{discription}</p>

            </div>
            <Link to={`/sportsbike/${_id}`} className='btn btn-primary'>View More</Link>
        </div>
    );
};

export default Category;