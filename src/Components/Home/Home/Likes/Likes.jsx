import React from "react";
import MusicList from "../../musicList/MusicList";
import { Component } from "react";

class Likes extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h3><b>Recent Likes</b></h3>
                <ul className="list-unstyled">
                    {
                        this.props.Likes.map(track => <MusicList key={track.track.id} trackID={track.track.id} />)
                    }
                </ul>
            </div>
        );
    }
}

export default Likes;