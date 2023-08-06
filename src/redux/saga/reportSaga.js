import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects";
import axios from "axios";
import host from "../host";
import { delay } from "../../utils/delay"

function* getReport(action) {
  //http://leetun2k2-001-site1.gtempurl.com/api/Skill
  ///data/skillList.json
  ///data/interviewAll.json`
  console.log("REPORT: ", action.payload)
  try {
    yield call(delay, 1500)
    const response = yield call(
      axios.get,
      `/data/report.json`
    );
    // const response = yield call(
    //   axios.get,
    //   `/data/skillList.json`
    // );
    yield put({ type: "report/setReport", payload: response.data });
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
    //     message: "message" in error ? "Skill - " + error.message : error.response.data,
    //   },
    // });
  }
}

function* reportSaga() {
  yield all([takeEvery("reportSaga/getReport", getReport)]);
}

export default reportSaga;
