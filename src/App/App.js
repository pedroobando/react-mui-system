import React from "react";
import { CssBaseline, makeStyles } from "@material-ui/core";

import "./App.css";
import SideMenu from "../components/SideMenu";
import Header from "../components/Header";

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  },
});

export const App = () => {
  const classes = useStyles();

  return (
    <>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
      </div>
      <CssBaseline />
    </>
  );
};

export default App;
