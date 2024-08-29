import { useState } from "react";
const Intro = () => {
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            <path
              fillRule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
            />
          </svg>
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
