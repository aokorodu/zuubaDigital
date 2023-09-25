import { NavLink } from "react-router-dom";
import styles from "./Portfolio.module.css";
import { PortfolioTypeItem } from "../components/PortfolioTypeItem";

const pLinks = [
  {
    name: "experiments",
    link: "/portfoliolayout/experiments",
    videoLink: "./vids/experiments.mp4",
  },
  {
    name: "interactive SVGs",
    link: "/portfoliolayout/intSVGs",
    videoLink: "./vids/interactive_svg.mp4",
  },
  {
    name: "prototypes",
    link: "/portfoliolayout/prototypes",
    videoLink: "./vids/prototypes.mp4",
  },
  {
    name: "applications",
    link: "/portfoliolayout/applications",
    videoLink: "./vids/applications.mp4",
  },
  {
    name: "games",
    link: "/portfoliolayout/games",
    videoLink: "./vids/games.mp4",
  },
  {
    name: "gen art",
    link: "/portfoliolayout/genart",
    imagelink: "./gen_art/flow_field.png",
  },
];
export function Portfolio() {
  return (
    <>
      <div className={styles.holder}>
        <div className={styles.linkHolder}>
          {pLinks.map((plink) => {
            return <PortfolioTypeItem {...plink} />;
          })}
        </div>
      </div>
    </>
  );
}
