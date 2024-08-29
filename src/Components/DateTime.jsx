import { useState } from "react";
const DisplayDateTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  function updateTime() {
    setCurrentTime((c) => new Date());
  }

  //console.log(currentTime);

  setInterval(updateTime, 1000);

  return (
    <>
      <div className="md:ps-10 ps-5 text-start">
        {currentTime.getHours() < 10 ? (
          <span>0{currentTime.getHours()}</span>
        ) : (
          <span>{currentTime.getHours()}</span>
        )}
        :
        {currentTime.getMinutes() < 10 ? (
          <span>0{currentTime.getMinutes()}</span>
        ) : (
          <span>{currentTime.getMinutes()}</span>
        )}
        <span className="md:ps-10 ps-5">
          {currentTime.toDateString().substring(0, 3)},{" "}
          {currentTime.toDateString().substring(8, 10)}{" "}
          {currentTime.toDateString().substring(4, 7)}
        </span>
      </div>

      {/* <div className="pt-7 mt-6 lg:pt-28 lg:mb-20">
        <h5 className="font-Kanit flex justify-center">
          <span className="md:text-6xl text-3xl">
            {currentTime.getHours() < 10 ? (
              <span>0{currentTime.getHours()}</span>
            ) : (
              <span>{currentTime.getHours()}</span>
            )}
            :
            {currentTime.getMinutes() < 10 ? (
              <span>0{currentTime.getMinutes()}</span>
            ) : (
              <span>{currentTime.getMinutes()}</span>
            )}
          </span>
        </h5>

        <h5 className="font-Kanit md:text-2xl font-semibold flex justify-center">
          <span>
            {currentTime.toDateString().substring(0, 3)},{" "}
            {currentTime.toDateString().substring(8, 10)}{" "}
            {currentTime.toDateString().substring(4, 7)}
          </span>
        </h5>
      </div> */}
    </>
  );
};

export default DisplayDateTime;
