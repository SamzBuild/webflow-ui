import Section from "../layout/Section";
import Container from "../layout/Container";

const Pricing = () => {
  return (
    <Section>
      <Container>
        <div className="flex flex-col justify-center gap-24 md:flex-row">
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
          <div className="flex w-full max-w-xl flex-col gap-5 items-start justify-between rounded-md bg-white px-16 py-8">
            <h3 className="text-2xl font-semibold md:text-3xl">
              Unlimited Services
            </h3>
            <p className="">
              Take a look at some of our recent projects to see how <br /> we've
              helped businesses like yours succeed online.
            </p>
            <ul className="grid grid-cols-3 grid-rows-2 gap-x-5 gap-y-3 md:grid-cols-2 md:grid-rows-3 md:gap-x-20 md:gap-y-5">
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
