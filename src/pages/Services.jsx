import React from 'react';

const Services = () => {
  return (
    <section className='services' id='services'>
      <div className="container">

        <div className="main-txt">
          <h1><span>S</span>ervices</h1>
        </div>

        <div className="row" style={{ marginTop: "30px" }}>

          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <i className='fas fa-hotel'></i>
              <div className="card-body">
                <h3>Affordable Hotel</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vitae, possimus an!</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <i className='fas fa-utensils'></i>
              <div className="card-body">
                <h3>Food and Drinks</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vitae, possimus an!</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 py-3 py-md-0 mb-4">
            <div className="card">
              <i className='fas fa-bullhorn'></i>
              <div className="card-body">
                <h3>Safty Guide</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vitae, possimus an!</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <i className='fas fa-globe-asia'></i>
              <div className="card-body">
                <h3>Around The World</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vitae, possimus an!</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <i className='fas fa-plane'></i>
              <div className="card-body">
                <h3>Fastest Travel</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vitae, possimus an!</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <i className='fas fa-hiking'></i>
              <div className="card-body">
                <h3>Adventures</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vitae, possimus an!</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Services