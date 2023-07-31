// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects";
import axios from "axios";
import host from "../host";
function* updateCv(action) {
  try {
    const {
      Cvid,
      delSkills,
      addSkills,
      Skills,
      Certificates,
      delCerts,
      addCerts
    } = action.payload;
    console.log("Cvid: ", Cvid);
    console.log("addSkills: ", addSkills);
    console.log("delSkills: ",delSkills);
    console.log("Skills: ", Skills);
    console.log("Certificates: ", Certificates);
    console.log("delCerts: ", delCerts);
    console.log("addCerts: ", addCerts);
    
    for (let skill of addSkills) {
      const newSkill = {
        cvid: Cvid,
        skillId: skill.skillId,
        experienceYear: skill.experienceYear,
      };
      const response2 = yield call(
        axios.post,
        "https://leetun2k2-001-site1.gtempurl.com/api/CvHasSkill",
        newSkill
      );
      console.log(response2);
    }
    for (let skill of delSkills) {
      const response2 = yield call(
        axios.delete,
        `https://leetun2k2-001-site1.gtempurl.com/api/CvHasSkill/${skill.cvSkillsId}`
      );
      console.log(response2);
    }
    for (let cert of Certificates) {
      const newCert = {
        certificateName: cert.certificateName,
        description: cert.description,
        organizationName: cert.organizationName,
        dateEarned:cert.dateEarned,
        expirationDate:cert.expirationDate,
        link: cert.link,
        cvid: Cvid,
        isDeleted:false
      };
      const response2 = yield call(
        axios.post,
        "https://leetun2k2-001-site1.gtempurl.com/api/Certificate",
        newCert
      );
      console.log(response2);
    }
    for (let cert of delCerts) {
      console.log(cert.certificateId)
      // const response2 = yield call(
      //   axios.delete,
      //   `https://leetun2k2-001-site1.gtempurl.com/api/Certificate/${cert.certificateId}`
      // );
      // console.log(response2);
    }
    // for (let certificate of Certificates){
    //   const newCert = {
    //     certificateName:certificate.certificateName,
    //     description:certificate.description,
    //     organizationName:certificate.organizationName,
    //     dateEarned:certificate.dateEarned,
    //     expirationDate:certificate.expirationDate,
    //     link:certificate.link,
    //     cvid:cv[0].cvid,
    //     isDeleted:false
    //   }
    //   const response3 = yield call(
    //     axios.post,
    //     "https://leetun2k2-001-site1.gtempurl.com/api/Certificate",
    //     newCert
    //   );
    //   console.log(response3);
    // }

    // console.log(response);
  } catch (error) {
    console.log(error);
  }
}

function* updateCvSaga() {
  yield all([takeEvery("saga/getUpdateCv", updateCv)]);
}

export default updateCvSaga;
