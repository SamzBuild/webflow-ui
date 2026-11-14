import Section from "../layout/Section";
import Container from "../layout/Container";
import { easeInOut, motion } from "motion/react";

const Trusted = () => {
  return (
    <Section>
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, ease: easeInOut }}
          viewport={{ once: true }}
          className="mx-auto w-fit rounded-md bg-neutral-50 px-12 py-4"
        >
          <h3 className="text-xl font-semibold">
            5.0 <span className="text-black/30">Based On </span>145
            <span className="text-black/30"> Reviews</span>
          </h3>
          <span>⭐⭐⭐⭐⭐</span>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Trusted;
