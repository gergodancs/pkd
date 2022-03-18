import React from "react";
import "./cards.css";

const IngatlanCard = (props) => {
  return (
    <div className="expl ">
      <img className="house" src={require("../pics/home.png")} alt="house" />
      <div className="szoveg ing">
        <h3>Ingatlan</h3>
        <p>
          Az életünk során várhatóan csak kétszer vagy háromszor vásárolunk vagy
          adunk el ingatlant. Éppen ezért, a tapasztalt ügyvédi közreműködés
          jelentősen csökkenthet az ezzel járó bizonytalanság okozta
          stresszhelyzeten. Célom, hogy szakmai tudomásommal a felmerülő jogi
          komplikációkat Ügyfeleim igényeihez igazodva a lehető leghatékonyabban
          kezeljem, mindezt úgy, hogy a jogügylet minél leghamarabb záruljon.
        </p>
      </div>

      <div className="exit" onClick={props.onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default IngatlanCard;
