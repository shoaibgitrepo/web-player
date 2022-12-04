import React, { Suspense, useState } from "react";
import { Navigate, Routes, Route } from "react-router-dom";

import DashboardNodes from "./DashboardNodes";
import DashboardDetails from "./DashboardDetails";
import DashboardMap from "./DashboardMap";
import Loader from "../../components/Loader";
import config from "../../../config";
import DashbooardHeader from "./DashboardHeader";
import DashboardStatistics from "./DashboardStatistics";

function DashboardPage(props) {
  const [page, setPage] = useState("nodes");
  return (
    <Suspense fallback={<Loader />}>
      <DashbooardHeader page={page} setPage={setPage} />
      <Routes>
        <Route
          path="*"
          element={<Navigate to={`${config.homepage}/dashboard/nodes`} />}
        />
        <Route
          path={`${config.homepage}/dashboard/nodes`}
          element={<DashboardNodes />}
        />
        <Route
          path={`${config.homepage}/dashboard/details/:id`}
          element={<DashboardDetails />}
        />
        <Route
          path={`${config.homepage}/dashboard/map`}
          element={<DashboardMap />}
        />
        <Route
          path={`${config.homepage}/dashboard/statistics`}
          element={<DashboardStatistics />}
        />
      </Routes>
    </Suspense>
  );
}

export default DashboardPage;
