import { PortfolioItem } from "../../components/PortfolioItem";
import styles from "./Applications.module.css";

export function Applications() {
  const apps = [
    {
      title: "zuubaDigital portfolio",
      description:
        "My online portfolio, built with React. You're looking at it",
    },
    {
      title: "Motion Generator",
      description:
        "Designed to demonstrate various types of CSS/Javascript animations and easing functions (desktop only)",
      link: "https://aokorodu.github.io/motion_generator/",
    },
    {
      title: "401k Contribution Visualizer Prototype",
      description:
        "Conceptualized, designed, and developed a web-based prototype that allows users to see how changes to their 401k contribution percentages affect their take-home pay. Built using HTML, CSS, Javascript., and dynamically generated SVG graphics. Animated using GSAP (Greensock Animation Platform) and CSS Animations.",
      link: "https://aokorodu.github.io/bench_mo_money/index.html",
    },

    {
      title: "401k Visualizer - Abstract",
      description:
        "A more abstract, artistic version of the Interactive 401k visualizer with particle effects, built using canvas/PixiJS (desktop only)",
      link: "https://aokorodu.github.io/portfolio/",
    },
  ];
  return (
    <>
      <div className={styles.holder}>
        {apps.map((app) => {
          return (
            <>
              <PortfolioItem key={app.title} {...app} />
            </>
          );
        })}
      </div>
    </>
  );
}
