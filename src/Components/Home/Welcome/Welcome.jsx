import React from "react";

const Welcome = ({ userName }) => {

    return (
        <h2 style={{fontWeight: 'bolder', textAlign: 'center', fontSize: '4em'}}><b>Hi There {userName}! </b></h2>
    )
}

export default Welcome
