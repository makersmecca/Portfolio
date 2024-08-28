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

      <div className="mt-20 grid grid-cols-2 gap-5 px-80">
        <div className="text-center px-6">
          <h2 className="text-3xl">Display Name</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quos
            dolores corporis velit nam. Voluptate sed laudantium architecto,
            nostrum eum animi ipsam quas iure minus, dicta magnam officia enim
            obcaecati?
          </p>
        </div>
        <div className="text-center">
          <h2 className="text-3xl">Photo</h2>
        </div>
      </div>
    </>
  );
};

export default Intro;
