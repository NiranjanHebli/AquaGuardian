import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";
import Button from '../Button/Button';
import PropTypes from "prop-types";
import image from "./logo-color.png"
const Navbar = (props) => {
  return (
    <div>
     <nav className="navbar navbar-dark bg-primary navbar-expand-lg  ">
  <a className="navbar-brand" href="#">
    <img src={image} alt="logo" width="40" height="40" />
    <span className='mx-2'>{props.title}</span>{" "}</a>
    {/* </a> */}
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/aboutus">About Us</Link>
      </li>
      {/* <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li> */}
    </ul>
    {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search"/> */}
      {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
      <Button text="Donate Now!" onClick={null} />
    {/* </form> */}
  </div>
</nav>
    </div>
  )
}

export default Navbar
Navbar.prototype = {
    title: PropTypes.string.isRequired,

  };
  
  Navbar.defaultProps = {
    title: "The title will go here",

  };
  