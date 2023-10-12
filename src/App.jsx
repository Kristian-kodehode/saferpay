import "./App.scss";
import MainSection from "./Sections/MainSection.tsx";
import NavSection from "./Sections/NavSection.tsx";
import OurGuarantee from "./Sections/OurGuarantee.tsx";
import Support from "./Sections/Support.tsx";
import Footer from "./Sections/Footer";

function App() {
  return (
    <>
      <div className="app-container">
        <NavSection />
        <MainSection />
        <OurGuarantee />
        <section className="statement-section">
          <section>
            <h2 className="quote">
              “Our mission is to make online purchases worry-free.”{" "}
            </h2>
            <p className="quote-author">
              - Ludwig Martinsen , Founder of SaferPay
            </p>
          </section>
        </section>
        <Support />
        <Footer />
      </div>
    </>
  );
}

export default App;
