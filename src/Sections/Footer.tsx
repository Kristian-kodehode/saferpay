import React from "react";
import logoFooter from "../images/logoFooter.svg";

const Footer = () => {
  return (
    <div>
      <footer>
        <img
          src={logoFooter}
          alt="a white saferpay logo"
          style={{ paddingTop: "8px", paddingBottom: "8px" }}
        />

        <div className="footer-content-container">
          <ul>
            <h5 className="footer-heading">Contact</h5>
            <li>Help</li>
            <li>Visit us</li>
            <li>Work with us</li>
          </ul>
          <ul>
            <h5 className="footer-heading">Policy</h5>
            <li>Eco plans</li>
            <li>Accessibility</li>
            <li>Social impact</li>
          </ul>
          <ul>
            <h5 className="footer-heading">Customer</h5>
            <li>Private</li>
            <li>Business</li>
          </ul>
        </div>

        <div className="social-icons">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>
        <div className="footer-copyright">
          © 2023 SaferPay. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
