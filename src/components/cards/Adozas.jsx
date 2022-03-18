import React from "react";

const Adozas = (props) => {
  return (
    <div className="expl">
      <img
        className="house"
        src={require("../pics/konyvelo.png")}
        alt="house"
      />
      <div className="szoveg ing">
        <h3>Adóügyek</h3>
        <p>
          adójog: adózási mód (KATA, KIVA, társasági adó) megválasztásával
          kapcsolatos tanácsadás társaságoknak, valamint egyéni vállalkozóknak;
          adóhatóság előtti képviselet ellenőrzések során és egyéb eljárásokban,
          ideértve fellebbezést és a bírósági felülvizsgálatot is; tanácsadás
          visszterhes vagyonszerzési, ajándékozási és öröklési illetékkel
          kapcsolatban; adóhatósági beadványok szerkesztése;
        </p>
      </div>

      <div className="exit" onClick={props.onClick}>
        <p className="close">bezár</p>
      </div>
    </div>
  );
};

export default Adozas;
