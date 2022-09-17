import "./navbar.css";
import image from "./assets/logo.png";
import React from "react";

function navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="#"><img  src={image} alt="Music"/></a> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Library
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-sm-2" type="text" placeholder="Search"/>
                <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default navbar;
