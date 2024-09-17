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
            ? "hidden"
            : "absolute shadowBlobFadeIn transition-all ease-in-out duration-500 blur-2xl"
        } md:h-64 md:w-64 h-44 w-44 bg-slate-800`}
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
