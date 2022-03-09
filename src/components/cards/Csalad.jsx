import React from "react";

const Csalad = (props) => {
  return (
    <div className="expl">
      <img className="house" src={require("../pics/fam2.png")} alt="house" />
      <div className="szoveg ing">
        <h3>Családjog</h3>
        <p>
          családjogi és öröklési ügyek: házassági- illetve élettársi
          vagyonközösség megszüntetése, házassági vagyonjogi szerződés,
          házassági bontóper, valamint hagyatéki igényekkel kapcsolatos
          tanácsadás, hagyatéki eljárásban való képviselet.
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

export default Csalad;
