import React from 'react'
import {CircularProgress,makeStyles} from "@material-ui/core"
const usestyle = makeStyles((theme) => ({
    loder:{
        width:"100%",
        height:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }
}))
function Loding() {
    const classes = usestyle()
    return (
        <div className={classes.loder}>
                <CircularProgress />
        </div>
    )
}

export default Loding;
