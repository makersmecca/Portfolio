import { useState } from "react";
import DisplayPicture from "./DisplayPicture";
import "/src/index.css";
import ScrollDownArrow from "./ScrollDownArrow";
const Intro = ({ splashStatus, scrollHandler }) => {
  //console.log(splashStatus);
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <div className="flex justify-center items-center min-h-screen">
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

            <div className="col-span-3 md:col-start-3 md:text-start text-center flex justify-center md:justify-start mt-8 px-10 text-2xl">
              My name is Ayudh.
            </div>
            <div className="col-span-3 md:col-start-3 md:text-start text-center hyphens-none mt-5 px-10 md:text-xl">
              I am a Frontend developer with experience in building responsive,
              <br />
              user-friendly websites & Progressive Web Apps with React.
              <br />
              <br />
              Eager to contribute and grow in a collaborative team.
            </div>
          </div>
        </div>
        <ScrollDownArrow
          splashStatus={splashStatus}
          btnClicked={scrollHandler}
        />
      </div>
    </div>
  );
};

export default Intro;
