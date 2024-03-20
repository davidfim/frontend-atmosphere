import React from "react";
import { useEffect } from "react";
import "./landing-page.css";
import PreSeasonImage from "../../assets/pre-season.png";
import ACLImage from "../../assets/atmosphere-logo.png";
import { Link } from "react-router-dom";
import useStore from "../../store";

const buttonsData = [
  {
    id: '123',
    title: "Atmosphere Pre season - Kamis, 14 Maret (19:30-22:00)",
    type: 'pre-season',
    imageSrc: PreSeasonImage,
  },
  { title: "ACL Season 11", imageSrc: ACLImage, link: "google.com" },
  { title: "ACL season 12", imageSrc: ACLImage, link: "google.com" },
];

const LandingPage = ({ userName = "david" }) => {
  const { matches, getMatches } = useStore();

  const fetchMatches = async () => {
    await getMatches();
  };

  useEffect(() => {
    fetchMatches();
    console.log(matches)
  }, []);

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
        {matches?.map((match, index) => (
          <Link to={`/register-match/${match.id}`}>
            <button
              key={index}
              className="bg-white text-red-800 py-2 px-4 rounded mb-4 flex items-center"
            >
              <img
                src={match.type === 'pre-season' ? PreSeasonImage : ACLImage}
                alt="Match type"
                className="mr-2 h-8 w-8"
              />
              {match.title}
            </button>
          </Link>
        ))}
      </main>
      <footer>&copy; 2024 David FIM</footer>
    </div>
  );
};

export default LandingPage;
