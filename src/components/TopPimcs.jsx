import React from "react";
//import goldenhammer "/pics/goldenhammer.jpg"
import "./header.css";

const TopPimcs = (props) => {
  return (
    <div className="top-img" onClick={props.noShowIng}>
      <img
        className="goldenhammer"
        src={require("./pics/danijo.png")}
        alt="hammer"
      />
    </div>
  );
};

export default TopPimcs;
