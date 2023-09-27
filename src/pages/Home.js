import styles from "./Home.module.css";
import PageAnimator from "../components/PageAnimator";

export function Home() {
  return (
    <PageAnimator>
      <div className={styles.holder}>
        <div className={styles.title}>zuubaDigital</div>
        <div className={styles.subtitle}>creative dev</div>
      </div>
    </PageAnimator>
  );
}
