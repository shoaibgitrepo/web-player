import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import BasePage from "./BasePage";
// import ErrorsPage from "./modules/ErrorsExamples/ErrorsPage";
import { hasValue } from "./utils/helper";
import Logout from "./pages/auth/Logout";
import { AuthPage } from "./pages/auth/AuthPage";
import config from "../config";

export function Routing() {
  const { user } = useSelector((state) => state.auth);
  console.log("user", user);
  const isAuthorized = hasValue(user);
  return (
    <Routes>
      {!isAuthorized && <Route path="*" element={<AuthPage />} />}
      {isAuthorized && <Route path="*" element={<BasePage />} />}
      <Route
        path={`${config.homepage}/logout`}
        element={<Navigate to={config.homepage} />}
      />
      <Route path={`${config.homepage}/logout`} element={<Logout />} />
    </Routes>
  );
}
