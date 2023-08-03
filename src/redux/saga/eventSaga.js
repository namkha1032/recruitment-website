import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { delay } from "../../utils/delay";
import host from "../host";
import { formatEventList } from "../../utils/formatEventList";
import { filterEventList } from "../../utils/filterEventList";
import { transferDatetime } from "../../utils/transferDatetime";
import { formatEventFooter } from "../../utils/formatEventFooter";

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
    // yield put({ type: "eventList/setEventList", payload: response.data })
    // yield put({ type: "loading/offLoading" })
    const candidatesEvent = yield call(axios.get, "https://leetun2k2-001-site1.gtempurl.com/api/CandidateJoinEvent")
    const data = formatEventList(response.data, candidatesEvent.data);
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

    yield put({ type: "loading/offLoading" });
    // yield put({
    //   type: "error/setError",
    //   payload: {
    //     status: "yes",
    //     message: "message" in error ? "Event - " + error.message : error.response.data,
    //   },
    // });
  }
}
function* getEventFooter() {

  try {
    yield put({ type: "loading/onLoading" });
    // const response = yield call(axios.get, `${host.name}/data/eventList.json`)
    const response = yield call(axios.get, "https://leetun2k2-001-site1.gtempurl.com/api/Event")
    console.log('-------------------------------------------')
    console.log(response.data)
    const data = formatEventFooter(response.data);
    console.log(data)
    console.log('-------------------------------------------')
    yield put({ type: "eventFooter/setEventFooter", payload: data });
    yield put({ type: "loading/offLoading" });
  } catch (error) {
    yield put({ type: "loading/offLoading" });
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
    const candidatesEvent = yield call(axios.get, "https://leetun2k2-001-site1.gtempurl.com/api/CandidateJoinEvent")
    const draft = formatEventList(response.data, candidatesEvent.data);
    const data = filterEventList(draft, action.payload);
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
    yield put({ type: "loading/offLoading" });
    // yield put({
    //   type: "error/setError",
    //   payload: {
    //     status: "yes",
    //     message: "message" in error ? "Event - " + error.message : error.response.data,
    //   },
    // });
  }
}



// ------------------------------------------------------------------------------------------------------------------------
function* getEvent(action) {
  console.log("eid: ", action.payload)
  try {
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
      createdTime: "10:30 16/07/2023"

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
    console.log('new object: ', newObj)
    yield put({ type: "event/setEvent", payload: newObj })
  }
  catch (error) {
    console.log(error)
  }
}



function* getAllCandidateOfEvent(action) {
  // console.log("eid: ", action.payload)
  // const response = yield call(axios.get, `${host.name}/data/candidateJoinEvent.json`)
  // console.log("res: ", response.data)
  // yield put({ type: "candidateJoinEvent/setCandidateJoinEvent", payload: response.data })
  console.log("EventId: ", action.payload)
  try {
    const response1 = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/CandidateJoinEvent`)
    console.log("Response 1: ", response1)
    const response2 = response1.data.filter(element => element.eventId === action.payload)
    console.log("Response 2: ", response2)
    const response = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Candidate`)
    const response3 = response.data
    console.log("Response 3: ", response3)
    let arr = []
    for (let i = 0; i < response2.length; i++) {
      for (let j = 0; j < response3.length; j++) {
        if (response2[i].candidateId === response3[j].candidateId) {
          arr.push({ ...response2[i], candidateFullName: response3[j].user.fullName, candidateEmail: response3[j].user.email })
        }
      }
    }
    console.log("Array: ", arr)
    const formatArr = arr.map(element => {
      return {
        candidateId: element.candidateId,
        candidateFullName: element.candidateFullName,
        candidateEmail: element.candidateEmail
      }
    })
    yield put({ type: "candidateJoinEvent/setCandidateJoinEvent", payload: formatArr });
  }
  catch (error) {
    console.log(error)
  }
}



