import { PortfolioItem } from "../../components/PortfolioItem";
import styles from "./Applications.module.css";

export function Applications() {
  const apps = [
    {
      title: "Motion Generator",
      description:
        "Designed to demonstrate various types of CSS/Javascript animations and easing functions (desktop only)",
      tech: "CSS animations, JavaScript, GSAP.",
      links: [
        { name: "link", link: "https://aokorodu.github.io/motion_generator/" },
      ],
    },
    {
      title: "zuubaDigital portfolio",
      description:
        "My online portfolio, built with React. You're looking at it",
      tech: "React, React Router.",
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
