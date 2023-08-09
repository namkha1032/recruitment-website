import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { delay } from "../../utils/delay";
import host from "../host";
import { formatEventList } from "../../utils/formatEventList";
import { filterEventList } from "../../utils/filterEventList";
import { transferDatetime } from "../../utils/transferDatetime";
import { formatEventFooter } from "../../utils/formatEventFooter";

function* getEventList(action) {
  try {
    yield put({ type: "loading/onLoading" });
    // yield call(delay, 1500)
    // const response = yield call(axios.get, `/data/eventList.json`)
    const response = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/Event",
      {
        headers: { Authorization: action.payload.token },
      }
    );
    const response1 = yield call(
      axios.get,
      `/data/image.json`
    );
    // const response = yield call(
    //   axios.get,
    //   "https://leetun2k2-001-site1.gtempurl.com/api/Event"
    // );
    // --- Get Recruiter name

    // --- Format EventList
    // yield put({ type: "eventList/setEventList", payload: response.data })
    // yield put({ type: "loading/offLoading" })
    const candidatesEvent = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/CandidateJoinEvent",
      {
        headers: { Authorization: action.payload.token },
      }
    );
    const data = formatEventList(response.data, candidatesEvent.data, response1.data);
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
    console.log("Error: ", error.message)
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
    // const response = yield call(axios.get, `/data/eventList.json`)
    const response = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/Event"
    );
    const response1 = yield call(
      axios.get,
      `/data/image.json`
    );
    const data = formatEventFooter(response.data, response1.data);
    yield put({ type: "eventFooter/setEventFooter", payload: data });
    yield put({ type: "loading/offLoading" });
  } catch (error) {
    yield put({ type: "loading/offLoading" });
  }
}

function* getEventListWithFilter(action) {
  try {
    yield put({ type: "loading/onLoading" });
    // yield call(delay, 1500)
    const response = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/Event",
      {
        headers: { Authorization: action.payload.token },
      }
    );

    const response1 = yield call(
      axios.get,
      `/data/image.json`
    );

    // --- Filter and format
    const candidatesEvent = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/CandidateJoinEvent",
      {
        headers: { Authorization: action.payload.token },
      }
    );

    const draft = formatEventList(response.data, candidatesEvent.data, response1.data);
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
    console.log("Error: ", error.message)
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
  // console.log("eid: ", action.payload.eventid)
  try {
    let token = `Bearer ${action.payload.token}`
    const config = {
      headers: { Authorization: token },
    }
    const response = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Event?id=${action.payload.eventid}`, config)

    // // ----------------------------------------
    // // FAKE API FOR BACKEND
    // const response = yield call(axios.get, `/data/eventid.json`)
    // // ----------------------------------------

    // console.log("res: ", response.data);
    const res = response.data;
    const newObj = {
      eventId: res.eventId,
      eventName: res.eventName,
      content: res.description,
      // quantity: 50,
      maxQuantity: res.maxParticipants,
      time: res.datetimeEvent,
      location: res.place,
      createdTime: "13:00 07/08/2023",

      // // ----------------------------------------
      // // FAKE API FOR BACKEND
      // ,content: res.content,
      // quantity: res.quantity,
      // maxQuantity: res.maxQuantity,
      // time: res.time,
      // location: res.location,
      // createdTime: res.createdTime
      // // ----------------------------------------
    };
    // console.log("new object: ", newObj);
    yield put({ type: "event/setEvent", payload: newObj });
  } catch (error) {
    console.log("Error: ", error.message)
    // console.log(error);

    if (error.response.request.status === 400 || error.response.request.status === 404) {
      yield put({ type: 'eventError/onError', payload: error.response.request.status })
    }
  }
}

function* getAllCandidateOfEvent(action) {
  // console.log("eid: ", action.payload)
  // const response = yield call(axios.get, `/data/candidateJoinEvent.json`)
  // console.log("res: ", response.data)
  // yield put({ type: "candidateJoinEvent/setCandidateJoinEvent", payload: response.data })
  // console.log("EventId: ", action.payload.eventid)
  try {
    let token = `Bearer ${action.payload.token}`
    const config = {
      headers: { Authorization: token },
    }
    const response1 = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/CandidateJoinEvent`, config)
    // console.log("Response 1: ", response1)
    const response2 = response1.data.filter(element => element.eventId === action.payload.eventid)
    // console.log("Response 2: ", response2)
    const response = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Candidate`, config)
    const response3 = response.data
    // console.log("Response 3: ", response3)
    let arr = []
    for (let i = 0; i < response2.length; i++) {
      for (let j = 0; j < response3.length; j++) {
        if (response2[i].candidateId === response3[j].candidateId) {
          arr.push({
            ...response2[i],
            candidateFullName: response3[j].user.fullName,
            candidateEmail: response3[j].user.email,
            candidateUserId: response3[j].userId
          });
        }
      }
    }
    // console.log("Array: ", arr);
    const formatArr = arr.map((element) => {
      return {
        candidateId: element.candidateId,
        candidateFullName: element.candidateFullName,
        candidateEmail: element.candidateEmail,
        candidateUserId: element.candidateUserId
      };
    });
    yield put({
      type: "candidateJoinEvent/setCandidateJoinEvent",
      payload: formatArr,
    });
  } catch (error) {
    console.log("Error: ", error.message)
    // console.log(error);
  }
}

function* postEvent(action) {
  // console.log("EventData: ", action.payload);
  try {
    let token = `Bearer ${action.payload.token}`
    const config = {
      headers: { Authorization: token },
    }
    yield put({ type: "eventNavigate/onLoading" })
    const {
      eventName,
      recruiterId,
      description,
      // quantity,
      maxParticipants,
      datetimeEvent,
      place,
      // createdTime
    } = action.payload;
    // const datetimeEvent_edited = transferDatetime(datetimeEvent)
    // console.log(action.payload);
    // console.log(datetimeEvent_edited)
    const request = {
      eventName: eventName,
      recruiterId: recruiterId,
      description: description,
      place: place,
      isDeleted: false,
      datetimeEvent: datetimeEvent,
      maxParticipants: maxParticipants,
    };
    const response = yield call(
      axios.post,
      `https://leetun2k2-001-site1.gtempurl.com/api/Event`, request, config
    );

    const eventList = yield call(axios.get, "https://leetun2k2-001-site1.gtempurl.com/api/Event", config)

    const eventId = eventList.data.filter(
      (item) => item.eventName === eventName && item.description === description
    )[0].eventId;
    // console.log("eId: ", eventId);
    yield put({ type: "eventNavigate/onSuccess", payload: eventId });
  } catch (error) {
    console.log("Error: ", error.message)
    // console.log(error);
  }
}

