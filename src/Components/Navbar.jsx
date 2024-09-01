import DisplayDateTime from "./DateTime";
import DisplayWeather from "./DisplayWeather";
import DownloadResume from "./DownloadResume";
import "./profileborder.css";
const Navbar = ({ splashStatus }) => {
  console.log(splashStatus);
  return (
    <nav
      className={`${
        splashStatus ? "hidden" : "absolute fadeInOnly"
      } lg:top-28 md:top-16 left-0 w-full p-4 z-10`}
    >
      <div className="md:block hidden">
        <ul className="flex justify-end px-24 md:text-lg">
          <li>
            <DownloadResume />
          </li>
          <li>
            <DisplayWeather />
          </li>
          <li>
            <DisplayDateTime />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
