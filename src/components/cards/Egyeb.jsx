import React from "react";

const Egyeb = (props) => {
  return (
    <div className="expl">
      <div className="szoveg">
        <h3>Egyeb</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, maxime!
          Consectetur ut, nesciunt officia doloremque sequi vero. Cumque
          exercitationem reprehenderit quidem ea praesentium ipsa laboriosam
          tenetur, assumenda, eligendi vel atque. Voluptatem officia, odit
          maiores facilis reiciendis, nam facere a commodi placeat eligendi
          eveniet ducimus nulla! Perspiciatis voluptas enim doloribus
          repellendus nihil nulla hic non temporibus. Eaque dicta eligendi quasi
          iste. Aliquam quos laudantium assumenda reiciendis magnam. Tempora
          aperiam unde expedita aspernatur autem voluptas asperiores! Inventore
          reprehenderit asperiores ipsa? Voluptates id dolore eligendi culpa
          mollitia voluptatibus iusto laboriosam consectetur, architecto
          officiis. Commodi architecto explicabo nulla rerum veritatis.
          Perferendis suscipit distinctio alias accusamus, quae possimus,
          fugiat, provident commodi voluptate recusandae nemo consequuntur non
          similique? Praesentium beatae mollitia eaque aliquam
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

export default Egyeb;
