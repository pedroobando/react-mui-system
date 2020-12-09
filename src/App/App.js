import React from "react";
import { makeStyles } from "@material-ui/core";

import "./App.css";
import SideMenu from "../components/SideMenu";
import Header from "../components/Header";

const useStyles = makeStyles({
  appMain: {
    marginLeft: "320px",
    width: "100%",
  },
});

export const App = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <SideMenu />

      <div className={classes.appMain}>
        <Header />
        here we go.!
      </div>
    </React.Fragment>
  );
};

export default App;
