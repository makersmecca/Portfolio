import "./profileborder.css";
import dispPic from "/images/displayPicture.jpg";

const DisplayPicture = ({ splashStatus, isLight }) => {
  return (
    <div>
      <div
        className={`${
          splashStatus
            ? "hidden"
            : isLight
            ? "absolute bg-highlightBrown shadowBlobFadeIn transition-all ease-in-out duration-500 md:bg-opacity-50 bg-opacity-60 blur-xl"
            : "absolute bg-slate-800 shadowBlobFadeIn transition-all ease-in-out duration-500 blur-2xl"
        }
        } md:h-64 md:w-64 h-44 w-44`}
      ></div>
      <img
        src={dispPic}
        alt="profile picture"
        className={`${
          splashStatus ? "" : "relative"
        } animate-blob md:h-64 md:w-64 h-44 w-44`}
      />
    </div>
  );
};

export default DisplayPicture;
