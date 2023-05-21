import React, { useContext } from 'react';
import NavBar from '../components/Home/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import { AuthContext } from '../providers/AuthProvider';

const Main = () => {
    const { loading } = useContext(AuthContext);

    if (loading) {
        return <div className='text-center'>
            <progress className="progress w-56"></progress>
        </div>
    }
    return (
        <div className='px-4 font-mono py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;