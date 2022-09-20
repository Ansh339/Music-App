import "./navbar.css";
import image from "./assets/logo.png";
import React from "react";
import { Component } from "react";

class Navbar extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#"><img src={image} alt="Music" height='50%' width='50%' /></a>
            <div class="collapse navbar-collapse" id="navbarColor01">
              <ul class="navbar-nav me-auto">
                <li class="nav-item">
                  <a class="nav-link"  onClick={(event) => {this.props.setNav(1)}}>Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link"  onClick={(event) => {this.props.setNav(2)}}>Library
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link"  onClick={(event) => {this.props.setNav(3)}}>About
                  </a>
                </li>
              </ul>
              <form class="d-flex">
                <input class="form-control me-sm-2" type="text" placeholder="Search" value={this.props.trackName} onChange = {(event) => {this.props.setTrackName(event.target.value)}}/>
                <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
