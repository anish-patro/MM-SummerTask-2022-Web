
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Link} from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
function Admin()
{
    return(       
         <><div className="form"><div className="signup" >
             <Signup/></div>
             <div className="login">
        <Login/>
        </div>
        </div>
      </>
    )
}
export default Admin;