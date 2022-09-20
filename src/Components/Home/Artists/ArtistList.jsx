import React from "react";
import "./ArtistList.css";

const ArtistList = ({ id, artistUrl, artistName }) => {
    let artistLink = `https://open.spotify.com/artist/${id}`
    return (
        <li id="artistList">
            <a className="navbar-brand" href={artistLink} target = "_blank">
            <figure className="item">
            <img src={artistUrl} id = "artistImg"/>
            <figcaption className="caption">{artistName}</figcaption>
            </figure>
            </a>
        </li>
    )
}

export default ArtistList