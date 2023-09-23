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

export function MainNav({ callback }) {
  const mobileLinkHolder = useRef(null);
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    console.log("open?", open);
    mobileLinkHolder.current.classList.toggle(styles.open);
    setOpen(!open);
  };

  const getClass = () => {
    const str = open
      ? `${styles.nav} ${styles.open}`
      : `${styles.nav} ${styles.closed}`;

    return str;
  };

  return (
    <>
      <div className={styles.navHolder}>
        <div className={styles.desktopNav}>
          {navigation.map((item) => {
            const name = item.name;
            const link = item.link;
            return (
              <NavLink
                key={name}
                to={link}
                className={({ isActive }) => {
                  return isActive ? styles.active : styles.inactive;
                }}
                onClick={() => {
                  callback(name);
                }}
              >
                {name}
              </NavLink>
            );
          })}
        </div>

        <div ref={mobileLinkHolder} className={styles.mobileNav}>
          {navigation.map((item) => {
            const name = item.name;
            const link = item.link;
            return (
              <NavLink key={`mobile_${name}`} to={link} onClick={toggleOpen}>
                {name}
              </NavLink>
            );
          })}
        </div>
        {/* ----toggle -----*/}
        <div className={styles.toggle} onClick={toggleOpen}>
          {open ? <MdClose /> : <FaBars />}
        </div>
      </div>
    </>
  );
}
