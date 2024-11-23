import React, { useState, useEffect } from "react";
const ScrollDownArrow = ({ splashStatus, btnClicked, blurStatus, isLight }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const scrollDetect = () => {
      setIsVisible(window.scrollY > 100 ? false : true);
    };
    window.addEventListener("scroll", scrollDetect);
    //console.log(isVisible);
  });

  const darkColor = "white";
  const lightColor = "#C96868";

  return (
    <>
      {" "}
      <div
        className={`${
          splashStatus ? "hidden" : "block ease-in-out"
        } fixed inset-x-0 bottom-0 flex justify-center mb-4 animate-slideDown transition-opacity duration-300
        ${isVisible ? "" : "ease-in-out hidden"}
        `}
      >
        <button
          className={`text-3xl animate-bounce ${
            blurStatus
              ? "blur-sm md:blur-none duration-500"
              : "blur-none duration-500"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={isLight ? lightColor : darkColor}
            viewBox="0 0 512 512"
            className="cursor-pointer w-6 h-6 md:w-7 md:h-7 hover:scale-110"
            onClick={btnClicked}
          >
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default ScrollDownArrow;
