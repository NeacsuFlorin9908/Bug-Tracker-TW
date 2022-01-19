import React from "react";
import "./bugCard.css";
import PriorityController from '../../Controllers/priorityController';


export default (props)=>{
    const {name,priority,link} = props.bug;
    const {level,color} = PriorityController(priority);
    function Clicked(){
        props.clicked(name);
    }
    return(
       <div className="bug-card" onClick={Clicked} style={{color:color}}>
           <h2 className="name">{name}</h2>
           <h4 className="priority">{level}</h4>
           <h5 className="link">{link}</h5>
       </div> 
    )
}  