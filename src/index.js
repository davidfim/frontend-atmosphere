import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals.js";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import LandingPage from "./pages/landing-page/landing-page.tsx";
import RegistrationForm from "./pages/register/register.tsx";
import LoginPage from "./pages/login/login.tsx";
import FootballMatchRegistration from "./pages/user-register-match/user-register-match.tsx";

import AuthProvider from "react-auth-kit";
import createStore from "react-auth-kit/createStore";
import AuthOutlet from "@auth-kit/react-router/AuthOutlet";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <LandingPage />,
//     errorElement: <div> 404 Not Found</div>,
//   },
//   { path: "/register", element: <RegistrationForm /> },
//   { path: "/login", element: <LoginPage /> },
//   { path: "/registerMatch/:id", element: <FootballMatchRegistration /> },
//   { path: "/player/:id" },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<LandingPage />} />,
    <Route path="/register" element={<RegistrationForm />} />,
    <Route path="/login" element={<LoginPage />} />,
    <Route element={<AuthOutlet fallbackPath="/login" />}>
      <Route
        path="/register-match/:id"
        element={<FootballMatchRegistration />}
      />
    </Route>,
  ])
);

const store = createStore({
  authName: "_auth",
  authType: "cookie",
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === "https:",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider store={store}>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
