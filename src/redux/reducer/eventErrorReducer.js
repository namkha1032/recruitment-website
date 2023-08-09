import { createSlice } from "@reduxjs/toolkit";

const eventErrorSlice = createSlice({
    name: "eventError",
    initialState: {
        status: "idle",
        message: "",
    },
    reducers: {
        onLoading() {
            return {
                status: "loading",
                message: "",
            };
        },
        onSuccess(state, action) {
            return {
                status: "success",
                message: action.payload,
            };
        },
        onError(state, action) {
            return {
                status: "error",
                message: action.payload,
            };
        },
        onReset() {
            return {
                status: "idle",
                message: "",
            };
        },
    },
});

export default eventErrorSlice;