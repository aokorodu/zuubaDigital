import { PortfolioItem } from "../../components/PortfolioItem";
import styles from "./Applications.module.css";

const ints = [
  {
    title: "particle system",
    description: "change the color palette and the particle motion",
    links: [
      {
        name: "link",
        link: "https://aokorodu.github.io/portfolioSite/svg-animations/particle_animation_deluxe.html",
      },
    ],
  },
  {
    title: "balloon-blimp-plane animation",
    description:
      "this demo contains a mix of css keyframe animations and dynamically drawn background elements (stars, trees, and mountains, which will be different every time)",
    links: [
      {
        name: "link",
        link: "https://aokorodu.github.io/portfolioSite/svg-animations/balloon_blimp_plane_animation.html",
      },
    ],
  },
  {
    title: "interactive bubbles",
    description:
      "change the speed and the zoom level of the bubbles using the provided sliders",
    links: [
      {
        name: "link",
        link: "https://aokorodu.github.io/portfolioSite/svg-animations/interactive_bubbles.html",
      },
    ],
  },
  {
    title: "interactive colors",
    description: "change the colors using the provided sliders.",
    links: [
      {
        name: "link",
        link: "https://aokorodu.github.io/portfolioSite/svg-animations/interactive_colors.html",
      },
    ],
  },
  {
    title: "parralax animation",
    description: "take a CSS drive on a mountain pass",
    links: [
      {
        name: "link",
        link: "https://aokorodu.github.io/portfolioSite/svg-animations/mountain_parralax.html",
      },
    ],
  },
  {
    title: "waves",
    description: "wave animation",
    links: [
      {
        name: "link",
        link: "https://aokorodu.github.io/portfolioSite/svg-animations/waves.html",
      },
    ],
  },
];

export function IntSVGs() {
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
