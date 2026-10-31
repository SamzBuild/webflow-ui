import Section from "../layout/Section";
import Container from "../layout/Container";
import Button from "../ui/Button";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <Section>
      <Container>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 7,
          }}
          className="mx-auto max-w-2xl"
        >
          <h3 className="font-heading mb-12 text-center text-4xl font-semibold tracking-tight md:text-6xl">
            Let's Get In Touch
          </h3>
          <form action="" className="flex flex-col justify-center">
            <label htmlFor="email" className="font-medium">
              email
            </label>
            <input
              type="email"
              className="mb-4 rounded-md bg-white px-8 py-2"
              placeholder="example@email.com"
            />

            <label htmlFor="name" className="font-medium">
              name
            </label>
            <input
              type="text"
              className="mb-4 rounded-md bg-white px-8 py-2"
              placeholder="Full Name"
            />

            <label htmlFor="message" className="font-medium">
              message
            </label>
            <textarea
              name=""
              id=""
              rows="10"
              className="mb-4 rounded-md bg-white px-8 py-2"
            ></textarea>

            <Button type="submit" text="Get In Touch"></Button>
          </form>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Contact;
