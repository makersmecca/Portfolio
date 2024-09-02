import MyProjectDetails from "./MyProjectDetails";
import { useRef } from "react";
const Projects = ({ scrollClicked }) => {
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
        "Payment App for Small Vendors, Roadside Stalls and Humble Kirana (Grocery) Shops",
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
      name: "Wireless Charger project",
      details:
        "Companion PWA for Wireless Charger project to monitor battery charge status",
      url: "https://github.com/makersmecca/wireless_charger_project",
    },
    {
      img: "https://raw.githubusercontent.com/makersmecca/Portfolio/main/public/images/hidknobPoster.png",
      name: "HID Knob",
      details: "Multifunction Customizable Controller for Personal Computers",
      url: "https://github.com/makersmecca/HID-Knob",
    },
  ];

  return (
    <div ref={targetRef}>
      <MyProjectDetails projectDetails={projectDetails} />
    </div>
  );
};

export default Projects;
