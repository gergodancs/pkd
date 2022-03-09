import React from "react";
import "./cards.css";

const IngatlanCard = (props) => {
  return (
    <div className="expl ">
      <img className="house" src={require("../pics/house2.png")} alt="house" />
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
      {/* 
      <div className="erdeklodes">
        <label>Név</label>
        <input type="text" placeholder="Név" />
        <label>Email</label>
        <input type="email" placeholder="Email" />
        <label>Tárgy</label>
        <textarea rows={20} cols={30} />
      </div> */}
      <div className="exit" onClick={props.onClick}>
        <p className="close">bezár</p>
      </div>
    </div>
  );
};

export default IngatlanCard;
