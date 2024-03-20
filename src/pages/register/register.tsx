import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'

import AtmosphereLogo from "../../assets/atmosphere-logo.png";
import "./register.css";
import userUseCase from "../../useCase/user.useCase.ts";


const RegistrationForm = () => {
  const navigate = useNavigate();
  const { handleSubmitRegister, error } = userUseCase();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [instagramAccount, setInstagramAccount] = useState("");


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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleSubmitRegister({ email, password, confirmPassword, name, phoneNumber, instagramAccount })
      navigate('/login');
    } catch {
      console.log(error)
    }
  }

  useEffect(() => {
    console.log(error)
  }, [error]);

  return (
    <div className="registration-container">
      <img
        src={AtmosphereLogo}
        alt="Logo"
        className="rounded-full overflow-hidden h-24 w-24 mb-4"
      />
      <div className="registration-form">
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
              type="tel"
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
