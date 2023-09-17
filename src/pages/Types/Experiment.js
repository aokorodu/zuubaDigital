import { PortfolioItem } from "../../components/PortfolioItem";
import styles from "./Experiment.module.css";

export function Experiment() {
  const exps = [
    {
      title: "Ripples",
      description:
        "SVG based ripple animation. Generally this type of animation would probably be build using the canvas element",
      link: "https://aokorodu.github.io/ripples/",
    },
    {
      title: "DNA Spiral Animation",
      description:
        "I used this as an intro page for my interactive animation talk for the Vanguard design community",
      link: "https://aokorodu.github.io/spiralDNA/",
    },
    {
      title: "SVG Sunrise",
      description: "interactive svg using GSAP",
      link: "https://aokorodu.github.io/sunrise/",
    },
    {
      title: "Fourier Doughnuts",
      description:
        "Allows for the creation of randomly generated art based upon simple Fourier transforms. Build using Processing. Work in progress.",
      link: "https://aokorodu.github.io/fourier_doughnuts/",
    },
    {
      title: "Nemo",
      description: "Random movement of fish using perlin noise",
      link: "https://aokorodu.github.io/nemo/",
    },
    {
      title: "3D Dice",
      description:
        "React Proof of concept using ThreeJS. Allows you to select the desired roll amount (the sum of the dice) when one or two dice are thrown.",
      link: "https://aokorodu.github.io/3D_Dice/build/",
    },
    {
      title: "Fractal Tree",
      description:
        "vanilla javascript fractal animation using the canvas element",
      link: "https://aokorodu.github.io/fractalTree/",
    },
    {
      title: "Fireworks",
      description:
        "vanilla javascript particle animation using the canvas element",
      link: "https://aokorodu.github.io/fireworks/",
    },
  ];
  return (
    <>
      <div className={styles.holder}>
        {exps.map((experiment) => {
          return (
            <>
              <PortfolioItem key={experiment.title} {...experiment} />
            </>
          );
        })}
      </div>
    </>
  );
}
