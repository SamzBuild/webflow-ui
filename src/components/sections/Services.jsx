import Container from "../layout/Container";
import Section from "../layout/Section";
import { easeInOut, motion } from "motion/react";
const Services = () => {
  return (
    <Section id="services">
      <Container>
        <motion.h2
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.5, ease: easeInOut }}
          className="font-heading mb-6 text-4xl font-bold"
        >
          What We DO
        </motion.h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:grid-rows-2 lg:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, ease: easeInOut }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-4 rounded-md border border-black/10 bg-white px-4 py-8 shadow-md lg:col-span-1"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 4V5M12 19V20M5.07178 8L5.9378 8.5M18.0622 15.5L18.9282 16M18.9282 7.99999L18.0622 8.49999M5.93781 15.5L5.07178 16M16 12C16 9.79086 14.2091 8 12 8C9.79084 8 7.99998 9.79086 7.99998 12C7.99998 14.2091 9.79084 16 12 16C14.2091 16 16 14.2091 16 12Z"
                  stroke="#252432"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <h3 className="font-heading text-xl font-semibold">Web Design</h3>
            <p className="font-inter w-full text-base text-black/70 md:max-w-xs">
              From concept to launch, we create stunning, user-centric websites
              that elevate your brand and engage your audience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, ease: easeInOut }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-4 rounded-md border border-black/10 bg-white px-4 py-8 shadow-md lg:col-span-1"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M10.2442 4.86956C11.0022 3.47968 12.9979 3.47968 13.7559 4.86956L14.9723 7.09993C15.2599 7.62738 15.7694 7.99758 16.36 8.10817L18.8571 8.57579C20.4132 8.86719 21.0299 10.7653 19.9422 11.9157L18.1969 13.7617C17.7842 14.1983 17.5895 14.7973 17.6668 15.3931L17.9938 17.9125C18.1975 19.4824 16.5829 20.6555 15.1527 19.9766L12.8577 18.8871C12.3149 18.6295 11.6851 18.6295 11.1424 18.8871L8.84732 19.9766C7.41713 20.6555 5.80257 19.4824 6.00629 17.9125L6.3332 15.3931C6.41051 14.7973 6.21588 14.1983 5.80313 13.7617L4.05781 11.9157C2.97019 10.7653 3.58689 8.86719 5.14299 8.57579L7.64007 8.10817C8.2306 7.99758 8.74014 7.62738 9.02779 7.09993L10.2442 4.86956Z"
                  stroke="#252432"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <h3 className="font-heading text-xl font-semibold">Web Design</h3>
            <p className="font-inter w-full text-base text-black/70 md:max-w-xs">
              From concept to launch, we create stunning, user-centric websites
              that elevate your brand and engage your audience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, ease: easeInOut }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-4 rounded-md border border-black/10 bg-white px-4 py-8 shadow-md lg:col-span-1"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M10 18H6C4.34315 18 3 16.6569 3 15V6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V15C21 16.6569 19.6569 18 18 18H14M10 18V21M10 18H14M14 18V21M10 21H14M10 21H9M14 21H15"
                  stroke="#252432"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <h3 className="font-heading text-xl font-semibold">Web Design</h3>
            <p className="font-inter w-full text-base text-black/70 md:max-w-xs">
              From concept to launch, we create stunning, user-centric websites
              that elevate your brand and engage your audience.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, ease: easeInOut }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-4 rounded-md border border-black/10 bg-white px-4 py-8 shadow-md lg:col-span-1 lg:row-span-2"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9.01005 11.75C9.42426 11.75 9.76005 11.4142 9.76005 11C9.76005 10.5858 9.42426 10.25 9.01005 10.25V11.75ZM9.00005 10.25C8.58583 10.25 8.25005 10.5858 8.25005 11C8.25005 11.4142 8.58583 11.75 9.00005 11.75V10.25ZM15.01 11.75C15.4243 11.75 15.76 11.4142 15.76 11C15.76 10.5858 15.4243 10.25 15.01 10.25V11.75ZM15 10.25C14.5858 10.25 14.25 10.5858 14.25 11C14.25 11.4142 14.5858 11.75 15 11.75V10.25ZM6.77814 8.75H17.222V7.25H6.77814V8.75ZM19.4653 10.8274L20.0038 17.8274L21.4994 17.7124L20.9609 10.7124L19.4653 10.8274ZM17.7604 20.25H6.23968V21.75H17.7604V20.25ZM3.99631 17.8274L4.53477 10.8274L3.03919 10.7124L2.50073 17.7124L3.99631 17.8274ZM6.23968 20.25C4.92903 20.25 3.89579 19.1342 3.99631 17.8274L2.50073 17.7124C2.33319 19.8904 4.05527 21.75 6.23968 21.75V20.25ZM20.0038 17.8274C20.1043 19.1342 19.0711 20.25 17.7604 20.25V21.75C19.9448 21.75 21.6669 19.8904 21.4994 17.7124L20.0038 17.8274ZM17.222 8.75C18.3977 8.75 19.3752 9.65519 19.4653 10.8274L20.9609 10.7124C20.8106 8.75865 19.1815 7.25 17.222 7.25V8.75ZM6.77814 7.25C4.81863 7.25 3.18947 8.75865 3.03919 10.7124L4.53477 10.8274C4.62494 9.65519 5.60244 8.75 6.77814 8.75V7.25ZM14.25 6V8H15.75V6H14.25ZM9.75005 8V6H8.25005V8H9.75005ZM12 3.75C13.2427 3.75 14.25 4.75736 14.25 6H15.75C15.75 3.92893 14.0711 2.25 12 2.25V3.75ZM12 2.25C9.92898 2.25 8.25005 3.92893 8.25005 6H9.75005C9.75005 4.75736 10.7574 3.75 12 3.75V2.25ZM9.01005 10.25H9.00005V11.75H9.01005V10.25ZM15.01 10.25H15V11.75H15.01V10.25Z"
                  fill="#252432"
                />
              </svg>
            </div>
            <h3 className="font-heading text-xl font-semibold">Web Design</h3>
            <p className="font-inter w-full text-base text-black/70 md:max-w-xs">
              From concept to launch, we create stunning, user-centric websites
              that elevate your brand and engage your audience.
            </p>
            <img src="" alt="" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, ease: easeInOut }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative flex flex-col justify-between gap-4 rounded-md border border-black/10 bg-white px-4 py-8 shadow-md lg:col-span-2 lg:row-span-1 lg:flex-row lg:gap-0"
          >
            <div className="flex flex-col gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="13"
                  viewBox="0 0 21 13"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M21 0L14.3528 12.8765H8.05945L10.8101 7.61233H10.6832C8.37078 10.5927 4.91823 12.5553 0 13V7.6855C0 7.6855 3.1455 7.50067 4.99585 5.57067H0.0023098V0H5.71431L5.61596 4.58333H5.74275L8.03687 0H12.5781L12.2834 4.555H12.4103L14.7885 0H21Z"
                    fill="#5B54FF"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold">Web Design</h3>
              <p className="font-inter w-full text-base text-black/70 md:max-w-xs">
                From concept to launch, we create stunning, user-centric
                websites that elevate your brand and engage your audience.
              </p>
            </div>
            <div className="bg-primary flex h-50 w-50 items-center justify-center rounded-lg lg:absolute lg:right-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="72"
                viewBox="0 0 21 13"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21 0L14.3528 12.8765H8.05945L10.8101 7.61233H10.6832C8.37078 10.5927 4.91823 12.5553 0 13V7.6855C0 7.6855 3.1455 7.50067 4.99585 5.57067H0.0023098V0H5.71431L5.61596 4.58333H5.74275L8.03687 0H12.5781L12.2834 4.555H12.4103L14.7885 0H21Z"
                  fill="#FFFF"
                />
              </svg>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, ease: easeInOut }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-4 rounded-md border border-black/10 bg-white px-4 py-8 shadow-md lg:col-span-1"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M7 9L9.53354 10.5201C10.7287 11.2372 10.8423 12.9262 9.75394 13.7968L7 16M12 16H17M6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21Z"
                  stroke="#252432"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <h3 className="font-heading text-xl font-semibold">Web Design</h3>
            <p className="font-inter w-full text-base text-black/70 md:max-w-xs">
              From concept to launch, we create stunning, user-centric websites
              that elevate your brand and engage your audience.
            </p>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default Services;
