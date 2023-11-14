// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
import Book from "./Book";

const Home = () => {
  return (

    <>
      <div className="home">
        <div className="content">
          <h5>Welcome to world</h5>
          <h1>Visit <span className='changecontent'></span></h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <Link to={`book`} smooth={true} duration={100}>Book Place</Link>
        </div>
      </div>
      <Book id={'book'} />
    </>

  )
}

export default Home;