import "./App.scss";
import MainSection from "./Sections/MainSection";
import NavSection from "./Sections/NavSection";
import OurGuarantee from "./Sections/OurGuarantee";

function App() {
  return (
    <>
      <div className="app-container">
        <NavSection />
        <MainSection />
        <OurGuarantee />
      </div>
    </>
  );
}

export default App;
