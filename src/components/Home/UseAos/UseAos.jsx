import React, { useEffect, useState } from 'react';
import AOS from 'aos';

const UseAos = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <section className="bg-gray-100 py-8 flip-up">
            <div className="container mx-auto">
                <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                    data-aos="fade-up" >
                    <div className=' className="container mx-auto text-center"
        data-aos="zoom-in" 
        data-aos-duration="1000"'>
                       

                    </div>
                </div>
            </div>
        </section>
    );
};

export default UseAos;