
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
const UseAos = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <section className="bg-gray-500  rounded my-24 py-8" data-aos="zoom-in-right">
            <div className="container mx-auto">

                <div className='grid md:grid-cols-2 text-center'>
                    <div className='flex  flex-col justify-center text-left items-center mt-20'>
                        <h2 className="text-4xl font-bold text-success mb-4">  You Can now add <br /> your Toy. </h2>
                        <p className="text-zinc-200 text-1xl font-extrabold">
                            We provide Best Toy And Fansy <br /> export Car. <br /><span className='text-'>
                                The one Of most Popular Toy Shop.
                            </span>
                        </p>
                        <div className='my-5 flex text-success  gap-5'>
                            <Link to='addToys'> <button className='btn btn-warning font-extrabold'>Now Go To Add Toy</button></Link>
                            <Link to='addToys'> <button className='btn btn-warning font-extrabold'>See All Toys</button></Link>
                        </div>
                    </div>
                    <div className=''>
                        <img
                            data-aos-anchor="#example-anchor"
                            data-aos-offset="500"
                            data-aos-duration="1000" 
                            src="https://i.ibb.co/9G4BD8s/little-boy-riding-a-baby-car-free-vector.jpg"
                            alt="Illustration"
                            className="w-full rounded-lg"
                            data-aos="zoom-in"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default UseAos;