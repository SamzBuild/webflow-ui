import Section from "../layout/Section";
import centerProject from "../../assets/images/Rectangle30.png";
import leftProject from "../../assets/images/Rectangle32.png";
import rigthProject from "../../assets/images/Rectangle34.png";
import { easeInOut, motion } from "motion/react";

const Projects = () => {
  return (
    <Section id="works">
      <motion.h2
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, ease: easeInOut }}
        className="font-heading mb-6 text-center text-4xl font-bold capitalize md:text-6xl"
      >
        Check Our work
      </motion.h2>
      <p className="text-md mx-auto mb-10 max-w-xs text-center text-black/30 md:max-w-md">
        Take a look at some of our recent projects to see how we've helped
        businesses like yours succeed online.
      </p>
      <div className="flex flex-col items-center justify-center gap-16 md:flex-row md:overflow-x-clip">
        <div className="shrink-0 rounded-md border border-neutral-100 bg-white p-4 md:p-10">
          <img src={leftProject} alt="" className="shadow-md" />
        </div>
        <div className="shrink-0 rounded-md border border-neutral-100 bg-white p-4 md:p-10">
          <img src={centerProject} alt="" className="shadow-md" />
        </div>
        <div className="shrink-0 rounded-md border border-neutral-100 bg-white p-4 md:p-10">
          <img src={rigthProject} alt="" className="shadow-md" />
        </div>
      </div>
    </Section>
  );
};

export default Projects;
