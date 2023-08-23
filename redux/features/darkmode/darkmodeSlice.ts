import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    darkMode:false
  
  }

  export const darkmodeSlice = createSlice({
    name: 'darkmode',
    initialState,

    reducers:{
        lightMode:(state,action)=>{
state.darkMode=action.payload
        }
    }
  })

  export const { lightMode } = darkmodeSlice.actions

export default darkmodeSlice.reducer