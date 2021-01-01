import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import classes from "./Header.module.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Avatar } from "@material-ui/core";

function Header() {
  return (
    <div className={classes.header}>
      {/* {image} */}
      <div className={classes.header__inner}>
        <LinkedInIcon />

        <SearchBar />
      </div>
      <div className={classes.header__icons}>
        <Avatar className={classes.header__avatar}>+</Avatar>

        <Avatar className={classes.header__avatar}>
          <small>3</small>
        </Avatar>
        <Avatar className={classes.header__avatarUser} />
      </div>
    </div>
  );
}

export default Header;
