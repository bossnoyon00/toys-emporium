import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../providers/AuthProvider';

const TarzenCar = ({ category }) => {
    const { user } = useContext(AuthContext);
    const handleShow = () => {
        if (!user) {
            Swal.fire({
                title: 'Please Log in!',
                text: 'When you log in then access View Details',
                icon: 'success',
                confirmButtonTxt: 'Okay'
            })
        }
    }
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
                    <Link to={`/singleToys/${category._id}`}> <button onClick={handleShow} className='btn btn-xs btn-primary'>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default TarzenCar;