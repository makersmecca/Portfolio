import { useState, useEffect } from "react";

const BackToTop = ({ toTheTop, splashStatus }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const scrollPos = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", scrollPos);
  });

  return (
    <button
      onClick={toTheTop}
      className={`${
        splashStatus ? "hidden" : "fixed ease-in-out"
      } md:bottom-11 md:right-24 bottom-10 right-10 animate-appear transition-opacity duration-200 h-10 w-10 rounded-full bg-gray-600 border-gray-700 hover:bg-gray-700 md:bg-opacity-100 bg-opacity-60
      flex justify-center items-center 
      ${isVisible ? "" : "hidden ease-in-out"}
      `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-chevron-up"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
        />
      </svg>
    </button>
  );
};

export default BackToTop;