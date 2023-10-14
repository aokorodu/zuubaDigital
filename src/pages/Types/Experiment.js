import { useContext } from "react";
import { PortfolioItem } from "../../components/PortfolioItem";
import styles from "./Experiment.module.css";
import PageAnimator from "../../components/PageAnimator";
import { AppContext } from "../../App";

export function Experiment() {
  const exps = useContext(AppContext).experiments;

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
