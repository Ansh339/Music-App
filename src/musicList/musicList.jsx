import React from "react";

const musicList = ({ trackID }) => {
    //Create an embed link to use in iframes
    let embedLink = `https://open.spotify.com/embed/track/${trackID}?utm_source=generator&theme=0`

    return (
        <li>
            <iframe allowtransparency="true" src={embedLink} width="50%" height="380" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </li>
    )
}

export default musicList