// function* getEventListId(action) {
//   const eventList = yield call(axios.get, "https://leetun2k2-001-site1.gtempurl.com/api/Event")
//   const eventId = eventList.filter(item => item.eventName === action.payload.name && item.description === action.payload.content)[0].eventId
//   console.log('eId: ', eventId)
//   yield put({ type: "eventList/setEventList", payload: eventId })
// }

function* putEvent(action) {
  // console.log("EventDataforPut: ", action.payload);
  try {
    let token = `Bearer ${action.payload.token}`
    const config = {
      headers: { Authorization: token },
    }
    yield put({ type: "eventNavigate/onLoading" })
    const {
      eventId,
      eventName,
      recruiterId,
      description,
      // quantity,
      maxParticipants,
      datetimeEvent,
      place,
      // createdTime
    } = action.payload;
    // console.log(action.payload);
    const request = {
      eventName: eventName,
      recruiterId: recruiterId,
      description: description,
      place: place,
      isDeleted: false,
      datetimeEvent: datetimeEvent,
      maxParticipants: maxParticipants,
    };
    const response = yield call(
      axios.put,
      `https://leetun2k2-001-site1.gtempurl.com/api/Event/${eventId}`, request, config
    );

    const eventList = yield call(axios.get, "https://leetun2k2-001-site1.gtempurl.com/api/Event", config)

    const EventId = eventList.data.filter(
      (item) => item.eventName === eventName && item.description === description
    )[0].eventId;
    // console.log("eId: ", EventId);
    yield put({ type: "eventNavigate/onSuccess", payload: EventId });
  } catch (error) {
    console.log("Error: ", error.message)
    // console.log(error);
  }
}

function* getCandidateIdRegisterEvent(action) {
  try {
    let token = `Bearer ${action.payload.token}`
    const config = {
      headers: { Authorization: token },
    }
    const response = yield call(axios.get, "https://leetun2k2-001-site1.gtempurl.com/api/Candidate", config)
    // console.log("+++++++++++", response)
    // console.log("+++++++++++", action.payload)
    const response1 = response.data.filter(item => item.userId === action.payload.userId)[0]
    // console.log("Debug1: ", response1)
    yield put({ type: "candidateIdRegisterEvent/setCandidateIdRegisterEvent", payload: response1.candidateId })
    // console.log("Debug2: ", response1.candidateId)
  }
  catch (error) {
    console.log("Error: ", error.message)
    // console.log(error)
  }
}


