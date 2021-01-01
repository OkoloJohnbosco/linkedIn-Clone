import React from "react";
import classes from "./SidebarLink.module.css";
import { Button, Badge } from "@material-ui/core";

function SidebarLink({ Icon, text, active, badge }) {
  return (
    <div
      className={`${classes.sidebarLink} ${
        active ? classes.sidebarLink__active : ""
      }`}
    >
      <Button>
        {Icon && <Icon />}
        {text}
        {badge && (
          <Badge badgeContent={4} className={classes.sidebarLink__badge} />
        )}
      </Button>
    </div>
  );
}

export default SidebarLink;
