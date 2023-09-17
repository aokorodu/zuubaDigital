import { PortfolioItem } from "../../components/PortfolioItem";
import styles from "./Applications.module.css";

export function Game() {
  const exps = [
    {
      title: "Matching Game",
      description:
        "Select matching pairs before the time runs out! Prototype built in Svelte, final version is React",
      link: "000",
    },
    {
      title: "Wordle clone",
      description:
        "With the prototype, you can select both the number of letters per word and the number of attemps prototype",
      link: "000",
    },
    {
      title: "Spot the Difference",
      description: "Find the differences between two nearly identical images",
      link: "000",
    },
    {
      title: "Swipe It Poll",
      description:
        "tinder style poll app. Drag the central image to select or reject",
      link: "000",
    },
    {
      title: "Plinko",
      description:
        "Physics based svg plinko game using the MatterJS physics engine",
      link: "000",
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
