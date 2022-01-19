import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios';
import toast from 'react-hot-toast';
const slice = createSlice({
    name:"auth",
    initialState:{
        admin:false,
        LoggedIn:false,

    },
    reducers:{
        singIn:({state}, action) => {
            new Promise((resolve, reject) => {
                return axios.post('/api/users/login', action.payload)
                .then(({ data }) => {
                    console.log(data)
                    toast(data.message)
                    resolve(data)
                })
                .catch(({ response }) => {
                    console.log(response)
                    toast(response.data.message)
                    reject(response)
                }) 
            })
            
        },
        setLoginTrue:(state, action) => {
            state.LoggedIn=true;
            state.admin=true;
        },
        logOut:(state,action)=>{
            state.LoggedIn=false;
            state.admin=false;

        },
        createUser:(state,action)=>{

        }
    }
})

export default slice.reducer;

export const {singIn,logOut,createUser, setLoginTrue} = slice.actions;