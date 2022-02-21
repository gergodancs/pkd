import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = (props) => {
  const clickHandler = (e) => {
    const isDropDownButton = e.target.matches("[data-dropdown-button");
    if (!isDropDownButton && e.target.closest("[data-dropdown]") != null)
      return;
    let currentDropdown;
    if (isDropDownButton) {
      currentDropdown = e.target.closest("[data-dropdown]");
      currentDropdown.classList.toggle("active");
    }
    document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
      if (dropdown === currentDropdown) return;
      dropdown.classList.remove("active");
    });
  };

  return (
    <div className="header">
      <div className="dropdown" data-dropdown>
        <button
          onClick={clickHandler}
          className="link elso"
          data-dropdown-button
        >
          Expertises
        </button>
        <div className="dropdown-menu information-grid">
          <div>
            <div className="dropdown-heading" onClick={props.onClick}>
              Biztositás
            </div>
            <div className="dropdown-links">
              <a href="#" onClick={props.onClickIng}>
                Ingatlan
              </a>
              <a href="#" onClick={props.onClickCar}>
                Gépjármű kár
              </a>
              <a href="#" onClick={props.onClickEgyeb}>
                Egyéb
              </a>
            </div>
          </div>
          <div>
            <div className="dropdown-heading">Vállalati jog</div>
            <div className="dropdown-links">
              <a href="#">valamit</a>
              <a href="#">ide kell </a>
              <a href="#">irni</a>
            </div>
          </div>
        </div>
      </div>
      <button className="link">About Me</button>
      <button className="link" onClick={props.onClickContact}>
        Contact
      </button>
      <Link to="/">
        <button className="link">Back to Home</button>
      </Link>
    </div>
  );
};

export default Header;
