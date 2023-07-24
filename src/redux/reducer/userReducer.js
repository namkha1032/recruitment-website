// import libraries
import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: "user",
    initialState: {
        "userid": 0,
        "name": "Đoàn Nhật Hoàng",
        "email": "0986925857@gmail.com",
        "birth": "24-08-20000",
        "phone": "0986925857aa",
        "address": "Phường Linh Đông Thành Phố Thủ Đức HCM",
        "cvselected": 0,
        "image": "https://pbs.twimg.com/media/EYVxlOSXsAExOpX.jpg",
        "token": "hentaijav"
    },
    reducers: {
        userLogin(state, action) {
            return action.payload
        },
        userRegister(state, action) {
            return action.payload
        },
        userLogout(state, action) {
            return action.payload
        }
    }
})

export default userSlice