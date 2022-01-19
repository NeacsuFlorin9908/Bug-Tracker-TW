import {createSlice} from '@reduxjs/toolkit'
import {retreiveBugs} from '../bugController'
const slice = createSlice({
    name:"bug",
    initialState:[],
    reducers:{
        getBugs:state => retreiveBugs(),
     
        createBugs:(state,actions)=>{

        },
        updateBugs:(state,actions)=>{

        },
        markComplete:(state,actions)=>{

        }


    }
})

export default slice.reducer;
export const {getBugs,createBugs,updateBugs,markComplete} = slice.actions;