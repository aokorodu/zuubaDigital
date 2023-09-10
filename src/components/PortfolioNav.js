import styles from "./PortfolioNav.module.css";
import { Link } from "react-router-dom";

export function PortfolioNav() {
  return (
    <>
      <nav className={styles.nav}>
        <div>
          <details>
            <summary>Games</summary>
            <p>
              Ullamco elit elit velit minim esse nulla enim nulla enim culpa.
              Tempor ex cupidatat consequat ea dolor ea occaecat. Mollit aliqua
              aute voluptate irure laboris ullamco adipisicing elit magna.
              Eiusmod ullamco id est ea nisi ex irure laborum ex in esse qui.
              Enim veniam fugiat officia consectetur sunt. Veniam fugiat qui
              ullamco tempor eiusmod aliquip esse deserunt ullamco fugiat.
            </p>
          </details>
          <Link to="/">home</Link>
        </div>
        <div>
          <Link to="/portfolio">portfolio</Link>
        </div>
        <div>
          <Link to="/about">about</Link>
        </div>
        <div>
          <Link to="/contact">contact</Link>
        </div>
      </nav>
    </>
  );
}
