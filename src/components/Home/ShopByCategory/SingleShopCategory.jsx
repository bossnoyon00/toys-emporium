import React from 'react';

const SingleShopCategory = ({ toy }) => {
    const { subCategory, price, img, ratings } = toy;
    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{subCategory}</h2>
                <p>{price}</p>
                <p>{ratings}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default SingleShopCategory;