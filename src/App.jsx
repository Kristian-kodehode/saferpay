import "./App.scss";
import MainSection from "./Sections/MainSection.tsx";
import NavSection from "./Sections/NavSection.tsx";
import OurGuarantee from "./Sections/OurGuarantee.tsx";

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
