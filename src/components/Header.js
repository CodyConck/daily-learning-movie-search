import React from "react";
import { AppBar } from "@material-ui/core";
import Switch from "@material-ui/core/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

const Header = (props) => {
  return (
    <AppBar className="App-header">
      <Switch className="switch" {...label} />
      <h2>{props.text}</h2>
    </AppBar>
  );
};

export default Header;
