import myResume from "/Resume.pdf";
const DownloadResume = ({ isLight }) => {
  const lightColor = "#537188";
  const darkColor = "white";
  return (
    <div className="self-center px-2 hover:scale-95 ease-in-out">
      <a
        href={myResume}
        download={"Ayudh_Nandi.pdf"}
        className={`flex flex-row justify-center ${
          isLight ? "font-semibold" : "font-normal"
        }`}
      >
        Resume
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          height="30"
          viewBox="0 0 48 48"
          className="ms-1 pt-0 me-1 pb-1"
        >
          <path
            fill="none"
            stroke={isLight ? lightColor : darkColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth={isLight ? "5" : "4"}
            d="M32.4,13.8c-1.9-2.6-5-4.3-8.4-4.3c-5.8,0-10.5,4.7-10.5,10.5v0.5H12c-4.1,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5	h2.1"
          ></path>
          <path
            fill="none"
            stroke={isLight ? lightColor : darkColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth={isLight ? "5" : "4"}
            d="M33.5,35.5H36c4.1,0,7.5-3.4,7.5-7.5s-3.4-7.5-7.5-7.5h-1.5"
          ></path>
          <polyline
            fill="none"
            stroke={isLight ? lightColor : darkColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth={isLight ? "5" : "4"}
            points="28.5,35.8 24,40.3 19.5,35.8"
          ></polyline>
          <line
            x1="24"
            x2="24"
            y1="25.3"
            y2="40.3"
            fill="none"
            stroke={isLight ? lightColor : darkColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth={isLight ? "5" : "4"}
          ></line>
        </svg>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-file-earmark-arrow-down ms-1 sm:pt-1 pt-0 me-1 pb-1 sm:pb-0"
          viewBox="0 0 16 16"
        >
          <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293z" />
          <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
        </svg> */}
      </a>
    </div>
  );
};

export default DownloadResume;
