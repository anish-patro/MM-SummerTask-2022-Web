import React from "react";
import './Admin.css';
import { Divider, TextField,Button, Checkbox } from "@mui/material";
import {Link} from "react-router-dom";
import FormControlLabel from '@mui/material/FormControlLabel';

import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { CheckBox } from "@mui/icons-material";
const Signup=()=>
{
  return(
   <div>
       <div className="icon">
           <div className="icon_class">
               <PersonAddIcon fontSize="large"/>
           </div>
           <div className="text">Sign Up
               </div>
           <div className="row m-2">
               <div className="col-6 p-2">
                   <TextField id="firstname" type="text" variant="outlined" label="Enter first name" fullWidth/>
               </div>
               <div className="col-6 p-2">
               <TextField id="lastname" type="text" variant="outlined" label="Enter last name" fullWidth/>
               </div>
           </div>
           <div className="row m-2">
           <TextField id="email" className="p-2" type="text" variant="outlined" label="Enter your email" fullWidth/>  
           <TextField id="Password" className="p-2"  type="text" variant="outlined" label="Enter password" fullWidth/> 
           <FormControlLabel control={<Checkbox icon={<CheckBoxOutlineBlankIcon fontSize="small" />} checkedIcon={<CheckBoxIcon fontSize="small"/>} name="checkedI" />}label="I agree to all terms and conditions."/>
           <Button variant="contained" color="primary">Create Account</Button>
           </div>
           <Divider variant="middle"/>
           <p className="text-center">
               <Link to="/login" className="text-black-50">
                  <h5> Already have an Account?</h5>
               </Link>
           </p>
       </div>
   </div>
  )  
}
export default Signup;