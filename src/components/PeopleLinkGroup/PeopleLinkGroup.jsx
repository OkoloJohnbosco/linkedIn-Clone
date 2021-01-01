import React from "react";
import classes from "./PeopleLinkGroup.module.css";
import PeopleLink from "../PeopleLink/PeopleLink";
import { Divider } from "@material-ui/core";

function PeopleLinkGroup() {
  return (
    <div className={classes.peopleLinkGroup}>
      <h3>People you may know</h3>
      <Divider style={{ margin: "20px 120px 20px 0" }} />
      <PeopleLink name={"Okolo John"} connections="20" job="engineer" />
      <PeopleLink name={"Sam Smith"} connections="13" job="songwriter" />
      <PeopleLink name={"Father John"} connections="5" job="reverend" />
      <PeopleLink name={"Father John"} connections="5" job="reverend" />
      <PeopleLink name={"Father John"} connections="5" job="reverend" />
      <PeopleLink name={"Father John"} connections="5" job="reverend" />
    </div>
  );
}

export default PeopleLinkGroup;
