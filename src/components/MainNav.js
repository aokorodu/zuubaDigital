import { useRef, useState } from "react";
import styles from "./MainNav.module.css";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { MdClose } from "react-icons/md";

const navigation = [
  { name: "home", link: "/" },
  { name: "portfolio", link: "/portfolio" },
  { name: "about", link: "/about" },
  { name: "contact", link: "/contact" },
];

export function MainNav() {
  const linkHolder = useRef(null);
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    console.log("open?", open);
    linkHolder.current.classList.toggle(styles.active);
    setOpen(!open);
  };

  const getClass = () => {
    const str = open
      ? `${styles.nav} ${styles.open}`
      : `${styles.nav} ${styles.closed}`;

    return str;
  };

  return (
    <div className={styles.navHolder}>
      <div className={styles.closeButton} onClick={toggleOpen}>
        {open ? <MdClose /> : <FaBars />}
      </div>
      <div className={getClass()}>
        <nav ref={linkHolder} className={styles.nav}>
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
