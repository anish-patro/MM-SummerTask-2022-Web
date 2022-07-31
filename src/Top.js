import React from "react"


export default function Top(props){
    return(
        <a href="#" className="Top-container">
            <img className="Top-img" src={props.item.imageUrl} alt="img"/>
            
            <div className="Top-text"><h3>{props.item.title}</h3></div><br/>
            <img className="like" src="https://cdn-icons-png.flaticon.com/512/126/126473.png" alt="like"/>

            
        </a>
        


    )
}