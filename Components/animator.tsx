/* eslint-disable react-hooks/exhaustive-deps */
import { motion } from "framer-motion";
import { useState, useEffect, FC } from "react";
import { AnimatePasswordStep as Props } from "../../interfaces";

const Animator: FC<Props> = ({ order, currentStep, children }) => {
  const [animateType, setAnimateType] = useState("");

  useEffect(() => {
    if (order === currentStep) {
      setAnimateType("appear");
    } else if (currentStep === order + 1) {
      setAnimateType("fade");
    } else if (currentStep === order + 2) {
      setAnimateType("disappear");
    } else {
      setAnimateType("nothing");
    }
  }, [currentStep]);

  return (
    <motion.div
      layout
      initial={{ bottom: -50 }}
      variants={{
        nothing: { opacity: 0 },
        appear: { bottom: 30 },
        fade: { bottom: 200, opacity: 0.3, filter: "blur(0.1px)", scale: 0.85 },
        disappear: { bottom: 260, opacity: 0, scale: 0.6 },
      }}
      animate={animateType}
      transition={{ ease: "easeInOut", duration: 0.8 }}
      style={{
        position: "absolute",
        width: "100%",
      }}
    >
      {children}
    </motion.div>
  );
};

export default Animator;
