import "./profileborder.css";
import dispPic from "/images/displayPicture.jpg";

const DisplayPicture = ({ splashStatus, isLight }) => {
  return (
    <div className={`${splashStatus ? "" : "relative"}`}>
      <div
        className={`${
          splashStatus
            ? "hidden"
            : isLight
            ? "absolute bg-highlightBrown shadowBlobFadeIn transition-all ease-in-out duration-500 md:bg-opacity-50 bg-opacity-60 blur-xl"
            : "absolute bg-slate-800 shadowBlobFadeIn transition-all ease-in-out duration-500 blur-2xl"
        } md:h-64 md:w-64 h-44 w-44 z-10`}
        style={{
          backdropFilter: "blur(10px)" /* Standard blur */,
          WebkitBackdropFilter: "blur(10px)" /* For iOS and Safari */,
          transform: "translateZ(0)",
          willChange: "border-radius, opacity, backdrop-filter",
        }}
      ></div>
      <img
        src={dispPic}
        alt="profile picture"
        className={`${
          splashStatus ? "" : "relative z-20"
        } animate-blob md:h-64 md:w-64 h-44 w-44`}
      />
    </div>
  );
};

export default DisplayPicture;
