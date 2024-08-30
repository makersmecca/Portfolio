import { useState } from "react";
import DisplayPicture from "./DisplayPicture";
const Intro = ({ isAnimated }) => {
  return (
    <>
      {/* <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
        <div className="grid-cols-12">
          <h2 className="text-3xl">Photo</h2>
        </div>
        <div className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
          <h1 className="text-3xl">Display Name</h1>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quos
            dolores corporis velit nam. Voluptate sed laudantium architecto,
            nostrum eum animi ipsam quas iure minus, dicta magnam officia enim
            obcaecati?
          </p>
        </div>
      </div> */}

      <div className="pt-5 grid grid-cols-2 md:grid-cols-5 xl:px-80 lg:px-52 md:px-36 px-8">
        <div className="col-span-2 flex justify-center mt-12 md:mt-0">
          <DisplayPicture isAnimated={isAnimated} />
        </div>
        <div className="col-span-2 text-center flex justify-center items-center mt-12 md:mt-0">
          <h2 className="md:text-5xl text-3xl">AYUDH</h2>
        </div>
        <div className="col-span-3 md:col-start-2 text-center mt-12 lg-pt-12 px-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quos
          dolores corporis velit nam. Voluptate sed laudantium architecto,
          nostrum eum animi ipsam quas iure minus, dicta magnam officia enim
          obcaecati?
        </div>
      </div>
    </>
  );
};

export default Intro;
