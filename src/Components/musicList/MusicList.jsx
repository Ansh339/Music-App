import React from "react";

const musicList = ({ trackID }) => {
    //Create an embed link to use in iframes
    let embedLink = `https://open.spotify.com/embed/track/${trackID}?utm_source=generator`

    return (
        <li>
            <iframe allowtransparency="true" src={embedLink} width="100%" height="300px" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </li>
    )
}

export default musicList