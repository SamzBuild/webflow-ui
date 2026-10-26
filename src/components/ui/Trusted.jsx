import Section from "../layout/Section";
import Container from "../layout/Container";

const Trusted = () => {
  return (
    <Section>
      <Container>
        <div className="mx-auto w-fit bg-neutral-50 py-4 px-12 rounded-md">
          <h3 className="text-xl font-semibold">
            5.0 <span className="text-black/30">Based On </span>145
            <span className="text-black/30"> Reviews</span>
          </h3>
          <span>⭐⭐⭐⭐⭐</span>
        </div>
      </Container>
    </Section>
  );
};

export default Trusted;
