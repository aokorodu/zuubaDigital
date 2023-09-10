import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Portfolio } from "./pages/Portfolio";
import { MainNav } from "./components/MainNav";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <>
      <MainNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
