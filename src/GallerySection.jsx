import React from 'react';
import './GallerySection.css';

const GallerySection = () => {
    const images = [
        { id: 1, src: 'https://i.ibb.co/TKBBk0Q/P3-OLGJ1-copy-1.png', alt: 'Image 1' },
        { id: 2, src: 'https://i.ibb.co/TKBBk0Q/P3-OLGJ1-copy-1.png', alt: 'Image 2' },
        { id: 3, src: 'https://i.ibb.co/TKBBk0Q/P3-OLGJ1-copy-1.png', alt: 'Image 3' },
        { id: 4, src: 'https://i.ibb.co/TKBBk0Q/P3-OLGJ1-copy-1.png', alt: 'Image 4' },
        // Add more image objects as needed
    ];

    return (
        <section className="gallery-section">
            <h2 className="section-heading">Gallery</h2>
            <div className="gallery">
                {images.map(image => (
                    <div key={image.id} className="image-container">
                        <img src={image.src} alt={image.alt} className="image" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default GallerySection;