import React from "react";
import "./landing-page.css";
import PreSeasonImage from "../../assets/pre-season.png";
import ACLImage from "../../assets/atmosphere-logo.png";
import { Link } from "react-router-dom";

const buttonsData = [
  {
    title: "Atmosphere Pre season - Kamis, 14 Maret (19:30-22:00)",
    imageSrc: PreSeasonImage,
    link: "/register",
  },
  { title: "ACL Season 11", imageSrc: ACLImage, link: "google.com" },
  { title: "ACL season 12", imageSrc: ACLImage, link: "google.com" },
];

const LandingPage = ({ userName = "david" }) => {
  return (
    <div className="App bg-red-800 min-h-screen flex flex-col justify-center items-center">
      {userName && ( // Render if userName exists
        <div className="absolute top-0 right-0 p-4 text-white">
          Hi {userName}
        </div>
      )}
      <img
        src={ACLImage}
        alt="Logo"
        className="rounded-full overflow-hidden h-24 w-24 mb-4"
      />
      <header className="text-white text-2xl mb-8">
        ATMOSPHERE #feeltheatmosphere
      </header>
      <main className="flex flex-col items-center">
        {buttonsData.map((button, index) => (
          <Link to={button.link}>
            <button
              key={index}
              className="bg-white text-red-800 py-2 px-4 rounded mb-4 flex items-center"
            >
              <img
                src={button.imageSrc}
                alt="Match type"
                className="mr-2 h-8 w-8"
              />
              {button.title}
            </button>
          </Link>
        ))}
      </main>
      <footer>&copy; 2024 David FIM</footer>
    </div>
  );
};

export default LandingPage;
