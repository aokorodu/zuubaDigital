import { PortfolioItem } from "../../components/PortfolioItem";
import styles from "./Experiment.module.css";
import PageAnimator from "../../components/PageAnimator";

export function Experiment() {
  const exps = [
    {
      title: "Ripples",
      description:
        "SVG based ripple animation. Generally an animation of this type would be built using the Canvas element.",
      tech: "SVG, JavaScript",
      links: [{ name: "link", link: "https://aokorodu.github.io/ripples/" }],
    },
    {
      title: "DNA Spiral Animation",
      description:
        "I used this as an intro page for my interactive animation talk for the Vanguard design community. ",
      tech: "Canvas, Processing",
      links: [{ name: "link", link: "https://aokorodu.github.io/spiralDNA/" }],
    },
    {
      title: "SVG Sunrise",
      description: "interactive svg.",
      tech: "SVG, GSAP, JavaScript",
      links: [{ name: "link", link: "https://aokorodu.github.io/sunrise/" }],
    },
    {
      title: "Fourier Doughnuts",
      description:
        "Allows for the creation of randomly generated art based upon simple Fourier transforms. Build using Processing. Work in progress.",
      tech: "Canvas, Processing",
      links: [
        { name: "link", link: "https://aokorodu.github.io/fourier_doughnuts/" },
      ],
    },
    {
      title: "Nemo",
      description: "Random movement of fish using perlin noise. ",
      tech: "SVG, JavaScript, Processing (for the Perlin Noise function).",
      links: [{ name: "link", link: "https://aokorodu.github.io/nemo/" }],
    },
    {
      title: "3D Dice",
      description:
        "Proof of concept using ThreeJS. Allows you to select the desired roll amount (the sum of the dice) when one or two dice are thrown. ",
      tech: "React, ThreeJS",
      links: [
        { name: "link", link: "https://aokorodu.github.io/3D_Dice/build/" },
      ],
    },
    {
      title: "Fractal Tree",
      description: "Fractal animation.",
      tech: "Canvas, Processing, JavaScript",
      links: [
        { name: "link", link: "https://aokorodu.github.io/fractalTree/" },
      ],
    },
    {
      title: "Fireworks",
      description:
        "vanilla javascript particle animation using the canvas element",
      tech: "Canvas, JavaScript",
      links: [{ name: "link", link: "https://aokorodu.github.io/fireworks/" }],
    },
  ];
  return (
    <PageAnimator>
      <div className={styles.holder}>
        {exps.map((experiment) => {
          return (
            <>
              <PortfolioItem key={experiment.title} {...experiment} />
            </>
          );
        })}
      </div>
    </PageAnimator>
  );
}
