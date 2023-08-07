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
    // const {
    //   CvName,
    //   Introduction,
    //   Education,
    //   Experience,
    //   Skills,
    //   Certificates,
    // } = action.payload;
    ///////////////////////////////////////////////
    // console.log("CvName: ", CvName);
    // console.log("Introduction: ", Introduction);
    // console.log("Education: ", Education);
    // console.log("Experience: ", Experience);
    // console.log("Skills: ", Skills);
    // console.log("Certificates: ", Certificates);

    const removeFieldFromCertificates = (certificatesArray, fieldToRemove) => {
      return certificatesArray.map(
        ({ [fieldToRemove]: removedField, ...rest }) => rest
      );
    };
    const updatedSkills = removeFieldFromCertificates(Skills, 'cvSkillsId');
    const updatedCertificates = removeFieldFromCertificates(Certificates, 'certificateId');
    // console.log(" new Certificates: ", updatedCertificates);
    // console.log(" new Skills: ", updatedSkills);
     ///////////////////////////////////////////////
    // const formData = new FormData();
    // formData.append("CvName", CvName);
    // formData.append("Introduction", Introduction);
    // formData.append("Education", Education);
    // formData.append("Experience", Experience)
    // formData.append("CvFile", CvFile);; // Make sure to provide the actual file here
    // formData.append("CvPdf", null);
    // formData.append("IsDeleted", false);
    // formData.append("CandidateId", "daa3769b-5dd9-47f7-97de-f97e4e705971");
    // formData.append("Cvid", "1f357759-6d1e-47e7-a04b-01a92e73c115");
    // const response = yield call(
    //   axios.post,
    //   `https://leetun2k2-001-site1.gtempurl.com/api/Cv`,
    //   formData
    // );
    // console.log(response);
    /////////////////////////////////////////////////////////////////////
    console.log('12233')
    const response = yield call(
        axios.post,
        `https://leetun2k2-001-site1.gtempurl.com/api/Cv`,
        {
          candidateId:"bf02c9a4-17fb-47e0-a930-6f409f41e54",
          experience: Experience,
          cvPdf:"",
          cvName:CvName,
          introduction:Introduction,
          education:Education,
          isDeleted:false,
          skills:[{experienceYear
            : 
            2,
            skillId
            : 
            "c5d67ab3-39d6-4116-bbda-6e3e56d3bc52"}],
          certificates:updatedCertificates
        }
      );
      // console.log(response)
    /////////////////////////////////////////////////////////////////////
    // const response1 = yield call(
    //   axios.get,
    //   "https://leetun2k2-001-site1.gtempurl.com/api/Cv"
    // );
    // const cv = response1.data.filter(
    //   (prop) =>
    //     prop.cvName === CvName &&
    //     prop.candidateId === "daa3769b-5dd9-47f7-97de-f97e4e705971" &&
    //     prop.introduction === Introduction &&
    //     prop.isDeleted === false
    // );
    // console.log(cv);
    // console.log(cv[0].cvid);
    // for (let skill of Skills) {
    //   const newSkill = {
    //     cvid: cv[0].cvid,
    //     skillId: skill.skillId,
    //     experienceYear: skill.experienceYear,
    //   };
    //   const response2 = yield call(
    //     axios.post,
    //     "https://leetun2k2-001-site1.gtempurl.com/api/CvHasSkill",
    //     newSkill
    //   );
    //   console.log(response2);
    // }
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
    // console.log(error);
  }
}

function* createCvSaga() {
  yield all([takeEvery("cvCreatesaga/getCreateCv", createCv)]);
}

export default createCvSaga;
