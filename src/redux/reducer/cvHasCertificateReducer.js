// import libraries
import { createSlice } from '@reduxjs/toolkit'

const cvHasCertificateSlice = createSlice({
    name: "cvHasCertificate",
    initialState: null,
    reducers: {
        setCvHasCertificate(state, action) {
            return action.payload
        }
    }
})

export default cvHasCertificateSlice