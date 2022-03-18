import React from "react";

const Vallalkozas = (props) => {
  return (
    <div className="expl">
      <img
        className="house"
        src={require("../pics/business.png")}
        alt="house"
      />
      <div className="szoveg ing">
        <h3>Vállalkozás</h3>
        <p>
          cégjog: cégalapítás, illetve módosítás, határozatok tárának vezetése.
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

export default Vallalkozas;
