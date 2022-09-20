import "./navbar.css";
import image from "./assets/music_logo-removebg-preview.png";
import React from "react";
import { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={image} alt="Music" height="25%" width="25%" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarColor01"
              aria-controls="navbarColor01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor01">
              <ul className="navbar-nav ">
                <li className="nav-item ">
                  <a
                    className="nav-link text-dark  fs-4 "
                    onClick={(event) => {
                      this.props.setNav(1);
                    }}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-dark fs-4"
                    onClick={(event) => {
                      this.props.setNav(2);
                    }}
                  >
                    Library
                  </a>
                </li>
                <li className="nav-item ">
                  <a
                    className="nav-link text-dark  fs-4"
                    onClick={(event) => {
                      this.props.setNav(3);
                    }}
                  >
                    About
                  </a>
                </li>
              </ul>
              <form className="d-flex justify-content-end">
                <input
                  className="form-control me-sm-2  "
                  type="text"
                  placeholder="Search"
                  value={this.props.trackName}
                  onChange={(event) => {
                    this.props.setTrackName(event.target.value);
                  }}
                />
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
