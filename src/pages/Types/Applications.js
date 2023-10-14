import { PortfolioItem } from "../../components/PortfolioItem";
import styles from "./Applications.module.css";
import PageAnimator from "../../components/PageAnimator";
import { AppContext } from "../../App";
import { useContext } from "react";

export function Applications() {
  const apps = useContext(AppContext).applications;

  return (
    <PageAnimator>
      <div className={styles.holder}>
        {apps.map((app) => {
          return (
            <>
              <PortfolioItem key={app.title} {...app} />
            </>
          );
        })}
      </div>
    </PageAnimator>
  );
}
