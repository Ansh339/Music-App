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
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img src={image} alt="Music" height="auto" width="30%" />
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
            <div class="collapse navbar-collapse" id="navbarColor01">
              <ul class="navbar-nav me-auto">
                <li class="nav-item">
                  <a class="nav-link text-dark" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-dark" href="#">
                    Library
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-dark" href="#">
                    About
                  </a>
                </li>
              </ul>
              <form class="d-flex">
                <input
                  class="form-control me-sm-2  text-dark"
                  type="text"
                  placeholder="search"
                  value={this.props.trackName}
                  onChange={(event) => {
                    this.props.setTrackName(event.target.value);
                  }}
                />
                <button class="btn btn-secondary my-2 my-sm-0" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
