import styles from "./PortfolioNav.module.css";
import { NavLink } from "react-router-dom";

const pLinks = [
  { name: "experiments", link: "/portfolio/experiments" },
  { name: "interactive SVGs", link: "/portfolio/intSVGs" },
  { name: "prototypes", link: "/portfolio/prototypes" },
  { name: "applications", link: "/portfolio/applications" },
  { name: "games", link: "/portfolio/games" },
  { name: "gen art", link: "/portfolio/genart" },
];

export function PortfolioNav() {
  return (
    <>
      <div className={styles.subnavHolder}>
        {pLinks.map(({ name, link }) => {
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
