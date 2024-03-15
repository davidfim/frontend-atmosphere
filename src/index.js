import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LandingPage from "./landing-page/landing-page.tsx";
import RegistrationForm from "./register/register.tsx";
import LoginPage from "./login/login.tsx";
import FootballMatchRegistration from "./user-register-match/user-register-match.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <div> 404 Not Found</div>,
  },
  { path: "/register", element: <RegistrationForm /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/registerMatch", element: <FootballMatchRegistration /> },
  { path: "/player/:id" },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
