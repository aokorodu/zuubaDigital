import { useEffect, useRef } from "react";
import styles from "./BGAnimation.module.css";
import BGParticle from "./BGParticle";
export function BGAnimation() {
  const holderRef = useRef(null);
  const numberOfParticles = 500;
  const particleRefs = useRef([]);
  const addToRefs = (el) => {
    if (el && !particleRefs.current.includes(el)) {
      particleRefs.current.push(el);
    }
  };

  const buildParticles = () => {
    const arr = [];
    for (let i = 0; i < numberOfParticles; i++) {
      arr.push(<BGParticle ref={addToRefs} index={i} />);
    }

    return arr;
  };

  useEffect(() => {
    console.log("use effect");
    draw();
  }, []);

  const draw = () => {
    for (let i = 0; i < numberOfParticles; i++) {
      particleRefs.current[i].update();
    }
    window.requestAnimationFrame(draw);
  };

  return (
    <div className={styles.svgHolder}>
      <svg
        width="100%"
        height={"100%"}
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
      >
        <g ref={holderRef}>{buildParticles()}</g>
      </svg>
    </div>
  );
}
