import React, { useState } from "react";
import TOCImage from "../../assets/toc.png";
import AtmosphereLogo from "../../assets/atmosphere-logo.png";
import PreSeasonLogo from "../../assets/pre-season.png";
import "./user-register-match.css";
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
          <div className="mb-4">
            <h3>Posisi</h3>
            <div>
              <ul className="grid w-full md:gap-3 md:grid-cols-2">
                <li>
                  <input
                    type="radio"
                    id="kiper"
                    name="position"
                    value="kiper"
                    className="hidden peer"
                    required
                    onChange={handlePositionChange}
                  />                  <label htmlFor="kiper" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div className="block">
                      <div className="w-full text-lg font-semibold">Kiper</div>
                      <div className="w-full">Rp 70.000</div>
                    </div>
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="pemain"
                    name="position"
                    value="pemain"
                    className="hidden peer"
                    required
                    onChange={handlePositionChange}
                  />                  <label htmlFor="pemain" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div className="block">
                      <div className="w-full text-lg font-semibold">Pemain</div>
                      <div className="w-full">Rp 110.000</div>
                    </div>
                  </label>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-4">
            <h3>Warna Tim</h3>
            <div>
              <ul className="grid w-full md:gap-3 md:grid-cols-2">
                <li>
                  <input
                    type="checkbox"
                    id="merah"
                    name="warna_tim"
                    value="merah"
                    className="hidden peer"

                    onChange={handleColorChange}
                  />                  <label htmlFor="merah" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div className="block">
                      <div className="w-full text-lg font-semibold">Merah</div>
                    </div>
                  </label>
                </li>
                <li>
                  <input type="checkbox" id="biru" name="warna_tim" value="biru" className="hidden peer" onChange={handleColorChange} />
                  <label htmlFor="biru" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div className="block">
                      <div className="w-full text-lg font-semibold">Biru</div>
                    </div>
                  </label>
                </li>
                <li>
                  <input type="checkbox" id="hitam" name="warna_tim" value="hitam" className="hidden peer" onChange={handleColorChange} />
                  <label htmlFor="hitam" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div className="block">
                      <div className="w-full text-lg font-semibold">Hitam</div>
                    </div>
                  </label>
                </li>
                <li>
                  <input type="checkbox" id="putih" name="warna_tim" value="biru" className="hidden peer" onChange={handleColorChange} />
                  <label htmlFor="putih" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div className="block">
                      <div className="w-full text-lg font-semibold">Putih</div>
                    </div>
                  </label>
                </li>
              </ul>
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
