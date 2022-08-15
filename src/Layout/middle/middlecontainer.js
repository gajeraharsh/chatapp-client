import React from "react";
import "./middlecontainer.css";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import ChatIcon from "@material-ui/icons/Chat";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Tooltip } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function middlecontainer() {
  const handlelogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  const handlechat = () => {};
  return (
    <div className="middlecontainer">
      <div className="icons_navigations_main">
        <Tooltip title="Profile" placement="top">
          <NavLink to="/profile">
            <PersonOutlineIcon className="icon_size_navigation" />
          </NavLink>
        </Tooltip>
      </div>
      <div className="icons_navigations_main">
        <Tooltip title="Chat">
          <NavLink to="/" onClick={handlechat}>
            <ChatIcon className="icon_size_navigation" />
          </NavLink>
        </Tooltip>
      </div>
      <div className="icons_navigations_main">
        <Tooltip title="Groups">
          <NavLink to="/Groups">
            <SupervisorAccountIcon className="icon_size_navigation" />
          </NavLink>
        </Tooltip>
      </div>
      <div className="icons_navigations_main">
        <Tooltip title="Contect">
          <NavLink to="/Contect">
            <PeopleAltIcon className="icon_size_navigation" />
          </NavLink>
        </Tooltip>
      </div>

      <div className="icons_navigations_main">
        <Tooltip title="logout" onClick={handlelogout}>
          <ExitToAppIcon className="icon_size_navigation" />
        </Tooltip>
      </div>
    </div>
  );
}

export default middlecontainer;
