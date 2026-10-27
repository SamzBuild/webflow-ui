import Container from "../layout/Container";
import Section from "../layout/Section";

const FAQ = () => {
  return (
    <Section>
      <Container>
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="flex items-center justify-center">
            <h3 className="mb-5 font-heading text-3xl font-bold tracking-tight md:text-6xl">
              Frequently <br className="hidden md:block" /> Asked{" "}
              <br className="hidden md:block" />
              Questions
            </h3>
          </div>
          <divs>
            <details className="mb-5 w-full max-w-xl rounded-md bg-white p-4">
              <summary className="">How can I contact Inkyy Team?</summary>
              You can reach us through our contact form on our website or by
              emailing us at <strong>hello@inkyy.com</strong> We typically
              respond within 24 hours.
            </details>
            <details className="mb-5 w-full max-w-xl rounded-md bg-white p-4">
              <summary>What services do you offer?</summary>
            </details>
            <details className="mb-5 w-full max-w-xl bg-white p-4">
              <summary>Do you provide website maintenance services?</summary>
            </details>
            <details className="mb-5 w-full max-w-xl rounded-md bg-white p-4">
              <summary>
                How long does it take to design and develop a website?
              </summary>
            </details>
            <details className="mb-5 w-full max-w-xl rounded-md bg-white p-4">
              <summary>Do you require a deposit for projects?</summary>
            </details>
          </divs>
        </div>
      </Container>
    </Section>
  );
};

export default FAQ;
