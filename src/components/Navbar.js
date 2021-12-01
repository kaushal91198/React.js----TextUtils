import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
 
  return (
    
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav navbar-nav navbar-center">
            <Link className="navbar-brand" to="/">
              {props.title}
            </Link>
          </ul>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/*if we use anchor tag here then page will be reloaded and we don't want this*/}
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item about">
              <Link className="nav-link" to="/about" >
                {props.aboutUs}
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <div className='bg-primary rounded mx-2' onClick={()=>{props.theme('primary')}} style={{height:'30px',width:'30px'}}></div>
            <div className='bg-success rounded mx-2' onClick={()=>{props.theme('success')}} style={{height:'30px',width:'30px'}}></div>
            <div className='bg-danger rounded mx-2' onClick={()=>{props.theme('danger')}} style={{height:'30px',width:'30px'}}></div>
            <div className='bg-warning rounded mx-2' onClick={()=>{props.theme('warning')}} style={{height:'30px',width:'30px'}}></div>
          </div>
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              onClick={props.toggleMode}
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Dark-mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutUs: PropTypes.string,
};

// // if we don't pass value error will be shown in browser console
// // if we have to ensure that value has to be passed
// Navbar.propTypes = {
//     title:PropTypes.string.isRequired,
//     aboutUs:PropTypes.string.isRequired
// }

//If we don't pass props in App function aap.js
//This value will be displayed
Navbar.defaultProps = {
  title: "myWebsite",
  aboutUs: "About us",
};
