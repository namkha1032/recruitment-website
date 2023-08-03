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
  yield put({ type: "interviewResult/setInterviewResult", payload: response.data });
}

function* scoreInterview(action) {
  // const abc = yield call(axios.post, "http://localhost:3001/api/interview", action.payload)
  console.log("hehehe");
}

function* createInterview(action) {
  try {
    console.log("input: ", JSON.stringify(action.payload))
    // console.log("inre: ", action.payload)
    yield call(axios.post, `https://leetun2k2-001-site1.gtempurl.com/api/Interview/${action.payload.interview.applicationId}`, action.payload)
    // const responseInterviewList = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Interview`)
    // const findInterview = responseInterviewList.data.find((item) => {
    //   return item.recruiterId == action.payload.interview.recruiterId
    //     && item.applicationId == action.payload.interview.applicationId
    //     && item.interviewerId == action.payload.interview.interviewerId
    // })
    yield call(delay, 1000)
    // throw {
    //     response: {
    //         data: {
    //             error: "trung lich roi lam lai di"
    //         }
    //     }
    // }
    // yield put({ type: "error/setError", payload: { status: "no", message: findInterview.interviewId } })
    yield put({ type: "error/setError", payload: { status: "no", message: "" } })
  }
  catch (err) {
    // yield put({ type: "error/setError", payload: { status: "yes", message: err.response.data.error } })
    console.log("err: ", err)
  }
}

function* getInterviewInfo(action) {
  try {
    
    const config = {
      headers: {
        Authorization: action.payload.token,
        'Content-Type': 'application/json'
      }
    };
    const response = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Interview?id=${action.payload.interviewid}`, config)
    // lấy position, sau đó lọc ra lấy skill và language
    console.log('inteerviewidinsaga', response.data.application.position);
    const response2 = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Position/GetPositionById?positionId=${response.data.application.position.positionId}`, config)
    console.log("appinsaga", response.data);
    let skilllist = []
    console.log("reponse2", response2.data);
    const response3 = yield call(axios.get, 'https://leetun2k2-001-site1.gtempurl.com/api/Skill', config);
    console.log('response2', response2.data);
    console.log('reponse3', response3.data)
    console.log('skillid', response2.data.requirements)
    for (let i = 0; i < response2.data.requirements.length; i++) {
      for (let j = 0; j < response3.data.length; j++) {
        if (response2.data.requirements[i].skillId === response3.data[j].skillId) {
          skilllist.push(response3.data[j]);
        }
      }
    }
    console.log('skillinsaga', skilllist);
    // yield put({ type: "department/setDepartment", payload: department });
    // yield put({ type: "interviewer/setInterviewer", payload: response5.data });
    // yield put({ type: "shift/setShift", payload: shift });
    // yield put({ type: "room/setRoom", payload: room });
    // yield put({type: "interviewidInfo/setInterviewidInfo",payload: response1.data});
    yield put({ type: "interviewposition/setInterviewPosition", payload: response2.data });
    // yield put({type: 'skill/setSkill', payload: skilllist})
    yield put({ type: "interviewidInfo/setInterviewidInfo", payload: response.data });
    yield put({ type: 'interviewskill/setInterviewSkill', payload: skilllist })
  } catch (error) {
    console.log(error);
    if (error.response.request.status === 400 || error.response.request.status === 404){

      yield put({type: 'interviewError/onError', payload: error.response.request.status})

    }
  }
}

function* getDataForInterview(action) {
  // const responseApplication = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Application/${action.payload}`)
  // --------hàng tạm thời------------
  // get application infor
  const responseAppList = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Application`)
  const appItem = responseAppList.data.find((item) => {
    return item.applicationId == action.payload
  })
  const responsePositionList = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Position`)
  const findPosition = responsePositionList.data.find((item) => item.positionId == appItem.position.positionId)
  const responseDepartmentList = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Department`)
  const findDepartment = responseDepartmentList.data.find((item) => item.departmentId == findPosition.department.departmentId)
  console.log("appItem: ", appItem)
  // get upcoming interview
  const responseInterviewList = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Interview`)
  let interviewList = []
  for (let resInter of responseInterviewList.data) {
    const responseItrsList = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Itrsinterview?id=${resInter.itrsinterviewId}`)
    const responseRoomList = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Room`)
    const findRoom = responseRoomList.data.find((item) => item.roomId == responseItrsList.data.roomId)
    const newInter = {
      interviewid: resInter.interviewId,
      departmentid: findPosition.department.departmentId,
      departmentname: findPosition.department.departmentName,
      candidateid: appItem.cv.candidateId,
      candidatename: "Goku",
      interviewerid: resInter.interviewerId,
      interviewername: "Interviewer Name",
      interviewdate: responseItrsList.data.dateInterview.slice(0, 11) + "17" + responseItrsList.data.dateInterview.slice(13) + ".000Z",
      shiftid: responseItrsList.data.shiftId,
      roomid: responseItrsList.data.roomId,
      roomname: findRoom.roomName
    }
    interviewList.push(newInter)
  }
  // get department interviewer
  const responseDepartInterviewerList = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Interviewer`)
  const filterInterviewerList = responseDepartInterviewerList.data.filter((item) => item.departmentId == findPosition.department.departmentId)
  let interviewerList = []
  for (let filterInter of filterInterviewerList) {
    let newInterviewer = {
      departmentid: filterInter.departmentId,
      interviewerid: filterInter.interviewerId,
      user: filterInter.user,
    }
    interviewerList.push(newInterviewer)
  }
  // Get room
  const responseRoomList = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Room`)
  let roomList = responseRoomList.data.map((item) => {
    const newRoomObj = {
      roomid: item.roomId,
      roomname: item.roomName
    }
    return newRoomObj
  })
  // Get shift
  const responseShiftList = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Shift`)
  let shiftList = responseShiftList.data.map((item) => {
    let newShiftObj = {
      shiftid: item.shiftId,
      shiftstart: item.shiftTimeStart,
      shiftend: item.shiftTimeEnd
    }
    return newShiftObj
  })
  shiftList.sort((a, b) => {
    return a.shiftstart - b.shiftstart;
  });
  // ---------------------------------
  // -----------------------------------FAKE---------------------------------------

  // -----------------------------------FAKE---------------------------------------
  // yield put({ type: "application/setApplication", payload: appItem })
  yield put({ type: "interviewList/setInterviewList", payload: interviewList })
  yield put({ type: "interviewerList/setInterviewerList", payload: interviewerList })
  yield put({ type: "room/setRoom", payload: roomList })
  yield put({ type: "shift/setShift", payload: shiftList })
}

function* interviewSaga() {
  yield all([
    takeEvery("interviewSaga/getInterviewInfo", getInterviewInfo),
    takeEvery("interviewSaga/getUpcomingInterview", getUpcomingInterview),
    takeEvery("interviewSaga/scoreInterview", scoreInterview),
    takeEvery("interviewSaga/getInterviewId", getInterviewId),
    takeEvery("interviewSaga/createInterview", createInterview),
    takeLatest("interviewSaga/getAllInterview", getAllInterview),
    takeLatest("interviewSaga/getInterviewWithFilter", getInterviewWithFilter),
    takeEvery('interviewSaga/getDataForInterview', getDataForInterview),
  ]);
}

export default interviewSaga;
