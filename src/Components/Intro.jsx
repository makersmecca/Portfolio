import { useState } from "react";
import DisplayPicture from "./DisplayPicture";
import "/src/index.css";
const Intro = ({ splashStatus }) => {
  console.log(splashStatus);
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex justify-center items-center min-h-screen">
          <div className="grid grid-cols-2 md:grid-cols-5 xl:px-80 lg:px-52 md:px-36 px-8">
            <div className="col-span-2 flex justify-center mt-12 md:mt-0">
              <DisplayPicture />
            </div>
            <div className="col-span-2 md:col-span-1 text-center flex justify-center items-center mt-12 md:mt-0">
              {/* <div className=" ">Hi.</div> */}
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

            <div className="col-span-3 md:col-start-2 text-center mt-12 px-10 md:text-2xl">
              My name is Ayudh.
            </div>
            <div className="col-span-3 md:col-start-2 md:text-center text-justify hyphens-auto md:hyphens-none mt-5 px-10 md:text-xl">
              I am a Frontend developer with experience in building responsive,
              user-friendly websites & Progressive Web Apps. I'm Proficient in
              React JS.
              <br />
              Eager to contribute and grow in a collaborative team.
            </div>
          </div>
        </div>
        <div
          className={`${
            splashStatus ? "" : "absolute"
          } inset-x-0  bottom-0 flex justify-center mb-4`}
        >
          <div className="text-3xl text-gray-500 animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="white"
              viewBox="0 0 512 512"
            >
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
