import "./profileborder.css";
const DisplayPicture = ({ isAnimated }) => {
  return (
    // <div className="relative w-44 h-44 blob-container animate-blob">
    //   <img
    //     src="/displayPicture.jpg"
    //     alt="profile picture"
    //     className="w-full h-full object-cover rounded-full"
    //   />
    // </div>
    <div>
      <img
        src="/displayPicture.jpg"
        alt="profile picture"
        className="blob md:h-52 md:w-52 h-44 w-44"
      />
    </div>
  );
};

export default DisplayPicture;
//className="rounded-full md:h-44 md:w-44 h-32 w-32"
// ${isAnimated ? "blob-container animate-blob" : ""}
