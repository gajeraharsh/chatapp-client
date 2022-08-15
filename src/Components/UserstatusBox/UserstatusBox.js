import React from 'react'
import "./UserstatusBox.css";
import profileimage from "../../assets/images/profileimage.jpg"
import { Typography } from '@material-ui/core';
function UserstatusBox() {
    return (
        <div className="userstatusBox_main_div">
                <img src={profileimage} className="statusImages" alt="some profile" />
                 <Typography className="box_status_typo" variant="body1">Harsh</Typography>
        </div>
    )
}

export default UserstatusBox
