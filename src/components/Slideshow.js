import styles from "./SlideShow.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const slides = [
  { name: "", imagelink: "./gen_art/_let_it_flow.png" },
  { name: "", imagelink: "./gen_art/art_everGreen_1.png" },
  { name: "", imagelink: "./gen_art/art_everGreen_2.png" },
  { name: "", imagelink: "./gen_art/art_everGreen_3.png" },
  { name: "", imagelink: "./gen_art/art_everGreen_4.png" },
  { name: "", imagelink: "./gen_art/art_everGreen_5.png" },
  { name: "", imagelink: "./gen_art/art_everGreen_6.png" },
  { name: "", imagelink: "./gen_art/art_FF_lightning.png" },
  { name: "", imagelink: "./gen_art/art_fourier_1.png" },
  { name: "", imagelink: "./gen_art/art_fourier_2.png" },
  { name: "", imagelink: "./gen_art/art_fractal_trees_3.jpg" },
  { name: "", imagelink: "./gen_art/art_fractal_trees_4.png" },
  { name: "", imagelink: "./gen_art/art_fractal_trees_5.png" },
  { name: "", imagelink: "./gen_art/art_fractal_trees_pink.png" },
  { name: "", imagelink: "./gen_art/art_fractal_trees.png" },
  { name: "", imagelink: "./gen_art/art_spiral.png" },
  { name: "", imagelink: "./gen_art/flow_field_3.13.2021.10.49.27.png" },
  { name: "", imagelink: "./gen_art/flow_field_3.13.2021.23.46.59.png" },
];
const totalSlides = slides.length;
const Slideshow = ({ onClose }) => {
  const [index, setIndex] = useState(0);
  const next = () => {
    if (index + 1 === totalSlides) return;

    setIndex(index + 1);
  };

  const prev = () => {
    if (index === 0) return;
    setIndex(index - 1);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.closeButton} onClick={onClose}>
          <Link to={"/portfolio"}>
            <svg width="100%" height="100%" viewBox="0 0 100 100">
              <path d="M0,0 L100,100 z" stroke="white" strokeWidth={10} />
              <path d="M100,0 L0,100 z" stroke="white" strokeWidth={10} />
            </svg>
          </Link>
        </div>

        <div className={styles.control} onClick={prev}>
          &lt;
        </div>

        {/* <img className={styles.img} src={slides[index].imagelink} /> */}
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

        <div className={styles.control} onClick={next}>
          &gt;
        </div>
      </div>
    </>
  );
};

export default Slideshow;
