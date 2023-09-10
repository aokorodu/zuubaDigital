import styles from "./MainNav.module.css";
import { NavLink } from "react-router-dom";

const navigation = [
  { name: "home", link: "/" },
  { name: "portfolio", link: "/portfolio" },
  { name: "about", link: "/about" },
  { name: "contact", link: "/contact" },
];

export function MainNav() {
  return (
    <div className={styles.navHolder}>
      <nav className={styles.nav}>
        {navigation.map((navitem) => {
          return (
            <NavLink
              key={navitem.name}
              to={navitem.link}
              className={({ isActive }) => {
                return isActive ? styles.active : styles.inactive;
              }}
            >
              {navitem.name}
            </NavLink>
          );
        })}
        {/* <div>
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
        </div> */}
      </nav>
    </div>
  );
}
