import React, { useState } from "react";
import "./ContectBox.css";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useDispatch, useSelector } from "react-redux";
import { ApiCreateConversation } from "../../Store/Actions/Conversation";
import { blockuser } from "../../Store/Actions/User";
import ProfileDefaulImage from "../../assets/images/profileDefault.jpg";
function ContectBox({ item }) {
  //state
  const [Boxlist, setBoxlist] = useState(false);
  const { UserId } = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();
  //Functions

  const CreateConversation = (id) => {
    dispatch(ApiCreateConversation(id, UserId));
    setBoxlist(false);
  };

  const handleblockuser = (id) => {
    dispatch(blockuser(id));
    setBoxlist(false);
  };
  return (
    <div className="ContectBox_main_container">
      <div className="Contect_Box_div">
        <div className="contect_box_div_container">
          <div className="cpmtect_box_image">
            <img
              src={
                !item.Profile_Image
                  ? ProfileDefaulImage
                  : `http://localhost:5000/Images/${item.Profile_Image}`
              }
              alt=""
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
              }}
            />
            <div className="h1div_context">
              <h4 className="contect_Box_Name">{item.UserName}</h4>
            </div>
          </div>
          <div className="contect_email">
            <p className="contect_min_text">{item.Email}</p>
          </div>
        </div>

        <div className="context_icons">
          <MoreVertIcon
            className="contect_Box_Icon"
            onClick={() => setBoxlist((prev) => !prev)}
          />
          <div
            className={
              Boxlist
                ? "Context_box_List Context_box_List_active"
                : "Context_box_List"
            }
          >
            <ul className="Box_List_ul">
              <li
                className="Box_Lisst_Li"
                onClick={() => CreateConversation(item._id)}
              >
                Add Contect
              </li>
              <li
                className="Box_Lisst_Li"
                onClick={() => handleblockuser(item._id)}
              >
                Block
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContectBox;
