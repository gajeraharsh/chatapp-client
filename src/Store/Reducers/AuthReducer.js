import jwt_decode from "jwt-decode";
const initstate = {
  Authanticat: false,
  Auth_Loding: false,
  UserId: "",
  profileDetails: {},
  LoginErorr: "",
};

export const AuthReducer = (state = initstate, action) => {
  switch (action.type) {
    case "SET_LOGIN_ERROR":
      return { ...state, LoginErorr: action.paylod };
    case "SET_AUTH_LODING":
      return { ...state, Auth_Loding: true };
    case "CLOSE_AUTH_LODING":
      return { ...state, Auth_Loding: false };
    case "SET_PROFILE_DETAILS":
      return { ...state, profileDetails: action.paylod };
    case "SET_ID":
      return { ...state, UserId: action.paylod };
    case "CHEK_AUTH_TOKEN":
      const token = localStorage.getItem("token");
      if (token) {
        const decodetoken = jwt_decode(token);
        const exp = new Date(decodetoken.exp * 1000);
        console.log(exp);
        if (new Date() > exp) {
          localStorage.removeItem("token");
          console.log("falie");

          return { ...state, Authanticat: false };
        }
        return { ...state, Authanticat: true, UserId: decodetoken._id };
      } else {
        return { ...state, Authanticat: false };
      }

    default:
      return state;
  }
};
