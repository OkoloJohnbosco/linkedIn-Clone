import React from "react";
import classes from "./SearchBar.module.css";
import SearchIcon from "@material-ui/icons/Search";

function SearchBar() {
  return (
    <div className={classes.searchBar}>
      <SearchIcon style={{ color: "#999" }} />
      <input placeholder="Search for people, jobs, companies and more..." />
    </div>
  );
}

export default SearchBar;
