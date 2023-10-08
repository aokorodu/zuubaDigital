import styles from "./PortfolioNav.module.css";
import { NavLink } from "react-router-dom";

const pLinks = [
  { name: "experiments", link: "/portfoliolayout/experiments" },
  { name: "interactive SVGs", link: "/portfoliolayout/intSVGs" },
  { name: "prototypes", link: "/portfoliolayout/prototypes" },
  { name: "applications", link: "/portfoliolayout/applications" },
  { name: "games", link: "/portfoliolayout/games" },
  { name: "gen art", link: "/genart" },
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
