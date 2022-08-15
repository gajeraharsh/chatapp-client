import axios from "axios";
import { Config } from "./Helper";
export const ApiCreateConversation = (id, Userid) => async (dispatch) => {
  try {
    const config = Config();
    const res = await axios.post(
      "/api/conversation/Create",
      { reciverid: id, senderid: Userid },
      config
    );
    console.log(res.data);
  } catch (error) {
    console.log(error.response.data);
  }
};

export const ApiGetConversation = (id) => async (dispatch) => {
  const config = Config();
  dispatch({ type: "SET_CONVERSATION_LODING" });
  try {
    const res = await axios.get(
      `/api/conversation/All_Conversaiton${id}`,
      config
    );

    // console.log(res.data)
    const pdata = res.data.data;
    const lastindex = pdata.length - 1;
    //   dispatch({type:"SET_CURRENT_CONVERSATION",paylod:pdata[lastindex]})
    dispatch({ type: "SET_MAINCONVERSATION", paylod: pdata });
    const arr = [];
    for (let i = 0; i < pdata.length; i++) {
      const fitlerdata = pdata[i].Members.filter((item) => item !== id);
      arr.push(fitlerdata);
    }

    arr.forEach(async (item) => {
      const User = await axios.get(`/api/FetchOneUser${item[0]}`, config);
      dispatch({ type: "SET_CONVERSATION", paylod: User.data.data });
      //  console.log(User)
    });

    dispatch({ type: "CLOSE_CONVERSATION_LODING" });
  } catch (error) {
    dispatch({ type: "CLOSE_CONVERSATION_LODING" });
    console.log(error.response);
  }
};

export const GetMessages = (id) => async (dispatch) => {
  dispatch({ type: "SET_MESSAGES_LODING" });
  try {
    const config = Config();
    const res = await axios.get(`/api/conversation/getmessages${id}`, config);
    //  console.log(res.data.data)
    dispatch({ type: "SET_MESSAGES", paylod: res.data.data });
    dispatch({ type: "CLOSE_MESSAGES_LODING" });
  } catch (error) {
    console.log(error.response);
    dispatch({ type: "CLOSE_MESSAGES_LODING" });
  }
};

export const removeconversation = (id, UserId) => async (dispatch) => {
  try {
    const res = await axios.get(
      `/api/conversation/removeconversation${id}`,
      Config()
    );
    const User = await axios.get(`/api/FetchOneUser${id}`, Config());
    window.location.reload();
    console.log(res.data);
  } catch (error) {
    console.log(error.response);
  }
};
