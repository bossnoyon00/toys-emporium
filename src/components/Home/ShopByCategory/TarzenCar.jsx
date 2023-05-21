import React from 'react';
import { Link } from 'react-router-dom';

const TarzenCar = ({ category }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={category.image} />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Toy name: {category.toyName}</h2>
                <p>Price: {category.price}</p>
                <p>Rating: {category.ratings}</p>
                <div className="card-actions">
                    <Link to={`/singleToys/${category._id}`}> <button className='btn btn-xs btn-primary'>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default TarzenCar;