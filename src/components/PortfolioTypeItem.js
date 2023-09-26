import styles from "./PortfolioTypeItem.module.css";
import HoverVideoPlayer from "react-hover-video-player";
import { NavLink } from "react-router-dom";

export function PortfolioTypeItem({
  name,
  link,
  imagelink,
  videoLink,
  pauseOverlay,
}) {
  return (
    <div className={styles.card}>
      <NavLink key={`ptitem_${name}`} to={link}>
        <div className={styles.imageHolder}>
          {imagelink && (
            <img src={imagelink} style={{ width: "100%", height: "200px" }} />
          )}
          {videoLink && (
            // <video width="100%" height="100%">
            //   <source src={videoLink} type="video/mp4" />
            //   Your browser does not support the video tag.
            // </video>
            <HoverVideoPlayer
              videoSrc={videoLink}
              sizingMode="overlay"
              restartOnPaused
              pausedOverlay={
                <img
                  src={pauseOverlay}
                  alt=""
                  style={{
                    // Make the image expand to cover the video's dimensions
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
              }
              //  loadingOverlay={
              //    <div className="loading-overlay">
              //      <div className="loading-spinner" />
              //    </div>
              //  }
            />
          )}
        </div>
        <div className={styles.textHolder}>{name}</div>
      </NavLink>
    </div>
  );
}
