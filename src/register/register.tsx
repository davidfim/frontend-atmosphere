import React, { useState } from "react";
import { Link } from "react-router-dom";
import AtmosphereLogo from "../assets/atmosphere-logo.png";
import "./register.css"; // Import the CSS file

const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [instagramAccount, setInstagramAccount] = useState("");

  const [error, setError] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleInstagramAccountChange = (e) => {
    setInstagramAccount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process registration data here

    // Reset previous errors
    setError(null);

    if (
      !email ||
      !password ||
      !confirmPassword ||
      !name ||
      !phoneNumber ||
      !instagramAccount
    ) {
      setError("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    console.log("Name:", name);
    console.log("Phone Number:", phoneNumber);
    console.log("Instagram Account:", instagramAccount);
    // You can send this data to your server for further processing
  };

  return (
      <div className="registration-container">
      <img src={AtmosphereLogo} alt="Logo" className="rounded-full overflow-hidden h-24 w-24 mb-4" />
        <div className="registration-form">
          <div className="login-option">
            <div className="flex justify-center items-center">
              <p>Sudah punya akun?</p>
            </div>
          </div>
          <Link to="/login">
            <button className="register-button">Login</button>
          </Link>
          <div className="divider">atau daftar</div>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div>
              <label htmlFor="confirmPassword">Konfirmasi Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
            </div>
            <div>
              <label htmlFor="name">Nama</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div>
              <label htmlFor="phoneNumber">Nomor HP</label>
              <input
                type="text"
                id="phoneNumber"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
            </div>
            <div>
              <label htmlFor="instagramAccount">Akun Instagram</label>
              <input
                type="text"
                id="instagramAccount"
                value={instagramAccount}
                onChange={handleInstagramAccountChange}
              />
            </div>
            <button type="submit" className="register-button my-4">
              Daftar
            </button>
          </form>
        </div>
      </div>
  );
};

export default RegistrationForm;
