import { motion } from "framer-motion";

const PageAnimator = ({ children }) => {
  const animations = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        ease: "easeInOut",
        duration: 0.5,
      }}
      style={{ height: "100%" }}
    >
      {children}
    </motion.div>
  );
};

export default PageAnimator;
