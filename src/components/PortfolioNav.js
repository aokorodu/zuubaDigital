import styles from "./PortfolioNav.module.css";
import { Link } from "react-router-dom";

export function PortfolioNav() {
  return (
    <>
      <nav className={styles.nav}>
        <div>
          <Link to="/games">games</Link>
        </div>
        <div>
          <Link to="/experiments">experiments</Link>
        </div>
        <div>
          <Link to="/experiments">interactive SVGs</Link>
        </div>
        <div>
          <Link to="/prototypes">prototypes</Link>
        </div>
      </nav>
    </>
  );
}
