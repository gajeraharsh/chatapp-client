import React, { useEffect, useState } from "react";
import "./Contect.css";
import Search from "../../Helpercomponets/Search/Search";
import Nav from "../../Helpercomponets/NavLeftside/NavLeftside";
import ContectBox from "../../Components/ContectBox/ContectBox";
import { useDispatch, useSelector } from "react-redux";
import { FetchAllContect, AddtoSearch } from "../../Store/Actions/User";
function Contect(props) {
  const [search, setsearch] = useState("");
  const dispatch = useDispatch();
  const { Contects } = useSelector((state) => state.UserReducer);

  const handlesearch = (e) => {
    setsearch(e.target.value);
    //  dispatch(AddtoSearch(Contects, search));
  };
  useEffect(() => {
    dispatch(FetchAllContect());
    console.log(Contects);
  }, [dispatch]);
  useEffect(() => {}, [search]);

  return (
    <div className="Contect_Main_Container">
      <Nav title={props.location.pathname} />
      <Search handlesearch={handlesearch} value={search} />
      <div className="Contect_Bottome_Container">
        {Contects.filter((item) => {
          if (search == "") {
            return item;
          } else if (item.Email.includes(search)) {
            return item;
          }
        }).map((item) => {
          return <ContectBox key={item._id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Contect;
