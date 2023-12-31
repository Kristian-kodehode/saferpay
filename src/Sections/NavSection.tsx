import React, { useEffect, useState } from "react";
import logoNav from "../images/logoNav.svg";

const NavSection: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const [isOverlayOpen, setOverlayOpen] = useState<boolean>(false);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    setOverlayOpen(!isOverlayOpen);
    console.log("burger clicked");
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setOverlayOpen(false);
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

        if (isOverlayOpen) {
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
        <a href="#main-section">
          {" "}
          <img
            src={logoNav}
            alt="white saferpay logo in navbar"
          />
        </a>

        {isMenuOpen ? (
          <div>
            <ul className="dropdown-menu">
              <li>
                <a href="#our-guarantee">safety</a>
              </li>
              <li>
                <a href="#support">support</a>
              </li>
              <li>
                <a
                  href="https://github.com/Kristian-kodehode/saferpay"
                  target="_blank"
                >
                  about
                </a>
              </li>
            </ul>
            <div className="overlayblur"></div>
          </div>
        ) : (
          <ul className="regular-menu">
            <li>
              <a href="#our-guarantee">safety</a>
            </li>
            <li>
              <a href="#support">support</a>
            </li>
            <li>
              {" "}
              <a
                href="https://github.com/Kristian-kodehode/saferpay"
                target="_blank"
              >
                about
              </a>
            </li>
          </ul>
        )}
        <button
          className="button-burger"
          onClick={toggleMenu}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </nav>
      {isOverlayOpen && (
        <div
          className="overlay"
          onClick={closeMenu}
        ></div>
      )}
    </div>
  );
};

export default NavSection;
