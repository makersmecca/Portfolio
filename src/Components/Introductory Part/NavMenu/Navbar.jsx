import DisplayDateTime from "./DateTime";
import ForkGithub from "./ForkGithub";
import DownloadResume from "./DownloadResume";
import ThemeSwitch from "./ThemeSwitch";
import "../MyDetails/profileborder.css";

import { useState, useEffect, useRef } from "react";

const Navbar = ({ splashStatus, invokeBlur, toggleTheme, isLight }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef(null);

  const toggleNav = () => {
    // console.log("toggled");
    invokeBlur(isOpen);
    setIsOpen(() => !isOpen);
  };
  const lightColor = "#C96868";
  const darkColor = "currentColor";

  const handleMenu = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      toggleNav();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleMenu);
    } else {
      document.removeEventListener("click", handleMenu);
    }

    return () => {
      document.removeEventListener("click", handleMenu);
    };
  }, [isOpen]);

  return (
    <nav
      className={`${
        splashStatus ? "hidden" : "absolute fadeInOnly"
      } lg:top-8 md:top-8 left-0 w-full p-4 z-10 
      ${
        isOpen ? "min-h-screen overflow-x-hidden" : "min-h-0 overflow-x-visible"
      }`}
    >
      <div className="md:block hidden">
        <div className="flex justify-between px-24 md:text-lg">
          <span title="Today's Date and Time" className="flex px-10 sm:px-0">
            <DisplayDateTime isLight={isLight} />
          </span>
          <span className="flex align-bottom">
            <ul className="flex">
              <li
                title={`${
                  isLight ? "Switch To Dark Theme" : "Switch to Light Theme"
                }`}
                className="flex justify-center md:w-36"
              >
                <ThemeSwitch toggleTheme={toggleTheme} isLight={isLight} />
              </li>
              <li
                title="Download Resume PDF"
                className="flex flex-col justify-center md:w-36"
              >
                <DownloadResume isLight={isLight} />
              </li>
              <li
                title="Fork this project from Github Repository"
                className="flex flex-col justify-center md:w-36"
              >
                <ForkGithub isLight={isLight} />
              </li>
            </ul>
          </span>
        </div>
        {/* <ul className="flex px-24 md:text-lg">
          <li>
            <ThemeSwitch />
          </li>
          <li>
            <DownloadResume />
          </li>
          <li>
            <ForkGithub />
          </li>
          <li>
            <DisplayDateTime />
          </li>
        </ul> */}
      </div>
      <div className="md:hidden block" ref={menuRef}>
        <div className="grid grid-cols-5 pt-8">
          <div className="col-span-3 flex items-center ps-4">
            <DisplayDateTime />
          </div>
          <div className="col-start-4 flex items-center justify-end">
            <ThemeSwitch toggleTheme={toggleTheme} isLight={isLight} />
          </div>
          <div
            title={`${isOpen ? "Close Menu" : "Open Menu"}`}
            className="col-start-5 flex items-center justify-end pe-4"
            onClick={toggleNav}
          >
            {isOpen ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill={isLight ? lightColor : darkColor}
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
                  width="35"
                  height="35"
                  fill={isLight ? lightColor : darkColor}
                  className="bi bi-justify-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"
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
          <ul className="flex flex-col items-end md:text-lg me-2">
            <li className="py-4">
              <DownloadResume isLight={isLight} />
            </li>
            <li>
              <ForkGithub isLight={isLight} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
