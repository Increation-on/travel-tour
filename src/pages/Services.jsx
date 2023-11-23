import './../styles/services.css';
import { useState, useEffect } from 'react';


const Services = () => {

  const [services, setServices] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      const response = await fetch('/mocks/services.json');
      const data = await response.json();
      setServices(data);
    }
    fetchServices();
  }, []);

  return (
    <section className='services' id='services'>
      <div className="container">

        <div className="main-txt">
          <h1><span>S</span>ervices</h1>
        </div>

        {services ?

          <div className="row" style={{ marginTop: "30px" }}>
            {services.map((el) => (
              <div key={el.id} className="col-md-4 py-3 py-md-0 mb-4">
                <div className="card">
                  <i className={`fas ${el.icon}`}></i>
                  <div className="card-body">
                    <h3>{el.name}</h3>
                    <p>{el.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          : null}

      </div>
    </section>
  )
}

export default Services