function* getRecruiterIdCreateEvent(action) {
  try {
    let token = `Bearer ${action.payload.token}`
    const config = {
      headers: { Authorization: token },
    }
    const response = yield call(axios.get, "https://leetun2k2-001-site1.gtempurl.com/api/Recruiter", config)
    // console.log("+++++++++++", response)
    // console.log("+++++++++++", action.payload)
    const response1 = response.data.filter(item => item.userId === action.payload.userId)[0]
    // console.log("DebugA: ", response1)
    yield put({ type: "recruiterIdCreateEvent/setRecruiterIdCreateEvent", payload: response1.recruiterId })
    // console.log("DebugB: ", response1.recruiterId)
  }
  catch (error) {
    console.log("Error: ", error.message)
    // console.log(error)
  }
}

function* postCandidateJoinEvent(action) {
  // console.log("CandidateJoinEvent: ", action.payload);
  try {
    let token = `Bearer ${action.payload.token}`
    const config = {
      headers: { Authorization: token },
    }
    yield put({ type: "eventIdStatus/onLoading" })
    const {
      candidateId,
      eventId
    } = action.payload;
    const request = {
      candidateId: candidateId,
      eventId: eventId,
    };
    const response = yield call(
      axios.post,
      `https://leetun2k2-001-site1.gtempurl.com/api/CandidateJoinEvent`, request, config
    );

    // const eventList = yield call(axios.get, "https://leetun2k2-001-site1.gtempurl.com/api/Event")

    // const eventId = eventList.data.filter(item => item.eventName === eventName && item.description === description)[0].eventId
    // console.log('eId: ', eventId)
    yield put({ type: "eventIdStatus/onSuccess", payload: "Register event" })
    yield put({
      type: "eventSaga/getEvent", payload: {
        eventid: eventId,
        token: "abcdef",
      },
    })
    yield put({ type: "eventRegistered/setEventRegistered", payload: true })
    yield put({ type: "error/setError", payload: { status: "no", message: "" } })
  }
  catch (error) {
    console.log("Error: ", error.message)
    // console.log(error)
    
    yield put({ type: "eventIdStatus/onError", payload: error.message })
  }
}


function* deleteCandidateJoinEvent(action) {
  // console.log("deleteCandidateJoinEvent: ", action.payload)
  try {
    let token = `Bearer ${action.payload.token}`
    const config = {
      headers: { Authorization: token },
    }
    const {
      candidateId,
      eventId
    } = action.payload;
    const response1 = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/CandidateJoinEvent`, config)
    const response2 = response1.data.filter(element => (element.candidateId === candidateId) && (element.eventId === eventId))[0]
    yield call(axios.delete, `https://leetun2k2-001-site1.gtempurl.com/api/CandidateJoinEvent/${response2.candidateJoinEventId}`, config);
    yield put({ type: "eventRegistered/setEventRegistered", payload: false })
    yield put({ type: "error/setError", payload: { status: "no", message: "" } })
  }
  catch (error) {
    console.log("Error: ", error.message)
    // console.log(error)
  }
}


function* checkCandidateJoinEvent(action) {
  try {
    let token = `Bearer ${action.payload.token}`
    const config = {
      headers: { Authorization: token },
    }
    // console.log("ABCD: ", action.payload)
    const response1 = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/CandidateJoinEvent`, config)
    const response2 = response1.data.filter(element => (element.candidateId === action.payload.candidateId) && (element.eventId === action.payload.eventId))
    // console.log("MNOP: ", response2)
    if (response2.length > 0) {
      yield put({ type: "eventRegistered/setEventRegistered", payload: true })
    }
    else {
      yield put({ type: "eventRegistered/setEventRegistered", payload: false })
    }
  }
  catch (error) {
    console.log("Error: ", error.message)
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
    takeEvery("eventSaga/getRecruiterIdCreateEvent", getRecruiterIdCreateEvent),
    takeEvery("eventSaga/postCandidateJoinEvent", postCandidateJoinEvent),
    takeEvery("eventSaga/deleteCandidateJoinEvent", deleteCandidateJoinEvent),
    takeEvery("eventSaga/checkCandidateJoinEvent", checkCandidateJoinEvent)
    // takeEvery("saga/getEventListId", getEventListId),
  ]);
}

export default eventSaga;
