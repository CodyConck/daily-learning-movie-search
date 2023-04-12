import React from "react";
import { AppBar } from "@material-ui/core";
// import MenuIcon from "@material-ui/icons/Menu";

const Header = (props) => {
  return (
    <AppBar className="App-header">
      {/* <MenuIcon /> */}
      <h2>{props.text}</h2>
    </AppBar>
  );
};

export default Header;
