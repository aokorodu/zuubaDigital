import { PortfolioItem } from "../../components/PortfolioItem";
import styles from "./Applications.module.css";

const protos = [
  {
    title: "Motion Generator",
    description:
      "Designed to demonstrate various types of CSS/Javascript animations and easing functions (desktop only)",
    links: [
      { name: "link", link: "https://aokorodu.github.io/motion_generator/" },
    ],
  },
  {
    title: "401k Visualizer",
    description:
      "Interactive SVG demonstrating a 401k visualizer concept (desktop only)",
    links: [
      {
        name: "link",
        link: "https://aokorodu.github.io/bench_mo_money/index.html",
      },
    ],
  },
  {
    title: "401k Visualizer - Abstract",
    description:
      "A more abstract, experimental version of the Interactive 401k visualizer with particle effects, built using canvas/PixiJS (desktop only)",
    links: [{ name: "link", link: "https://aokorodu.github.io/portfolio/" }],
  },
];

export function Prototypes() {
  return (
    <>
      <div className={styles.holder}>
        {protos.map((proto) => {
          return (
            <>
              <PortfolioItem key={proto.title} {...proto} />
            </>
          );
        })}
      </div>
    </>
  );
}
