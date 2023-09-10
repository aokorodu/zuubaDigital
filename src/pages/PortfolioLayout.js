import { Link, Outlet } from "react-router-dom";
import styles from "./PortfolioLayout.module.css";

export function PortfolioLayout() {
  return (
    <>
      <div className={styles.holder}>
        <div className={styles.subnavHolder}>
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
      </div>
    </>
  );
}