function* postEvent(action) {
  console.log("EventData: ", action.payload)
  try {
    yield put({ type: "eventNavigate/onLoading" })
    const {
      eventName,
      description,
      quantity,
      maxParticipants,
      datetimeEvent,
      place,
      createdTime
    } = action.payload;
    // const datetimeEvent_edited = transferDatetime(datetimeEvent)
    console.log(action.payload)
    // console.log(datetimeEvent_edited)
    const request = {
      eventName: eventName,
      recruiterId: "00000000-0000-0000-0000-000000000001",
      description: description,
      place: place,
      isDeleted: false,
      datetimeEvent: datetimeEvent,
      maxParticipants: maxParticipants,
    }
    const response = yield call(
      axios.post,
      `https://leetun2k2-001-site1.gtempurl.com/api/Event`, request
    );

    const eventList = yield call(axios.get, "https://leetun2k2-001-site1.gtempurl.com/api/Event")

    const eventId = eventList.data.filter(item => item.eventName === eventName && item.description === description)[0].eventId
    console.log('eId: ', eventId)
    yield put({ type: "eventNavigate/onSuccess", payload: eventId })
  }
  catch (error) {
    console.log(error)
  }
}


// function* getEventListId(action) {
//   const eventList = yield call(axios.get, "https://leetun2k2-001-site1.gtempurl.com/api/Event")
//   const eventId = eventList.filter(item => item.eventName === action.payload.name && item.description === action.payload.content)[0].eventId
//   console.log('eId: ', eventId)
//   yield put({ type: "eventList/setEventList", payload: eventId })
// }


function* putEvent(action) {
  console.log("EventDataforPut: ", action.payload)
  try {
    yield put({ type: "eventNavigate/onLoading" })
    const {
      eventId,
      eventName,
      description,
      quantity,
      maxParticipants,
      datetimeEvent,
      place,
      createdTime
    } = action.payload;
    console.log(action.payload)
    const request = {
      eventName: eventName,
      recruiterId: "00000000-0000-0000-0000-000000000001",
      description: description,
      place: place,
      isDeleted: false,
      datetimeEvent: datetimeEvent,
      maxParticipants: maxParticipants,
    }
    const response = yield call(
      axios.put,
      `https://leetun2k2-001-site1.gtempurl.com/api/Event/${eventId}`, request
    );

    const eventList = yield call(axios.get, "https://leetun2k2-001-site1.gtempurl.com/api/Event")

    const EventId = eventList.data.filter(item => item.eventName === eventName && item.description === description)[0].eventId
    console.log('eId: ', EventId)
    yield put({ type: "eventNavigate/onSuccess", payload: EventId })
  }
  catch (error) {
    console.log(error)
  }
}


function* getCandidateIdRegisterEvent(action) {
  try {
    const response = yield call(axios.get, "https://leetun2k2-001-site1.gtempurl.com/api/Candidate")
    // console.log("+++++++++++", response)
    // console.log("+++++++++++", action.payload)
    const response1 = response.data.filter(item => item.userId === action.payload)[0]
    yield put({ type: "candidateIdRegister/setCandidateIdRegister", payload: response1.candidateId })
  }
  catch (error) {
    console.log(error)
  }
}


function* postCandidateJoinEvent(action) {
  console.log("CandidateJoinEvent: ", action.payload)
  try {
    yield put({ type: "eventNavigate/onLoading" })
    const {
      candidateId,
      eventId
    } = action.payload;
    const request = {
      candidateId: candidateId,
      eventId: eventId
    }
    const response = yield call(
      axios.post,
      `https://leetun2k2-001-site1.gtempurl.com/api/CandidateJoinEvent`, request
    );

    // const eventList = yield call(axios.get, "https://leetun2k2-001-site1.gtempurl.com/api/Event")

    // const eventId = eventList.data.filter(item => item.eventName === eventName && item.description === description)[0].eventId
    // console.log('eId: ', eventId)
    // yield put({ type: "eventNavigate/onSuccess", payload: eventId })
  }
  catch (error) {
    console.log(error)
  }
}
// ------------------------------------------------------------------------------------------------------------------------


function* eventSaga() {
  yield all([
    takeLatest("eventSaga/getEventList", getEventList),
    takeLatest("eventSaga/getEventListWithFilter", getEventListWithFilter),
    takeEvery("eventSaga/getEvent", getEvent),
    takeEvery("eventSaga/getAllCandidateOfEvent", getAllCandidateOfEvent),
    takeEvery("eventSaga/getEventFooter", getEventFooter),
    takeEvery("eventSaga/postEvent", postEvent),
    takeEvery("eventSaga/putEvent", putEvent),
    takeEvery("eventSaga/getCandidateIdRegisterEvent", getCandidateIdRegisterEvent),
    takeEvery("eventSaga/postCandidateJoinEvent", postCandidateJoinEvent)
    // takeEvery("saga/getEventListId", getEventListId),
  ]);
}

export default eventSaga;
