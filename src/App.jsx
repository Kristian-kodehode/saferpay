import "./App.scss";
import illustration from "./images/illustrationGirlAndDog.png";

function App() {
  return (
    <>
      <div>
        <nav>
          <li>item</li>
          <li>item</li>
          <li>item</li>
        </nav>
        <main className="container">
          <div className="headingdiv">
            <h1>Welcome to Saferpay</h1>
            <h4>
              With state-of-the-art encryption and fraud protection, SaferPay is
              your trusted partner for safe and seamless transactions.
            </h4>
            <button className="button-seondary">Read more</button>
          </div>
          <div>
            <img
              src={illustration}
              alt=""
            />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
