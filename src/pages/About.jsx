import React from 'react';
import about from './../images/about-img.png'

const About = () => {
  return (
    <section className='about' id='about'>

      <div className="container">

        <div className="main-txt">
          <h1>About<span>Us</span></h1>
        </div>

        <div className="row" style={{ marginTop: "50px" }}>

          <div className="col-md-6 py-3 py-md-0">
            <div className="card">
              <img src={about} alt="about" />
            </div>
          </div>

          <div className="col-md-6 py-3 py-md-0">
            <h2>How Travel Agency Work</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut exercitationem impedit fugiat sunt laboru!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut exercitationem impedit fugiat sunt laboru!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut exercitationem impedit fugiat sunt laboru!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut exercitationem impedit fugiat sunt laboru!
            </p>
            <button id='about-btn'>Read more...</button>
          </div>

        </div>

      </div>
    </section>
  )
}

export default About;