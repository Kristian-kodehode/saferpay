import React from "react";
import IllustrationDeal from "../images/IllustrationDeal.png";

const OurGuarantee: React.FC = () => {
  return (
    <section id="our-guarantee">
      <h3 className="section-heading">Our guarantee</h3>
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
            alt="illustration of two hands shaking eachother"
          />
        </div>
      </div>

      <section>
        <h3 className="section-heading">Seriously good</h3>
        <div className="guarantee-cards-container">
          <div className="seriously-good-card">
            <img
              src="https://images.unsplash.com/photo-1573496130141-209d200cebd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3538&q=80"
              alt="two businesswomen crossing their arms and smiling"
            />
            <h3>Our employees are the best at what they do</h3>
          </div>
          <div className="seriously-good-card">
            <img
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80"
              alt="arms holding eachother to form a square fence"
            />
            <h3>We collaborate across the board to give you the best.</h3>
          </div>
          <div className="seriously-good-card">
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3542&q=80"
              alt="arms holding eachother to form a square fence"
            />
            <h3>We mean business when it is about our customers</h3>
          </div>
        </div>
      </section>
    </section>
  );
};

export default OurGuarantee;
