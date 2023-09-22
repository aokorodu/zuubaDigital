import styles from "./About.module.css";
import im from "../assets/portfolio_portrait.png";
export function About() {
  return (
    <div className={styles.holder}>
      <div className={styles.content}>
        <div className={styles.img}>
          <img src={im} />
        </div>

        <div className={styles.description}>
          I am an interactive developer with over 15 years of experience
          developing interactive animations, animated infographics,
          high-fidelity prototypes, websites, games, and applications. The types
          of environments in which I have worked are quite varied - from large,
          fast-paced interactive ad agencies to medium-sized technology
          companies and small start-ups. I have had the ability at each stop
          along the way to quickly adapt to changing and evolving technologies
          and to learn new skills.
        </div>
      </div>
    </div>
  );
}
