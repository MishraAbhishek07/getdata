import Logo1 from "../Images/ddd.png";
import Logo2 from "../Images/hdd.jpg";
import Logo3 from "../Images/pen drive 2.png";
import { useTitle } from "../../hooks/useTitle";

export const Card = () => {
  useTitle(`${"Services"} - GetDataBack`);

  return (
    <div id="services" className="my-20">
      <div className="text-center mb-10">
        <h2 className="text-5xl font-extrabold dark:text-white underline underline-offset-8 decoration-purple-500">
          Our Services
        </h2>
        <p className="text-xl mt-4 dark:text-white">
          Explore the services we offer to help you with data recovery.
        </p>
      </div>

      <div className="flex flex-wrap gap-10 justify-center">
     
        <div className="max-w-[300px] w-full hover:scale-105 transition-transform duration-200 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg w-full h-48 object-cover" src={Logo1} alt="Service 1" />
          </a>
          <div className="p-5 h-48">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
          </div>
          <div className="p-5">
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>

     
        <div className="max-w-[300px] w-full hover:scale-105 transition-transform duration-200 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg w-full h-48 object-cover" src={Logo2} alt="Service 2" />
          </a>
          <div className="p-5 h-48">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Key trends in enterprise technology 2022
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Discover the major trends shaping the enterprise technology landscape in 2022.
            </p>
          </div>
          <div className="p-5">
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>

     
      </div>
    </div>
  );
};
