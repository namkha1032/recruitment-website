import { createSlice } from "@reduxjs/toolkit";

const listcvSlice = createSlice({
    name: 'listcv',
    initialState: null,
    reducers: {
        setListcv(state, action){
            return action.payload
        }
    }
})

export default listcvSlice;