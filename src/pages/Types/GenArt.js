import { PortfolioItem } from "../../components/PortfolioItem";
import styles from "./Applications.module.css";

const ints = [
  {
    title: "groovy path - generative art",
    description: "Random movement of fish using perlin noise",
    links: [
      {
        name: "link",
        link: "https://aokorodu.github.io/portfolioSite/svg-animations/path_seek.html",
      },
    ],
  },
];

export function GenArt() {
  return (
    <>
      <div className={styles.holder}>
        {ints.map((int) => {
          return (
            <>
              <PortfolioItem key={int.title} {...int} />
            </>
          );
        })}
      </div>
    </>
  );
}
