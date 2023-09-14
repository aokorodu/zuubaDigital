import { Link, Outlet } from "react-router-dom";
import styles from "./PortfolioLayout.module.css";
import { PortfolioNav } from "../components/PortfolioNav";

export function PortfolioLayout() {
  return (
    <>
      <div className={styles.holder}>
        <PortfolioNav />
        <Outlet />
      </div>
    </>
  );
}
