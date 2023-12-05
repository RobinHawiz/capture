//Hooks
import { useEffect } from "react";
//State
import { useInView } from "react-intersection-observer";
//Animations
import { useAnimationControls } from "framer-motion";

export const UseScroll = (treshold) => {
  const controls = useAnimationControls();
  const [element, view] = useInView({ threshold: treshold });
  console.log("UseScroll");
  console.log(element);
  useEffect(() => {
    if (view) {
      console.log("show");
      controls.start("show");
    } else {
      console.log("hidden");
      controls.start("hidden");
    }
  }, [element, view]);
  return [element, controls];
};
