import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { delay } from "../../utils/delay";
import host from "../host";
import { formatEventList } from "../../utils/formatEventList";
import { filterEventList } from "../../utils/filterEventList";

function* getEventList() {
  try {
    yield put({ type: "loading/onLoading" });
    // yield call(delay, 1500)
    // const response = yield call(axios.get, `${host.name}/data/eventList.json`)
    const response = yield call(axios.get, "https://leetun2k2-001-site1.gtempurl.com/api/Event")
    // const response = yield call(
    //   axios.get,
    //   "https://leetun2k2-001-site1.gtempurl.com/api/Event"
    // );
    // --- Get Recruiter name

    // --- Format EventList
    // const data = formatEventList(response.data)
    console.log(response.data)
    yield put({ type: "eventList/setEventList", payload: response.data })
    yield put({ type: "loading/offLoading" })
    // const data = formatEventList(response.data);
    // yield put({ type: "eventList/setEventList", payload: data });
    yield put({ type: "loading/offLoading" });
    // yield put({
    //   type: "error/setError",
    //   payload: {
    //     status: "no",
    //     message: "",
    //   },
    // });
  } catch (error) {
    // yield put({
    //   type: "error/setError",
    //   payload: {
    //     status: "yes",
    //     message: "message" in error ? "Event - " + error.message : error.response.data,
    //   },
    // });
  }
}



function* getEventListWithFilter(action) {
  console.log("Filter: ", action.payload);
  try {
    yield put({ type: "loading/onLoading" });
    // yield call(delay, 1500)
    const response = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/Event"
    );
    // --- Get Recruiter name

    // --- Filter and format
    const draft = filterEventList(response.data, action.payload);
    const data = formatEventList(draft);
    yield put({ type: "eventList/setEventList", payload: data });
    yield put({ type: "loading/offLoading" });
    // yield put({
    //   type: "error/setError",
    //   payload: {
    //     status: "no",
    //     message: "",
    //   },
    // });
  } catch (error) {
    // yield put({
    //   type: "error/setError",
    //   payload: {
    //     status: "yes",
    //     message: "message" in error ? "Event - " + error.message : error.response.data,
    //   },
    // });
  }
}



function* getEvent(action) {
    console.log("eid: ", action.payload)
    const response = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Event?id=${action.payload}`)

    // // ----------------------------------------
    // // FAKE API FOR BACKEND
    // const response = yield call(axios.get, `${host.name}/data/eventid.json`)
    // // ----------------------------------------

    console.log("res: ", response.data)
    const res = response.data;
    const newObj = {
        eventId: res.eventId,
        eventName: res.eventName,
        content: res.description,
        quantity: 50,
        maxQuantity: res.maxParticipants,
        time: res.datetimeEvent,
        location: res.place,
        createdTime: "16/07/2023 10:30"

        // // ----------------------------------------
        // // FAKE API FOR BACKEND
        // ,content: res.content,
        // quantity: res.quantity,
        // maxQuantity: res.maxQuantity,
        // time: res.time,
        // location: res.location,
        // createdTime: res.createdTime
        // // ----------------------------------------
    }
    yield put({ type: "event/setEvent", payload: newObj })
}



// DO LATER
function* getAllCandidateOfEvent(action) {
    console.log("eid: ", action.payload)
    const response = yield call(axios.get, `${host.name}/data/candidateJoinEvent.json`)
    // const candidateManyEvent = yield call(axios.get, `http://leetun2k2-001-site1.gtempurl.com/api/CandidateJoinEvent`)
    // console.log("candidateManyEvent: ", candidateManyEvent.data)
    console.log("res: ", response.data)
    yield put({ type: "candidateJoinEvent/setCandidateJoinEvent", payload: response.data })
    // const candidateOneEvent = candidateManyEvent.data.filter((prop) => prop.eventId == action.payload)
    // console.log("candidateOneEvent: ", candidateOneEvent)
    // yield put({ type: "candidateJoinEvent/setCandidateJoinEvent", payload: candidateOneEvent })
}



function* eventSaga() {
  yield all([
    takeLatest("saga/getEventList", getEventList),
    takeLatest("saga/getEventListWithFilter", getEventListWithFilter),
    takeEvery("saga/getEvent", getEvent),
    takeEvery("saga/getAllCandidateOfEvent", getAllCandidateOfEvent),
  ]);
}

export default eventSaga;
