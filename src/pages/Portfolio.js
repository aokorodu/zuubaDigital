import { NavLink } from "react-router-dom";
import styles from "./Portfolio.module.css";
import { PortfolioTypeItem } from "../components/PortfolioTypeItem";
import PageAnimator from "../components/PageAnimator";

const pLinks = [
  {
    name: "experiments",
    link: "/portfoliolayout/experiments",
    videoLink: "./vids/experiments.mp4",
    pauseOverlay: "./vids/experiment_still.png",
  },
  {
    name: "interactive SVGs",
    link: "/portfoliolayout/intSVGs",
    videoLink: "./vids/interactive_svg.mp4",
    pauseOverlay: "./vids/interactive_still.png",
  },
  {
    name: "prototypes",
    link: "/portfoliolayout/prototypes",
    videoLink: "./vids/prototypes.mp4",
    pauseOverlay: "./vids/prototype_still.png",
  },
  {
    name: "applications",
    link: "/portfoliolayout/applications",
    videoLink: "./vids/applications.mp4",
    pauseOverlay: "./vids/application_still.png",
  },
  {
    name: "games",
    link: "/portfoliolayout/games",
    videoLink: "./vids/games.mp4",
    pauseOverlay: "./vids/games_still.png",
  },
  {
    name: "gen art",
    link: "/portfoliolayout/genart",
    imagelink: "./gen_art/flow_field.png",
  },
];
export function Portfolio() {
  return (
    <PageAnimator>
      <div className={styles.holder}>
        <div className={styles.linkHolder}>
          {pLinks.map((plink) => {
            return <PortfolioTypeItem key={plink.name} {...plink} />;
          })}
        </div>
      </div>
    </PageAnimator>
  );
}
