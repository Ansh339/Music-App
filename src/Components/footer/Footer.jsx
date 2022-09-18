import React from "react";
import "./footer.css";

function footer() {
  return (
    <footer className="fixed-bottom text-center bg-danger py-2">
      <div>
        <h1 className="fs-3 text-warning">
          <b>Thanks For Using The Site</b>
        </h1>
      </div>
      <span className="fs-4 text-white">Copyright @ TEAM MUSICERS 2022</span>
      <div>
        <span className="fs-4 text-white">All Rights Reserved</span>
      </div>
    </footer>
  );
}

export default footer;
