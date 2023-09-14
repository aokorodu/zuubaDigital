import styles from "./PortfolioNav.module.css";
import { Link } from "react-router-dom";

const pLinks = [
  { name: "games", link: "/portfolio/games" },
  { name: "experiments", link: "/portfolio/experiments" },
  { name: "interactive SVGs", link: "/portfolio/intSVGs" },
  { name: "prototypes", link: "/portfolio/prototypes" },
  { name: "gen art", link: "/portfolio/genart" },
];

export function PortfolioNav() {
  return (
    <>
      <div className={styles.subnavHolder}>
        {pLinks.map((plink) => {
          return <Link to={plink.link}>{plink.name}</Link>;
        })}
      </div>
    </>
  );
}
