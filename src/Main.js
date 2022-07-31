import React from "react"
import NewsTemp from "./NewsTemp"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Top from "./Top";
// import "../Styles/Main.css";
import data from "./data.js"
import Cat from "./Cat.js"


export default function Main(){
    const lcards= data.map((item)=>{
        return (
            <NewsTemp
                item={item}
            />
        )
    })
    const lcards2= data.map((item)=>{
        return (
            <Top
                item={item}
            />
        )
    })
    return(
        <main>
            <div className="left">
                <h3>Trending</h3>
                {lcards2}

            </div>
            <div className="middle">
                <h3>Breaking News</h3>
                {lcards}
            </div>
            <div className="right">
                <Cat/>
            </div>
        </main>
    )
}