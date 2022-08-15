/* eslint-disable react/jsx-pascal-case */
import React, { useState, useRef, useEffect } from "react";
import "./Rigthsidecontaienr.css";
import Nav_rigth from "../../Components/Nav_rightside/Nav_rightside";
import { Divider, InputBase } from "@material-ui/core";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import ImageIcon from "@material-ui/icons/Image";
import SendIcon from "@material-ui/icons/Send";
import Chatemainbox from "../../Components/Chate_main_box/Chate_main_box";
import { SendMessage } from "../../Store/Actions/Messages";
import { useDispatch, useSelector } from "react-redux";
import ChatSecondMain from "../../Components/ChatSeconMainBox/ChatSeconMainBox";
import { io } from "socket.io-client";
import { FetchOneUser, SendMessageGroup } from "../../Store/Actions/User";
function Rigthsidecontainer() {
  const [msginput, setmsginput] = useState("");
  const [filev, serfilev] = useState("");
  const [reciverid, setreciverid] = useState("");
  const { UserId } = useSelector((state) => state.AuthReducer);
  const { CurrentConversation, MainConversation } = useSelector(
    (state) => state.ConversationReducer
  );
  const { currentGroup, GroupConversation } = useSelector(
    (state) => state.UserReducer
  );
  const socket = useRef();
  //  Socket Connction

  useEffect(() => {
    socket.current = io("http://localhost:5000/");
  }, [socket]);
  // select redux store state
  const dispatch = useDispatch();
  const Senderid = UserId;

  const Conversatinid = CurrentConversation._id;
  // Sned Message Text
  const handlesubmit = (e) => {
    e.preventDefault();
    const Reciverid = CurrentConversation.Members.find(
      (item) => item !== UserId
    );
    const textdata = {
      SendrId: Senderid,
      ReciverId: Reciverid,
      ConversationId: Conversatinid,
      TypeOfMessage: "msg",
      Message_Text: msginput,
      ReciverGroupId: currentGroup._id,
      GroupId: currentGroup._id,
      SenderId: Senderid,
    };
    console.log(textdata);
    if (currentGroup) {
      dispatch(SendMessageGroup(textdata));
    } else {
    }
    dispatch(
      SendMessage(textdata, (submitdata) => {
        socket.current.emit("SendMessage", submitdata, (data) => {
          dispatch({ type: "ADD_ONE_MESSAGE", paylod: data });
        });
      })
    );
    // Socket send message

    setmsginput("");
  };

  // Send Message File   =>

  const HandleFile = (e) => {
    const file = e.target.files[0];
    serfilev(file);
    const Reciverid = CurrentConversation.Members.find(
      (item) => item !== UserId
    );
    const formdata = new FormData();
    formdata.append("SendrId", Senderid);
    formdata.append("ReciverId", Reciverid);
    formdata.append("ConversationId", Conversatinid);
    formdata.append("TypeOfMessage", "file");
    formdata.append("msgFile", file);
    formdata.append("ReciverGroupId", currentGroup._id);

    dispatch(
      SendMessage(formdata, (data) => {
        socket.current.emit("SendMessage", data, (data) => {
          //  dispatch({ type: "ADD_ONE_MESSAGE", paylod: data })
        });
        dispatch({ type: "ADD_ONE_MESSAGE", paylod: data });
      })
    );

    serfilev("");
  };

  useEffect(() => {
    if (UserId) {
      socket.current.emit("addUser", UserId);
    }
  }, [UserId]);

  useEffect(() => {
    socket.current.on("Recivemsg", (data) => {
      dispatch({ type: "ADD_ONE_MESSAGE", paylod: data });
    });
  }, [dispatch]);

  useEffect(async () => {}, [CurrentConversation]);

  useEffect(async () => {
    const Reciverid = CurrentConversation.Members.find(
      (item) => item !== UserId
    );
    var d = await dispatch(FetchOneUser(Reciverid));

    setreciverid(d);
  }, [CurrentConversation]);

  return (
    <div className="Rigth_side_contaienr">
      <Nav_rigth item={reciverid} />
      <div className="main_rigth_box_chate">
        <div className="chtebox">
          {Object.entries(currentGroup) == 0 ? (
            <Chatemainbox />
          ) : (
            <ChatSecondMain />
          )}
        </div>
        <Divider />
        <div className="chate_input_apply">
          <form className="fomr_input" onSubmit={handlesubmit}>
            <InputBase
              placeholder="Enter Message..."
              className="chate_input"
              onChange={(e) => setmsginput(e.target.value)}
              value={msginput}
            />
          </form>
          <div className="input_icons_maindiv">
            <div className="icon_input_all">
              <label style={{ cursor: "pointer" }} htmlFor="file_attach_text">
                <AttachFileIcon />
              </label>
              <input
                value={filev}
                onChange={HandleFile}
                type="file"
                id="file_attach_text"
                className="input_file_attach"
              />
            </div>

            <div className="icon_input_all" onClick={handlesubmit}>
              <SendIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rigthsidecontainer;
