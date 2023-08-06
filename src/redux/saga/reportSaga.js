import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects";
import axios from "axios";
import host from "../host";
import { delay } from "../../utils/delay";
import { formatReport } from "../../utils/formatReport";

function* getReport(action) {
  //http://leetun2k2-001-site1.gtempurl.com/api/Skill
  //http://localhost:3000/data/skillList.json
  // `${host.name}/data/interviewAll.json`
  console.log("REPORT: ", action.payload)
  try {
    // const response = yield call(
    //   axios.get,
    //   `${host.name}/data/report.json`
    // );
    // const response = yield call(
    //   axios.get,
    //   `${host.name}/data/skillList.json`
    // );
    yield put({ type: "loading/onLoading" });
    const response = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/Interview",
      {
        headers: { Authorization: action.payload.token },
      }
    );
    
    const categorys = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/CategoryQuestion",
      {
        headers: { Authorization: action.payload.token },
      }
    );

    const data = yield call(formatReport, response.data, categorys.data)
    yield put({ type: "report/setReport", payload: data });
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
    //     message: "message" in error ? "Skill - " + error.message : error.response.data,
    //   },
    // });
  }
}

function* reportSaga() {
  yield all([takeEvery("reportSaga/getReport", getReport)]);
}

export default reportSaga;
