import styled from "styled-components";
import { Section } from "../styles";
//Animations
import { LayoutGroup } from "framer-motion";
import { fade } from "../Animation";
//Components
import Toggle from "./Toggle";
import { UseScroll } from "./useScroll";

const FaqSection = () => {
  const [element, controls] = UseScroll(0.2);
  return (
    <Faq ref={element} variants={fade} animate={controls} initial="hidden">
      <h2>
        Any questions? <span>FAQ</span>
      </h2>
      <LayoutGroup>
        <Toggle title="How do I start?">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
                mollitia.
              </p>
            </div>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
                mollitia.
              </p>
            </div>
          </div>
        </Toggle>
        <Toggle title="Different Payment Methods">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
                mollitia.
              </p>
            </div>
          </div>
        </Toggle>
        <Toggle title="What Services Do You Offer?">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
                mollitia.
              </p>
            </div>
          </div>
        </Toggle>
      </LayoutGroup>
    </Faq>
  );
};

//Styled components
const Faq = styled(Section)`
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
