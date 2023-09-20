import { useRef } from "react";
import styles from "./BGAnimation.module.css";
import BGParticle from "./BGParticle";
export function BGAnimation() {
  const holderRef = useRef(null);
  const particleRefs = useRef([]);
  const addToRefs = (el) => {
    if (el && !particleRefs.current.includes(el)) {
      particleRefs.current.push(el);
    }
  };

  const buildParticles = () => {
    const arr = [];
    for (let i = 0; i < 100; i++) {
      const x = Math.random() * 1000;
      const y = Math.random() * 1000;
      arr.push(<BGParticle ref={addToRefs} x={x} y={y} />);
    }

    return arr;
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
        <rect
          x={400}
          y={400}
          width={200}
          height={200}
          fill="red"
          opacity={0.1}
        />
      </svg>
    </div>
  );
}
