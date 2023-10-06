import "./App.scss";
import illustration from "./images/illustrationGirlAndDog.png";
import logoNav from "./images/logoNav.svg";

function App() {
  return (
    <>
      <div className="app-container">
        <nav>
          <img
            src={logoNav}
            alt="white saferpay logo in navbar"
          />
          <ul>
            <li>sign up</li>
            <li>partners</li>
            <li>about</li>
          </ul>
        </nav>
        <main className="container">
          <div className="headingdiv">
            <h1>Welcome to Saferpay</h1>
            <h4>
              With state-of-the-art encryption and fraud protection, SaferPay is
              your trusted partner for safe and seamless transactions.
            </h4>
            <button className="button-seondary">Read more</button>
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
              <button className="button-primary">Sign in</button>
            </form>
          </div>
          <div>
            <img
              src={illustration}
              alt="illustration of girl working and dog sleep on floor"
            />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
