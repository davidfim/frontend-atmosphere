// LoginPage.js
import AtmosphereLogo from "../assets/atmosphere-logo.png"

import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process login data here
    console.log("Email:", email);
    console.log("Password:", password);
    // You can send this data to your server for authentication
  };

  return (
    <div className="App bg-red-800 min-h-screen flex flex-col justify-center items-center">
      <img
        src={AtmosphereLogo}
        alt="Logo"
        className="rounded-full overflow-hidden h-24 w-24 mb-4"
      />
      <div className="registration-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500 focus:ring-red-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500 focus:ring-red-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none focus:bg-red-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
