import React from "react";

const Playlists = ({ playlistID }) => {
    //Create an embed link to use in iframes
    let embedLink = `https://open.spotify.com/embed/playlist/${playlistID}?utm_source=generator`

    return (
        <li>
            <iframe allowtransparency="true" src={embedLink} width="100%" height="180px" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </li>
    )
}

export default Playlists