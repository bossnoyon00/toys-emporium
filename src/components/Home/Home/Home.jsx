import React from 'react';
import GallerySection from '../../../GallerySection';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import UseAos from '../UseAos/UseAos';
import useTitle from '../../../hooks/useTitle';
import FeedBack from '../FeedBack/FeedBack';
import { Link } from 'react-router-dom';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/9YTytj5/toys-store-colored-background-with-little-girl-pulling-her-parents-playthings-shop-illustration-1284.jpg" className="w-full" />

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/9YTytj5/toys-store-colored-background-with-little-girl-pulling-her-parents-playthings-shop-illustration-1284.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/9YTytj5/toys-store-colored-background-with-little-girl-pulling-her-parents-playthings-shop-illustration-1284.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/9YTytj5/toys-store-colored-background-with-little-girl-pulling-her-parents-playthings-shop-illustration-1284.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <GallerySection></GallerySection>
            <ShopByCategory></ShopByCategory>
            <UseAos></UseAos>


            <div className='my-9'>
                <h2 className='text-amber-700 text-5xl text-center'>Some Seller Information </h2>
                <div className='w-full grid md:grid-cols-3 mt-6 gap-5'>
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://images.unsplash.com/photo-1630344745900-b5385f94f26c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Slate helps you see how many more days you need to work to reach your financial goal for the month and year.</h2>

                            <p className='text-3xl text-primary'>Shop Deller</p>
                            <p className='text-2xl'>Remote Car seller</p>
                            <div className="card-actions">
                                <Link to='alltoys'> <button className="btn btn-primary">Full view</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://images.unsplash.com/photo-1630344745900-b5385f94f26c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Slate helps you see how many more days you need to work to reach your financial goal for the month and year.</h2>

                            <p className='text-3xl text-primary'>Emporium Toys</p>
                            <p className='text-2xl'>Electric Car </p>
                            <div className="card-actions">
                                <Link to='alltoys'> <button className="btn btn-primary">Full view</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://images.unsplash.com/photo-1630344745900-b5385f94f26c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Slate helps you see how many more days you need to work to reach your financial goal for the month and year.</h2>

                            <p className='text-3xl text-primary'>Toys Rock</p>
                            <p className='text-2xl'>Car Seller</p>
                            <div className="card-actions">
                                <Link to='alltoys'> <button className="btn btn-primary">Full view</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <FeedBack></FeedBack>
        </div >
    );
};

export default Home;