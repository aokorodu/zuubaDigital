import styles from "./About.module.css";
import PageAnimator from "../components/PageAnimator";
import { useState } from "react";
import Spinner from "../components/Spinner";

export function About() {
  const [loaded, setLoaded] = useState(false);
  return (
    <PageAnimator>
      <div className={styles.holder}>
        <div className={styles.content}>
          <div className={styles.img}>
            <img
              src={"./other/portfolio_portrait.png"}
              onLoad={() => {
                setLoaded(true);
              }}
            />

            {!loaded && <Spinner />}
          </div>

          {/* <div className={styles.description}>
            zuubaDigital is Abraham Okorodudu. I am an interactive developer
            with over 15 years of experience developing interactive animations,
            animated infographics, high-fidelity prototypes, websites, games,
            and applications.
          </div> */}
          <div className={styles.description}>
            Creative coder, digital artist, former semi-pro basketball player,
            world traveler, father, husband, brother, son.
          </div>
        </div>
      </div>
    </PageAnimator>
  );
}
