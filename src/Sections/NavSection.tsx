import React, { useEffect, useState } from "react";
import logoNav from "../images/logoNav.svg";

const NavSection = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    setShowOverlay(!showOverlay);
    console.log("burger clicked");
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setShowOverlay(false);
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

        if (showOverlay) {
          navElement.style.top = "0";
          navElement.style.overflow = "none";
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
          <div>
            <ul className="dropdown-menu">
              <li>sign in</li>
              <li>partners</li>
              <li>about</li>
            </ul>
            <div className="overlayblur"></div>
          </div>
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
      {showOverlay && (
        <div
          className="overlay"
          onClick={closeMenu}
        ></div>
      )}
    </div>
  );
};

export default NavSection;
