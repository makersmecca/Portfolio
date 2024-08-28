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
      <div className="py-5">
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
          {/* <span className="text-6xl">{`${currentTime.getHours()}:${currentTime.getMinutes()}`}</span> */}
          {/* {currentTime.toTimeString().substring(0, 8)} */}
        </h5>
        <h5 className="font-Kanit md:text-2xl font-semibold flex justify-center">
          <span>
            {currentTime.toDateString().substring(0, 3)},{" "}
            {currentTime.toDateString().substring(8, 10)}{" "}
            {currentTime.toDateString().substring(4, 7)}
          </span>
        </h5>
      </div>
    </>
  );
};

export default DisplayDateTime;
