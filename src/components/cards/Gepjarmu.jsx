import React from "react";
import "./cards.css";

const GepjarmuCard = (props) => {
  return (
    <div className="expl">
      <div className="szoveg">
        <h3>Gepjarmu</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, maxime!
          Consectetur ut, nesciunt officia doloremque sequi vero. Cumque
          exercitationem reprehenderit quidem ea praesentium ipsa laboriosam
          tenetur, assumenda, eligendi vel atque. Voluptatem officia, odit
          maiores facilis reiciendis, nam facere a commodi placeat eligendi
          eveniet ducimus nulla! Perspiciatis voluptas enim doloribus
          repellendus nihil nulla hic non temporibus. Eaque dicta eligendi quasi
          iste.
        </p>
      </div>

      <div className="erdeklodes">
        <label>Név</label>
        <input type="text" placeholder="Név" />
        <label>Email</label>
        <input type="email" placeholder="Email" />
        <label>Tárgy</label>
        <textarea rows={20} cols={30} />
      </div>
      <div className="exit" onClick={props.onClick}>
        x
      </div>
    </div>
  );
};

export default GepjarmuCard;
