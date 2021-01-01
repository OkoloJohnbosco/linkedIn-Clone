import React from "react";
import classes from "./PeopleLink.module.css";
import { Avatar } from "@material-ui/core";
import WifiTetheringIcon from "@material-ui/icons/WifiTethering";

function PeopleLink({ name, job, connections }) {
  return (
    <>
      <div className={classes.peopleLink}>
        <Avatar className={classes.peopleLink__avatar} />
        <div className={classes.peopleLink__inner}>
          <div className={classes.peopleLink__innerInfo}>
            <p className={classes.peopleLink__name}>{name}</p>
            <p className={classes.peopleLink__job}>{job}</p>
          </div>
          <div className={classes.peopleLink__icon}>
            <p>{connections}</p>
            <WifiTetheringIcon />
          </div>
        </div>
      </div>
    </>
  );
}

export default PeopleLink;
