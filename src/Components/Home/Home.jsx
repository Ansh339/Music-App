import React from "react";
import Artists from "./Artists/Artists";
import Likes from "./Likes/Likes";
import Welcome from "./Welcome/Welcome";
import Playlists from "./Playlists/Playlists";
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
                <h3><b>Your Playlists</b></h3>
                <ul className="list-unstyled">
                    {
                        this.props.Playlists.map(Playlist => <Playlists key={Playlist.id} playlistID={Playlist.id}/>)
                    }
                </ul>
                <Likes Likes = {this.props.Likes}/>
            </div>
        );
    }
}

export default MusicLib;
