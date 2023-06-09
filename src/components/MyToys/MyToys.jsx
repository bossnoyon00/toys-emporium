import React, { useContext, useEffect, useState } from 'react';
import ShowMyToys from './ShowMyToys';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';

const MyToys = () => {
    useTitle('My Toys')
    const { loading } = useContext((AuthContext))
    if (loading) {
        return <div className='text-center'>
            <progress className="progress w-56"></progress>
        </div>
    }
    const { user } = useContext(AuthContext)
    const [myToys, setMyToys] = useState([]);
    const [sort, setSort] = useState("");

    const handleDelete = (_id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toy-emporium-server.vercel.app/post-toys/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {

                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Toys has been deleted.',
                                'success'
                            );
                            const remaining = myToys.filter(users => users._id !== _id);
                            setMyToys(remaining);

                        }

                    })
            }
        })
    }
    useEffect(() => {
        fetch(`https://toy-emporium-server.vercel.app/myToys/${user?.email}?price=${sort}`)
            .then(res => res.json())
            .then(data => {
                setMyToys(data)
            })
    }, [user, sort])
    return (
        <div>
            <div className="mt-8">
                <h2 className="text-center text-4xl font-bold  text-orange-400">My Toys {myToys.length}</h2>
                <div>
                    <button className='btn btn-secondary mx-4' onClick={() => setSort('ascending')}>Ascending by Price</button>
                    <button className='btn btn-secondary mx-4' onClick={() => setSort('descending')}>Descending by Price</button>
                </div>

                <div className="overflow-x-auto mt-8  w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <button className="btn btn-sm btn-circle">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </th>
                                <th>Toy Photo</th>
                                <th>Toy Name</th>
                                <th>Seller Name</th>
                                <th>Seller email</th>
                                <th>Price</th>
                                <th>Description</th>
                                <th>Rating</th>
                                <th>Quantity</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            {/* {
                                myToys.map((myToyTable, idx) => <MyToyTable
                                    myToyTable={myToyTable}
                                    idx={idx}
                                ></MyToyTable>)
                            } */}

                            {
                                myToys.map((myToy, index) => <ShowMyToys
                                    handleDelete={handleDelete}
                                    key={index} myToy={myToy} index={index}
                                ></ShowMyToys>)
                            }
                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyToys;