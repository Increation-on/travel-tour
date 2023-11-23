import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';
import './../styles/header.css';

const Header = () => {
  return (

    // ctr+f2 - выделить все вхождения

    <nav className="navbar navbar-expand-lg" id='navbar'>
      <div className="container">
        <Link className="navbar-brand" to={'/'} id='logo'><span >T</span>ravel</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
          <span><i className='fa-solid fa-bars'></i></span>
        </button>
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to={`/`} smooth={true} duration={100}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`book`} smooth={true} duration={100}>Book</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`packages`} smooth={true} duration={100}>Packages</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`services`} smooth={true} duration={100}>Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`gallery`} smooth={true} duration={100}>Gallery</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'about'} smooth={true} duration={100}>About</Link>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="text" placeholder="Search" />
            <button className="btn btn-primary" type="button">Search</button>
          </form>
        </div>
      </div>
    </nav>

  )
}

export default Header