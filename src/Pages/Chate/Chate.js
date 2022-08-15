import React, { useEffect } from "react";
import Userbox from "../../Components/Usersbox/Userbox";
import UserstatusBox from "../../Components/UserstatusBox/UserstatusBox";
import Serach from "../../Helpercomponets/Search/Search";
import Nav from "../../Helpercomponets/NavLeftside/NavLeftside";
import { useDispatch, useSelector } from "react-redux";
import { ApiGetConversation } from "../../Store/Actions/Conversation";
import Loding from "../../Helpercomponets/Loding/Loding";
import "./Chate.css";

function Chate(props) {
  const { UserId } = useSelector((state) => state.AuthReducer);
  const {
    Conversations,
    ConversationLoding,
    MainConversation,
    CurrentConversation,
  } = useSelector((state) => state.ConversationReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ApiGetConversation(UserId));
  }, [dispatch, UserId]);

  // GEt Corrent Conversaiton

  const HandleCurentConversation = (id) => {
    const i = MainConversation.find((item) => {
      return item.Members.includes(UserId) && item.Members.includes(id);
    });
    dispatch({ type: "SET_CURRENT_CONVERSATION", paylod: i });
  };

  return (
    <>
      {ConversationLoding ? (
        <Loding />
      ) : (
        <>
          <Nav title={props.location.pathname} />

          <div id="sccroll" className="leftsidecontainer_users_main_box">
            {Conversations.map((item, index) => {
              return (
                <Userbox
                  key={index}
                  item={item}
                  HandleCurentConversation={HandleCurentConversation}
                />
              );
            })}
          </div>
        </>
      )}
    </>
  );
}

export default Chate;
