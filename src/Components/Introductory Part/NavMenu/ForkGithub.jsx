const ForkGithub = ({ isLight }) => {
  const lightColor = "#537188";
  const darkColor = "white";

  return (
    <div className="px-3 hover:scale-95 ease-in-out ps-5">
      <a
        href="https://github.com/makersmecca/Portfolio/fork"
        target="_blank"
        rel="noopener noreferrer"
        className={`flex ${isLight ? "font-semibold" : "font-normal"}`}
      >
        Fork
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="23"
          fill={`${isLight ? lightColor : darkColor}`}
          viewBox="0 0 350 512"
          className="sm:pt-1 pt-0 pb-1 sm:pb-0 me-1"
        >
          <path d="M80 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm80-24c0 32.8-19.7 61-48 73.3l0 38.7c0 17.7 14.3 32 32 32l160 0c17.7 0 32-14.3 32-32l0-38.7C307.7 141 288 112.8 288 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3l0 38.7c0 53-43 96-96 96l-48 0 0 70.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3l0-70.7-48 0c-53 0-96-43-96-96l0-38.7C19.7 141 0 112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm208 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM248 432a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
        </svg> */}
        <svg
          fill={`${isLight ? lightColor : darkColor}`}
          aria-hidden="true"
          height={`${isLight ? "25" : "23"}`}
          width={`${isLight ? "25" : "23"}`}
          viewBox="0 0 16 16"
          version="1.1"
          data-view-component="true"
          className="pt-0 pb-1 sm:pb-0 me-1 ms-1 mt-0.5"
        >
          <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
        </svg>
      </a>
    </div>
  );
};

export default ForkGithub;
