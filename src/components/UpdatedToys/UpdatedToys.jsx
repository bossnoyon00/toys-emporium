import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';

const UpdatedToys = () => {
    useTitle('Update Toy')
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div className='text-center'>
            <progress className="progress w-56"></progress>
        </div>
    }
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const toys = useLoaderData();
    console.log(toys);
    // const { _id, userName, image, postedBy, quantity, description, price, toyName, subCategory, ratings } = toys;
    const onSubmit = (data) => {

        fetch(`https://toy-emporium-server.vercel.app/post-toys/${toys._id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                if (result.modifiedCount) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Toy updated successfully',
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
                            className=" text-input border border-orange-300 rounded  p-5 w-full"
                            {...register("image")}
                            placeholder="image link"
                            type="url"
                            defaultValue="https://i.ibb.co/MNPQ8KD/R-5.png"
                        />

                        <div className="form-control">

                            <label className="label">
                                <span className="label-text">Sub Category</span>
                            </label>
                            <select className="text-input border border-orange-300 rounded  p-5 w-full" {...register("subCategory")}>
                                <option value="Tarzen Car">Tarzen Car</option>
                                <option value="Electric Car">Electric Car</option>
                                <option value="Remote Car">Remote Car</option>
                            </select>
                        </div>

                        <input
                            className="text-input border border-orange-300 rounded  p-5 w-full"
                            {...register("toyName")}
                            placeholder="Toy name"
                            type="name"
                            required
                            defaultValue={toys.toyName}
                        />
                        <input
                            className="text-input border border-orange-300 rounded  p-5 w-full"
                            {...register("price")}
                            placeholder="Toy Price"
                            type="number"
                            defaultValue={toys.price}
                            required
                        />
                        <input
                            className="text-input border border-orange-300 rounded  p-5 w-full"
                            value={user?.email}
                            {...register("postedBy")}
                            placeholder="Your email"
                            type="email"
                            required
                        />
                        <input
                            className="text-input border border-orange-300 rounded  p-5 w-full"
                            value={user?.displayName}
                            {...register("userName")}
                            placeholder="Your name"
                            type="name"
                            required
                        />

                        <input
                            className="text-input border border-orange-300 rounded  p-5 w-full"
                            {...register("description")}
                            placeholder="description"
                            required
                            defaultValue={toys.description}
                        />
                        <input
                            className="text-input border border-orange-300 rounded  p-5 w-full"
                            {...register("quantity")}
                            placeholder="Available Quantity"
                            defaultValue={toys.quantity}
                            required
                        />
                        <input
                            className="text-input border border-orange-300 rounded  p-5 w-full"
                            {...register("ratings")}
                            placeholder="Ratings"
                            required
                            defaultValue={toys.ratings}
                        />

                        <input className="btn btn-outline w-full btn-accent" value="Update Toys" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdatedToys;