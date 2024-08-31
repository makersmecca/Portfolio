import React, { useState, useEffect } from "react";
const ScrollDownArrow = ({ splashStatus }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const scrollDetect = () => {
      setIsVisible(window.scrollY > 90 ? false : true);
    };
    window.addEventListener("scroll", scrollDetect);
    console.log(isVisible);
  });

  return (
    <>
      {" "}
      <div
        className={`${
          splashStatus ? "hidden" : "block ease-in-out"
        } fixed bottom-4 inset-x-0 flex justify-center mb-4 animate-slideDown transition-opacity duration-300
        ${isVisible ? "" : "ease-in-out hidden"}
        `}
      >
        <div className="text-3xl text-gray-500 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 512 512"
            className="cursor-pointer w-6 h-6 md:w-7 md:h-7"
          >
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default ScrollDownArrow;
