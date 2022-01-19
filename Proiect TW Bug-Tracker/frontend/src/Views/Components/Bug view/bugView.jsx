import React, {useState} from "react";
import ViewSection from './component/bugViewSection';
import './bugView.css';
import BugModel from '../../../Models/bugModel';
import {useDispatch} from 'react-redux';
import {markComplete} from '../../../Controllers/Redux/bugSlice';
import EditPanel from "../edit delete/editPanel";
import EditBug from "../Bug Create/edit/bugForm";



export default (props)=>{
    const bug = new BugModel(props.bug);
    const dispatch= useDispatch();
    const [displayEdit, setDisplayEdit] = useState(false);


    function editClicked(){
        setDisplayEdit(!displayEdit)

    }

    function deleteClicked(){
        
    }


    return(
        <>
        <div className="bug-view">
            <EditPanel editClicked={editClicked} deleteClicked={deleteClicked}/>
            <button onClick={props.clicked} className="close-btn">Inchide</button>
            <h1>{bug.name}</h1>
            <ViewSection title="Detalii" info={bug.details}/>
            <ViewSection title="Link" info={bug.link}/>
            <ViewSection title="Prioritate" info={bug.priority}/>
            <ViewSection title="Severitate" info={bug.severity}/>
            <ViewSection title="Creator" info={bug.severity}/>
            <button className="bug-view-btn" onClick={()=>{dispatch(markComplete())}}>Mark Complete</button>
           
            
            
        </div>
        {displayEdit && <EditBug title="Editeaza Bug-ul" bug={bug} close={editClicked}/>}



        </>
    )
}