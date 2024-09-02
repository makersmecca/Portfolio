import "./profileborder.css";
import dispPic from "/images/displayPicture.jpg";

const DisplayPicture = ({ splashStatus }) => {
  return (
    <div>
      <div
        className={`${
          splashStatus
            ? "hidden"
            : "absolute shadowBlobFadeIn transition-all ease-in-out duration-500"
        } md:h-64 md:w-64 h-44 w-44 bg-slate-800 blur-2xl`}
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
