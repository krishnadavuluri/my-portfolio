import "./App.css";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header/DesktopNavbar";

import Test from "./components/test";
function App() {
  return (
    <div className="App">
      <Header />
      {/* <Test/> */}
      <HeroSection/>
    </div>
  );
}

export default App;
