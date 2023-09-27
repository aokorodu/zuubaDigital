import { PortfolioItem } from "../../components/PortfolioItem";
import styles from "./Applications.module.css";
import PageAnimator from "../../components/PageAnimator";

export function Game() {
  const exps = [
    {
      title: "movantik oic challenge (video)",
      description:
        "Interactive HTML5 game utilizing Leap Motion as the primary interface. The game was deployed at the AstraZeneca booth at several major Pharmaceutical Conventions. (Note: skip to 2:50 to view gameplay)",
      tech: "Canvas, HTML, CSS, JavaScript, CreateJS, GSAP, Leap Motion.",
      links: [
        {
          name: "gameplay video",
          link: "https://www.youtube.com/watch?v=l-rUN_-Z6Jg",
        },
      ],
    },
    {
      title: "Matching Game",
      description: "Select matching pairs before the time runs out!",
      tech: "Svelte (prototype), React, GSAP, SVG.",
      links: [
        {
          name: "svelte prototype",
          link: "https://aokorodu.github.io/MatchingGame/public/",
        },
        {
          name: "base version",
          link: "https://aokorodu.github.io/portfolioSite/wireframes/matchit/index.html",
        },
        {
          name: "final version",
          link: "https://secure.cataboom.com/direct/cataboom-demo-matchit-restaurant-cafe-vegan-01",
        },
        {
          name: "another final version",
          link: "https://secure.cataboom.com/direct/cb-mechanic-demo-matchit",
        },
      ],
    },
    {
      title: "Wordle clone",
      description:
        "With the prototype, you can select both the number of letters per word and the number of attemps prototype",
      tech: "React, CSS animations.",
      links: [
        {
          name: "prototype",
          link: "https://aokorodu.github.io/Wordle_DEMO/build/",
        },
        {
          name: "base version",
          link: "https://aokorodu.github.io/portfolioSite/wireframes/word-fury/index.html",
        },
        {
          name: "final version",
          link: "https://secure.cataboom.com/direct/cb-mechanic-demo-wordfury",
        },
      ],
    },
    {
      title: "Spot the Difference",
      description: "Find the differences between two nearly identical images",
      tech: "React, CSS animations, SVG.",
      links: [
        {
          name: "base version",
          link: "https://aokorodu.github.io/portfolioSite/wireframes/diss/index.html",
        },
        {
          name: "final version",
          link: "https://secure.cataboom.com/direct/cb-mechanic-demo-differ",
        },
      ],
    },
    {
      title: "Swipe It Poll",
      description:
        "tinder style poll app. Drag the central image to select or reject",
      tech: "React, GSAP, CSS animations, SVG.",
      links: [
        {
          name: "base version",
          link: "https://aokorodu.github.io/portfolioSite/wireframes/swipeit/index.html",
        },
        {
          name: "final version",
          link: "https://secure.cataboom.com/direct/cb-mechanic-demo-swipeit",
        },
      ],
    },
    {
      title: "Plinko",
      description:
        "Physics based svg plinko game using the MatterJS physics engine",
      tech: "React, MatterJS (physics), GSAP, SVG.",
      links: [
        {
          name: "base version",
          link: "https://aokorodu.github.io/portfolioSite/wireframes/dropit/index.html",
        },
        {
          name: "final version",
          link: "https://secure.cataboom.com/direct/cataboom-demo-dropin-restaurant-pizza-qsr-01",
        },
      ],
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
