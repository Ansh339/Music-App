import React from "react";
import Artists from "./Artists/Artists";
import Likes from "./Likes/Likes";
import Welcome from "./Welcome/Welcome";
import { Component } from "react";

class MusicLib extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Welcome userName = {this.props.UserName}/>
                <Artists Artists = {this.props.Artists}/>
                <Likes Likes = {this.props.Likes}/>
            </div>
        );
    }
}

export default MusicLib;