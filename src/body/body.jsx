import React from "react";
import axios from "axios";
import "./body.css"
import MusicList from "../musicList/musicList";
import { Component } from "react";

class body extends Component {
    constructor(props) {
        super(props)
        this.state = {
            response: [],
            redirect: `https://accounts.spotify.com/authorize?client_id=cc332d7702a047d58bbab0cbe3db8f98&response_type=token&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F`
        }
    }

    componentDidMount() {
        //Set search string and prep it for use with the search endpoint 
        let trackNameRaw = "Hades OST"
        let trackName = encodeURI(trackNameRaw)
        
        //Use the search endpoint with the search string
        let url = `https://api.spotify.com/v1/search?q=${trackName}&type=track`

        //Function to get a particular parameter from the current URL
        function getUrlParameter(sParam) {
            let sPageURL = window.location.search.substring(1),////substring will take everything after the https link and split the #/&
                sURLVariables = sPageURL != undefined && sPageURL.length > 0 ? sPageURL.split('#') : [],
                sParameterName,
                i;
            let split_str = window.location.href.length > 0 ? window.location.href.split('#') : [];
            sURLVariables = split_str != undefined && split_str.length > 1 && split_str[1].length > 0 ? split_str[1].split('&') : [];
            for (i = 0; i < sURLVariables.length; i++) {
                sParameterName = sURLVariables[i].split('=');
                if (sParameterName[0] === sParam) {
                    return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
                }
            }
        }
        
        //Set access token if possible
        let accessToken = getUrlParameter('access_token')
        
        //Redirect to the authorization page if access token is not set
        if (accessToken == null || accessToken == '' || accessToken == undefined) {
            window.location.replace(this.state.redirect)
        }
        
        //Configure headers
        let config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        }
        
        //Get the data from the API and set it into the state
        axios.get(url, config)
            .then(response => {
                let responseData = response.data.tracks.items
                this.setState({ response: responseData })
            })
    }

    render() {
        console.log(this.state.response)
        return (
            <div>
                <h1 style={{ textAlign: "center" }}>LIBRARY</h1>
                <br />
                <ul className="list-unstyled">
                    {
                        this.state.response.map(item => <MusicList key={item.id} trackID={item.id} />)
                    }
                </ul>
            </div>
        );
    }
}

export default body;
