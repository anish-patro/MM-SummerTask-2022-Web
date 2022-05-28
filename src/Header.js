import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import logo from "./article_logo.png";
import {Link} from "react-router-dom";
import "./Header.css";
import "./Articles.css";
import "./Admin.css";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import FaceIcon from "@mui/icons-material/Face";
import {TextField} from '@mui/material';


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
        <Tab value="two" label="Article" icon={<ArticleIcon/>} component={Link} to="/Articles"/>
        <Tab value="three" label="Admin" icon={<FaceIcon/>} component={Link} to="/Admin"/>        
      </Tabs>      
    </Box>
    <TextField
    sx={{marginLeft:"auto"}}
    id="standard-basic"
    className="SearchBox"
    label="Search..."
    variant="standard"
  />
  </>
  );
}
