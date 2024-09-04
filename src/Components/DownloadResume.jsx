import myResume from "/Resume 26-08-24.pdf";
const DownloadResume = () => {
  return (
    <div className="px-2 hover:scale-95 ease-in-out">
      <a
        href={myResume}
        download={"Ayudh_Nandi.pdf"}
        className="flex flex-row justify-center"
      >
        Resume
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-file-earmark-arrow-down ms-1 pt-1 me-1"
          viewBox="0 0 16 16"
        >
          <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293z" />
          <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
        </svg>
      </a>
    </div>
  );
};

export default DownloadResume;
