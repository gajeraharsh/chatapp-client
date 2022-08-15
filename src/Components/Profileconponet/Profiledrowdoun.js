import React from "react";
import "./Profiledrowdown.css";
function Profiledrowdoun({ title, value, ontextchange }) {
  return (
    <div className="profile_drowdow_box">
      <input
        type="text"
        className="profile_dropdown_Heading_Text"
        onChange={ontextchange}
        value={value}
        placeholder={title}
      />
    </div>
  );
}

export default Profiledrowdoun;
