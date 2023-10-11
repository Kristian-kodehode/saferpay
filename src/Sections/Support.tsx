import React from "react";
// import '../images'
import support from "../images/groupSupport.png";
import payment from "../images/groupPayment.png";
import visit from "../images/groupVisitUs.png";

const Support = () => {
  return (
    <section
      id="support"
      className="support-section-container"
    >
      <div className="support-section">
        <img
          src={support}
          alt="man doing customer suppport"
        />
        <img
          src={payment}
          alt="hands showing a card transaction"
        />
        <img
          src={visit}
          alt="a busy officespace with people on computers"
        />
      </div>
    </section>
  );
};

export default Support;
