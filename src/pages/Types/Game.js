import { PortfolioItem } from "../../components/PortfolioItem";
import styles from "./Applications.module.css";
import PageAnimator from "../../components/PageAnimator";
import { AppContext } from "../../App";
import { useContext } from "react";

export function Game() {
  const games = useContext(AppContext).games;

  return (
    <PageAnimator>
      <div className={styles.holder}>
        {games.map((experiment) => {
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
