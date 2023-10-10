import React from "react";
import IllustrationDeal from "../images/IllustrationDeal.png";

const OurGuarantee = () => {
  return (
    <section>
      <h3>Our guarantee</h3>
      <div className="guarantee-cards-container">
        <div className="guarantee-card">
          <i className="fa-solid fa-user-shield"></i>
          <h6>guarantee</h6>
          <h3>We got your back when the scammers are loose.</h3>
        </div>
        <div className="guarantee-card">
          <i className="fa-solid fa-lock"></i>
          <h6>guarantee</h6>
          <h3>State of the art encryption for your protection.</h3>
        </div>
        <div>
          <img
            src={IllustrationDeal}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default OurGuarantee;
