import styles from "./PortfolioItem.module.css";
import { Link } from "react-router-dom";

export function PortfolioItem({ title, description, links }) {
  console.log("link: ", links);
  return (
    <>
      <div className={styles.holder}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
        {/* <Link to={{ pathname: "https://herewecode.io/" }} target="_blank">
          Click to open HereWeCode (new tab)
        </Link> */}
        <div className={styles.linkHolder}>
          {links &&
            links.map(({ name, link }) => {
              return (
                <a href={link} target="_blank">
                  {name}
                </a>
              );
            })}
        </div>
      </div>
    </>
  );
}
