import Carousel from 'react-bootstrap/Carousel';
import './../styles/gallery.css';

const Slider = ({ gallery }) => {

    return (
        <div className="row min" style={{ marginTop: "30px" }}>
            <Carousel
                data-bs-theme="dark"
                indicators={false} interval={2500}
                nextIcon={<span className="bi bi-caret-right-fill arrow"></span>}
                prevIcon={<span className="bi bi-caret-left-fill arrow"></span>}
            >
                {gallery.map((el) => (

                    <Carousel.Item key={el.id} className='card-min'>
                        <img
                            className="d-block w-100"
                            src={el.path}
                            alt="slide"
                        />
                    </Carousel.Item>

                ))}
            </Carousel>
        </div>


    )
}

export default Slider;