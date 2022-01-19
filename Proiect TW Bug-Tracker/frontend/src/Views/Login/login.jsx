import React, {useState} from "react";
import {useDispatch} from 'react-redux';
import {singIn, setLoginTrue } from '../../Controllers/Redux/authSlice';
import toast, { Toaster } from 'react-hot-toast';

import './login.css';

export default () =>{


    const dispatch = useDispatch();
    const [formInput, setFormInput ]= useState({
        email:"",
        user_password:""
    })


    function inputChange(e){
        setFormInput({
            ...formInput,
            [e.target.name]:e.target.value
        })
    }

    function submit(e){
        e.preventDefault();
        dispatch(singIn(formInput))
        dispatch(setLoginTrue())
        //cautare in baza de date de email si parola
    }


    return(
        <div className="loginBG">
            <form className="login-panel">
                <h1>Login:</h1>
                <input name="email" placeholder="E-mail"  onChange={inputChange} value={formInput.email}></input>
                <input name="user_password" type="password" placeholder="Password"  onChange={inputChange} value={formInput.user_password}></input>
                <button type="submit"  onClick={submit}>Conecteaza-te</button>
                <Toaster /> 
            </form>
        </div>
    )
}