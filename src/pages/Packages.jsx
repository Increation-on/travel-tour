import uk from './../images/uk.png';
import france from './../images/france.png';
import pakistan from './../images/pakistan.png';
import { Link } from 'react-scroll';

const Packages = () => {
  return (
    <section className='packages' id='packages'>
      <div className="container">

        <div className="main-txt">
          <h1><span>P</span>ackages</h1>
        </div>

        <div className="row" style={{ marginTop: '30px' }}>

          {/*Добавить mb-4 - margin-bottom  */}
          <div className='col-md-4 py-3 py-md-0 mb-4'>

            <div className="card">
              <img src={uk} alt="UK" />
              <div className="card-body">
                <h3>United Kingdom</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde nesciunt!</p>
                <div className="star">
                  <i className='fa-solid fa-star checked'></i>
                  <i className='fa-solid fa-star checked'></i>
                  <i className='fa-solid fa-star checked'></i>
                  <i className='fa-solid fa-star checked'></i>
                  <i className='fa-solid fa-star'></i>
                  <h6>Price: <strong>$500</strong></h6>
                  <Link to={`book`} smooth={true} duration={100}>Book now</Link>
                </div>
              </div>
            </div>

          </div>

          <div className='col-md-4 py-3 py-md-0'>

            <div className="card">
              <img src={france} alt="UK" />
              <div className="card-body">
                <h3>France</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde nesciunt!</p>
                <div className="star">
                  <i className='fa-solid fa-star checked'></i>
                  <i className='fa-solid fa-star checked'></i>
                  <i className='fa-solid fa-star checked'></i>
                  <i className='fa-solid fa-star checked'></i>
                  <i className='fa-solid fa-star checked'></i>
                  <h6>Price: <strong>$500</strong></h6>
                  <Link to={`book`} smooth={true} duration={100}>Book now</Link>
                </div>
              </div>
            </div>

          </div>

          <div className='col-md-4 py-3 py-md-0'>

            <div className="card">
              <img src={pakistan} alt="UK" />
              <div className="card-body">
                <h3>Pakistan</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde nesciunt!</p>
                <div className="star">
                  <i className='fa-solid fa-star checked'></i>
                  <i className='fa-solid fa-star checked'></i>
                  <i className='fa-solid fa-star '></i>
                  <i className='fa-solid fa-star '></i>
                  <i className='fa-solid fa-star'></i>
                  <h6>Price: <strong>$800</strong></h6>
                  <Link to={`book`} smooth={true} duration={100}>Book now</Link>
                </div>
              </div>
            </div>

          </div>

          <div className='col-md-4 py-3 py-md-0'>

            <div className="card">
              <img src={pakistan} alt="UK" />
              <div className="card-body">
                <h3>Pakistan</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde nesciunt!</p>
                <div className="star">
                  <i className='fa-solid fa-star checked'></i>
                  <i className='fa-solid fa-star checked'></i>
                  <i className='fa-solid fa-star '></i>
                  <i className='fa-solid fa-star '></i>
                  <i className='fa-solid fa-star'></i>
                  <h6>Price: <strong>$800</strong></h6>
                  <Link to={`book`} smooth={true} duration={100}>Book now</Link>
                </div>
              </div>
            </div>

          </div>



        </div>

      </div>
    </section>
  )
}

export default Packages