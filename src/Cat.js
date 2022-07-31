import React from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Cat(){
    return(
        <div>
            <TextField fullWidth  id="outlined-search" label="Search Articles" type="search" />
        </div>
    )
}