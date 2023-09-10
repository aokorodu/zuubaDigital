import { Link, Outlet } from "react-router-dom";

export function PortfolioLayout() {
  return (
    <>
      <div>
        <div>
          <Link to="/portfolio/games">games</Link>
        </div>
        <div>
          <Link to="/portfolio/experiments">experiments</Link>
        </div>
        <div>
          <Link to="/portfolio/intSVGs">interactive SVGs</Link>
        </div>
        <div>
          <Link to="/portfolio/prototypes">prototypes</Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}
