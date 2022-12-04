/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Suspense } from "react";
import { Routes, Navigate, Route } from "react-router-dom";
import config from "../../../config";
import Loader from "../../components/Loader";
import Login from "./Login";

export function AuthPage() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route
          path="*"
          element={<Navigate to={`${config.homepage}/auth/login`} />}
        />
        <Route path={`${config.homepage}/auth/login`} element={<Login />} />
      </Routes>
    </Suspense>
  );
}
