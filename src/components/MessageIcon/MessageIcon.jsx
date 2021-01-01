import React from "react";
import classes from "./MessageIcon.module.css";
import { Avatar } from "@material-ui/core";

function MessageIcon({ Icon, text, color }) {
  return (
    <div className={classes.messageIcon}>
      <Avatar
        style={{ backgroundColor: `${color}` }}
        className={classes.messageIcon__avatar}
      >
        <Icon />
      </Avatar>
      <p>{text}</p>
    </div>
  );
}

export default MessageIcon;
