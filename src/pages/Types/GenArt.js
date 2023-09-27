import { PortfolioItem } from "../../components/PortfolioItem";
import styles from "./Applications.module.css";
import PageAnimator from "../../components/PageAnimator";

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
    <PageAnimator>
      <div className={styles.holder}>
        {ints.map((int) => {
          return (
            <>
              <PortfolioItem key={int.title} {...int} />
            </>
          );
        })}
      </div>
    </PageAnimator>
  );
}
