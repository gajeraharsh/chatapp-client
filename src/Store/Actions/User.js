import { red } from "@material-ui/core/colors";
import axios from "axios";
import { Config } from "./Helper";
export const FetchAllContect = () => async (dispatch) => {
  dispatch({ type: "SET_CONTECT_LODING" });
  try {
    const config = await Config();
    const res = await axios.get(`/api/FetchUser:1`, config);
    dispatch({ type: "SET_CONTECTS", paylod: res.data.data });
    dispatch({ type: "CLOSE_CONTECT_LODING" });
  } catch (error) {
    console.log(error.response);
    dispatch({ type: "CLOSE_CONTECT_LODING" });
    if (error.response.data.Success === false) {
      window.location.reload();
    }
  }
};

export const FetchOneUser = (id) => async (dispatch) => {
  try {
    const config = await Config();

    const res = await axios.get(`/api/FetchOneUser${id}`, config);

    return res.data.data;
  } catch (error) {
    console.log(error.response);
  }
};

export const groupstoadd = () => async (dispatch) => {
  try {
    const config = await Config();
    const res = await axios.get(`/api/group/getuserstoaddgroup`, config);

    dispatch({ type: "SET_GROUPSTOADD", paylod: res.data.Users });
  } catch (error) {
    console.log(error.response);
  }
};

export const Creategroup = (data) => async (dispatch) => {
  try {
    const config = await Config();
    const res = await axios.post(`/api/group/Creategroup`, data, config);
    dispatch({ type: "ADD_GROUP", paylod: res.data.savedgroup });
  } catch (error) {
    console.log(error.response);
  }
};

export const fetchgroups = () => async (dispatch) => {
  try {
    const config = await Config();
    const res = await axios.get(`/api/group/getallgroups`, config);
    dispatch({ type: "SET_GROUPS", paylod: res.data.filterdata });
  } catch (error) {
    console.log(error.response);
  }
};

export const setCurrnetgropu = (fitergroup) => async (dispatch) => {
  dispatch({ type: "SET_CURRENTGROUP", paylod: fitergroup });
};

export const changeProfile = (formdata) => async (dispatch) => {
  try {
    const config = await Config();
    const res = await axios.post(`/api/UserProfileUplode`, formdata, config);
    console.log(res.data);
    dispatch({ type: "SET_PROFILE_DETAILS", paylod: res.data.data });
  } catch (error) {
    console.log(error.response);
  }
};

export const getcurrentuser = () => async (dispatch) => {
  const config = await Config();

  try {
    const res = await axios.get("/api/getcurrentuser", config);
    console.log(res.data);
    dispatch({ type: "SET_PROFILE_DETAILS", paylod: res.data.data });
  } catch (error) {
    console.log(error.response);
  }
};

//Search Action

export const AddtoSearch = (Contects, search) => async (dispatch) => {
  const filterdata = Contects.filter((item) => {
    if (search == "") {
      return item;
    } else if (item.UserName.toLowerCase().includes(search.toLowerCase())) {
      return item;
    }
  });
  console.log(filterdata);
  dispatch({ type: "SET_CONTECTS", paylod: filterdata });
};

// get group messages

export const getGroupConversation = (item) => async (dispatch) => {
  const config = await Config();
  try {
    const res = await axios.get(`/api/group/getGroupMessage${item}`, config);
    if (res) {
      //  console.log(res.data.data.GroupMessage);
      dispatch({
        type: "SET_GROUPCONVERSATION",
        paylod: res.data.data.GroupMessage,
      });
    }
  } catch (error) {
    console.log(error.response);
  }
};

// send message to group

export const SendMessageGroup = (data, cb) => async (dispatch) => {
  try {
    const res = await axios.post("/api/group/sendmessage", data, Config());
    dispatch({
      type: "ADDMESSAGE_CURRENGROUPCONVERSATION",
      paylod: res.data.data.GroupMessage,
    });
  } catch (error) {
    console.log(error.response);
  }
};

// set current click profile

export const blockuser = (id) => async (dispatch) => {
  try {
    console.log(id);
    const res = await axios.get(`/api/blockuser${id}`, Config());
    console.log(res.data);
  } catch (error) {
    console.log(error.response);
  }
};

export const leavegroup = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/group/leavegroup${id}`, Config());
    console.log(res.data);
    window.location.reload();
  } catch (error) {
    console.log(error.response);
  }
};

export const updateprofile = (id, data) => async (dispatch) => {
  try {
    const res = await axios.post(`/api/updateprofile${id}`, data, Config());
    dispatch({ type: "SET_PROFILE_DETAILS", paylod: res.data.data });
  } catch (error) {
    console.log(error.response);
  }
};
