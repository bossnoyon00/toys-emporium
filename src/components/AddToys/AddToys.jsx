import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useForm } from 'react-hook-form';
import './AddToys.css'
import useTitle from '../../hooks/useTitle';

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
    const onSubmit = (data) => {

        fetch("https://toy-emporium-server.vercel.app/post-toys", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
            });
        console.log(data);
    };
    return (
        <div className="add-job-container mt-52">
            <div className="add-job row">
                <div className="col-md-8">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {errors.exampleRequired && <span>This field is required</span>}

                        <input
                            className="text-input"
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
                            <select className="text-input  input input-bordered" {...register("subCategory")}>
                                <option value="Tarzen Car">Tarzen Car</option>
                                <option value="Electric Car">Electric Car</option>
                                <option value="Remote Car">Remote Control Car</option>
                            </select>
                        </div>


                        <input
                            className="text-input"
                            {...register("toyName")}
                            placeholder="Toy name"
                            required
                            type="name"
                        />
                        <input
                            className="text-input"
                            {...register("price")}
                            placeholder="Toy Price"
                            required
                            type="number"
                        />
                        <input
                            className="text-input"
                            value={user?.email}
                            {...register("postedBy")}
                            placeholder="Your email"
                            required
                            type="email"
                        />
                        <input
                            className="text-input"
                            value={user?.displayName}
                            {...register("userName")}
                            placeholder="Your name"
                            required
                            type="name"
                        />

                        <input
                            className="text-input"
                            {...register("description")}
                            placeholder="description"
                        />
                        <input
                            className="text-input"
                            {...register("quantity")}
                            required
                            placeholder="Available Quantity"
                        />
                        <input
                            className="text-input"
                            {...register("ratings")}
                            placeholder="Ratings"
                            required
                        />

                        <input className="submit-btn" value="Add Toys" type="submit" />
                    </form>
                </div>
                {/* <div className="col-md-4">
                    <img
                        className="w-100"
                        src="https://i.ibb.co/rthZ75K/pngtree-job-vacancy-with-join-our-team-recruitment-vector-design-png-image-6419066-removebg-preview.png"
                        alt=""
                    />
                </div> */}
            </div>
        </div>
    );
};

export default AddToys;