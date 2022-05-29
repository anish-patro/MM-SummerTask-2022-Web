import React from "react";

import { Divider, TextField,Button } from "@mui/material";
import {Link} from "react-router-dom";
import './App.css';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import PersonIcon from '@mui/icons-material/Person';

const Login=()=>
{
  return(
      <>
   <div className="Loginpage">
       <div className="icon">
           <div className="icon_class">
           <PersonIcon fontSize="large"/>
           </div>
           <div className="text">Log in
               </div>
          
           <div className="row m-2">
           <div className="Email"><TextField id="email" className="email" type="text" variant="outlined" label="Enter your email" fullWidth/> </div> 
           <div className="Password"><TextField id="Password"  className="password" type="password" variant="outlined" label="Enter password" fullWidth/> </div>
           <FormControlLabel control={<Checkbox icon={<CheckBoxOutlineBlankIcon fontSize="small"/>} checkedIcon={<CheckBoxIcon fontSize="small"/>} name="checkedI"/>}
           label="Remember me"/>
           <div className="LoginButton"><Button className="createacc" variant="contained" color="primary">Log in</Button></div>
           </div>
           <Divider variant="middle"/>
           <p className="text-center">
                Don't have an account? 
               <Link to="/Signup" className="text-black-50">
                     Create account
               </Link>

           </p>
       </div>
   </div></>
  )  
}
export default Login;