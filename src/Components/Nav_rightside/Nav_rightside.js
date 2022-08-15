import React, { useEffect, useState } from "react";
import "./Nav_rigthside.css";
import profile from "../../assets/images/profileimage.jpg";
import { Typography, Tooltip } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import CallIcon from "@material-ui/icons/Call";
import VideocamOutlinedIcon from "@material-ui/icons/VideocamOutlined";
import PersonOutlinedIcon from "@material-ui/icons/PersonOutlined";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import ProfileDefaulImage from "../../assets/images/profileDefault.jpg";
import { useSelector, useDispatch } from "react-redux";
import { getcurrentuser, FetchOneUser } from "../../Store/Actions/User";
function NAv_rightside({ item }) {
  const { profileDetails } = useSelector((state) => state.AuthReducer);
  const { currentClickProfile, currentGroup } = useSelector(
    (state) => state.UserReducer
  );
  const [data, setdata] = useState(undefined);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(item);
  }, []);
  return (
    <nav className="rightsidecontainernav">
      <div className="nav_right_section_left">
        <img
          src={
            item == undefined
              ? ProfileDefaulImage
              : !item.Profile_Image
              ? ProfileDefaulImage
              : `http://localhost:5000/Images/${item.Profile_Image}`
          }
          className="profile_image_chat"
          alt="This is profile "
        />
        <Typography className="chat_title" variant="body1">
          {item === undefined ? currentGroup.groupName : item.UserName}
        </Typography>
        <div className="online_offleine_status">
          <Typography className="online_offline" variant="body2"></Typography>
        </div>
      </div>
      <div className="nav_right_section_rigth"></div>
    </nav>
  );
}

export default NAv_rightside;
