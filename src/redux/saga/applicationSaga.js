import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects";
import axios from 'axios';
import host from "../host";
import { formatPositionList } from "../../utils/formatPositionList";
function* getApplication(action) {
    // const response = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Cv/${action.payload}`);
    // const response1 = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Position/GetPositionById?positionId=${action.payload}`)
    // console.log("num", action.payload);
    // console.log("resapp", response.data)
    // console.log('resapp1', response1.data)
    // const application = response.data.filter((props)=> props.positionId === response1.data.positionId);
    // console.log("appsaga", application);

    // const response2 = yield call(axios.get, `http://leetun2k2-001-site1.gtempurl.com/api/Position/GetPositionById/${action.payload}`)
    // console.log("res2", response2.data);
    // yield put({ type: 'application/setApplication', payload: application })
    try {
        // const reponse = yield call(axios.get, `${host.name}/data/applicationList.json`)
        const response1 = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Position/GetPositionById?positionId=${action.payload}`)
        const response2 = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Application`)
        let mergeobject = {}
        let candidatelist = []
        let application = response2.data.filter((prop) => prop.position.positionId === response1.data.positionId);
        console.log("applyinsaga", application);
        for (let i = 0; i < application.length; i++ ){
            candidatelist.push({ ...application[i],...(yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Candidate/${application[i].cv.candidateId}`)).data})
        }
        // candidatelist.push(mergeobject);
        console.log("listinsaga", candidatelist);

        yield put({ type: 'application/setApplication', payload: candidatelist })
    } catch (error) {
        console.log(error)
    }



}


function* submitCv(action) {
    try {
        const reponse = yield call(axios.post, `https://leetun2k2-001-site1.gtempurl.com/api/Application`, action.payload)
        console.log("submitsaga", reponse.data)
        yield put({ type: 'submitcv/setSubmitcv', payload: reponse.data })
    } catch (error) {
        console.log("error")
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
            interviewdate: responseItrsList.data.dateInterview,
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
            interviewername: "Interviewer Name",
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
    yield put({ type: "application/setApplication", payload: appItem })
    yield put({ type: "interview/setInterview", payload: interviewList })
    yield put({ type: "interviewer/setInterviewer", payload: interviewerList })
    yield put({ type: "room/setRoom", payload: roomList })
    yield put({ type: "shift/setShift", payload: shiftList })
}
function* applicationSaga() {
    yield all([
        takeEvery('saga/submitCv', submitCv),
        takeEvery('saga/getApplication', getApplication),
        takeEvery('saga/getDataForInterview', getDataForInterview),
    ])
}

export default applicationSaga;