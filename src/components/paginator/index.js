import { useState } from "react";
import styles from "./Paginator.module.css";

const Paginator = ({ numberOfPages, pageIndex, callback }) => {
  const arr = new Array(numberOfPages).fill(0);
  const CB = (num) => {
    console.log("num: ", num);
    callback(num);
  };
  return (
    <div className={styles.container}>
      {arr.map((item, index) => {
        return (
          <div
            className={`${styles.item} ${
              index == pageIndex ? styles.active : styles.inactive
            }`}
            onClick={() => {
              CB(index);
            }}
          >
            {index + 1}
          </div>
        );
      })}
    </div>
  );
};

export default Paginator;

// return arr.map((item, index) => {
//   return <div>{index}</div>;
// });
