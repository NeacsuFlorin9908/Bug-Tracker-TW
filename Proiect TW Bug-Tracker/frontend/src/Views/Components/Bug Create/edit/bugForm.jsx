import React, {useState} from "react";
import './bugForm.css';
import BugModel from '../../../../Models/bugModel';


export default (props)=>{
    const[bugObject , setBugObject] = useState(new BugModel(props.bug));

    function inputChange(e){
        setBugObject({
            ...bugObject,
            [e.target.name]:e.target.value
        })
    }
    return(
        <div className="bug-create">
            {props.title == "Editeaza Bug-ul" && <button className="close-btn" onClick={props.close}>Inchide</button>}
            <h1>{props.title}</h1>
            <form>
                <label>Name:</label>
                <input name="name" placeholder="Numele Bug-ului" required onChange={inputChange} value={bugObject.name}></input>
                <label>Detalii:</label>
                <textarea name="details" placeholder="Detaliati bug-ul" required onChange={inputChange} value={bugObject.details}></textarea>
                <label>Link:</label>
                <input name="link" placeholder="Link-ul produsului informatic" required onChange={inputChange} value={bugObject.link}></input>
                <label>Prioritate:</label>
                <select name="priority" required onChange={inputChange} value={bugObject.priority}>
                    <option value='1'>High</option>
                    <option value='2'>Medium</option>
                    <option value='3'>Low</option>
                </select>
                <label>Tester:</label>
                <select name="assigned" required onChange={inputChange} value={bugObject.assigned}>
                    <option>Neacsu Florin</option>
                    <option>Nastrut Diana</option>
                    
                </select>
                <label>Severitate:</label>
                <select name="severity" required onChange={inputChange} value={bugObject.severity}>
                    <option value='1'>High</option>
                    <option value='2'>Medium</option>
                    <option value='3'>Low</option>
                </select>
                <button type='submit'>{props.title}</button>
                
                
            </form>
        </div>

    )
}