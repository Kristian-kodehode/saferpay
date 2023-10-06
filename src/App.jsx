import "./App.scss";
import MainSection from "./Sections/MainSection";
import NavSection from "./Sections/NavSection";

function App() {
  return (
    <>
      <div className="app-container">
        <NavSection />
        <MainSection />
      </div>
    </>
  );
}

export default App;
