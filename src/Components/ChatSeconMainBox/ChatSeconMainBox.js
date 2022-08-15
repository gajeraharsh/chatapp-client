import React, { useEffect, useState, useReff, useRef } from "react";

import {
  ChateDisplayDimpletext,
  Chatedipalyimage,
  Chatedispalyvideo,
  Chatedisplayoterh,
} from "../Chate_display/Chate_display";
import { useSelector, useDispatch } from "react-redux";
import { MessagesGet } from "../../Store/Actions/Messages";
import { getGroupConversation } from "../../Store/Actions/User";

function ChatSeconMainBox() {
  const dispatch = useDispatch();
  const [Mainmessages, setMainmessages] = useState([]);
  const { CurrentConversation, MainConversation } = useSelector(
    (state) => state.ConversationReducer
  );
  const { currentGroup, GroupConversation } = useSelector(
    (state) => state.UserReducer
  );
  const { UserId } = useSelector((state) => state.AuthReducer);
  const { Messages } = useSelector((state) => state.MessagesReducer);

  const scrollraf = useRef();

  useEffect(() => {
    scrollraf.current.scrollTop = scrollraf.current.scrollHeight;
  }, [Mainmessages]);

  const check = () => {
    scrollraf.current.scrollTop = scrollraf.current.scrollHeight;
  };

  return (
    <div className="Chate_main_box" ref={scrollraf} onLoad={check}>
      {currentGroup.GroupMessage.length === 0
        ? "No Data Avalible"
        : currentGroup.GroupMessage.map((item, i) => {
            return item.TypeOfMessage === ".jpg" ? (
              <Chatedipalyimage
                key={item._id}
                floting={item.SenderId !== UserId}
                userid={UserId}
                filejpg={`http://localhost:5000/Files/${item.Message_File}`}
                item={item}
              />
            ) : item.TypeOfMessage === "msg" ? (
              <ChateDisplayDimpletext
                key={item._id}
                item={item}
                userid={UserId}
                floting={item.SenderId !== UserId}
              />
            ) : item.TypeOfMessage === ".mp4" ? (
              <Chatedispalyvideo
                key={item._id}
                floting={item.SenderId !== UserId}
                userid={UserId}
                item={item}
                Video={`http://localhost:5000/Files/${item.Message_File}`}
              />
            ) : null;
          })}
    </div>
  );
}

export default ChatSeconMainBox;
