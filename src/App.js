import "./App.css";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header/DesktopNavbar";

import Test from "./components/test";

import Skills from "./components/Skills/skills";


import EducationV2 from "./components/Education/educationV2";

import Education from "./components/Education/education";
function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection/>
      <Skills/>
      <EducationV2/>
    </div>
  );
}

export default App;
