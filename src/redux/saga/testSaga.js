import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'
import host from "../host"
function* getStuff(action) {
    // const { title, author, comments } = action.payload
    // const newPost = { title, author }
    // const response1 = yield call(axios.post, `http://localhost:3001/posts`, newPost)
    // console.log("resdata1: ", response1.data)
    // for (let cmt of comments) {
    //     const newCmt = {
    //         body: cmt.body,
    //         postId: response1.data.id
    //     }
    //     const response2 = yield call(axios.post, `http://localhost:3001/comments`, newCmt)
    //     console.log("resdata2: ", response2.data)
    // }
}

function* testSaga() {
    yield all([
        takeEvery("saga/getStuff", getStuff)
    ])
}

export default testSaga