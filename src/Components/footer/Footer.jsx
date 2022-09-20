import React from "react";
import "./footer.css";

function footer() {
  return (
    <footer className="bg-secondary">
      <div>
        <h1 style={{ fontSize: "50px" }} className="text-dark  ">
          <b>Thanks For Using The Site</b>
        </h1>
      </div>
      <span style={{ fontSize: "20px" }}>Copyright @ TEAM MUSICERS 2022</span>
      <div>
        <p>All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default footer;
