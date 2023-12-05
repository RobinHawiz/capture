//Styled components
import styled from "styled-components";
//Router
import { Link } from "react-router-dom";
//Images
import athlete from "../img/athlete-small.png";
import racer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
//Animations
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  slider,
  sliderContainer,
} from "../Animation";

const OurWork = () => {
  return (
    <Work
      variants={pageAnimation}
      exit={"exit"}
      initial={"hidden"}
      animate={"show"}
      style={{ background: "#fff" }}
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Movie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to={"/ourwork/the-athlete"}>
          <Hide>
            <motion.img
              variants={photoAnim}
              src={athlete}
              alt="Athlete movie image"
            />
          </Hide>
        </Link>
      </Movie>
      <Movie>
        <motion.h2 variants={fade}>The Racer</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to={"/ourwork/the-racer"}>
          <Hide>
            <motion.img
              variants={photoAnim}
              src={racer}
              alt="Racer movie image"
            />
          </Hide>
        </Link>
      </Movie>
      <Movie>
        <motion.h2 variants={fade}>Good Times</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to={"/ourwork/good-times"}>
          <Hide>
            <motion.img
              variants={photoAnim}
              src={goodtimes}
              alt="Good times movie image"
            />
          </Hide>
        </Link>
      </Movie>
    </Work>
  );
};
//Styled components
const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;
const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 1;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
  background: #8effa0;
`;
export default OurWork;
