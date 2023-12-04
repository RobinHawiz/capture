import styled from "styled-components";
import { Section } from "../styles";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";

const FaqSection = () => {
  return (
    <Faq
      variants={pageAnimation}
      exit={"exit"}
      initial={"hidden"}
      animate={"show"}
    >
      <h2>
        Any questions? <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How do I start?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            mollitia.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Daily Schedule</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            mollitia.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Different Payment Methods</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            mollitia.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>What Services Do You Offer?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            mollitia.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
    </Faq>
  );
};

//Styled components
const Faq = styled(motion.Section)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
