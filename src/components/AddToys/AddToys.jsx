import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useForm } from 'react-hook-form';
import useTitle from '../../hooks/useTitle';
import Swal from 'sweetalert2';

const AddToys = () => {
    useTitle('Add Toys')
    const { loading } = useContext((AuthContext))
    if (loading) {
        return <div className='text-center'>
            <progress className="progress w-56"></progress>
        </div>
    }
    const { user } = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    //POST method function
    const onSubmit = (data) => {

        fetch("https://toy-emporium-server.vercel.app/post-toys", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                if (result.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Toy Added successfully',
                        icon: 'success',
                        confirmButtonTxt: 'Okay'
                    })
                }
            });
        console.log(data);
    };
    return (
        <div className="border p-7 border-y-gray-400">
            <div className="">
                <div className="">
                    <form className='space-y-5' onSubmit={handleSubmit(onSubmit)}>
                        {errors.exampleRequired && <span>This field is required</span>}

                        <input
                            className="text-input border border-orange-300 rounded  p-5 w-full"
                            {...register("image")}
                            placeholder="image link"
                            type="url"
                            required
                            defaultValue="https://i.ibb.co/MNPQ8KD/R-5.png"
                        />

                        <div className="form-control">

                            <label className="label">
                                <span className="label-text">Sub Category</span>
                            </label>
                            <select className="text-input  border border-orange-300 rounded  p-5 w-full input input-bordered" {...register("subCategory")}>
                                <option value="Tarzen Car">Tarzen Car</option>
                                <option value="Electric Car">Electric Car</option>
                                <option value="Remote Car">Remote Control Car</option>
                            </select>
                        </div>


                        <input
                            className="text-input border border-orange-300 rounded  p-5 w-full"
                            {...register("toyName")}
                            placeholder="Toy name"
                            required
                            type="name"
                        />
                        <input
                            className="text-input border border-orange-300 rounded  p-5 w-full"
                            {...register("price")}
                            placeholder="Toy Price"
                            required
                            type="number"
                        />
                        <input
                            className="text-input border border-orange-300 rounded  p-5 w-full"
                            value={user?.email}
                            {...register("postedBy")}
                            placeholder="Your email"
                            required
                            type="email"
                        />
                        <input
                            className="text-input border border-orange-300 rounded  p-5 w-full"
                            value={user?.displayName}
                            {...register("userName")}
                            placeholder="Your name"
                            required
                            type="name"
                        />

                        <input
                            className="text-input border border-orange-300 rounded  p-5 w-full"
                            {...register("description")}
                            placeholder="description"
                        />
                        <input
                            className="text-input border border-orange-300 rounded p-5 w-full"
                            {...register("quantity")}
                            required
                            placeholder="Available Quantity"
                        />
                        <input
                            className="text-input border border-orange-300 rounded p-5 w-full"
                            {...register("ratings")}
                            placeholder="Ratings"
                            required
                        />

                        <input className="btn btn-outline w-full btn-accent" value="Add Toys" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddToys;