import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import logo from "./article_logo.png";
import {Link} from "react-router-dom";
import "./Header.css";
import './App.css';
import HomeIcon from "@mui/icons-material/Home";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ArticleIcon from '@mui/icons-material/Article';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export default function ColorTabs() {
  const [value, setValue] = React.useState('one');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (  
    <> 
    <Box sx={{  background:' rgb(160, 190, 190)' }}>      
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <img src={logo} className="logo" alt="logo" />
        <Tab sx={{marginLeft:"5%"}} value="one" label="Home" icon={<HomeIcon/>}  component={Link} to="/Home" /> 
        <Tab  value="two" label="Article" icon={< ArticleIcon/>}  component={Link} to="/Article" />  
        <Tab  value="three" label="Admin" icon={< AdminPanelSettingsIcon/>}  component={Link} to="/Admin" />     
        <Tab sx={{marginLeft:"50%"}} value="four" label="Login" icon={<PersonIcon/>} component={Link} to="/Login"/>
        <Tab value="five" label="Signup" icon={<PersonAddIcon/>}  component={Link} to="/Signup" />       
      </Tabs>      
    </Box>
    
  </>
  );
}
