import { useState } from "react";
import Button from "../ui/Button";
import Navlink from "../ui/Navlink";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  function handleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <header className="fixed z-10 w-full md:py-4 md:backdrop-blur-2xl">
      <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between rounded-md bg-white px-4 py-2 lg:py-4">
        {/* logo */}
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

        {/* navlinks deskotop */}
        <nav className="hidden lg:block">
          <Navlink />
        </nav>

        {/* nav CTA */}
        <div className="hidden lg:block">
          <Button variant="black" text="SignIn" />
          <Button text="Sign Up" />
        </div>

        {/* Hamburger icon mobile */}
        <div className="lg:hidden">
          <button onClick={handleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              className="h-10 w-10"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z"
                fill="#000000"
              />
            </svg>
          </button>
        </div>

        {/* menu mobile */}
        {isOpen && (
          <div className="absolute top-14 left-0 w-full border-b border-neutral-500 bg-white px-4 py-6">
            <nav>
              <ul className="font-inter flex flex-col gap-6 text-xl text-black">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#works">How It Works</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
              </ul>
              <div className="mt-8">
                <Button variant="black" text="SignIn" />
                <Button text="Sign Up" />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
