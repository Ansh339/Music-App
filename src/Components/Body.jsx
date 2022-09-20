import React from "react";
import { Component } from "react";
import axios from "axios";
import Navbar from "./navbar/Navbar.jsx";
import MusicLib from "./MusicLib/MusicLib.jsx";
import Footer from "./footer/Footer.jsx";
import Home from "./Home/Home.jsx";
import About from "./About/About.jsx";

class body extends Component {
    constructor(props) {
        super(props)
        this.state = {
            response: [],
            responseArtists: [],
            responseLikes: [],
            responseUser: '',
            redirect: 'https://accounts.spotify.com/authorize?client_id=cc332d7702a047d58bbab0cbe3db8f98&response_type=token&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&scope=user-follow-read%20user-library-read',
            trackNameRaw: '',
            trackNameRawDefault: 'test',
            headerConfig: {},
            navComponent: 1
        }
    }

    componentDidMount() {
        let trackNameRaw = "default"
        let trackName = encodeURI(trackNameRaw)
        let url = `https://api.spotify.com/v1/search?q=${trackName}&type=track`

        //Function to get a particular parameter from the current URL
        let getUrlParameter = (sParam) => {
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

        //Set access token, if possible
        let accessToken = getUrlParameter('access_token')

        //redirect to the authorization URL in case we don't have an access token
        if (accessToken == null || accessToken == '' || accessToken == undefined) {
            window.location.replace(this.state.redirect)
        }

        //Set request header with the acess token
        let config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        }

        this.setState({ headerConfig: config })

        //Get request with axios
        /*axios.get(url, this.state.headerConfig)
            .then(response => {
                let responseItems = response.data.tracks.items
                this.setState({ response: responseItems })
            })
            .catch(error => {
                console.log(error.response.data.error.message)
            })*/

        //Axios GET request for the user
        axios.all([
            axios.get('https://api.spotify.com/v1/me/following?type=artist', config),
            axios.get('https://api.spotify.com/v1/me/tracks?limit=10', config),
            axios.get('https://api.spotify.com/v1/me', config)])
            .then(axios.spread((responseArtists, responseLikes, responseUser) => {
                this.setState({responseArtists: responseArtists.data.artists.items })
                this.setState({responseLikes : responseLikes.data.items})
                this.setState({responseUser: responseUser.data.display_name})
            }))

            .catch(error => {
                console.log(error.response.data.error.message)
            })
    }

    //Repeat API calls in compnentDidUpdate to update the compnents during a search
    componentDidUpdate() {
        if (this.state.navComponent === 2) {
            let trackName = encodeURI(this.state.trackNameRaw)
            let url = `https://api.spotify.com/v1/search?q=${trackName}&type=track`

            axios.get(url, this.state.headerConfig)
                .then(response => {
                    let responseItems = response.data.tracks.items
                    this.setState({ response: responseItems })
                })
                .catch(error => {
                    console.log(error.response.data.error.message)
                })
        }


    }

    render() {
        let setTrackNameRaw = (track) => {
            this.setState({ trackNameRaw: track })
        }

        let setNavComponent = (id) => {
            this.setState({ navComponent: id })
        }

        return (
            <div>
                {console.log(this.state.responseLikes)}
                <Navbar trackName={this.state.trackNameRaw} setTrackName={setTrackNameRaw} setNav={setNavComponent} />
                {
                    {
                        1: <Home Artists={this.state.responseArtists} Likes = {this.state.responseLikes} UserName = {this.state.responseUser}/>,
                        2: <MusicLib responseItems={this.state.response} />,
                        3: <About />
                    }[this.state.navComponent]
                }
                <br />
                <Footer />
            </div>
        );
    }
}

export default body;