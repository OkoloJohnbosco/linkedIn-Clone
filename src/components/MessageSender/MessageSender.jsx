import React from "react";
import classes from "./MessageSender.module.css";
import LinkOutlinedIcon from "@material-ui/icons/LinkOutlined";
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";
import { Button } from "@material-ui/core";
import ArrowRightAltOutlinedIcon from "@material-ui/icons/ArrowRightAltOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import FormatQuoteOutlinedIcon from "@material-ui/icons/FormatQuoteOutlined";
import MessageIcon from "../MessageIcon/MessageIcon";

function MessageSender() {
  return (
    <div className={classes.messageSender}>
      <div className={classes.messageSender__topIcons}>
        <MessageIcon
          Icon={FormatQuoteOutlinedIcon}
          text="share an upload"
          color="#cc890c"
        />
        <MessageIcon
          Icon={CameraAltOutlinedIcon}
          text="upload a photo"
          color="#b961b9"
        />
        <MessageIcon
          Icon={EditOutlinedIcon}
          text="share a post"
          color="#7eaaec"
        />
      </div>
      <form className={classes.messageSender__form}>
        <div className={classes.messageSender__top}>
          <input placeholder="What's on your mind" />
        </div>
        <div className={classes.messageSender__bottom}>
          <div className={classes.messageSender__bottomIcons}>
            <LinkOutlinedIcon />
            <CameraAltOutlinedIcon />
          </div>
          <Button type="submit">
            <span>post</span>
            <ArrowRightAltOutlinedIcon />
          </Button>
        </div>
      </form>
    </div>
  );
}

export default MessageSender;
