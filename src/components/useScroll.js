//Hooks
import { useEffect } from "react";
//State
import { useInView } from "react-intersection-observer";
//Animations
import { useAnimationControls } from "framer-motion";

export const UseScroll = (treshold) => {
  const controls = useAnimationControls();
  const [element, view] = useInView({ threshold: treshold });
  useEffect(() => {
    if (view) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [element, view]);
  return [element, controls];
};
