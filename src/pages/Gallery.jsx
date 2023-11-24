import './../styles/gallery.css';
import { useState, useEffect } from 'react';
import testimg from './../images/about-img.png';

const Gallery = () => {

    const [gallery, setGallery] = useState(null);

    useEffect(() => {
        const fetchGallery = async () => {
            const response = await fetch('/mocks/gallery.json');
            const data = await response.json();
            setGallery(data);
        }
        fetchGallery();
    }, []);

    return (
        <section className='gallery' id='gallery'>

            <div className="container">

                <div className="main-txt">
                    <h1><span>G</span>allery</h1>
                </div>

                {gallery ?

                    <>
                        <div className="row full" style={{ marginTop: "30px" }}>
                            {gallery.map((el) => (
                                <div key={el.id} className="col-md-4 py-3 py-md-0 mb-4">
                                    <div key={el.id} className="card">
                                        <img src={el.path} alt="p" height={'230px'} />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="row min" style={{ marginTop: "30px" }}>
                            <div id="carouselControls" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">

                                    {/* <div className="carousel-item active">
                                <img src={testimg} className="d-block w-100" alt="..." />
                            </div> */}

                                    {gallery.map((el) => (
                                        <div className="carousel-item active" key={el.id}>
                                            <img src={el.path} className="d-block w-100" alt="p" />
                                        </div>
                                    ))}
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselControls" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselControls" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </>

                    : null}




            </div>

        </section>
    )
}

export default Gallery;