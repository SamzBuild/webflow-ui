import Section from "../layout/Section";
import Container from "../layout/Container";
import Button from "../ui/Button";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <Section>
      <Container>
        <motion.div className="mx-auto max-w-2xl">
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-heading mb-12 text-center text-4xl font-semibold tracking-tight md:text-6xl"
            id="#contact"
          >
            Let's Get In Touch
          </motion.h3>
          <form action="" className="flex flex-col justify-center">
            <label htmlFor="email" className="font-medium">
              email
            </label>
            <input
              type="email"
              className="mb-4 rounded-md bg-transparent px-8 py-4 ring-2 ring-gray-300"
              placeholder="example@email.com"
            />

            <label htmlFor="name" className="font-medium">
              name
            </label>
            <input
              type="text"
              className="mb-4 rounded-md bg-transparent px-8 py-4 ring-2 ring-gray-300"
              placeholder="full Name"
            />

            <label htmlFor="message" className="font-medium">
              message
            </label>
            <textarea
              name=""
              id=""
              rows="10"
              className="mb-4 rounded-md bg-transparent px-8 py-4 ring-2 ring-gray-300"
              placeholder="write your message..."
            ></textarea>

            <Button type="submit" text="Get In Touch" style="py-4"></Button>
          </form>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Contact;
