import { PortfolioItem } from "../../components/PortfolioItem";
import styles from "./Experiment.module.css";

export function Experiment() {
  const exps = [
    {
      title: "Ripples",
      description:
        "SVG based ripple animation. Generally this type of animation would probably be build using the canvas element",
      links: [{ name: "link", link: "https://aokorodu.github.io/ripples/" }],
    },
    {
      title: "DNA Spiral Animation",
      description:
        "I used this as an intro page for my interactive animation talk for the Vanguard design community",
      links: [{ name: "link", link: "https://aokorodu.github.io/spiralDNA/" }],
    },
    {
      title: "SVG Sunrise",
      description: "interactive svg using GSAP",
      links: [{ name: "link", link: "https://aokorodu.github.io/sunrise/" }],
    },
    {
      title: "Fourier Doughnuts",
      description:
        "Allows for the creation of randomly generated art based upon simple Fourier transforms. Build using Processing. Work in progress.",
      links: [
        { name: "link", link: "https://aokorodu.github.io/fourier_doughnuts/" },
      ],
    },
    {
      title: "Nemo",
      description: "Random movement of fish using perlin noise",
      links: [{ name: "link", link: "https://aokorodu.github.io/nemo/" }],
    },
    {
      title: "3D Dice",
      description:
        "React Proof of concept using ThreeJS. Allows you to select the desired roll amount (the sum of the dice) when one or two dice are thrown.",
      links: [
        { name: "link", link: "https://aokorodu.github.io/motion_generator/" },
      ],
    },
    {
      title: "Fractal Tree",
      description:
        "vanilla javascript fractal animation using the canvas element",
      links: [
        { name: "link", link: "https://aokorodu.github.io/motion_generator/" },
      ],
    },
    {
      title: "Fireworks",
      description:
        "vanilla javascript particle animation using the canvas element",
      links: [
        { name: "link", link: "https://aokorodu.github.io/motion_generator/" },
      ],
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
