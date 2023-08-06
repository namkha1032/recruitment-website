// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects";
import axios from "axios";
import host from "../host";

function* getCvinfor(action) {
  try {
    const cvid = action.payload;
    const response1 = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/Cv"
    );
    const cv = response1.data.filter((prop) => prop.cvid === cvid);
    // console.log(cv);

    const response2 = yield call(
      axios.get,
      `https://leetun2k2-001-site1.gtempurl.com/api/CvHasSkill`
    );
    const cvSkill = response2.data.filter((prop) => prop.cvid === cv[0].cvid);
    // const cvSkill= cv[0].skills
    // console.log(cvSkill)
    function convertToTimeZone(originalDateString, timeZoneOffset) {
      const originalDate = new Date(originalDateString + "Z"); // Assuming the input date is in UTC time
      const targetDate = new Date(
        originalDate.getTime() + timeZoneOffset * 60 * 1000
      );
      return targetDate.toISOString();
    }
    // Assuming your desired time zone is UTC+07:00 (replace with your desired time zone)
    const targetTimeZoneOffset = 17 * 60;
    const response3 = yield call(
      axios.get,
      `https://leetun2k2-001-site1.gtempurl.com/api/Certificate`
    );
    const cvCertificate = response3.data.filter(
      (prop) => prop.cvid === cv[0].cvid
    );
    let newCert = cvCertificate.map((prop) => {
      return {
        ...prop,
        dateEarned: convertToTimeZone(prop.dateEarned, targetTimeZoneOffset),
        expirationDate: prop.expirationDate
          ? convertToTimeZone(prop.expirationDate, targetTimeZoneOffset)
          : null,
      };
    });
    // console.log(cv)
    // console.log((newCert))
    // const cvCertificate= cv[0].certificates
    yield put({ type: "cvInfor/setCvInfor", payload: cv });
    yield put({ type: "cvHasSkill/setCvHasSkill", payload: cvSkill });
    yield put({
      type: "cvHasCertificate/setCvHasCertificate",
      payload: newCert,
    });
    //   try {
    //     const response1 = yield call(axios.get, `/data/cvinfor.json`);
    //     const cv = response1.data;

    //     yield put({ type: "cvInfor/setCvInfor", payload: cv });
    //     yield put({ type: "cvHasSkill/setCvHasSkill", payload: cv[0].skills });
    //     yield put({
    //       type: "cvHasCertificate/setCvHasCertificate",
    //       payload: cv[0].certificates,
    //     });
    //   } catch (error) {
    //     console.log(error)
    //   }
  } catch (error) {
    console.log(error);
  }
}

function* cvInforSaga() {
  yield all([takeEvery("cvInforsaga/getCvinfor", getCvinfor)]);
}

export default cvInforSaga;
