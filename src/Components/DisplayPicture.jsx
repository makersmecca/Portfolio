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
            ? "absolute bg-highlightBrown shadowBlobFadeIn transition-all ease-in-out duration-500 md:bg-opacity-50 bg-opacity-60"
            : "absolute bg-slate-800 shadowBlobFadeIn transition-all ease-in-out duration-500"
        } md:h-64 md:w-64 h-44 w-44 z-10`} /* Ensure this div has a lower z-index than the image */
      ></div>
      <img
        src={dispPic}
        alt="profile picture"
        className={`${
          splashStatus
            ? ""
            : "relative z-20" /* Set higher z-index to ensure proper layering */
        } animate-blob md:h-64 md:w-64 h-44 w-44`}
      />
    </div>
  );
};

export default DisplayPicture;
