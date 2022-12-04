import { Box } from "@mui/system";
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loader from "./components/Loader";
import DashboardPage from "./pages/home/DashboardPage";

function BasePage() {
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <Box sx={{ paddingBottom: 6 }}>
        <Routes>
          {/* <Route
          path="*"
          element={<Navigate to={`${config.homepage}/dashboard`} />}
        /> */}
          <Route path="*" element={<DashboardPage />} />
        </Routes>
      </Box>
      <Footer />
    </Suspense>
  );
}

export default BasePage;
