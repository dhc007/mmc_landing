import React from 'react';

function Gallery() {
    const imagesColumn1 = [
        '/assets/images/gallery/img1.png',
        '/assets/images/gallery/img4.png',
        '/assets/images/gallery/img7.png',
    ]

    const imagesColumn2 = [
        '/assets/images/gallery/img2.png',
        '/assets/images/gallery/img5.png',
        '/assets/images/gallery/img8.png',
        '/assets/images/gallery/img10.png',
    ];

    const imagesColumn3 = [
        '/assets/images/gallery/img3.png',
        '/assets/images/gallery/img6.png',
        '/assets/images/gallery/img9.png',
        '/assets/images/gallery/img11.png',
    ];

    return (
        <section className="gallery">
            <h2>Gallery</h2>
            <p>memories our customers shared with us</p>
            <div className="gallery-grid">
                <div className="gallery-column">
                    {imagesColumn1.map((image, index) => (
                        <div key={index} className="gallery-item">
                            <img src={image} alt={`Gallery item ${index + 1}`} />
                        </div>
                    ))}
                </div>
                <div className="gallery-column">
                    {imagesColumn2.map((image, index) => (
                        <div key={index} className="gallery-item">
                            <img src={image} alt={`Gallery item ${index + 4}`} />
                        </div>
                    ))}
                </div>
                <div className="gallery-column">
                    {imagesColumn3.map((image, index) => (
                        <div key={index} className="gallery-item">
                            <img src={image} alt={`Gallery item ${index + 8}`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Gallery;