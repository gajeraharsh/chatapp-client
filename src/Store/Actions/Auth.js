import axios from "axios";
import { Config } from "./Helper";
export const Api_signup = (data) => async (dispatch) => {
  dispatch({ type: "SET_AUTH_LODING" });
  try {
    const res = await axios.post("/api/auth/signup", data);
    console.log(res.data);
    localStorage.setItem("token", res.data.Token);
    dispatch({ type: "CLOSE_AUTH_LODING" });
    dispatch({ type: "CHEK_AUTH_TOKEN" });
    dispatch({ type: "SET_ID", paylod: res.data.data._id });
  } catch (error) {
    dispatch({ type: "CLOSE_AUTH_LODING" });
    console.log(error.response);
    dispatch({ type: "SET_LOGIN_ERROR", paylod: error.response.data.msg });
  }
};

export const Api_signin = (data) => async (dispatch) => {
  dispatch({ type: "SET_AUTH_LODING" });
  try {
    const res = await axios.post("/api/auth/signin", data);
    localStorage.setItem("token", res.data.Token);
    dispatch({ type: "CLOSE_AUTH_LODING" });
    dispatch({ type: "SET_PROFILE_DETAILS", paylod: res.data.data });
    dispatch({ type: "CHEK_AUTH_TOKEN" });
    dispatch({ type: "SET_ID", paylod: res.data.data._id });
  } catch (error) {
    dispatch({ type: "CLOSE_AUTH_LODING" });
    console.log(error.response);
    dispatch({ type: "SET_LOGIN_ERROR", paylod: error.response.data.msg });
  }
};
