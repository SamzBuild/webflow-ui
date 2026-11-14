import Section from "../layout/Section";
import centerProject from "../../assets/images/Rectangle30.png";
import leftProject from "../../assets/images/Rectangle32.png";
import rigthProject from "../../assets/images/Rectangle34.png";
import { easeInOut, motion } from "motion/react";

const Projects = () => {
  return (
    <Section id="works">
      <motion.h2
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, ease: easeInOut }}
        viewport={{ once: true }}
        className="font-heading mb-6 text-center text-4xl font-bold capitalize md:text-6xl"
      >
        Check Our work
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, ease: easeInOut }}
        viewport={{ once: true }}
        className="text-md mx-auto mb-10 max-w-xs text-center text-black/30 md:max-w-md"
      >
        Take a look at some of our recent projects to see how we've helped
        businesses like yours succeed online.
      </motion.p>
      <div className="flex flex-col items-center justify-center gap-16 md:flex-row md:overflow-x-clip">
        <motion.div
          initial={{ opacity: 0, x: -5 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, ease: easeInOut }}
          viewport={{ once: true }}
          className="shrink-0 rounded-md border border-neutral-100 bg-white p-4 md:p-10"
        >
          <img src={leftProject} alt="" className="shadow-md" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -5 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, ease: easeInOut }}
          viewport={{ once: true }}
          className="shrink-0 rounded-md border border-neutral-100 bg-white p-4 md:p-10"
        >
          <img src={centerProject} alt="" className="shadow-md" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -5 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, ease: easeInOut }}
          viewport={{ once: true }}
          className="shrink-0 rounded-md border border-neutral-100 bg-white p-4 md:p-10"
        >
          <img src={rigthProject} alt="" className="shadow-md" />
        </motion.div>
      </div>
    </Section>
  );
};

export default Projects;
