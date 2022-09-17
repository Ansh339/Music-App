import React from "react";
import "./footer.css";

function footer (){
    return(
        <div style={{textAlign: 'center'}} className="alert alert-dismissible alert-danger">
            <div>
                <h1 style={{fontSize: "50px"}}><b>Thanks For Using The Site</b></h1>
            </div>
            <span style={{fontSize: "20px"}}>Copyright @ TEAM MUSICERS 2022</span>
            <div>
                <p>All Rights Reserved</p>
            </div>
        </div>
    )
}

export default footer