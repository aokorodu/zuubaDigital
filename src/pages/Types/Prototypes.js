import { PortfolioItem } from "../../components/PortfolioItem";
import styles from "./Applications.module.css";
import PageAnimator from "../../components/PageAnimator";

const protos = [
  {
    title: "Xfinity dashboard app platform - (video)",
    description:
      "High-fidelity prototype of Comcast’s “Dashboard” app platform, demonstrated live during Comcast’s Brian Roberts 2013 NCTA (National Cable & Telecommunications Association) keynote address. (The dashboard demo starts at 16:30 and runs through 17:50)",
    links: [{ name: "link", link: "https://youtu.be/1CRjDc_yiBI?t=16m30s" }],
  },
  {
    title: "401k Visualizer",
    description:
      "Interactive SVG demonstrating a 401k visualizer concept (desktop only)",
    tech: "JavaScript, GSAP, SVG.",
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
    tech: "PixiJS, GSAP, Canvas.",
    links: [{ name: "link", link: "https://aokorodu.github.io/portfolio/" }],
  },
];

export function Prototypes() {
  return (
    <PageAnimator>
      <div className={styles.holder}>
        {protos.map((proto) => {
          return (
            <>
              <PortfolioItem key={proto.title} {...proto} />
            </>
          );
        })}
      </div>
    </PageAnimator>
  );
}
