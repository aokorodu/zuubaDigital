import styles from "./MainNav.module.css";
import { NavLink } from "react-router-dom";

export function MainNav() {
  return (
    <div className={styles.navHolder}>
      <nav className={styles.nav}>
        <div>
          <NavLink to="/">home</NavLink>
        </div>
        <div>
          <NavLink to="/portfolio">portfolio</NavLink>
        </div>
        <div>
          <NavLink to="/about">about</NavLink>
        </div>
        <div>
          <NavLink to="/contact">contact</NavLink>
        </div>
      </nav>
    </div>
  );
}
