import styles from "./GenArt.module.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import Paginator from "../../components/paginator/";
import { AppContext } from "../../App";

const GenArt = ({ onClose }) => {
  const [index, setIndex] = useState(0);
  const slides = useContext(AppContext).slides;
  const totalSlides = slides.length;
  const next = () => {
    if (index + 1 === totalSlides) return;

    setIndex(index + 1);
  };

  const prev = () => {
    if (index === 0) return;
    setIndex(index - 1);
  };

  const goto = (ind) => {
    console.log("goto:", ind);
    if (ind < totalSlides) setIndex(ind);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.closeButton} onClick={onClose}>
          <Link to={"/portfolio"}>
            <svg width="100%" height="100%" viewBox="0 0 100 100">
              <g className={styles.svgControl}>
                <path d="M0,0 L100,100 z" stroke="white" strokeWidth={20} />
                <path d="M100,0 L0,100 z" stroke="white" strokeWidth={20} />
              </g>
            </svg>
          </Link>
        </div>

        <div
          className={`${styles.control} ${index <= 0 ? styles.inactive : ""}`}
          onClick={prev}
        >
          <svg width="100%" height="100%" viewBox="0 0 100 100">
            <g>
              <path
                className={styles.svgControl}
                d="M100,0 L0,50 L100,100"
                stroke="white"
                strokeWidth={10}
              />
            </g>
          </svg>
        </div>
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundImage: `url(${slides[index].imagelink})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />

        <div
          className={`${styles.control} ${
            index >= totalSlides - 1 ? styles.inactive : ""
          }`}
          onClick={next}
        >
          <svg width="100%" height="100%" viewBox="0 0 100 100">
            <g>
              <path
                className={styles.svgControl}
                d="M0,0 L100,50 L0,100"
                stroke="white"
                strokeWidth={10}
              />
            </g>
          </svg>
        </div>
      </div>
      <Paginator
        numberOfPages={slides.length}
        pageIndex={index}
        callback={goto}
      />
    </>
  );
};

export default GenArt;
