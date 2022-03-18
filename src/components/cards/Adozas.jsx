import React from "react";

const Adozas = (props) => {
  return (
    <div className="expl">
      <div className="madalpics">
        <img
          className="house"
          src={require("../pics/konyvelo.png")}
          alt="house"
        />
      </div>
      <div className="szoveg ing">
        <h3>Adóügyek</h3>
        <ul>
          <li>
            adózási mód (KATA, KIVA, társasági adó) megválasztásával kapcsolatos
            tanácsadás társaságoknak, valamint egyéni vállalkozóknak
          </li>
          <li>
            adóhatóság előtti képviselet ellenőrzések során és egyéb
            eljárásokban ideértve fellebbezést és a bírósági felülvizsgálatot is
          </li>
          <li>
            tanácsadás visszterhes vagyonszerzési, ajándékozási és öröklési
            illetékkel kapcsolatban
          </li>
          <li>adóhatósági beadványok szerkesztése</li>
        </ul>
      </div>

      <div className="exit adozasbtn" onClick={props.onClick}>
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

export default Adozas;
