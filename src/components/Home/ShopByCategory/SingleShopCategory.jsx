import React from 'react';

const SingleShopCategory = ({ toy }) => {
    const { subCategory, price, img, ratings } = toy;
    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure><img src={img} alt="Shoes" /></figure>
           
        </div>
    );
};

export default SingleShopCategory;