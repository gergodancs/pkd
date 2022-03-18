import React from "react";

const Polg = (props) => {
  return (
    <div className="expl">
      <img className="house" src={require("../pics/poljo.png")} alt="house" />
      <div className="szoveg ing">
        <h3>Polgár jog</h3>
        <p>
          klasszikus polgári jog: szerződések elkészítése ingatlanra és ingókra
          vonatkozóan egyaránt, valamint szerződéstervezet véleményezése
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

export default Polg;
