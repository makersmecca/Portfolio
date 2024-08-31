import "./profileborder.css";
import dispPic from "/images/displayPicture.jpg";

const DisplayPicture = () => {
  return (
    <div>
      <img
        src={dispPic}
        alt="profile picture"
        className="blob md:h-64 md:w-64 h-44 w-44"
      />
    </div>
  );
};

export default DisplayPicture;
