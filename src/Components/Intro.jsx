import DisplayPicture from "./DisplayPicture";
import "/src/index.css";
import ScrollDownArrow from "./ScrollDownArrow";
import Navbar from "./Navbar";
import { useState, useRef, useEffect } from "react";
import TypingAnimate from "./TypingAnimate";
import ConsoleMsg from "./ConsoleMsg";

const Intro = ({
  backToTop,
  splashStatus,
  scrollHandler,
  globalBlur,
  toggleTheme,
  isLight,
}) => {
  const topRef = useRef(null);
  // console.log(backToTop);
  if (backToTop) {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }
  const [isBlur, setIsBlur] = useState(false);

  const blurContent = (isopen) => {
    setIsBlur(!isopen);
    globalBlur(!isopen);
  };
  //console.log(splashStatus);
  return (
    <div>
      <ConsoleMsg />
      <div
        ref={topRef}
        className={`flex flex-col min-h-screen ${
          splashStatus ? "" : "relative"
        }`}
      >
        <Navbar
          splashStatus={splashStatus}
          invokeBlur={blurContent}
          toggleTheme={toggleTheme}
          isLight={isLight}
        />
        <div
          className={`flex justify-center items-center min-h-screen md:mt-20 lg:mt-0 ${
            isBlur
              ? "md:blur-none blur-md duration-500 ease-in-out"
              : "blur-none duration-500 ease-in-out"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-5 xl:px-80 lg:px-52 md:px-36 px-8">
            <div
              className={`col-span-2 md:row-span-4 md:row-start-1 flex justify-center md:items-center`}
            >
              <DisplayPicture splashStatus={splashStatus} isLight={isLight} />
            </div>
            <div className="col-span-2 md:row-start-1 row-start-2 md:row-span-2 md:col-span-3 md:col-start-3 text-center md:text-start flex md:justify-start justify-center items-center md:items-end mt-10 px-10 md:mt-0">
              {/*using an external animation library*/}
              <TypingAnimate splashStatus={splashStatus} isLight={isLight} />

              {/* <div
                className={
                  splashStatus
                    ? `text-darktheme md:text-5xl text-3xl`
                    : `text-white inline-block overflow-hidden whitespace-nowrap font-mono animate-typing border-r-4 md:text-5xl text-3xl`
                }
              >
                Hi...<span className="text-darktheme">.</span>
              </div> */}
            </div>

            <div className="col-span-3 row-start-3 md:col-start-3 md:text-start flex justify-center md:justify-start px-10 text-2xl md:text-3xl mt-6 md:mt-0 md:pt-2 pt-0">
              <span className="md:self-end self-center">I'm </span>{" "}
              <span
                className={`ps-2 ${
                  isLight
                    ? "text-highlightBrown underline decoration-wavy decoration-highlightBrown decoration-1"
                    : "text-textBlue"
                } self-end`}
              >
                Ayudh.
              </span>
            </div>
            <div className="col-span-3 md:row-start-4 row-star md:col-start-3 md:text-start text-center flex justify-center md:justify-start hyphens-none px-16 sm:px-12 md:px-10 md:text-xl">
              <span className="md:self-end self-center">
                I am a Frontend developer with experience in building{" "}
                <span className="text-newOrange">responsive,</span>{" "}
                user-friendly websites &{" "}
                <span className="underline decoration-wavy decoration-darkBlue decoration-1">
                  Pro
                </span>
                gressive <span className="">W</span>
                eb <span className="">A</span>
                pps with <span className="text-newOrange">React</span>,{" "}
                <span className="text-textBlue">Vite</span> and{" "}
                <span className="text-newYellow"> Tailwind</span>.
                <br />
                <a
                  href="https://github.com/makersmecca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex gap-2 items-center mt-4 md:top-2 ms-0.5 justify-center md:justify-start ${
                    splashStatus
                      ? "opacity-0"
                      : "hover:opacity-100 opacity-75 transition-all ease-in-out"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                  </svg>
                  <span>/makersmecca</span>
                </a>
                <br />
                {/* I'm eager to contribute and grow in a collaborative team. */}
              </span>
            </div>
          </div>
        </div>
        <ScrollDownArrow
          splashStatus={splashStatus}
          btnClicked={scrollHandler}
          blurStatus={isBlur}
          isLight={isLight}
        />
      </div>
    </div>
  );
};

export default Intro;
