import styles from "./PortfolioItem.module.css";
import { Link } from "react-router-dom";

export function PortfolioItem({ title, description, link }) {
  console.log("link: ", link);
  return (
    <>
      <div className={styles.holder}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
        {/* <Link to={{ pathname: "https://herewecode.io/" }} target="_blank">
          Click to open HereWeCode (new tab)
        </Link> */}
        {link && (
          <a href={link} target="_blank">
            link
          </a>
        )}
      </div>
    </>
  );
}
