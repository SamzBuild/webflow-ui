import Section from "../layout/Section";
import Container from "../layout/Container";

const Pricing = () => {
  return (
    <Section>
      <Container>
        <div className="flex flex-col md:flex-row gap-24 justify-center">
          <div className="flex flex-col gap-12">
            <div>
              <h2 className="mb-6 text-6xl font-semibold">Pricing</h2>
              <p className="max-w-xs text-sm text-black/40">
                Take a look at some of our recent projects to see how we've
                helped businesses like yours succeed online.
              </p>
            </div>
            <div className="flex w-fit flex-col items-center justify-center gap-12 rounded-md bg-white p-8">
              <h3 className="text-4xl font-semibold tracking-tight">
                Let's Schedule <br /> a Meeting
              </h3>
              <button className="bg-primary text-md cursor-pointer rounded-md px-12 py-4 font-semibold text-white">
                Schedule Meeting
              </button>
            </div>
          </div>
          <div className="items-between flex w-full rounded-md max-w-2xl flex-col items-start justify-between bg-white px-16 py-8">
            <h3 className="text-2xl md:text-3xl font-semibold">Unlimited Services</h3>
            <p className="">
              Take a look at some of our recent projects to see how <br /> we've
              helped businesses like yours succeed online.
            </p>
            <ul className="grid grid-cols-2 grid-rows-3 gap-x-20  gap-y-5">
              <li>Unlimited Requests</li>
              <li>Unlimited Requests</li>
              <li>Unlimited Requests</li>
              <li>Unlimited Requests</li>
              <li>Unlimited Requests</li>
              <li>Unlimited Requests</li>
            </ul>
            <div className="w-full rounded-md bg-[#D6DDED] px-8 py-2">
              <h4 className="text-4xl font-bold">
                $3,250
                <span className="text-base font-normal"> /mo</span>
              </h4>
              <span></span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Pricing;
