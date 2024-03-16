import React, { useState } from "react";
import TOCImage from "../../assets/toc.png";
import AtmosphereLogo from "../../assets/atmosphere-logo.png";
import PreSeasonLogo from "../../assets/pre-season.png";
import "./user-register-match.css"; // Import the CSS file
import Modal from "react-modal";

const FootballMatchRegistration = () => {
  const [position, setPosition] = useState("");
  const [isKeeper, setIsKeeper] = useState(false);
  const [teamColors, setTeamColors] = useState([]);
  const [allowPhoto, setAllowPhoto] = useState(false); // State for confirmation checkbox
  const [readTerms, setReadTerms] = useState(false); // State for terms and conditions checkbox
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handlePositionChange = (e) => {
    setPosition(e.target.value);
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

    setModalIsOpen(true);
  };

  return (
    <div className="registration-container">
      <img
        src={AtmosphereLogo}
        alt="Logo"
        className="rounded-full overflow-hidden h-24 w-24 mb-4"
      />
      <div className="match-info mb-4">
        <img
          src={PreSeasonLogo} // Replace MatchLogo with your actual match logo
          alt="Match Logo"
          className="mr-4"
        />
        <div className="match-info-box bg-gray-200 p-4 mb-4 flex items-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">Match Information</h3>
            <p>Date: March 25, 2024</p>
            <p>Place: Stadium ABC</p>
            <p>Match Title: Friendly Match</p>
          </div>
        </div>
      </div>
      <div className="registration-form">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center mb-4">
            <p className="mr-2">Posisi</p>

            <div className="flex">
              <div className="flex items-center mr-4">
                <input
                  type="radio"
                  id="kiper"
                  name="position"
                  value="Kiper"
                  checked={position === "Kiper"}
                  onChange={handlePositionChange}
                  className="mr-2"
                />
                <label htmlFor="kiper">{"Kiper (70k)"}</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="player"
                  name="position"
                  value="Pemain"
                  checked={position === "Pemain"}
                  onChange={handlePositionChange}
                  className="mr-2"
                />
                <label htmlFor="player">{"Pemain (110k)"}</label>
              </div>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <p className="mr-2">Warna tim:</p>
            <div className="flex">
              <div className="flex">
                <div className="flex items-center mr-4">
                  <input
                    type="checkbox"
                    id="merah"
                    value="Merah"
                    checked={teamColors.includes("Merah")}
                    onChange={handleColorChange}
                  />
                  <label htmlFor="red" className="ml-2">
                    Merah
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    type="checkbox"
                    id="hitam"
                    value="Hitam"
                    checked={teamColors.includes("Hitam")}
                    onChange={handleColorChange}
                  />
                  <label htmlFor="hitam" className="ml-2">
                    Hitam
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    type="checkbox"
                    id="biru"
                    value="Biru"
                    checked={teamColors.includes("Biru")}
                    onChange={handleColorChange}
                  />
                  <label htmlFor="biru" className="ml-2">
                    Biru
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="putih"
                    value="Putih"
                    checked={teamColors.includes("Putih")}
                    onChange={handleColorChange}
                  />
                  <label htmlFor="putih" className="ml-2">
                    Putih
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
              Bersedia apabila hasil foto anda dipakai untuk materi keperluan
              media social Atmosphere?
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
              Sudah membaca ketentuan pertandingan
            </label>
          </div>
          <button type="submit" className="register-button">
            Daftar Match
          </button>
        </form>
        <div className="terms-and-conditions py-4">
          <h3 className="text-xl font-semibold mb-2">Ketentuan Pertandingan</h3>
          <img src={TOCImage} alt="Terms and Conditions" className="mb-4" />
        </div>
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <div className="modal-content">
          <h2>Registration Successful!</h2>
          {/* Display user and match information */}
          <p>User: John Doe</p>
          <p>Email: johndoe@example.com</p>
          <p>Match Title: Friendly Match</p>
          <p>Date: March 25, 2024</p>
          <p>Place: Stadium ABC</p>
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </div>
      </Modal>
    </div>
  );
};

export default FootballMatchRegistration;
