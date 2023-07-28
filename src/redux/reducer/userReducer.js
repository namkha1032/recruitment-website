// // import libraries
// import { createSlice } from '@reduxjs/toolkit'

// const userSlice = createSlice({
//     name: "user",
//     initialState: {token: null, expiration: null, userId: null, userInfo: null},
//     reducers: {
//         /* setUserToken(state, action) {
//             state.token = action.payload.token
//             state.expiration = action.payload.expiration
//         },
//         setUserId(state, action) {
//             state.userId = action.payload
//         },
//         setUserInfo(state, action) {
//             state.userInfo = action.payload
//         },
//         userLogout() {
//             return {token: null, expiration: null, userId: null, userInfo: null}
//         } */

//         setUser(state, action) {
//             return {...state, ...action.payload}
//         },
//         userLogout(state, action) {
//             return action.payload
//         }
//     }
// })

// export default userSlice


// import libraries
import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        setUser(state, action) {
            return action.payload
        },
        userLogout(state, action) {
            return action.payload
        }
    }
})

export default userSlice