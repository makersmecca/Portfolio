import "./profileborder.css";
const DisplayPicture = ({ isAnimated }) => {
  return (
    // <div className="">
    //   <img
    //     src="/displayPicture.jpg"
    //     alt="profile picture"
    //     className="w-full h-full rounded-full wobbly-circle animate-wobble"
    //   />
    // </div>

    <div className="w-48 h-48 overflow-hidden rounded-full">
      <img
        src="/displayPicture.jpg"
        alt="profile picture"
        className="w-full h-full object-cover animate-wobble"
      />
    </div>
  );
};

export default DisplayPicture;
//className="rounded-full md:h-44 md:w-44 h-32 w-32"
// ${isAnimated ? "blob-container animate-blob" : ""}
