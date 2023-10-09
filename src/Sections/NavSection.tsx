import React, { useEffect, useState } from "react";
import logoNav from "../images/logoNav.svg";

const NavSection = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    console.log("burger clicked");
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const navElement = document.querySelector("nav");

      if (navElement) {
        if (prevScrollPos > currentScrollPos) {
          navElement.style.top = "0";
        } else {
          navElement.style.top = "-100px";
        }
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

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
