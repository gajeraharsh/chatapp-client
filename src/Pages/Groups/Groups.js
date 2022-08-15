import React, { useEffect, useRef, useState } from "react";
import "./Gropups.css";
import Search from "../../Helpercomponets/Search/Search";
import GrupBox from "../../Components/GrupsBox/GroupsBox";
import Nav from "../../Helpercomponets/NavLeftside/NavLeftside";
import CloseIcon from "@material-ui/icons/Close";
import {
  Creategroup,
  fetchgroups,
  groupstoadd,
} from "../../Store/Actions/User";
import { useSelector, useDispatch } from "react-redux";
import { io } from "socket.io-client";
function Groups(props) {
  const dispatch = useDispatch();
  const [active, setactive] = useState(true);
  const [chackedarray, setchackedarray] = useState([]);
  const [groupname, setgroupname] = useState("");
  const [search, setsearch] = useState("");
  const [searchadd, setsearchadd] = useState("");
  const handleactive = () => setactive(!active);

  const { GroupsToadd, Groups } = useSelector((state) => state.UserReducer);
  const { UserId, profileDetails } = useSelector((state) => state.AuthReducer);
  const socket = useRef();
  const handlesearch = (e) => {
    setsearch(e.target.value);
  };
  const Handlechack = (id) => {
    if (chackedarray.includes(id)) {
      if (id !== UserId) {
        const fiterdata = chackedarray.filter((item) => item != id);
        setchackedarray(fiterdata);
      }
    } else {
      setchackedarray([...chackedarray, id]);
    }
  };
  const handlesubmit = () => {
    dispatch(Creategroup({ groupName: groupname, gropMembers: chackedarray }));
    setactive(true);
  };
  useEffect(() => {
    socket.current = io("http://localhost:5000/");
  }, [socket]);

  useEffect(() => {
    dispatch(groupstoadd());
  }, [dispatch, GroupsToadd]);
  useEffect(() => {
    // console.log(chackedarray);
  }, [chackedarray]);
  useEffect(() => {
    setchackedarray([...chackedarray, UserId]);
  }, []);
  useEffect(() => {
    dispatch(fetchgroups());
  }, [dispatch]);
  return (
    <div className="Groups_main_container">
      <Nav title={props.location.pathname} />
      <Search handlesearch={handlesearch} value={search} />

      <div className="CreateGroup">
        <button className="Newgroup" onClick={handleactive}>
          New group
        </button>
      </div>
      <div className="Grups_contect_main_div">
        {Groups.filter((item) => {
          if (search == "") {
            return item;
          } else if (
            item.groupName.toLowerCase().includes(search.toLowerCase())
          ) {
            return item;
          }
        }).map((item, index) => {
          return <GrupBox item={item} key={index} Name={item.groupName} />;
        })}
      </div>

      <div
        className={
          active ? "GroupaddAbsolute" : "GroupaddAbsolute activestatus"
        }
      >
        <div className="closegroupabsolute">
          <CloseIcon className="closeicon" onClick={handleactive} />
        </div>

        <input
          type="text"
          className="Groupname"
          placeholder="Enter your groupNamne"
          value={groupname}
          onChange={(e) => setgroupname(e.target.value)}
        ></input>
        <input
          type="text"
          className="Groupname"
          placeholder="Enter Email to search"
          value={searchadd}
          onChange={(e) => setsearchadd(e.target.value)}
        ></input>

        <div className="groupcontaineradd">
          {GroupsToadd.filter((item) => {
            if (searchadd == "") {
              return item;
            } else if (item.Email.includes(searchadd)) {
              return item;
            }
          }).map((item, index) => {
            return (
              <div className="UsergroupBox" key={index}>
                <h1>{item.UserName}</h1>
                <input
                  type="checkbox"
                  defaultChecked={
                    chackedarray.includes(item._id) ? true : false
                  }
                  onChange={() => Handlechack(item._id)}
                  className="groupcheck"
                ></input>
              </div>
            );
          })}
        </div>
        <button className="groupaddbtn" onClick={handlesubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Groups;
