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
            <div className="col-span-2 text-center flex justify-center items-center mt-12 md:mt-0">
              <h2 className="md:text-5xl text-3xl">AYUDH</h2>
            </div>
            <div className="col-span-3 md:col-start-2 text-center mt-12 lg-pt-12 px-10 md:text-xl">
              Frontend developer with experience in building responsive,
              user-friendly websites & progressive web apps. Proficient in React
              JS.
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
