import React from 'react'
import "./Leftsidecontainer.css"
import Chate from "../../Pages/Chate/Chate";
import { Route, Switch } from "react-router-dom";
import Profile from "../../Pages/Profile/Profile"
import Groups from "../../Pages/Groups/Groups"
import Contect from "../../Pages/Contect/Contect"


function Leftsidecontaienr() {
   
    return (
        <div className="Left_side_contaienr">
            <Switch>
                <Route exact path="/" component={Chate} />
                <Route exace path="/profile" component={Profile} />
                <Route exact path="/Groups" component={Groups} />
                <Route exact path="/Contect" component={Contect} />
            </Switch>
        </div>  
    )
}

export default Leftsidecontaienr
