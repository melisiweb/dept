import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

const boxVariant = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 300 },
};

export const SlidingSection: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const control = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      transition={{
        duration: 0.5,
      }}
    >
      {children}
    </motion.div>
  );
};
