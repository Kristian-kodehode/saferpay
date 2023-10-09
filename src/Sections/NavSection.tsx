import React, { useState } from "react";
import logoNav from "../images/logoNav.svg";

const NavSection = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    console.log("burger clicked");
  };

  return (
    <div>
      <nav>
        <img
          src={logoNav}
          alt="white saferpay logo in navbar"
        />

        {isMenuOpen ? (
          <ul className="dropdown-menu">
            <li>sign in</li>
            <li>partners</li>
            <li>about</li>
          </ul>
        ) : (
          <ul className="regular-menu">
            <li>sign in</li>
            <li>partners</li>
            <li>about</li>
          </ul>
        )}
        <button
          className="button-burger"
          onClick={toggleMenu}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </nav>
    </div>
  );
};

export default NavSection;
