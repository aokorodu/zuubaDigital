import { Route, Routes, useLocation } from "react-router-dom";
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
import GenArt from "./pages/Types/GenArt";
import { useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";

function App() {
  const imagesToCache = [
    { imagelink: "./vids/experiment_still.png" },
    { imagelink: "./vids/interactive_still.png" },
    { imagelink: "./vids/prototype_still.png" },
    { imagelink: "./vids/application_still.png" },
    { imagelink: "./vids/games_still.png" },
    { imagelink: "./gen_art/flow_field.png" },
    { imagelink: "./gen_art/let_it_flow.png" },
    { imagelink: "./gen_art/flow_field_3.13.2021.10.49.27.png" },
    { imagelink: "./gen_art/art_FF_lightning.png" },
    { imagelink: "./gen_art/art_everGreen_1.jpeg" },
    { imagelink: "./gen_art/art_everGreen_2.jpeg" },
    { imagelink: "./gen_art/art_everGreen_3.jpeg" },
    { imagelink: "./gen_art/art_everGreen_4.jpeg" },
    { imagelink: "./gen_art/art_everGreen_5.jpeg" },
    { imagelink: "./gen_art/art_everGreen_6.jpeg" },
    { imagelink: "./gen_art/art_fourier_1.jpeg" },
    { imagelink: "./gen_art/art_fourier_2.jpeg" },
    { imagelink: "./gen_art/art_fractal_trees_3.jpg" },
    { imagelink: "./gen_art/art_fractal_trees_4.jpeg" },
    { imagelink: "./gen_art/art_fractal_trees_5.jpeg" },
    { imagelink: "./gen_art/art_fractal_trees_pink.jpeg" },
    { imagelink: "./gen_art/art_fractal_trees.png" },
  ];
  const location = useLocation();
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
      <AnimatePresence mode={"wait"}>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<Home />} />
            <Route path="/portfoliolayout" element={<PortfolioLayout />}>
              <Route index element={<Experiment />} />
              <Route path="games" element={<Game />} />
              <Route path="experiments" element={<Experiment />} />
              <Route path="applications" element={<Applications />} />
              <Route path="intSVGs" element={<IntSVGs />} />
              <Route path="prototypes" element={<Prototypes />} />
            </Route>
            <Route path="/genart" element={<GenArt />} />
            <Route path="/portfolio" element={<Portfolio />}></Route>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </AnimatePresence>
      <MainNav callback={navCallback} />
      {imagesToCache.map(({ imagelink }) => (
        <img src={imagelink} style={{ display: "none" }} />
      ))}
    </>
  );
}

export default App;
