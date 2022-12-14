import { createSlice } from "@reduxjs/toolkit";



const initialState={
    legajo:null
    }

const agenteSlice = createSlice({
    name:"agente",
    initialState,
    reducers:{
        addAgente:(state, action)=>{
            
            state.legajo = action.payload
        }
    }
})

export const  {addAgente} = agenteSlice.actions

export default agenteSlice.reducer
