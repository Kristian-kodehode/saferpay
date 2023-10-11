import React from "react";
import illustration from "../images/illustrationGirlAndDog.png";

const MainSection = () => {
  return (
    <section id="main-section">
      <main className="container">
        <div className="headingdiv">
          <h1>Welcome to Saferpay</h1>
          <h4>
            With state-of-the-art encryption and fraud protection,{" "}
            <strong>SaferPay</strong> is your trusted partner for safe and
            seamless transactions.
          </h4>
          <button className="button-seondary">
            <i className="fa-brands fa-google"></i> Login with Google
          </button>
          <p style={{ color: "grey" }}>Or</p>
          <form action="">
            <input
              type="text"
              placeholder="Email"
            />
            <input
              type="text"
              placeholder="Password"
            />
            <button className="button-primary">
              Sign Up <i className="fa-solid fa-right-to-bracket"></i>
            </button>
          </form>
        </div>
        <div>
          <img
            src={illustration}
            alt="illustration of girl working and dog sleep on floor"
          />
        </div>
      </main>
    </section>
  );
};

export default MainSection;
