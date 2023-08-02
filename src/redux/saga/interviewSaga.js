// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { delay } from "../../utils/delay";
import host from "../host";
import { formatInterviewList } from "../../utils/formatInterviewList";
// const fs = require("fs");
// let data_draft = [];
// for (let element of response.data) {
//   const applicationResponse = yield call(axios.get, `${element.applicationId}`);
//   let temp = {
//     ...element,
//     candidateId: applicationResponse.data.cv.candidateId
//   }
//   data_draft = data_draft.concat(temp)
// }

function* getAllInterview() {
  console.log("Get All Interview");
  try {
    yield put({ type: "loading/onLoading" });
    const response = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/Interview"
    );

    const applications = yield call(axios.get, "https://leetun2k2-001-site1.gtempurl.com/api/Application");
    const itrsinterviews = yield call(axios.get, "https://leetun2k2-001-site1.gtempurl.com/api/Itrsinterview");
    const rooms = yield call(axios.get, "https://leetun2k2-001-site1.gtempurl.com/api/Room");
    const shifts = yield call(axios.get, "https://leetun2k2-001-site1.gtempurl.com/api/Shift");
    const recruiters = yield call(axios.get, "https://leetun2k2-001-site1.gtempurl.com/api/Recruiter");
    const interviewers = yield call(axios.get, "https://leetun2k2-001-site1.gtempurl.com/api/Interviewer");
    const candidates = yield call(axios.get, "https://leetun2k2-001-site1.gtempurl.com/api/Candidate");

    const data = yield call(formatInterviewList, response.data, applications.data, itrsinterviews.data, rooms.data, shifts.data, recruiters.data, interviewers.data, candidates.data);
    
    yield put({
      type: "interviewList/setInterviewList",
      payload: data,
    });
    yield put({ type: "loading/offLoading" });
  } catch (error) { }
}

function* getInterviewWithFilter(action) {
  yield put({ type: "loading/onLoading" });
  console.log("Payload:", action.payload);
  yield call(delay, 1500);
  const response = yield call(axios.get, `${host.name}/data/interviewAll.json`);
  yield put({ type: "interviewList/setInterviewList", payload: response.data });
  yield put({ type: "loading/offLoading" });
}

function* getUpcomingInterview(action) {
  try {
    const response = yield call(
      axios.get,
      `${host.name}/data/interviewlist.json`
    );
    yield put({ type: "interview/setInterview", payload: response.data });
  } catch (error) {
    console.log(error);
  }
}

function* getInterviewId(action) {
  const response = yield call(axios.get, `${host.name}/data/interviewid.json`);
  yield put({ type: "interview/setInterview", payload: response.data });
}

function* scoreInterview(action) {
  // const abc = yield call(axios.post, "http://localhost:3001/api/interview", action.payload)
  console.log("hehehe");
}

function* createInterview(action) {
  try {
    const response = yield call(axios.post, "http://localhost:3001/api/interview/error", action.payload)
    // throw {
    //     response: {
    //         data: {
    //             error: "trung lich roi lam lai di"
    //         }
    //     }
    // }
    yield put({ type: "error/setError", payload: { status: "no", message: "" } })
  }
  catch (err) {
    yield put({ type: "error/setError", payload: { status: "yes", message: err.response.data.error } })
    console.log("err: ", err)
  }
}

function* getInterviewInfo(action) {
  try {
    const response = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Interview?id=${action.payload}`)
    const response1 = yield call(axios.get,`https://leetun2k2-001-site1.gtempurl.com/api/Itrsinterview/?id=${response.data.itrsinterviewId}`);
    const response2 = yield call(axios.get,"https://leetun2k2-001-site1.gtempurl.com/api/Room");
    const room = response2.data.filter((prop) => prop.roomId === response1.data.roomId);
    const response3 = yield call(axios.get,"https://leetun2k2-001-site1.gtempurl.com/api/Shift");
    console.log("room", room);
    const shift = response3.data.filter((prop) => prop.shiftId === response1.data.shiftId);
    console.log("shift", shift);
    const response4 = yield call(axios.get,`https://leetun2k2-001-site1.gtempurl.com/api/Interview`);
    const interviewer = response4.data.filter((prop) => prop.itrsinterviewId === response1.data.itrsinterviewId);
    const response5 = yield call(axios.get,` https://leetun2k2-001-site1.gtempurl.com/api/Interviewer?id=${interviewer[0].interviewerId}`);
    const response6 = yield call(axios.get,"https://leetun2k2-001-site1.gtempurl.com/api/Department");
    const department = response6.data.filter((props) => props.departmentId === response5.data.departmentId);
    // console.log("interviwer", interviewer);
    console.log("departsaga", department);
    const response7 = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Application`);
    const application = response7.data.filter((prop) => prop.applicationId === response.data.applicationId);
    const response8 = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Position/GetPositionById?positionId=${application[0].position.positionId}`)
    console.log("appinsaga", application);
    let skilllist = []
    console.log("reponse8", response8.data);
    const response9 = yield call(axios.get, 'https://leetun2k2-001-site1.gtempurl.com/api/Skill');
    console.log('response8', response8.data);
    console.log('reponse9', response9.data)
    console.log('skillid', response8.data.requirements)
    for (let i = 0; i < response8.data.requirements.length; i++) {
      for (let j = 0; j < response9.data.length; j++) {
        if (response8.data.requirements[i].skillId === response9.data[j].skillId) {
          skilllist.push(response9.data[j]);
        }
      }
    }

    console.log('skillinsaga', skilllist);
    console.log("appinsaga", application);
    // yield put({ type: "department/setDepartment", payload: department });
    // yield put({ type: "interviewer/setInterviewer", payload: response5.data });
    // yield put({ type: "shift/setShift", payload: shift });
    // yield put({ type: "room/setRoom", payload: room });
    // yield put({type: "interviewidInfo/setInterviewidInfo",payload: response1.data});
    // yield put({type: "position/setPosition", payload: response8.data});
    // yield put({type: 'skill/setSkill', payload: skilllist})
    yield put({ type: "interviewdepartment/setInterviewDepartment", payload: department });
    yield put({ type: "interviewinterviewer/setInterviewInterviewer", payload: response5.data });
    yield put({ type: "interviewshift/setInterviewShift", payload: shift });
    yield put({ type: "interviewroom/setInterviewRoom", payload: room });
    yield put({type: "interviewidInfo/setInterviewidInfo",payload: response1.data});
    yield put({type: "interviewposition/setInterviewPosition", payload: response8.data});
    yield put({type: 'interviewskill/setInterviewSkill', payload: skilllist})
  } catch (error) {
    console.log(error);
  }
}

function* interviewSaga() {
  yield all([
    takeEvery("saga/getInterviewInfo", getInterviewInfo),
    takeEvery("saga/getUpcomingInterview", getUpcomingInterview),
    takeEvery("saga/scoreInterview", scoreInterview),
    takeEvery("saga/getInterviewId", getInterviewId),
    takeEvery("saga/createInterview", createInterview),
    takeLatest("saga/getAllInterview", getAllInterview),
    takeLatest("saga/getInterviewWithFilter", getInterviewWithFilter),
  ]);
}

export default interviewSaga;
