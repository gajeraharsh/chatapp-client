import React, { useEffect, useState } from "react";
import "./App.css";
import Leftsidecontaienr from "./Layout/Leftside/Leftsidecontaienr";
import Rigthsideontainer from "./Layout/Rigthside/Rigthsidecontainer";
import Middlecontaienr from "./Layout/middle/middlecontainer";
import GroupContainer from "./Layout/GroupContainer/GroupContainer";
import Auth from "./Pages/Auth/Auth";
import { useSelector, useDispatch } from "react-redux";
import DefalultRigthcontainer from "./Layout/DefaultRigncontainer/DefalultRigthcontainer";
function App() {
  const dispatch = useDispatch();
  const { Authanticat } = useSelector((state) => state.AuthReducer);
  const { currentGroup, GroupConversation, GroupsActive } = useSelector(
    (state) => state.UserReducer
  );
  const { CurrentConversation } = useSelector(
    (state) => state.ConversationReducer
  );
  const [conversatin, setconversation] = useState(null);

  useEffect(() => {
    dispatch({ type: "CHEK_AUTH_TOKEN" });
  }, [dispatch]);
  useEffect(() => {
    setconversation(CurrentConversation);
    console.log(CurrentConversation);
  }, [CurrentConversation]);
  //comment
  return (
    <>
      {Authanticat ? (
        <div className="main_chat_app_contaienr">
          <Middlecontaienr />
          <Leftsidecontaienr />
          {Object.entries(conversatin).length === 0 &&
          Object.entries(currentGroup).length === 0 ? (
            <DefalultRigthcontainer />
          ) : GroupsActive ? (
            <GroupContainer />
          ) : (
            <Rigthsideontainer />
          )}
        </div>
      ) : (
        <Auth />
      )}
    </>
  );
}

export default App;
