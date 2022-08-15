import React, { useEffect, useState } from "react";
import "./Chate_dispaly.css";
import profilimage from "../../assets/images/profileimage.jpg";
import DescriptionIcon from "@material-ui/icons/Description";
import GetAppIcon from "@material-ui/icons/GetApp";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useDispatch, useSelector } from "react-redux";
import { FetchOneUser } from "../../Store/Actions/User";
import ProfileDefaulImage from "../../assets/images/profileDefault.jpg";
export const ChateDisplayDimpletext = (props) => {
  const { floting, item, userid, User } = props;
  const dispatch = useDispatch();
  const [senderName, setsenderName] = useState("");
  const [reciverName, setReciverName] = useState("");
  const [date, setdate] = useState("");
  const [senderitem, setsenderitem] = useState();
  const [reciveritem, setreciveritem] = useState();
  const { currentGroup, GroupConversation } = useSelector(
    (state) => state.UserReducer
  );
  useEffect(async () => {
    const sender = await dispatch(FetchOneUser(item.SendrId));
    const Reciver = await dispatch(FetchOneUser(item.ReciverId));

    console.log(item, sender);
    console.log("DF");
    setsenderName(sender.UserName);
    setReciverName(Reciver.UserName);
    setsenderitem(sender);
    setreciveritem(Reciver);
    console.log("sender id", sender, item.Message_Text);
    // console.log("reciver id", Reciver.UserName, item.Message_Text);

    const date = new Date(item.createdAt).getMinutes();
    const currentdate = new Date().getMinutes();
    //  setdate(currentdate - date);

    const hours = new Date(item.createdAt).getHours();
    const minuite = new Date(item.createdAt).getMinutes();

    const pmam = hours > 12 ? "pm" : "Am";
    const hourtime = hours > 12 ? hours - 12 : hours;
    setdate(`${hourtime}:${minuite}:${pmam}`);
  }, [dispatch]);
  return (
    <div
      className={
        floting
          ? "manage_chate_display_flot"
          : "manage_chate_display_flot manage_chate_display_right"
      }
    >
      <div
        className={
          floting
            ? "chate_display_simpletext"
            : "chate_display_simpletext_reverse"
        }
      >
        <div className="chate_dispaly_leftdide">
          <img
            className="chate_dispalu_proifle_image"
            src={
              senderitem == undefined
                ? "some text"
                : item.SendrId === userid
                ? !senderitem.Profile_Image
                  ? ProfileDefaulImage
                  : `http://localhost:5000/Images/${senderitem.Profile_Image}`
                : item.SendrId != userid && !senderitem.Profile_Image
                ? ProfileDefaulImage
                : `http://localhost:5000/Images/${senderitem.Profile_Image}`
            }
            alt="profile user"
          />
        </div>
        <div className="chate_display_rigthside">
          <div
            className={
              floting
                ? "chate_dispaly_div"
                : "chate_dispaly_div chate_dispaly_div_flexend"
            }
          >
            <p className="chate_dispaly_text">{item.Message_Text}</p>
            <p className="time_chate_inputs">{date}</p>
          </div>
          <div className="chate_dispplay_usernaem">
            <p className="chate_dispaly_usernaem">
              {item.SendrId === userid && senderName}
              {item.SendrId != userid && senderName}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Chatedipalyimage = (props) => {
  const { floting, filejpg, item, userid } = props;
  const dispatch = useDispatch();
  const [senderName, setsenderName] = useState("");
  const [reciverName, setReciverName] = useState("");
  const [senderitem, setsenderitem] = useState();
  const [reciveritem, setreciveritem] = useState();
  const [date, setdate] = useState("");

  useEffect(async () => {
    //   console.log(item);
    const sender = await dispatch(FetchOneUser(item.SendrId));
    const Reciver = await dispatch(FetchOneUser(item.ReciverId));

    setsenderName(sender.UserName);
    setReciverName(Reciver.UserName);
    setsenderitem(sender);
    setreciveritem(Reciver);

    const date = new Date(item.createdAt).getMinutes();
    const currentdate = new Date().getMinutes();
    //setdate(currentdate - date);
    const hours = new Date(item.createdAt).getHours();
    const minuite = new Date(item.createdAt).getMinutes();
    const hourtime = hours > 12 ? hours - 12 : hours;
    const pmam = hours > 12 ? "pm" : "Am";
    setdate(`${hourtime}:${minuite}:${pmam}`);
  }, []);

  return (
    <div
      className={
        floting
          ? "manage_chate_display_flot"
          : "manage_chate_display_flot manage_chate_display_right"
      }
    >
      <div
        className={
          floting
            ? "chate_display_simpletext"
            : "chate_display_simpletext_reverse"
        }
      >
        <div className="chate_dispaly_leftdide">
          <img
            className="chate_dispalu_proifle_image"
            src={
              senderitem == undefined
                ? "some text"
                : item.SendrId === userid
                ? !senderitem.Profile_Image
                  ? ProfileDefaulImage
                  : `http://localhost:5000/Images/${senderitem.Profile_Image}`
                : item.SendrId != userid && !senderitem.Profile_Image
                ? ProfileDefaulImage
                : `http://localhost:5000/Images/${senderitem.Profile_Image}`
            }
            alt="profile user"
          />
        </div>
        <div className="chate_display_rigthside">
          <div
            className={
              floting
                ? "chate_dispaly_div"
                : "chate_dispaly_div chate_dispaly_div_flexend "
            }
          >
            <img className="file_image_displau" src={filejpg} alt="file jpg" />

            <p className="time_chate_inputs">{date}</p>
          </div>
          <div className="chate_dispplay_usernaem">
            <p className="chate_dispaly_usernaem">
              {" "}
              {item.SendrId === userid && senderName}
              {item.SendrId != userid && senderName}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Chatedispalyvideo = (props) => {
  const { floting, Video, item, userid } = props;
  const dispatch = useDispatch();
  const [senderName, setsenderName] = useState("");
  const [reciverName, setReciverName] = useState("");
  const [senderitem, setsenderitem] = useState();
  const [reciveritem, setreciveritem] = useState();
  const [date, setdate] = useState("");

  useEffect(async () => {
    const sender = await dispatch(FetchOneUser(item.SendrId));
    const Reciver = await dispatch(FetchOneUser(item.ReciverId));

    setsenderName(sender.UserName);
    setReciverName(Reciver.UserName);
    setsenderitem(sender);
    setreciveritem(Reciver);

    const date = new Date(item.createdAt).getMinutes();
    const currentdate = new Date().getMinutes();
    //   setdate(currentdate - date);
    const hours = new Date(item.createdAt).getHours();
    const minuite = new Date(item.createdAt).getMinutes();
    const hourtime = hours > 12 ? hours - 12 : hours;
    const pmam = hours > 12 ? "pm" : "Am";
    setdate(`${hourtime}:${minuite}:${pmam}`);
  }, []);
  return (
    <div
      className={
        floting
          ? "manage_chate_display_flot"
          : "manage_chate_display_flot manage_chate_display_right"
      }
    >
      <div
        className={
          floting
            ? "chate_display_simpletext"
            : "chate_display_simpletext_reverse"
        }
      >
        <div className="chate_dispaly_leftdide">
          <img
            className="chate_dispalu_proifle_image"
            src={
              senderitem == undefined
                ? "some text"
                : item.SendrId === userid
                ? !senderitem.Profile_Image
                  ? ProfileDefaulImage
                  : `http://localhost:5000/Images/${senderitem.Profile_Image}`
                : item.SendrId != userid && !senderitem.Profile_Image
                ? ProfileDefaulImage
                : `http://localhost:5000/Images/${senderitem.Profile_Image}`
            }
            alt="profile user"
          />
        </div>
        <div className="chate_display_rigthside">
          <div
            className={
              floting
                ? "chate_dispaly_div"
                : "chate_dispaly_div chate_dispaly_div_flexend"
            }
          >
            <a className="video_href" href={Video}>
              <video src={Video} controls className="Video_controll"></video>
            </a>
            <p className="time_chate_inputs">{date}</p>
          </div>
          <div className="chate_dispplay_usernaem">
            <p className="chate_dispaly_usernaem">
              {" "}
              {item.SendrId === userid && senderName}
              {item.SendrId != userid && senderName}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Chatedisplayoterh = (props) => {
  const { floting, File, item, userid } = props;
  const dispatch = useDispatch();
  const [senderName, setsenderName] = useState("");
  const [reciverName, setReciverName] = useState("");
  const [senderitem, setsenderitem] = useState();
  const [reciveritem, setreciveritem] = useState();
  const [date, setdate] = useState("");

  useEffect(async () => {
    const sender = await dispatch(FetchOneUser(item.SendrId));
    const Reciver = await dispatch(FetchOneUser(item.ReciverId));

    setsenderName(sender.UserName);
    setReciverName(Reciver.UserName);
    setsenderitem(sender);
    setreciveritem(Reciver);

    const date = new Date(item.createdAt).getMinutes();
    const currentdate = new Date().getMinutes();
    // setdate(currentdate - date);
    const hours = new Date(item.createdAt).getHours();
    const minuite = new Date(item.createdAt).getMinutes();
    const hourtime = hours > 12 ? hours - 12 : hours;
    const pmam = hours > 12 ? "pm" : "Am";
    setdate(`${hourtime}:${minuite}:${pmam}`);
  }, []);
  return (
    <div
      className={
        floting
          ? "manage_chate_display_flot"
          : "manage_chate_display_flot manage_chate_display_right"
      }
    >
      <div
        className={
          floting
            ? "chate_display_simpletext"
            : "chate_display_simpletext_reverse"
        }
      >
        <div className="chate_dispaly_leftdide">
          <img
            className="chate_dispalu_proifle_image"
            src={
              senderitem == undefined
                ? "some text"
                : item.SendrId === userid
                ? !senderitem.Profile_Image
                  ? ProfileDefaulImage
                  : `http://localhost:5000/Images/${senderitem.Profile_Image}`
                : item.SendrId != userid && !senderitem.Profile_Image
                ? ProfileDefaulImage
                : `http://localhost:5000/Images/${senderitem.Profile_Image}`
            }
            alt="profile user"
          />
        </div>
        <div className="chate_display_rigthside">
          <div
            className={
              floting
                ? "chate_dispaly_div chat-color"
                : "chate_dispaly_div chate_dispaly_div_flexend chat-color"
            }
          >
            <p className="file_Tex_Heading">Files</p>
            <div className="Chat_Files_Sahring_Div">
              <div className="div_Files_main">
                <div className="file_icon_Div">
                  <DescriptionIcon style={{ color: "#7269ef" }} />
                </div>
                <div className="file_title">
                  <h3>{item.Message_File}</h3>
                  <p>12.5 MB</p>
                </div>

                <div className="file_More_Icons">
                  <a
                    href={`http://localhost:5000/Files/${File}`}
                    className="dowunlod_file_file"
                    download="GFG"
                  >
                    <GetAppIcon />
                  </a>
                  <MoreHorizIcon style={{ color: "black" }} />
                </div>
              </div>
            </div>
            <p className="date_file">{date}</p>
          </div>
          <div className="chate_dispplay_usernaem">
            <p className="chate_dispaly_usernaem">
              {" "}
              {item.SendrId === userid && senderName}
              {item.SendrId != userid && senderName}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
