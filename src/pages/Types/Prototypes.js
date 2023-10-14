import { PortfolioItem } from "../../components/PortfolioItem";
import styles from "./Applications.module.css";
import PageAnimator from "../../components/PageAnimator";
import { AppContext } from "../../App";
import { useContext } from "react";

export function Prototypes() {
  const protos = useContext(AppContext).prototypes;
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
