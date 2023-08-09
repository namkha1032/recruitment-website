import { createSlice } from "@reduxjs/toolkit";


// status có 3 giá trị:
// - idle: chưa có lỗi
// - yes : vừa bắt được lỗi
// - no  : ko có lỗi
const errorSlice = createSlice({
    name: "error",
    initialState: {
        status: "idle",
        message: ""
    },
    reducers: {
        setError(state, action) {
            return action.payload
        }
    }
})

export default errorSlice