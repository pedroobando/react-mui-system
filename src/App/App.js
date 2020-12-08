import React from "react";
import "./App.css";

import { SideMenu } from "../components/SideMenu";

export const App = () => {
  return (
    <React.Fragment>
      <SideMenu />
      <div>here we go.!</div>
    </React.Fragment>
  );
};

export default App;
