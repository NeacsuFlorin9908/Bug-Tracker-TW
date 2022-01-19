import {createSlice} from  '@reduxjs/toolkit'

const slice = createSlice({
    name:"user",
    initialState:[{}],
    reducers:{
        getUser:(state)=>{
            state.push({name:"Ion Ionut"})
            state.push({name:"Marin Mariana"})
        }
    }

})

export default  slice.reducer;
export const{getUser} = slice.actions;