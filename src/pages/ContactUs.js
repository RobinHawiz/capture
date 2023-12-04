//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";

const ContactUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      exit={"exit"}
      initial={"hidden"}
      animate={"show"}
    >
      <h1>Contact Us</h1>
    </motion.div>
  );
};

export default ContactUs;
