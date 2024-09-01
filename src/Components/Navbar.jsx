import DisplayDateTime from "./DateTime";
import DisplayWeather from "./DisplayWeather";
import DownloadResume from "./DownloadResume";
import "./profileborder.css";
import { useState } from "react";

const Navbar = ({ splashStatus }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    console.log("toggled");
    setIsOpen(() => !isOpen);
  };

  return (
    <nav
      className={`${
        splashStatus ? "hidden" : "absolute fadeInOnly"
      } lg:top-28 md:top-16 left-0 w-full p-4 z-10`}
    >
      <div className="md:block hidden">
        <ul className="flex justify-end px-24 md:text-lg">
          <li>
            <DownloadResume />
          </li>
          <li>
            <DisplayWeather />
          </li>
          <li>
            <DisplayDateTime />
          </li>
        </ul>
      </div>
      <div className="md:hidden block">
        <div className="grid grid-cols-3 pt-8">
          <div className="col-span-2 flex items-center ps-4">
            <DisplayDateTime />
          </div>
          <div
            className="col-start-3 flex justify-end pe-4"
            onClick={toggleNav}
          >
            {isOpen ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  className="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg>
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  className="bi bi-list"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                  />
                </svg>
              </>
            )}
          </div>
        </div>
        <div
          className={`h-full z-10 transition-all duration-100 ease-in-out min-w-10 ${
            isOpen ? "animate-slideIn block" : "animate-slideOut hidden"
          }`}
        >
          <ul className="flex flex-col items-end md:text-lg">
            <li className="py-4">
              <DownloadResume />
            </li>
            <li>
              <DisplayWeather />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
