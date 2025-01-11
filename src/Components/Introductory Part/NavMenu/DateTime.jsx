import { useState, useEffect } from "react";

const DisplayDateTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  const formatTime = (num) => (num < 10 ? `0${num}` : num);

  const formatDate = (date) => {
    const day = date.toDateString().substring(0, 3);
    const dayNum = date.toDateString().substring(8, 10);
    const month = date.toDateString().substring(4, 7);
    return `${day}, ${dayNum} ${month}`;
  };

  useEffect(() => {
    // Calculate milliseconds until next minute
    const now = new Date();
    const millisToNextMinute =
      (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

    // Initial timeout to sync with the next minute
    const timeoutId = setTimeout(() => {
      setCurrentTime(new Date());

      // Start the interval exactly on the minute
      const intervalId = setInterval(() => {
        setCurrentTime(new Date());
      }, 60000);

      // Cleanup interval on unmount
      return () => clearInterval(intervalId);
    }, millisToNextMinute);

    // Cleanup timeout on unmount
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className={`px-2 sm:px-0 font-semibold self-center`}>
      <span>{formatTime(currentTime.getHours())}</span>
      <span>:</span> <span>{formatTime(currentTime.getMinutes())}</span>
      <span className="px-2">{formatDate(currentTime)}</span>
    </div>
  );
};

export default DisplayDateTime;
