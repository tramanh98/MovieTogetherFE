import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../../pages/home-page/home";

export const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
  </Routes>
);
