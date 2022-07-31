import React from "react";
import { useState, useEffect, useHistory } from "react";

import { Divider, TextField, Button, Checkbox } from "@mui/material";
import { Link } from "react-router-dom";
import FormControlLabel from "@mui/material/FormControlLabel";

import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import "./App.css";
const Signup = () => {
  //    const history = useHistory();
  //    const [fname,setFname]= useState("");
  //    const [lname,setLname]= useState("");
  //    const [email,setEmail]= useState("");

  return (
    <div className="Signup">
      <div className="icon">
        <div className="icon_class">
          <PersonAddIcon fontSize="large" />
        </div>
        <div className="text">Sign Up</div>
        <div className="name">
          <div className="Firstname">
            <TextField
              id="firstname"
              type="text"
              variant="outlined"
              placeholder="Enter first name"
              // value={fname} onChange={(e)=>setFname(e.target.value)}
              fullWidth
            />
          </div>
          <div className="Lastname">
            <TextField
              id="lastname"
              type="text"
              variant="outlined"
              placeholder="Enter last name"
              // value={lname} onChange={(e)=>setLname(e.target.value)}
              fullWidth
            />
          </div>

          <div className="Login_credentials">
            <div className="SignupEmail">
              <TextField
                id="email"
                className="p-2"
                type="text"
                variant="outlined"
                placeholder="Enter your email-id"
                //   value={email} onChange={(e)=>setEmail(e.target.value)}
                fullWidth
              />{" "}
            </div>
            <div className="SignupPassword">
              <TextField
                id="Password"
                className="p-2"
                type="password"
                variant="outlined"
                label="Enter password"
                fullWidth
              />{" "}
            </div>
          </div>
          <div className="Checkbox">
            <FormControlLabel
              control={
                <Checkbox
                  icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                  checkedIcon={<CheckBoxIcon fontSize="small" />}
                  name="checkedI"
                />
              }
              label="I agree to all terms and conditions."
            />
          </div>
          <div className="createbut">
            {" "}
            <Button variant="contained" color="primary">
              Create Account
            </Button>
          </div>
        </div>
        <Divider variant="middle" />
        <p className="text-center">
          <Link to="/login">
            <h5> Already have an Account?</h5>
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Signup;
