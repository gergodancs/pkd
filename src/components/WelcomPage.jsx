import React from "react";
import "./welcome.css";
import { Link } from "react-router-dom";

const WelcomPage = () => {
  return (
    <div>
      <img className="logo" src={require("./pics/pkdlogo.png")} alt="" />
      <div className="wlc-wrapper">
        <img
          className="justice"
          src={require("./pics/justice.png")}
          alt="justice"
        />
        <div className="wlc-szoveg">
          <h2>Welcome</h2>
          <div className="p">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
              facilis nihil itaque labore sunt eveniet provident autem delectus.
              Dolores voluptate vitae necessitatibus labore. Recusandae illum,
              nihil perferendis aliquam delectus rerum. Ipsum quo incidunt
              temporibus, magni minima dolorem cum recusandae aliquid quibusdam
              itaque aut natus consequatur illo eaque provident quia molestiae.
              Molestiae quidem quasi architecto unde natus ducimus in aliquam
              repellendus! Odio, non dolorum porro sunt at autem vitae ex ab
              vero. Reiciendis commodi consequuntur nobis quia quae natus id ab,
              necessitatibus dicta nam distinctio ratione exercitationem
              corrupti vero error saepe.
            </p>
          </div>
          <Link to="/next">
            <h2 className="enter">Enter</h2>
          </Link>
        </div>

        <div className="wlc-img">
          <img
            className="danipics"
            src={require("./pics/daniwlc.jpg")}
            alt="dani"
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomPage;
