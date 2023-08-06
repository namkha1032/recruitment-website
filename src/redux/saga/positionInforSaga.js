// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects";
import axios from "axios";
import host from "../host";

function* getPositioninfor(action) {
  try {
    function convertToTimeZone(originalDateString, timeZoneOffset) {
      const originalDate = new Date(originalDateString + "Z"); // Assuming the input date is in UTC time
      const targetDate = new Date(
        originalDate.getTime() + timeZoneOffset * 60 * 1000
      );
      return targetDate.toISOString();
    }
    // Assuming your desired time zone is UTC+07:00 (replace with your desired time zone)
    const targetTimeZoneOffset = 17 * 60;
    const recruitmentid = action.payload;
    const response1 = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/Position"
    );
    const position = response1.data.filter(
      (prop) => prop.positionId === recruitmentid
    );
    // console.log(position);
    position[0].startDate = convertToTimeZone(
      position[0].startDate,
      targetTimeZoneOffset
    );
    position[0].endDate = convertToTimeZone(
      position[0].endDate,
      targetTimeZoneOffset
    );
    const response2 = yield call(
      axios.get,
      `https://leetun2k2-001-site1.gtempurl.com/api/Requirement`
    );
    const requirement = response2.data.filter(
      (prop) =>
        prop.positionId === position[0].positionId && prop.isDeleted === false
    );
    yield put({ type: "positionInfor/setPositionInfor", payload: position });
    yield put({
      type: "positionRequire/setPositionRequire",
      payload: requirement,
    });

    // const response1 = yield call(axios.get, `/data/positionInfor.json`)
    // const position = response1.data

    // yield put({ type: "positionInfor/setPositionInfor", payload: position })
    // yield put({ type: "positionRequire/setPositionRequire", payload: position[0].requirement })
  } catch (error) {
    // console.log(error);
  }
}

function* positionInforSaga() {
  yield all([
    takeEvery("positionInforsaga/getPositioninfor", getPositioninfor),
  ]);
}

export default positionInforSaga;
