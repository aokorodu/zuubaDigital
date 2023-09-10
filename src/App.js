import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Portfolio } from "./pages/Portfolio";
import { MainNav } from "./components/MainNav";
import { Contact } from "./pages/Contact";
import { BGAnimation } from "./components/BGAnimation";
import { Game } from "./pages/Types/Game";
import { Experiment } from "./pages/Types/Experiment";

function App() {
  return (
    <>
      <MainNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/games" element={<Game />} />
        <Route path="/experiments" element={<Experiment />} />
      </Routes>
      <BGAnimation />
    </>
  );
}

export default App;
