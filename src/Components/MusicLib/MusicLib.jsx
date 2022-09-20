import React from "react";
import "./MusicLib.css";
import MusicList from "../musicList/MusicList";
import { Component } from "react";

class MusicLib extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 className=" text-center mt-2 text-dark">Your searched music</h1>
        <br />
        <ul className="list-unstyled ">
          {this.props.responseItems.map((item) => (
            <MusicList key={item.id} trackID={item.id} />
          ))}
        </ul>
      </div>
    );
  }
}

export default MusicLib;
