import React, { useContext, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { AuthContext } from '../../../providers/AuthProvider';
import MarvelCar from './MarvelCar';
import TarzenCar from './TarzenCar';
import FantasyCar from './FantasyCar';


const ShopByCategory = () => {
    const { loading } = useContext((AuthContext))
    if (loading) {
        return <div className='text-center'>
            <progress className="progress w-56"></progress>
        </div>
    }
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(`https://toy-emporium-server.vercel.app/allToy/${categories}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setCategories(data)
            });
    }, [])

    const marvelCars = categories.filter((item) => item.subCategory === 'Tarzen Car')
    console.log(marvelCars);
    const tarzenCar = categories.filter((item) => item.subCategory === 'Electric Car')
    const fantasyCar = categories.filter((item) => item.subCategory === 'Remote Car')


    return (
        <div>
            <h1 className='mb-4 text-center font-extrabold text-4xl p-3 text-gray-500 border border-slate-900 border-spacing-2 bg-emerald-200 rounded-2xl'>Shop By Category</h1>
            <Tabs>
                <TabList className='grid md:grid-cols-3 gap-10' >
                    {
                        marvelCars.slice(0, 1).map((category, index) => (
                            <Tab className='btn btn-primary' key={index}>{category.subCategory}</Tab>
                        ))
                    }
                    {
                        tarzenCar.slice(0, 1).map((category, index) => (
                            <Tab className='btn btn-primary' key={index}>{category.subCategory}</Tab>
                        ))
                    }
                    {
                        fantasyCar.slice(0, 1).map((category, index) => (
                            <Tab className='btn btn-primary' key={index}>{category.subCategory}</Tab>
                        ))
                    }
                </TabList>


                <div>
                    <TabPanel className='grid md:grid-cols-2 gap-5'>
                        {marvelCars.slice(0, 2).map((category, index) => (
                            <MarvelCar category={category} key={index}></MarvelCar>
                        ))}


                    </TabPanel>

                    <TabPanel className='grid md:grid-cols-2 gap-5'>
                        {tarzenCar.slice(0, 2).map((category, index) => (
                            <TarzenCar category={category} key={index}></TarzenCar>
                        ))}
                    </TabPanel>

                    <TabPanel className='grid md:grid-cols-2 gap-5'>
                        {fantasyCar.slice(0, 2).map((category, index) => (
                            <FantasyCar category={category} key={index}></FantasyCar>
                        ))}
                    </TabPanel>
                </div>
            </Tabs>
        </div>
    )
};

export default ShopByCategory;