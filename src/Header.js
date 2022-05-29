import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import logo from "./article_logo.png";
import {Link} from "react-router-dom";
import "./Header.css";
import './App.css';
import HomeIcon from "@mui/icons-material/Home";

import PersonIcon from '@mui/icons-material/Person';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export default function ColorTabs() {
  const [value, setValue] = React.useState('one');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (  
    <> 
    <Box sx={{  background:'yellow' }}>      
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <img src={logo} className="logo" alt="logo" />
        <Tab value="one" label="Home" icon={<HomeIcon/>}  component={Link} to="/Home" />        
        <Tab sx={{marginLeft:"auto"}} value="three" label="Login" icon={<PersonIcon/>} component={Link} to="/Login"/>
        <Tab value="four" label="Signup" icon={<PersonAddIcon/>}  component={Link} to="/Signup" />       
      </Tabs>      
    </Box>
    
  </>
  );
}
