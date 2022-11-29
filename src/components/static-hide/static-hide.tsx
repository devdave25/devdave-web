import React from "react";

import { useMouseMove } from "../../hooks/use-mouse-move";
import { motion } from "framer-motion";

interface StaticHideProps {
  delay?: number;
  children: React.ReactElement;
}
export const StaticHide: React.FC<StaticHideProps> = ({
  delay = 2000,
  children
}) => {
  const { moving } = useMouseMove(delay);
  const [over, setOver] = React.useState(false);

  const variants = {
    closed: {
      opacity: 0,
      transition: { duration: 1 },
      transitionEnd: { display: "none" }
    },
    open: {
      opacity: 1,
      transition: {
        delayChildren: 0.5
      },
      transitionEnd: { display: "block" }
    }
  };

  return (
    <motion.div
      animate={moving || over ? "open" : "closed"}
      variants={variants}
      onMouseOver={(e) => setOver(true)}
      onMouseLeave={(e) => setOver(false)}
    >
      {children}
    </motion.div>
  );
};
