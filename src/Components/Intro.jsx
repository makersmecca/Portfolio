import DisplayPicture from "./DisplayPicture";
import "/src/index.css";
import ScrollDownArrow from "./ScrollDownArrow";
import Navbar from "./Navbar";
import { useState, useRef, useEffect, useCallback, useMemo } from "react";
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
  const [isBlur, setIsBlur] = useState(false);
  // console.log(backToTop);
  useEffect(() => {
    if (backToTop && topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [backToTop]);

  const blurContent = useCallback(
    (isopen) => {
      setIsBlur(!isopen);
      globalBlur(!isopen);
      if (backToTop) {
        if (topRef.current) {
          topRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }
    },
    [globalBlur]
  );

  const containerClasses = useMemo(
    () => `flex flex-col min-h-screen ${splashStatus ? "" : "relative"}`,
    [splashStatus]
  );

  const blurClasses = useMemo(
    () =>
      `flex justify-center items-center min-h-screen md:mt-20 lg:mt-0 ${
        isBlur
          ? "md:blur-none blur-md duration-500 ease-in-out"
          : "blur-none duration-500 ease-in-out"
      }`,
    [isBlur]
  );

  //console.log(splashStatus);
  return (
    <div>
      <ConsoleMsg />
      <div ref={topRef} className={containerClasses}>
        <Navbar
          splashStatus={splashStatus}
          invokeBlur={blurContent}
          toggleTheme={toggleTheme}
          isLight={isLight}
        />
        <div className={blurClasses}>
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
