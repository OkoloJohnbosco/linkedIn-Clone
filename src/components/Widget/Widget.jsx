import React from "react";
import classes from "./Widget.module.css";
import PeopleLinkGroup from "../PeopleLinkGroup/PeopleLinkGroup";
import Story from "../Story/Story";

function Widget() {
  return (
    <div className={classes.widget}>
      <Story />
      <PeopleLinkGroup />
    </div>
  );
}

export default Widget;
