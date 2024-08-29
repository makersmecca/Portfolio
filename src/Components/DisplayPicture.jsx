import "./profileborder.css";
const DisplayPicture = ({ isAnimated }) => {
  return (
    <div className="">
      <img
        src="/displayPicture.jpg"
        alt="profile picture"
        className="rounded-full md:h-44 md:w-44 h-32 w-32"
      />
    </div>
  );
};

export default DisplayPicture;
// ${isAnimated ? "blob-container animate-blob" : ""}
