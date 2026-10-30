import Section from "../layout/Section";
import Container from "../layout/Container";
import Button from "../ui/Button";

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
            <div className="flex w-full flex-col items-center justify-center gap-6 rounded-md bg-white p-8 md:gap-12">
              <h3 className="text-2xl font-semibold tracking-tight md:text-4xl">
                Let's Schedule <br className="hidden md:block" /> a Meeting
              </h3>
              <Button text="Schedule Meeting" />
            </div>
          </div>
          <div className="flex w-full max-w-xl flex-col items-start justify-between gap-5 rounded-md bg-white px-16 py-8">
            <h3 className="text-2xl font-semibold md:text-3xl">
              Unlimited Services
            </h3>
            <p className="text-black/60">
              Take a look at some of our recent projects to see how <br /> we've
              helped businesses like yours succeed online.
            </p>
            <ul className="grid w-full grid-cols-1 grid-rows-6 gap-x-5 gap-y-3 md:grid-cols-2 md:grid-rows-3 md:gap-x-20 md:gap-y-5">
              <li className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fill="#000000"
                    fill-rule="evenodd"
                    d="M3 10a7 7 0 019.307-6.611 1 1 0 00.658-1.889 9 9 0 105.98 7.501 1 1 0 00-1.988.22A7 7 0 113 10zm14.75-5.338a1 1 0 00-1.5-1.324l-6.435 7.28-3.183-2.593a1 1 0 00-1.264 1.55l3.929 3.2a1 1 0 001.38-.113l7.072-8z"
                  />
                </svg>
                <span className="text-lg">Unlimited Requests</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fill="#000000"
                    fill-rule="evenodd"
                    d="M3 10a7 7 0 019.307-6.611 1 1 0 00.658-1.889 9 9 0 105.98 7.501 1 1 0 00-1.988.22A7 7 0 113 10zm14.75-5.338a1 1 0 00-1.5-1.324l-6.435 7.28-3.183-2.593a1 1 0 00-1.264 1.55l3.929 3.2a1 1 0 001.38-.113l7.072-8z"
                  />
                </svg>
                <span className="text-lg">Unlimited Requests</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fill="#000000"
                    fill-rule="evenodd"
                    d="M3 10a7 7 0 019.307-6.611 1 1 0 00.658-1.889 9 9 0 105.98 7.501 1 1 0 00-1.988.22A7 7 0 113 10zm14.75-5.338a1 1 0 00-1.5-1.324l-6.435 7.28-3.183-2.593a1 1 0 00-1.264 1.55l3.929 3.2a1 1 0 001.38-.113l7.072-8z"
                  />
                </svg>
                <span className="text-lg">Unlimited Requests</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fill="#000000"
                    fill-rule="evenodd"
                    d="M3 10a7 7 0 019.307-6.611 1 1 0 00.658-1.889 9 9 0 105.98 7.501 1 1 0 00-1.988.22A7 7 0 113 10zm14.75-5.338a1 1 0 00-1.5-1.324l-6.435 7.28-3.183-2.593a1 1 0 00-1.264 1.55l3.929 3.2a1 1 0 001.38-.113l7.072-8z"
                  />
                </svg>
                <span className="text-lg">Unlimited Requests</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fill="#000000"
                    fill-rule="evenodd"
                    d="M3 10a7 7 0 019.307-6.611 1 1 0 00.658-1.889 9 9 0 105.98 7.501 1 1 0 00-1.988.22A7 7 0 113 10zm14.75-5.338a1 1 0 00-1.5-1.324l-6.435 7.28-3.183-2.593a1 1 0 00-1.264 1.55l3.929 3.2a1 1 0 001.38-.113l7.072-8z"
                  />
                </svg>
                <span className="text-lg">Unlimited Requests</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fill="#000000"
                    fill-rule="evenodd"
                    d="M3 10a7 7 0 019.307-6.611 1 1 0 00.658-1.889 9 9 0 105.98 7.501 1 1 0 00-1.988.22A7 7 0 113 10zm14.75-5.338a1 1 0 00-1.5-1.324l-6.435 7.28-3.183-2.593a1 1 0 00-1.264 1.55l3.929 3.2a1 1 0 001.38-.113l7.072-8z"
                  />
                </svg>
                <span className="text-lg">Unlimited Requests</span>
              </li>
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
