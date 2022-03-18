import React from "react";

import "./header.css";
import TopPimcs from "./TopPimcs";

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
            {/* <div className="dropdown-heading" onClick={props.onClick}>
              Biztositás
            </div> */}
            <div className="dropdown-links">
              <a href="#" onClick={props.onClickIng}>
                Ingatlan
              </a>
              <a href="#" onClick={props.onClickBizt}>
                Biztosítás
              </a>
              <a href="#" onClick={props.onClickCsalad}>
                Családjog
              </a>
            </div>
          </div>
          <div>
            <div className="dropdown-links">
              <a href="#" onClick={props.onClickAdo}>
                Adózás
              </a>
              <a href="#" onClick={props.onClickBus}>
                Vállalkozás{" "}
              </a>
              <a href="#" onClick={props.onClickPolg}>
                Polgári jog
              </a>
            </div>
          </div>
        </div>
      </div>

      <button className="link" onClick={props.onClickContact}>
        Contact
      </button>
      <button className="link" onClick={props.onClickAbout}>
        About Me
      </button>
    </div>
  );
};

export default Header;
