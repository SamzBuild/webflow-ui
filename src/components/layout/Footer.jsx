import Container from "../layout/Container";

const Footer = () => {
  return (
    <Container>
      <div className="my-10 w-full">
        <a href="">
          <div className="flex items-center justify-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                height="20px"
                width="20px"
                version="1.1"
                id="Capa_1"
                viewBox="0 0 398.528 398.528"
                xml:space="preserve"
                className="fill-white"
              >
                <g>
                  <path d="M315.232,9.015C311.883,3.276,305.681,0,298.244,0h-91.308c-10.9,0-22.224,7.113-26.93,16.924   L83.17,218.041c-3.162,6.56-2.967,13.518,0.471,19.037c3.463,5.568,9.592,8.811,16.859,8.966l71.662,0.902l-51.877,129.675   c-1.276,3.235-3.959,10.014,0.821,16.981c2.089,3.056,5.674,4.926,9.364,4.926h0.837c6.999,0,11.217-5.308,13.241-7.868   L312.176,180.17c7.153-8.966,4.202-17.013,3.121-19.354c-1.122-2.243-5.625-9.592-17.046-9.592h-53.34l69.8-122.985   C318.37,21.752,318.573,14.729,315.232,9.015z" />
                </g>
              </svg>
            </div>
            <span className="font-heading text-2xl font-semibold">
              FasterUI
            </span>
          </div>
        </a>

        <div className="mt-6 hidden items-center justify-center gap-2 md:flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>
            Made with Love. Practised Clone project as part of learning ReactJS.
          </span>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
