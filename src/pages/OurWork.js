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
import { pageAnimation } from "../Animation";

const OurWork = () => {
  return (
    <Work
      variants={pageAnimation}
      exit={"exit"}
      initial={"hidden"}
      animate={"show"}
      style={{ background: "#fff" }}
    >
      <Movie>
        <h2>The Athlete</h2>
        <div className="line"></div>
        <Link to={"/ourwork/the-athlete"}>
          <img src={athlete} alt="Athlete movie image" />
        </Link>
      </Movie>
      <Movie>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link to={"/ourwork/the-racer"}>
          <img src={racer} alt="Racer movie image" />
        </Link>
      </Movie>
      <Movie>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link to={"/ourwork/good-times"}>
          <img src={goodtimes} alt="Good times movie image" />
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
    background: #cccccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default OurWork;
