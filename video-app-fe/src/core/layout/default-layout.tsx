import React from "react";
import ResponsiveAppBar from "./header";
import { MainRoutes } from "./routes";
export const DefaultLayout = () => {
  return (
    <React.Fragment>
      <ResponsiveAppBar />
      {/* <MainRoutes /> */}
    </React.Fragment>
  );
};
