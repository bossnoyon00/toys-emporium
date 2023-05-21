import React from 'react';
import './GallerySection.css';

const GallerySection = () => {

    const galleryItems = [
        {
            id: 1,
            imageSrc: 'https://i.ibb.co/cFx0K3R/R-1.png',
            title: '-Practol Car',
            description: 'Made in BANGLADESH',
        },
        {
            id: 3,
            imageSrc: 'https://i.ibb.co/MBMGvwn/R-3.png',
            title: 'Yellow Heavy Car',
            description: 'Made in JAPAN',
        },
        {
            id: 2,
            imageSrc: 'https://i.ibb.co/tJjJ546/Small-Car-Toy-PNG-Transparent-Image.png',
            title: 'RUSTEZY Car',
            description: 'Made in Indonesia',
        },

        {
            id: 4,
            imageSrc: 'https://i.ibb.co/86Xf1B3/R.png',
            title: 'Police Car',
            description: 'Made in RUSSIA',
        },
        {
            id: 5,
            imageSrc: 'https://i.ibb.co/t2QyQDs/R-2.png',
            title: 'Tarzen Car',
            description: 'Made In America',
        },
        {
            id: 6,
            imageSrc: 'https://i.ibb.co/W0ZwLhX/R-4.png',
            title: 'boy-riding-a-baby-car',
            description: 'This car is Fantasy',
        },
        // Add more gallery items as needed
    ];

    return (
        <div className='mt-16'>
            <div className='text-3xl text-center my-12'>
                <h2 className=''>Our gallery</h2>
            </div>
            <div className="grid md:grid-cols-3">
                {galleryItems.map(item => (
                    <div key={item.id} className="gallery-item rounded  text-2xl  bg-zinc-700">
                        <img src={item.imageSrc} alt={item.title} />
                        <div className="overlay">
                            <div className="overlay-content flex flex-col">
                                <h2>{item.title}</h2> <br />
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GallerySection;