// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'
import { delay } from "../../utils/delay"
import host from "../host"
import { formatQuestionList } from "../../utils/formatQuestionList"
import { filterQuestionList } from "../../utils/filterQuestionList"

function* getAllQuestion() {
    yield put({type: "loading/onLoading"})
    yield call(delay, 1500)
    // const response = yield call(axios.get, `${host.name}/data/questionListR.json`)
    const response = yield call(axios.get, "http://leetun2k2-001-site1.gtempurl.com/api/Question")
    // --- GET NAME
    const categorys = yield call(axios.get, "http://leetun2k2-001-site1.gtempurl.com/api/CategoryQuestion")
    const skillsQ = yield call(axios.get, "http://leetun2k2-001-site1.gtempurl.com/api/QuestionSkill")
    const skills = yield call(axios.get, "http://leetun2k2-001-site1.gtempurl.com/api/Skill")
    const data = yield call(formatQuestionList, response.data, categorys.data, skillsQ.data, skills.data)
    
    yield put({ type: "questionList/setQuestionList", payload: data })
    yield put({type: "loading/offLoading"})
}

function* getQuestionListWithFilter(action) {
    console.log("Filter by: ", action.payload)
    yield put({type: "loading/onLoading"})
    yield call(delay, 1500)
    
    // const response = yield call(axios.get, `${host.name}/data/questionlist.json`)
    const response = yield call(axios.get, "http://leetun2k2-001-site1.gtempurl.com/api/Question")
    // --- GET NAME
    const categorys = yield call(axios.get, "http://leetun2k2-001-site1.gtempurl.com/api/CategoryQuestion")
    const skillsQ = yield call(axios.get, "http://leetun2k2-001-site1.gtempurl.com/api/QuestionSkill")
    const skills = yield call(axios.get, "http://leetun2k2-001-site1.gtempurl.com/api/Skill")
    const draft = yield call(formatQuestionList, response.data, categorys.data, skillsQ.data, skills.data)
    
    // --- FILTER
    const data = yield call(filterQuestionList, draft, action.payload)
    console.log(data)

    yield put({ type: "questionList/setQuestionList", payload: data })
    yield put({type: "loading/offLoading"})
}

function* getInterviewQuestion(action) {
    const response = yield call(axios.get, `${host.name}/data/questionlist.json`)
    yield put({ type: "question/setInterviewQuestion", payload: response.data })
}

function* getQuestion(action) {
    yield put({ type: "question/setQuestion", action: action.payload })
}


function* questionSaga() {
    yield all([
        takeEvery("saga/getInterviewQuestion", getInterviewQuestion),
        takeEvery("saga/getQuestion", getQuestion),
        takeEvery("saga/getAllQuestion", getAllQuestion),
        takeLatest("saga/getQuestionListWithFilter", getQuestionListWithFilter)
    ])
}

export default questionSaga