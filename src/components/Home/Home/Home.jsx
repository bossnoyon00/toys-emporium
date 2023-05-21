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
           
            <GallerySection></GallerySection>
            <ShopByCategory></ShopByCategory>
            <UseAos></UseAos>
        </div>
    );
};

export default Home;