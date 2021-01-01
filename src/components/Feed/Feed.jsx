import React from "react";
import classes from "./Feed.module.css";
import MessageSender from "../MessageSender/MessageSender";

function Feed() {
  return (
    <div className={classes.feed}>
      <MessageSender />
    </div>
  );
}

export default Feed;
