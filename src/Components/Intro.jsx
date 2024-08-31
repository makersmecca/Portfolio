import { useState } from "react";
import DisplayPicture from "./DisplayPicture";
const Intro = ({ isAnimated }) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex justify-center items-center min-h-screen">
          <div className="grid grid-cols-2 md:grid-cols-5 xl:px-80 lg:px-52 md:px-36 px-8">
            <div className="col-span-2 flex justify-center mt-12 md:mt-0">
              <DisplayPicture isAnimated={isAnimated} />
            </div>
            <div className="col-span-2 md:col-span-1 text-center flex justify-center items-center mt-12 md:mt-0">
              <div className="md:text-5xl text-3xl">Hi.</div>
            </div>
            <div className="col-span-3 md:col-start-2 text-center mt-5 px-10 md:text-2xl">
              My name is Ayudh.
            </div>
            <div className="col-span-3 md:col-start-2 text-center mt-5 px-10 md:text-xl">
              I am a Frontend developer with experience in building responsive,
              user-friendly websites & progressive web apps. I'm Proficient in
              React JS.
              <br />
              Eager to contribute and grow in a collaborative team.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
