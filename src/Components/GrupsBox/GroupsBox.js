import React from "react";
import "./GroupsBox.css";
import ProfileImage from "../../assets/images/mypostimg.jpg";
import ExitToAPP from "@material-ui/icons/ExitToApp";
import { useDispatch, useSelector } from "react-redux";
import { leavegroup, setCurrnetgropu } from "../../Store/Actions/User";
function GroupsBox({ Name, item }) {
  const { Groups } = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();

  const handlegorupchat = (id) => {
    const fitergroup = Groups.find((item) => item._id == id);

    dispatch(setCurrnetgropu(fitergroup));
  };

  const handleleavegroup = (id) => {
    dispatch(leavegroup(id));
  };
  return (
    <div
      className="GrupBox_main_container"
      onClick={() => handlegorupchat(item._id)}
    >
      <div className="Group_name_div">
        <p className="GroupHeding">{Name}</p>
      </div>
      <div className="Grup_Totle_Online">
        <ExitToAPP onClick={() => handleleavegroup(item._id)} />
      </div>
    </div>
  );
}

export default GroupsBox;
