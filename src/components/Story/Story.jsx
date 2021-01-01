import React from "react";
import classes from "./Story.module.css";
import image from "../../assets/images/sample.jpg";
import StarIcon from "@material-ui/icons/Star";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Story() {
  return (
    <div className={classes.story}>
      <div className={classes.story__image}>
        <img src={image} alt="" />
      </div>
      <div className={classes.story__info}>
        <div className={classes.story__type}>
          <StarIcon />
          <p>Sponsored</p>
        </div>
        <h4>The title of the story</h4>
        <p className={classes.story__main}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          dicta provident quidem quos.
        </p>
        <p className={classes.story__timestamp}>
          <FiberManualRecordIcon
            style={{ width: "12px", marginRight: "8px" }}
          />
          <span>Time stamp</span>
        </p>
      </div>
    </div>
  );
}

export default Story;
