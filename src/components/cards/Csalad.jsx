import React from "react";

const Csalad = (props) => {
  return (
    <div className="expl">
      <img
        className="house"
        src={require("../pics/Draw_family.png")}
        alt="house"
      />
      <div className="szoveg ing">
        <h3>Családjogi és öröklési ügyek:</h3>
        <ul>
          <li>házassági- illetve élettársi vagyonközösség megszüntetése</li>
          <li>házassági vagyonjogi szerződés</li>
          <li>házassági bontóper</li>
          <li>hagyatéki igényekkel kapcsolatos tanácsadás</li>
          <li>hagyatéki eljárásban való képviselet</li>
        </ul>
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

export default Csalad;
