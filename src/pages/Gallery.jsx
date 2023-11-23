import './../styles/gallery.css';
import { useState, useEffect } from 'react';

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

                    <div className="row" style={{ marginTop: "30px" }}>
                        {gallery.map((el) => (
                            <div key={el.id} className="col-md-4 py-3 py-md-0 mb-4">
                                <div key = {el.id} className="card">
                                    <img src={el.path} alt="p1" height={'230px'} />
                                </div>
                            </div>
                        ))}
                    </div>

                    : null}

            </div>



        </section>
    )
}

export default Gallery;