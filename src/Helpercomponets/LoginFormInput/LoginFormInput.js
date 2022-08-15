import React from 'react'
import "./LoginFormInput.css";
import {  InputAdornment, TextField, makeStyles } from "@material-ui/core"

const usestyle = makeStyles((theme) => ({
    inputwidth:{
        width:350
    }
}))
function LoginFormInput({type,lable,Icon,name,onChange,value}) {
    const classes = usestyle();
    
    return (
        <div className="input_group">
        <TextField
         
            label={lable}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            variant="outlined"
            className={classes.inputwidth}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <Icon />
                    </InputAdornment>
                )
            }}
        />
    </div>
    )
}

export default LoginFormInput
