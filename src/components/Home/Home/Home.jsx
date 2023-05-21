import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import GallerySection from '../../../GallerySection';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import UseAos from '../UseAos/UseAos';
import useTitle from '../../../hooks/useTitle';

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
        </div>
    );
};

export default Home;