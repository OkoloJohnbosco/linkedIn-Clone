import React from "react";
import Feed from "../../components/Feed/Feed";
import Widget from "../../components/Widget/Widget";
import classes from "./Home.module.css";

function Home() {
  return (
    <div className={classes.home}>
      <Feed />
      <Widget />
    </div>
  );
}

export default Home;
