import React from "react";
import ArtistList from "./ArtistList";
import { Component } from "react";
import "./Artist.css";

class Artists extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h3><b>Artists you Follow</b></h3>
                <ul className="list-unstyled" id = "ArtistList">
                    {this.props.Artists.map(artist => <ArtistList key={artist.id} id = {artist.id} artistUrl={artist.images[2].url} artistName={artist.name} />)}
                </ul>
            </div>
        );
    }
}

export default Artists;