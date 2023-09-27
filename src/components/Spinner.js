import styles from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={styles.holder}>
      <svg width={"100%"} height={"100%"} viewBox="0 0 100 100">
        <circle
          className={styles.spinnerStyle}
          cx={50}
          cy={50}
          r="25"
          fill="none"
          stroke={"white"}
          strokeOpacity={0.8}
          strokeWidth={2}
          pathLength={100}
        />
      </svg>
    </div>
  );
};

export default Spinner;
