import DisplayPicture from "./DisplayPicture";
import "/src/index.css";
import ScrollDownArrow from "./ScrollDownArrow";
import Navbar from "./Navbar";
import { useState } from "react";

const Intro = ({ splashStatus, scrollHandler }) => {
  const [isBlur, setIsBlur] = useState(false);

  const blurContent = (isopen) => {
    setIsBlur(!isopen);
  };
  //console.log(splashStatus);
  return (
    <div>
      <div
        className={`flex flex-col min-h-screen ${
          splashStatus ? "" : "relative"
        }`}
      >
        <Navbar splashStatus={splashStatus} invokeBlur={blurContent} />
        <div
          className={`flex justify-center items-center min-h-screen ${
            isBlur
              ? "blur-md duration-500 ease-in-out"
              : "blur-none duration-500 ease-in-out"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-5 xl:px-80 lg:px-52 md:px-36 px-8">
            <div
              className={`col-span-2 md:row-span-3 flex justify-center md:items-center mt-12 md:mt-0`}
            >
              <DisplayPicture splashStatus={splashStatus} />
            </div>
            <div className="col-span-2 md:col-span-3 md:col-start-3 text-center md:text-start flex md:justify-start justify-center items-center mt-12 px-10 md:mt-0">
              <div
                className={
                  splashStatus
                    ? `text-darktheme md:text-5xl text-3xl`
                    : `text-white inline-block overflow-hidden whitespace-nowrap font-mono animate-typing border-r-4 md:text-5xl text-3xl`
                }
              >
                Hi...
              </div>
            </div>

            <div className="col-span-3 md:col-start-3 md:text-start text-center flex justify-center md:justify-start mt-8 px-10 text-2xl md:text-3xl">
              I'm <span className="ps-2 text-textBlue">Ayudh</span>.
            </div>
            <div className="col-span-3 md:col-start-3 md:text-start text-center hyphens-none mt-5 px-10 md:text-xl">
              I am a Frontend developer with experience in building responsive,
              <br />
              user-friendly websites & Progressive Web Apps with{" "}
              <span className="text-newOrange">React</span>,{" "}
              <span className="text-darkBlue">Vite</span> and{" "}
              <span className="text-newYellow"> Tailwind</span>.
              <br />
              <br />
              I'm eager to contribute and grow in a collaborative team.
            </div>
          </div>
        </div>
        <ScrollDownArrow
          splashStatus={splashStatus}
          btnClicked={scrollHandler}
          blurStatus={isBlur}
        />
      </div>
    </div>
  );
};

export default Intro;
