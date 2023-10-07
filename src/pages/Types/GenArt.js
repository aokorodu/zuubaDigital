import Slideshow from "../../components/Slideshow";
import { useState } from "react";

const ints = [
  {
    title: "groovy path - generative art",
    description: "Random movement of fish using perlin noise",
    links: [
      {
        name: "link",
        link: "https://aokorodu.github.io/portfolioSite/svg-animations/path_seek.html",
      },
    ],
  },
];

export function GenArt() {
  const [showSlides, setShowSlides] = useState(true);

  const closeSlideshow = () => {
    console.log("closeslideshow");
    setShowSlides(false);
  };

  return (
    <>
      {/* <div className={styles.holder}>
        {ints.map((int) => {
          return (
            <>
              <PortfolioItem key={int.title} {...int} />
            </>
          );
        })}
      </div> */}
      {showSlides && <Slideshow onClose={closeSlideshow} />}
    </>
  );
}
