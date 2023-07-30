// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects";
import axios from "axios";
import host from "../host";
function* createCv(action) {
  try {
    const {
      CvName,
      Introduction,
      Education,
      Experience,
      Skills,
      Certificates,
    } = action.payload;
    console.log("CvName: ", CvName);
    console.log("Introduction: ", Introduction);
    console.log("Education: ", Education);
    console.log("Experience: ", Experience);
    console.log("Skills: ", Skills);
    console.log("Certificates: ", Certificates);
    const formData = new FormData();
    formData.append("CvName", CvName);
    formData.append("Introduction", Introduction);
    formData.append("Education", Education);
    formData.append("Experience", Experience);
    formData.append("CvFile", undefined); // Make sure to provide the actual file here
    formData.append("CvPdf", "cv");
    formData.append("IsDeleted", false);
    formData.append("CandidateId", "daa3769b-5dd9-47f7-97de-f97e4e705971");
    formData.append("Cvid", "1f357759-6d1e-47e7-a04b-01a92e73c115");
    const response = yield call(
      axios.post,
      `https://leetun2k2-001-site1.gtempurl.com/api/Cv`,formData
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

function* createCvSaga() {
  yield all([takeEvery("saga/getCreateCv", createCv)]);
}

export default createCvSaga;
