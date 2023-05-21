import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import useTitle from '../../hooks/useTitle';

const ShowMyToys = ({ myToy, index, handleDelete }) => {
    useTitle('Show Toys')
    const { loading } = useContext((AuthContext))
    if (loading) {
        return <div className='text-center'>
            <progress className="progress w-56"></progress>
        </div>
    }

    const { _id, userName, image, postedBy, quantity, description, price, toyName, subCategory, ratings } = myToy;

    return (
        <tr>

            <td>{index + 1}</td>
            <td>

                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={image} alt="Avatar Tailwind CSS Component" />
                    </div>

                </div>
            </td>
            <td>{toyName}</td>
            <td>
                {userName}

            </td>
            <td>{postedBy}</td>
            <td>{price}</td>
            <td>{ratings}</td>
            <td>{quantity}</td>
            <th>
                <Link to={`/updatedToys/${_id}`}> <button className="btn btn-ghost btn-xs">Update</button></Link>

            </th>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xs">Delete</button>
            </th>
        </tr>
    );
};

export default ShowMyToys;