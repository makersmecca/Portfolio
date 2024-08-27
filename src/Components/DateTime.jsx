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
        <h5 className="font-signature text-center">
          <span className="text-6xl">{`${currentTime.getHours()}:${currentTime.getMinutes()}`}</span>
          {/* {currentTime.toTimeString().substring(0, 8)} */}
        </h5>
        <h5 className="text-3xl font-semibold text-center">
          {currentTime.toDateString().substring(3)}
        </h5>
      </div>
    </>
  );
};

export default DisplayDateTime;
