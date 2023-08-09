import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { delay } from "../../utils/delay";
import host from "../host";
import { formatPositionList } from "../../utils/formatPositionList";
import { filterPositionList } from "../../utils/filterPositionList";

function* getPositionList(action) {
  // yield call(delay, 1500)
  // const response = yield call(axios.get, `/data/positionList.json`)
  try {
    yield put({ type: "loading/onLoading" });
    // const response = yield call(axios.get, `/data/positionList.json`)
    // const response = yield call(axios.get, `/data/positionList.json`)
    // yield put({ type: "positionList/setPositionList", payload: response.data });
    let response
    if (action.payload) {
      response = yield call(
        axios.get,
        "https://leetun2k2-001-site1.gtempurl.com/api/Position",
        {
          headers: { Authorization: action.payload.token },
        }
      );
    }
    else {
      response = yield call(
        axios.get,
        "https://leetun2k2-001-site1.gtempurl.com/api/Position"
      );
    }

    const candidatesPosition = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/Application",
      {
        headers: { Authorization: action.payload.token },
      }
    );
    const data = formatPositionList(response.data, candidatesPosition.data);
    yield put({ type: "positionList/setPositionList", payload: data });
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
    //     message: "message" in error ? "Position - " + error.message : error.response.data,
    //   },
    // });
  }
}

// action.payload: {
//   departmentId: value ? value.departmentId : null,
//   status: statusChoose,
// }
function* getPositionListWithFilter(action) {
  try {
    yield put({ type: "loading/onLoading" });
    // const response = yield call(axios.get, `/data/positionListD.json`)
    // yield put({ type: "positionList/setPositionList", payload: response.data });

    const response = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/Position",
      {
        headers: { Authorization: action.payload.token },
      }
    );
    const candidatesPosition = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/Application",
      {
        headers: { Authorization: action.payload.token },
      }
    );
    const draft = filterPositionList(response.data, action.payload);
    const data = formatPositionList(draft, candidatesPosition.data);
    yield put({ type: "positionList/setPositionList", payload: data });
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
    //     message: "message" in error ? error.message : error.response.data,
    //   },
    // });
  }
}

function* updatePositionList(action) {
  try {
    const response = yield call(
      axios.put,
      `https://leetun2k2-001-site1.gtempurl.com/api/Position/${action.payload.id}`,
      action.payload.value,
      {
        headers: { Authorization: action.payload.token },
      }
    );
    yield put({
      type: "status/onSuccess",
      payload: action.payload.value.isDeleted ? "Inactive" : "Active"
    });
    yield put({
      type: "positionSaga/getPositionListWithFilter",
      payload: {
        departmentId: action.payload.departmentId,
        status: action.payload.status,
        token: action.payload.token
      },
    });
  } catch (error) {
    console.log("Error: ", error.message)
    yield put({
      type: "status/onError",
      payload: error.message
    });
  }

  // yield put({ type: "positionList/setPositionList", payload: response.data });
}

function* getPosition(action) {
  try {
    const response1 = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Position/GetPositionById?positionId=${action.payload.recruitmentid}`)
    if (response1.data === ''){
      console.log('hello')
      yield put({ type: 'positionError/onError', payload: 'error' })
    }
    console.log('string', response1);
    let skilllist = []
    const response2 = yield call(axios.get, 'https://leetun2k2-001-site1.gtempurl.com/api/Skill');
    console.log('response1', response1.data);
    console.log('reponse2', response2.data)
    console.log('skillid', response1.data.requirements)
    for (let i = 0; i < response1.data.requirements.length; i++) {
      for (let j = 0; j < response2.data.length; j++) {
        if (response1.data.requirements[i].skillId === response2.data[j].skillId && response1.data.requirements[i].isDeleted === false) {
          skilllist.push(response2.data[j]);
        }
      }
    }
    console.log("response1.data",response1.data)

    console.log("skillinsaga", skilllist);
    yield put({ type: "position/setPosition", payload: response1.data });
    yield put({ type: "skill/setSkill", payload: skilllist });

    // yield put({ type: 'position/setPosition', payload: response1.data })
    // yield put({ type: 'positionskill/setPositionSkill', payload: skilllist })
  } catch (error) {
    console.log("RERERE: ", error)
    if (error.response.request.status === 400 || error.response.request.status === 404 ) {

      yield put({ type: 'positionError/onError', payload: error.response.request.status })

    }
    else{
      yield put({ type: 'positionError/onError', payload: 'error server'})
    }
    
  }
}


// function* getDetailPosition(action){
//     const reponse = yield call(axios.get, `/positions?PositionId=${action.payload}`)
//     yield put({ type: 'detail/setDetail', payload: reponse.data})
// }

function* positionSaga() {
  yield all([
    takeEvery("positionSaga/getPosition", getPosition),
    takeLatest("positionSaga/getPositionList", getPositionList),
    takeLatest("positionSaga/updatePositionList", updatePositionList),
    takeLatest(
      "positionSaga/getPositionListWithFilter",
      getPositionListWithFilter
    ),
  ]);
}

export default positionSaga;
