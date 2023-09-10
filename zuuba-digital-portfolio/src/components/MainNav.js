import styles from "./MainNav.module.css";
import { Link } from "react-router-dom";

export function MainNav() {
  return (
    <div className={styles.navHolder}>
      <nav className={styles.nav}>
        <div>
          <Link to="/">home</Link>
        </div>
        <div>
          <Link to="/portfolio">portfolio</Link>
        </div>
        <div>
          <Link to="/about">about</Link>
        </div>
        <div>
          <Link to="/contact">contact</Link>
        </div>
      </nav>
    </div>
  );
}
