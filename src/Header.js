import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import logo from "./article_logo.png";
import {Link} from "react-router-dom";
import "./Header.css";

import "./Admin.css";
import HomeIcon from "@mui/icons-material/Home";

import FaceIcon from "@mui/icons-material/Face";



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
        <Tab sx={{marginLeft:"auto"}} value="two" label="Admin" icon={<FaceIcon/>} component={Link} to="/Admin"/>        
      </Tabs>      
    </Box>
    
  </>
  );
}
