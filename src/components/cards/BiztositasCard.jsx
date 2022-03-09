import React from "react";
import "./cards.css";

const BiztositasCard = (props) => {
  return (
    <div className="expl">
      <img className="house" src={require("../pics/ins.jpg")} alt="house" />
      <div className="szoveg ing">
        <h3>Biztosítás</h3>
        <p>
          biztosítási jog: kár- és összegbiztosítási kárrendezési közreműködés,
          szolgáltatási igény érvényesítése peren kívül és perben, valamint
          egyéb szerződéssel kapcsolatos panaszok intézése. gépjármű és egyéb
          kárigények: a gépjárműben keletkezett kár érvényesítése, képviselet a
          közlekedés során felmerült szabálysértési ügyekben, valamint bármely
          károkozó magatartásból szerződéses viszonyban, valamint szerződésen
          kívül felmerült kárigények érvényesítése.
        </p>
      </div>

      {/* <div className="erdeklodes">
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

export default BiztositasCard;
