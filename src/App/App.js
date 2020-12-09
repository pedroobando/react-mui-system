import React from "react";
import {
  CssBaseline,
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core";

import "./App.css";
import SideMenu from "../components/SideMenu";
import Header from "../components/Header";
import Employes from "../pages/Employes/Employes";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b126",
    },
    secondary: {
      main: "#f83145",
      light: "#f8324526",
    },
    background: {
      default: "#f4f5fd",
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: "translateZ(0)",
      },
    },
  },
  props: {
    MuiIconButton: {
      disableRipple: true,
    },
  },
});

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  },
});

export const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />

        <Employes />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
};

export default App;
