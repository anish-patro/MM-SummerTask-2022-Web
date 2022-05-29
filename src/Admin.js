
import React from "react";
import Button from '@mui/material/Button';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import TextField from '@mui/material/TextField';
import ListCom from "./ListCom";
import { useState } from "react";
 const Admin=()=>{
     const[item,setItem]=useState("");
     const[newitem,setNewItem]=useState([]);
     const itemEvent=(event)=>{
         setItem(event.target.value);
     };
     const listOfItems=()=>{
         setNewItem((prevValue)=>{
             return[...prevValue,item];
         });
         setItem("");
     };
   return(
   <>
    <div className="main_div">
      <div className="center_div">
          <br />
          <h1>Your Articles</h1> <br />
          <TextField id="standard-basic" placeholder="Add to your list" value={item} onChange={itemEvent} variant="standard" />
          <Button className="newBtn" onClick={listOfItems}>< AddCircleOutlineRoundedIcon/></Button>
          <br />
          <ol>
              {newitem.map((val,index)=>{
                  return <ListCom key={index} text={val}/>;
              })}

              </ol><br /></div>  
    </div>


   </>
   )
 }
 export default Admin;