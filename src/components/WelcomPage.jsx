import React from "react";
import "./welcome.css";
import { Link } from "react-router-dom";

const WelcomPage = () => {
  return (
    <div className="wlc-wrapper">
      <Link to="/next">WelcomPage</Link>
    </div>
  );
};

export default WelcomPage;
