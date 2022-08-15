import React, { useEffect, useState } from "react";
import "./Profile.css";
import Profileimage from "../../assets/images/mypostimg.jpg";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import Profiledropdown from "../../Components/Profileconponet/Profiledrowdoun";
import Nav from "../../Helpercomponets/NavLeftside/NavLeftside";
import ProfileDefaulImage from "../../assets/images/profileDefault.jpg";
import AttachmentIcon from "@material-ui/icons/Attachment";
import { IconButton, Tooltip } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch, useSelector } from "react-redux";
import {
  changeProfile,
  getcurrentuser,
  updateprofile,
} from "../../Store/Actions/User";

function Profile(props) {
  const dispatch = useDispatch();
  const [dropdowna, setdropdwona] = useState(false);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const { UserId, profileDetails } = useSelector((state) => state.AuthReducer);
  const [profie, setprofile] = useState();
  const handleprofileuplode = (e) => {
    const formdata = new FormData();
    formdata.append("profileImage", e.target.files[0]);
    formdata.append("id", UserId);
    dispatch(changeProfile(formdata));
  };
  const handleupdateprofile = () => {
    const data = {
      UserName: Name,
      Email: Email,
    };
    dispatch(updateprofile(profileDetails._id, data));
  };
  const ontextchange = (e) => {
    setName(e.target.value);
  };
  const onvaluechange = (e) => {
    setEmail(e.target.value);
  };
  useEffect(() => {
    dispatch(getcurrentuser());
  }, [dispatch]);
  useEffect(() => {
    setprofile(profileDetails);
    setName(profileDetails.UserName);
    setEmail(profileDetails.Email);
  }, [profileDetails]);
  return (
    <div className="Profile_container">
      <Nav title={props.location.pathname} />
      <div className="profile_top_contaienr">
        <div className="profile_image_div_profiole">
          <img
            className="image_profile_page"
            src={
              !profileDetails.Profile_Image
                ? ProfileDefaulImage
                : `http://localhost:5000/Images/${profileDetails.Profile_Image}`
            }
            alt="profile "
          />
          <div className="uplodeIcon_div">
            <input
              type="file"
              name="Profile_Image"
              onChange={handleprofileuplode}
              className="profile_image_uplode"
              id="profile_Image"
            />
            <Tooltip title="Uplode Image" arrow>
              <IconButton
                className="profile_uplode_lable"
                arial-lable="Uplode"
                color="primary"
              >
                <label htmlFor="profile_Image">
                  <AddIcon className="profile_publish_icon" />
                </label>
              </IconButton>
            </Tooltip>
          </div>
        </div>

        <div className="profile_top_text">
          <p className="name_profile">{profileDetails.UserName}</p>
          <p className="online_profile">Email : {profileDetails.Email}</p>
        </div>
        <div className="prfoile_desctiption_div">
          <p className="profile_dextoptio_text">
            If several languages coalesce, the grammar of the resulting language
            is more simple and regular than that of the individual.
          </p>
        </div>
      </div>

      <div className="Profile_About_section">
        <div className="profile_about_icon">
          <PersonOutlineIcon />
        </div>
        <div className="profile_about_text">
          <p className="profile_about_text_text">Update Profile</p>
        </div>
        <div className="profile_about_rightside_icon">
          <ArrowDropDownIcon
            onClick={() => setdropdwona((prev) => !prev)}
            className="profile_arrow_icon"
          />
        </div>
      </div>
      <div
        className={
          dropdowna
            ? "profile_abouit_fropdown_contaienr profile_about_dropdown_contaienr_active"
            : "profile_abouit_fropdown_contaienr"
        }
      >
        <Profiledropdown
          title="Name"
          ontextchange={ontextchange}
          value={Name}
        />
        <Profiledropdown
          title="Email"
          ontextchange={onvaluechange}
          value={Email}
        />

        <input
          type="submit"
          className="submitbuttontoupdate"
          value={"submit"}
          onClick={handleupdateprofile}
        />
      </div>
    </div>
  );
}

export default Profile;
