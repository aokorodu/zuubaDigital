import { useRef, useState, useContext } from "react";
import { AppContext } from "../App";
import styles from "./MainNav.module.css";
import { NavLink } from "react-router-dom";
import { MdClose } from "react-icons/md";

import Hamburger from "./Hamburger";

export function MainNav({ callback }) {
  const navigation = useContext(AppContext).main;
  const mobileLinkHolder = useRef(null);
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    console.log("open?", open);
    mobileLinkHolder.current.classList.toggle(styles.open);
    setOpen(!open);
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
          <div className={styles.linkHolder}>
            {navigation.map((item) => {
              const name = item.name;
              const link = item.link;
              return (
                <NavLink
                  key={`mobile_${name}`}
                  to={link}
                  className={({ isActive }) => {
                    return isActive ? styles.active : styles.inactive;
                  }}
                  onClick={() => {
                    toggleOpen();
                    callback(name);
                  }}
                >
                  {name}
                </NavLink>
              );
            })}
          </div>
        </div>
        {/* ----toggle -----*/}
        <div className={styles.toggle} onClick={toggleOpen}>
          <div className={styles.iconHolder}>
            {open ? <MdClose /> : <Hamburger />}
          </div>
        </div>
      </div>
    </>
  );
}
