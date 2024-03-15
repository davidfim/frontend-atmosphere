import React, { useState } from "react";
import TOCImage from "../assets/toc.png";
// import "./register.css"; // Import the CSS file

const FootballMatchRegistration = () => {
  const [position, setPosition] = useState("");
  const [isKeeper, setIsKeeper] = useState(false);
  const [teamColors, setTeamColors] = useState([]);
  const [allowPhoto, setAllowPhoto] = useState(false); // State for confirmation checkbox
  const [readTerms, setReadTerms] = useState(false); // State for terms and conditions checkbox

  const handlePositionChange = (e) => {
    setPosition(e.target.value);
  };

  const handleIsKeeperChange = (e) => {
    setIsKeeper(e.target.checked);
  };

  const handleColorChange = (e) => {
    const color = e.target.value;
    if (teamColors.includes(color)) {
      setTeamColors(teamColors.filter((c) => c !== color));
    } else {
      setTeamColors([...teamColors, color]);
    }
  };

  const handleAllowPhotoChange = (e) => {
    setAllowPhoto(e.target.checked);
  };

  const handleReadTermsChange = (e) => {
    setReadTerms(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process registration data here
    console.log("Position:", position);
    console.log("IsKeeper:", isKeeper);
    console.log("Team Colors:", teamColors);
    console.log("Allow Photo:", allowPhoto);
    console.log("Read Terms:", readTerms);
    // You can send this data to your server for further processing
  };

  return (
    <div className="registration-container">
      <div className="registration-form">
        <h2>Football Match Registration</h2>
        <div className="match-info-box bg-gray-200 p-4 mb-4">
          <h3 className="text-xl font-semibold mb-2">Match Information</h3>
          <p>Date: March 25, 2024</p>
          <p>Place: Stadium ABC</p>
          <p>Match Title: Friendly Match</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <p>Position:</p>
            <div className="flex items-center">
              <input
                type="radio"
                id="keeper"
                name="position"
                value="Keeper"
                checked={position === "Keeper"}
                onChange={handlePositionChange}
                className="mr-2"
              />
              <label htmlFor="keeper">Keeper</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="player"
                name="position"
                value="Player"
                checked={position === "Player"}
                onChange={handlePositionChange}
                className="mr-2"
              />
              <label htmlFor="player">Player</label>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <p className="mr-2">Team Colors:</p>
            <div className="flex">
              <div className="flex">
                <div className="flex items-center mr-4">
                  <input
                    type="checkbox"
                    id="red"
                    value="Red"
                    checked={teamColors.includes("Red")}
                    onChange={handleColorChange}
                  />
                  <label htmlFor="red" className="ml-2">
                    Red
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    type="checkbox"
                    id="black"
                    value="Black"
                    checked={teamColors.includes("Black")}
                    onChange={handleColorChange}
                  />
                  <label htmlFor="black" className="ml-2">
                    Black
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    type="checkbox"
                    id="blue"
                    value="Blue"
                    checked={teamColors.includes("Blue")}
                    onChange={handleColorChange}
                  />
                  <label htmlFor="blue" className="ml-2">
                    Blue
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="white"
                    value="White"
                    checked={teamColors.includes("White")}
                    onChange={handleColorChange}
                  />
                  <label htmlFor="white" className="ml-2">
                    White
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="allowPhoto"
              checked={allowPhoto}
              onChange={handleAllowPhotoChange}
              className="mr-2"
            />
            <label htmlFor="allowPhoto">
              Allow my photo to be used for promotion
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="readTerms"
              checked={readTerms}
              onChange={handleReadTermsChange}
              className="mr-2"
            />
            <label htmlFor="readTerms">
              I have read and agree to the terms and conditions
            </label>
          </div>
          <button type="submit" className="register-button">
            Register
          </button>
        </form>
        <div className="terms-and-conditions">
          <h3 className="text-xl font-semibold mb-2">Terms and Conditions</h3>
          <img src={TOCImage} alt="Terms and Conditions" className="mb-4" />
          <p>
            Here are the terms and conditions of the football match
            registration.
          </p>
          {/* Add the content of terms and conditions */}
        </div>
      </div>
    </div>
  );
};

export default FootballMatchRegistration;
