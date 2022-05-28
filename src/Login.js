import React from "react";
import './Admin.css';
import { Divider, TextField,Button } from "@mui/material";
import {Link} from "react-router-dom";

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import PersonIcon from '@mui/icons-material/PersonAdd';
const Login=()=>
{
  return(
   <div>
       <div className="icon">
           <div className="icon_class">
           <PersonIcon fontSize="large"/>
           </div>
           <div className="text">Log in
               </div>
          
           <div className="row m-2">
           <TextField id="email" className="p-2" type="text" variant="outlined" label="Enter your email" fullWidth/>  
           <TextField id="Password"  className="p-2" type="text" variant="outlined" label="Enter password" fullWidth/> 
           <FormControlLabel control={<Checkbox icon={<CheckBoxOutlineBlankIcon fontSize="small"/>} checkedIcon={<CheckBoxIcon fontSize="small"/>} name="checkedI"/>}
           label="Remember me"/>
           <Button variant="contained" color="primary">Create Account</Button>
           </div>
           <Divider variant="middle"/>
           <p className="text-center">
               <Link to="/Signup" className="text-black-50">
                   Create account
               </Link>
           </p>
       </div>
   </div>
  )  
}
export default Login;