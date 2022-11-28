import React from 'react';

const WishlistCard = ({wish}) => {
    const {name}=wish;
    return (
        <div>
            <h1>name:{name}</h1>
        </div>
    );
};

export default WishlistCard;