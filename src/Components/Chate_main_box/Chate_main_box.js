import React, { useEffect, useState, useReff, useRef } from "react";
import "./Chate_main_box.css";
import {
  ChateDisplayDimpletext,
  Chatedipalyimage,
  Chatedispalyvideo,
  Chatedisplayoterh,
} from "../Chate_display/Chate_display";
import { useSelector, useDispatch } from "react-redux";
import { MessagesGet } from "../../Store/Actions/Messages";

function Chatemainbox() {
  const dispatch = useDispatch();
  const [Mainmessages, setMainmessages] = useState([]);
  const { CurrentConversation, MainConversation } = useSelector(
    (state) => state.ConversationReducer
  );
  const { UserId } = useSelector((state) => state.AuthReducer);
  const { Messages } = useSelector((state) => state.MessagesReducer);
  const { currentGroup } = useSelector((state) => state.UserReducer);

  const scrollraf = useRef();
  useEffect(() => {
    //dispatch(GetMessages(CurrentConversation._id))
    dispatch(MessagesGet(CurrentConversation._id));
  }, [dispatch, CurrentConversation]);
  useEffect(() => {
    setMainmessages(Messages);
  }, [Messages]);
  useEffect(() => {
    scrollraf.current.scrollTop = scrollraf.current.scrollHeight;
  }, [Mainmessages]);

  const check = () => {
    scrollraf.current.scrollTop = scrollraf.current.scrollHeight;
  };

  return (
    <div className="Chate_main_box" ref={scrollraf} onLoad={check}>
      {Mainmessages.length === 0
        ? "No Data Avalible"
        : Mainmessages.map((item, i) => {
            return item.TypeOfMessage === ".jpg" ? (
              <Chatedipalyimage
                key={item._id}
                floting={item.ReciverId === UserId}
                userid={UserId}
                filejpg={`http://localhost:5000/Files/${item.Message_File}`}
                item={item}
              />
            ) : item.TypeOfMessage === "msg" ? (
              <ChateDisplayDimpletext
                key={item._id}
                item={item}
                userid={UserId}
                floting={item.ReciverId === UserId}
              />
            ) : item.TypeOfMessage === ".mp4" ? (
              <Chatedispalyvideo
                key={item._id}
                floting={item.ReciverId === UserId}
                userid={UserId}
                item={item}
                Video={`http://localhost:5000/Files/${item.Message_File}`}
              />
            ) : (
              <Chatedisplayoterh
                key={item._id}
                floting={item.ReciverId === UserId}
                userid={UserId}
                item={item}
                File={item.Message_File}
              />
            );
          })}
    </div>
  );
}

export default Chatemainbox;
