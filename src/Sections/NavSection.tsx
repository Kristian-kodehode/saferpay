import React from "react";
import logoNav from "../images/logoNav.svg";

const NavSection = () => {
  return (
    <div>
      <nav>
        <img
          src={logoNav}
          alt="white saferpay logo in navbar"
        />
        <ul>
          <li>sign in</li>
          <li>partners</li>
          <li>about</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavSection;
