// import { Link } from "react-router-dom";
import './../styles/home.css';
import { Link } from "react-scroll";
import Book from "./Book";
import Packages from "./Packages";
import Services from "./Services";
import Gallery from "./Gallery";
import About from './About';
import { useState, useEffect } from 'react';

const Home = () => {

  const countries = ['Spain', 'Italy', 'Germany', "Pakistan", "United States", "France", "United Kingdom", "India"];
  let index = 0;

  const [currentCountry, setCurrentCountry] = useState(countries[index]);

  useEffect(() => {
    const interval = setInterval(() => {
      index = (index + 1) % countries.length;
      setCurrentCountry(countries[index]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="home">
        <div className="content">
          <h5>Welcome to world</h5>
          <h1>Visit <span className='changecontent'>{currentCountry}</span></h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <Link to={`book`} smooth={true} duration={100}>Book Place</Link>
        </div>
      </div>
      <Book />
      <Packages />
      <Services />
      <Gallery />
      <About />
    </>

  )
}

export default Home;