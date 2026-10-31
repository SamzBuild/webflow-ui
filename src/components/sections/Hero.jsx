import Container from "../layout/Container";
import Button from "../ui/Button";
import heroBackground from "../../assets/images/heroBackground.png";
import { easeInOut, motion } from "motion/react";

const Hero = () => {
  return (
    <div
      className="relative flex min-h-screen w-full items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBackground})` }}
      id="home"
    >
      <Container>
        <div className="mx-auto w-full text-center md:max-w-xl lg:max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, ease: easeInOut }}
            className="font-heading mb-4 text-4xl font-semibold tracking-tight md:text-6xl lg:mb-10 lg:text-8xl"
          >
            Awesome UI Dark Template for Webflow Agency
          </motion.h1>
          <Button variant="purple" text="Get in Touch" />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
