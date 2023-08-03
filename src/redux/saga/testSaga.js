import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'
import host from "../host"
function* getStuff(action) {
    let token = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3BpZGVycmVjcnVpdGVyIiwianRpIjoiMjlkM2MwMWItZTZjMi00OTUyLWI2ZGUtMDVmZTJmMGIwZWNiIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiUmVjcnVpdGVyIiwiZXhwIjoxNjkxMDc1NDA2LCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDo3MDI5In0.S_JmoOAVYzgQg6JokBPZeqLK__0tcTDiBn6pdCezq-Y`
    const config = {
        headers: { Authorization: token },
    }
    let body = {
        questionString: "Tell me about your girlfriend",
        categoryQuestionId: "a0c0bbca-af3c-466c-b9ce-7bbbdf499577"
    }
    yield call(axios.put, "https://leetun2k2-001-site1.gtempurl.com/api/Question/e660c3a6-5bda-4a47-9b32-80a240fc5692", body, config)
}

function* testSaga() {
    yield all([
        takeEvery("saga/getStuff", getStuff)
    ])
}

export default testSaga