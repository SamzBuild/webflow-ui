const Section = ({ children, id }) => {
  return <section className="w-full py-12 relative" id={id}>{children}</section>;
};

export default Section;
