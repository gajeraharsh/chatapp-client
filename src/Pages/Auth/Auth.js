import React, { useState } from "react";
import "./Auth.css";
import FormInput from "../../Helpercomponets/LoginFormInput/LoginFormInput";
import EmailOutlined from "@material-ui/icons/EmailOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { Api_signin, Api_signup } from "../../Store/Actions/Auth";
import Loginloder from "../../Helpercomponets/Loding/Loding";
const initstate = {
  UserName: "",
  Email: "",
  Password: "",
  Cpassword: "",
};
function Auth() {
  const [change, setchange] = useState(false);
  const [forminput, setforminput] = useState(initstate);
  const dispatch = useDispatch();
  const { Auth_Loding, LoginErorr } = useSelector((state) => state.AuthReducer);
  const handleChange = (e) => {
    setforminput({ ...forminput, [e.target.name]: e.target.value });
  };

  const signin = (e) => {
    e.preventDefault();
    dispatch(Api_signin(forminput));
    setforminput(initstate);
  };
  const signup = (e) => {
    e.preventDefault();
    dispatch(Api_signup(forminput));
    console.log(forminput);
    setforminput(initstate);
  };
  const handleAuth = () => {
    setchange((prev) => !prev);
    setforminput(initstate);
  };
  return (
    <div className="Auth_Main_container">
      {Auth_Loding ? (
        <Loginloder />
      ) : (
        <div className="Auth_sub_container">
          <div className="Auth_first_container">
            <h4 className="web_app_name_auth">Chate App</h4>

            <h3 className="web_app_page_heading">
              {change ? "Sign Up" : "Sign In"}
            </h3>
            <p className="web_app_page_heading_sub">
              Get a Chate App Account now.
            </p>
          </div>
          <div className="Auth_second_contaienr">
            <form className="form_tag_Auth" onSubmit={change ? signup : signin}>
              <p className="Login_Error">{LoginErorr && LoginErorr}</p>
              <div className="inputS_wraper">
                <FormInput
                  type="email"
                  lable="Email"
                  Icon={EmailOutlined}
                  name="Email"
                  value={forminput.Email}
                  onChange={handleChange}
                />
                {change && (
                  <FormInput
                    type="text"
                    lable="UserName"
                    Icon={PersonOutlineOutlinedIcon}
                    name="UserName"
                    value={forminput.UserName}
                    onChange={handleChange}
                  />
                )}
                <FormInput
                  type="password"
                  lable="Password"
                  Icon={LockOutlinedIcon}
                  name="Password"
                  value={forminput.Password}
                  onChange={handleChange}
                />
                {change && (
                  <FormInput
                    type="password"
                    lable="Conform Password"
                    Icon={LockOutlinedIcon}
                    name="Cpassword"
                    value={forminput.Cpassword}
                    onChange={handleChange}
                  />
                )}
              </div>

              <div className="Auth_inputs_buttome">
                <Button
                  fullWidth
                  variant="contained"
                  type="submit"
                  color="primary"
                >
                  {change ? "Sign Up" : "Sign In"}
                </Button>

                <p className="text_buttom">
                  {change
                    ? "Already have an account ?"
                    : "Don't have account ?"}{" "}
                  <span className="Link_auth" onClick={handleAuth}>
                    {change ? "Sign In" : "Sign Up"}
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Auth;
