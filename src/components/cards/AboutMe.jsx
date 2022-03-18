import React from "react";
import "./cards.css";

const AboutMe = (props) => {
  return (
    <div className="expl aboutszoveg">
      <img
        className="house dani"
        src={require("../pics/danijo.png")}
        alt="house"
      />
      <div className="szoveg ing ">
        <h3 className="aboutKep">Bemutatkozás</h3>
        <p>
          dr. Kovács Dániel Pál egyéni ügyvéd Diploma szerzés: 2007. Debreceni
          Egyetem, Állam- és Jogtudományi Kar; Szakvizsga letétele: 2011. évben;
          Biztosítási szakjogász képzés: 2017. ELTE – Jogi Továbbképző Intézet;
          Ügyvédjelölti éveimet egy nagy múltú budai ügyvédi irodában töltöttem,
          ahol családjoggal és klasszikus polgári jogi ügyekben szereztem
          elévülhetetlen gyakorlatot. Ezt követően egy vezető hazai biztosító
          társaságnál helyezkedtem el, közel tíz éven keresztül jogtanácsosként
          alkalmazásban, majd ügyvédként megbízásban. Ennek során széleskörű
          tapasztalatra tettem szert a biztosítási szerződéshez köthető
          különféle jogkérdések megoldása során.
        </p>
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

export default AboutMe;
