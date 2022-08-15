import React, { useEffect, useState } from "react";
import "./NavLeftside.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MenuIcon from "@material-ui/icons/Menu";
function NavLeftside({ title }) {
  const [navtitle, setnavtitle] = useState("");
  useEffect(() => {
    if (title === "/") setnavtitle("Chate");
    else if (title === "/profile") setnavtitle("Profile");
    else if (title === "/Groups") setnavtitle("Groups");
    else if (title === "/Contect") setnavtitle("Contect");
  }, [title]);
  return (
    <nav className="nav_leftside_maiun_contaienr">
      <h2 className="logoimage">{navtitle}</h2>
    </nav>
  );
}

export default NavLeftside;
