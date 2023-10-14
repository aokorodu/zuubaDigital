import { PortfolioItem } from "../../components/PortfolioItem";
import styles from "./Applications.module.css";
import PageAnimator from "../../components/PageAnimator";
import { AppContext } from "../../App";
import { useContext } from "react";

export function IntSVGs() {
  const ints = useContext(AppContext).interactiveSVGs;
  return (
    <PageAnimator>
      <div className={styles.holder}>
        {ints.map((int) => {
          return (
            <>
              <PortfolioItem key={int.title} {...int} />
            </>
          );
        })}
      </div>
    </PageAnimator>
  );
}
