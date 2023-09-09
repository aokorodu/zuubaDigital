import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Portfolio } from "./pages/Portfolio";
import { Game } from "./pages/Types/Game";

function App() {
  return (
    <>
      <nav>
        <div>
          <Link to="/">home</Link>
        </div>
        <div>
          <Link to="/portfolio">portfolio</Link>
        </div>
        <div>
          <Link to="/about">about</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/games/:id" element={<Game />} />
      </Routes>
    </>
  );
}

export default App;
