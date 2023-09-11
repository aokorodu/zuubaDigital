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
      <div className={styles.closeButton}>X</div>
      <div className={styles.linkHolder}>
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
        </nav>
      </div>
    </div>
  );
}
