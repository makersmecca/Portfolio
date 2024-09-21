import MyProjectDetails from "./MyProjectDetails";
import { useRef } from "react";
const Projects = ({ scrollClicked, globalBlur, isLight, splashStatus }) => {
  const targetRef = useRef(null);

  if (scrollClicked) {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }
  // console.log("state:" + scrollClicked);

  const projectDetails = [
    {
      img: "https://raw.githubusercontent.com/makersmecca/Portfolio/main/public/images/shopsumPoster.png",
      name: "Shop Sum",
      details:
        "Payment App for Small Vendors, Roadside Stalls and Humble Corner Shops",
      url: "https://github.com/makersmecca/Project-ShopSum",
    },
    {
      img: "https://raw.githubusercontent.com/makersmecca/Portfolio/main/public/images/portfolioPoster.png",
      name: "Portfolio",
      details: "My personal portfolio built with Vite-ReactJS and Tailwind CSS",
      url: "https://github.com/makersmecca/Portfolio",
    },
    {
      img: "https://raw.githubusercontent.com/makersmecca/Portfolio/main/public/images/wirelessChargerPoster.png",
      name: "Charge Spot",
      details:
        "Companion PWA for Wireless Charger project to monitor battery status",
      url: "https://github.com/makersmecca/ChargeSpot-Wireless-Charger",
    },
    {
      img: "https://raw.githubusercontent.com/makersmecca/Portfolio/main/public/images/hidknobPoster.png",
      name: "HID Knob",
      details: "Multifunction Customizable Controller for Personal Computers",
      url: "https://github.com/makersmecca/HID-Knob",
    },
  ];

  return (
    <div
      ref={targetRef}
      className={`${
        globalBlur
          ? "md:blur-none blur-md duration-500 ease-in-out"
          : "blur-none duration-500 ease-in-out"
      }`}
    >
      <MyProjectDetails
        projectDetails={projectDetails}
        isLight={isLight}
        splashStatus={splashStatus}
      />
    </div>
  );
};

export default Projects;
