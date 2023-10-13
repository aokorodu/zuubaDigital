import styles from "./PortfolioNav.module.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";

export function PortfolioNav() {
  const navigation = useContext(AppContext).portfolio;
  return (
    <>
      <div className={styles.subnavHolder}>
        {navigation.map(({ name, link }) => {
          return (
            <NavLink
              key={`mobile_${name}`}
              to={link}
              className={({ isActive }) => {
                return isActive ? styles.active : styles.inactive;
              }}
            >
              {name}
            </NavLink>
          );
        })}
      </div>
    </>
  );
}
