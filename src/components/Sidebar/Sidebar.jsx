import React from "react";
import SidebarLink from "../SidebarLink/SidebarLink";
import classes from "./Sidebar.module.css";
import { Divider } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import ForumOutlinedIcon from "@material-ui/icons/ForumOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import BusinessCenterOutlinedIcon from "@material-ui/icons/BusinessCenterOutlined";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

function Sidebar() {
  return (
    <div className={classes.sidebar}>
      <SidebarLink text="people" active Icon={PersonOutlineOutlinedIcon} />
      <SidebarLink text="posts" Icon={ForumOutlinedIcon} />
      <SidebarLink text="location" Icon={LocationOnOutlinedIcon} />
      <SidebarLink text="groups" Icon={PeopleAltOutlinedIcon} />
      <SidebarLink text="Inbox" Icon={MailOutlineIcon} badge={5} />
      <SidebarLink text="jobs" Icon={BusinessCenterOutlinedIcon} />
      <Divider style={{ marginBottom: "20px" }} />
      {/* <SidebarLink text="aeroplane" /> */}
      <SidebarLink text="go premium" />
      <SidebarLink text="setting" />
      <SidebarLink text="help" />
      <Divider style={{ marginBottom: "20px" }} />
    </div>
  );
}

export default Sidebar;
