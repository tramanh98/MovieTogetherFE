import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { DefaultLayout } from "./core/layout/default-layout";
import { MainRoutes } from "./core/layout/routes";

function App() {
  return (
    <div>
      <DefaultLayout />
      <MainRoutes />
    </div>
  );
}

export default App;
