import React, { useState } from "react";

import { InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
function Search({ handlesearch, value }) {
  return (
    <div className="Search_div_users">
      <div className="search_backgrund_color">
        <SearchIcon />
        <InputBase
          className="search_input"
          placeholder="Enter Email to Search"
          onChange={handlesearch}
          inputProps={{ "aria-label": "naked" }}
          value={value}
        />
      </div>
    </div>
  );
}

export default Search;
