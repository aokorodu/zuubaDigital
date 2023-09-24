import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Portfolio } from "./pages/Portfolio";
import { MainNav } from "./components/MainNav";
import { Contact } from "./pages/Contact";
import BGAnimation from "./components/BGAnimation";
import { Game } from "./pages/Types/Game";
import { Experiment } from "./pages/Types/Experiment";
import { Applications } from "./pages/Types/Applications";
import { PortfolioLayout } from "./pages/PortfolioLayout";
import { IntSVGs } from "./pages/Types/IntSVGs";
import { Prototypes } from "./pages/Types/Prototypes";
import { PageLayout } from "./pages/PageLayout";
import { GenArt } from "./pages/Types/GenArt";
import { useEffect, useRef } from "react";

function App() {
  const anim = useRef(null);
  useEffect(() => {
    console.log("useeffect");
    anim.current.draw();
  }, []);

  const navCallback = (section) => {
    console.log("section: ", section);
    if (section === "about") anim.current.changeFlow("waterFlow");
    if (section === "home") anim.current.changeFlow("sin");
    if (section === "portfolio") anim.current.changeFlow("float");
    if (section === "contact") anim.current.changeFlow("orbit");
  };

  return (
    <>
      <BGAnimation ref={anim} />
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path="/portfolio" element={<PortfolioLayout />}>
            <Route index element={<Experiment />} />
            <Route path="games" element={<Game />} />
            <Route path="experiments" element={<Experiment />} />
            <Route path="applications" element={<Applications />} />
            <Route path="intSVGs" element={<IntSVGs />} />
            <Route path="prototypes" element={<Prototypes />} />
            <Route path="genart" element={<GenArt />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
      <MainNav callback={navCallback} />
    </>
  );
}

export default App;
