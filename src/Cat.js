import React from "react"

import TextField from '@mui/material/TextField';

export default function Cat(){
    return(
        <div>
            <TextField fullWidth  id="outlined-search" label="Search Articles" type="search" />
        </div>
    )
}