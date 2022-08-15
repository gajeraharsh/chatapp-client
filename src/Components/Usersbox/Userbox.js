import React from "react";
import "./Userbox.css";
import { Typography } from "@material-ui/core";
import ExitToAPP from "@material-ui/icons/ExitToApp";
import profileDefault from "../../assets/images/profileDefault.jpg";
import { useDispatch, useSelector } from "react-redux";
import profileimage from "../../assets/images/profileimage.jpg";
import ProfileDefaulImage from "../../assets/images/profileDefault.jpg";
import {
  ApiGetConversation,
  removeconversation,
} from "../../Store/Actions/Conversation";
function Userbox(props) {
  const { item, HandleCurentConversation } = props;
  const { ActiveUserHover } = useSelector((state) => state.UserReducer);
  const { UserId } = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();
  const handelclick = (id) => {
    HandleCurentConversation(id);
    dispatch({ type: "SET_ACTIVE_USER_HOVER", paylod: item._id });
    dispatch({ type: "REMOVE_CURRENTGROUP", paylod: item._id });
  };

  const handleleaveconversation = (id) => {
    dispatch(removeconversation(id, UserId));
  };
  return (
    <div
      className={ActiveUserHover === item._id ? "userbox Active" : "userbox"}
      onClick={() => handelclick(item._id)}
    >
      <div className="userbox_sub">
        <img
          src={
            !item.Profile_Image
              ? ProfileDefaulImage
              : `http://localhost:5000/Images/${item.Profile_Image}`
          }
          className="image_profile"
          alt="profileimage"
        />

        <div className="infomessages">
          <Typography className="color-white" variant="body1">
            {item.UserName}
          </Typography>
          <Typography className="color-gray" variant="body2"></Typography>
        </div>

        <Typography className="color-gray mi" variant="body2"></Typography>
        <ExitToAPP
          className={"Exitconversationicon"}
          onClick={() => handleleaveconversation(item._id)}
        />
      </div>
    </div>
  );
}

export default Userbox;
