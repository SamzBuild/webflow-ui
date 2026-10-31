import { motion } from "motion/react";

const Navlink = () => {
  const navs = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "How It Works",
      link: "#works",
    },
    {
      name: "Services",
      link: "#services",
    },
  ];
  return (
    <ul className="flex gap-12 rounded-lg border-2 border-white bg-neutral-50 px-10 py-2 text-lg text-neutral-500">
      {navs.map((nav, idx) => {
        return (
          <li key={idx}>
            <motion.a
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 1 }}
              className="hover:text-primary inline-block transition-transform duration-300 hover:-translate-y-1"
              href={nav.link}
            >
              {nav.name}
            </motion.a>
          </li>
        );
      })}
    </ul>
  );
};

export default Navlink;
