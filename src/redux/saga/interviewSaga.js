// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { delay } from "../../utils/delay";
import host from "../host";
import { formatInterviewList } from "../../utils/formatInterviewList";
import { filterInterviewList } from "../../utils/filterInterviewList";
// const fs = require("fs");
// let data_draft = [];
// for (let element of response.data) {
//   const applicationResponse = yield call(axios.get, `${element.applicationId}`);
//   let temp = {
//     ...element,
//     candidateId: applicationResponse.data.cv.candidateId
//   }
//   data_draft = data_draft.concat(temp)
// }

// action.payload: {
//   token: `Bearer ${user.token}`,
// }
function* getAllInterview(action) {
  try {
    yield put({ type: "loading/onLoading" });
    const response = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/Interview",
      {
        headers: { Authorization: action.payload.token },
      }
    );

    // const applications = yield call(axios.get, "https://leetun2k2-001-site1.gtempurl.com/api/Application");
    // const itrsinterviews = yield call(axios.get, "https://leetun2k2-001-site1.gtempurl.com/api/Itrsinterview");
    // const rooms = yield call(axios.get, "https://leetun2k2-001-site1.gtempurl.com/api/Room");
    // const shifts = yield call(axios.get, "https://leetun2k2-001-site1.gtempurl.com/api/Shift");
    // const recruiters = yield call(axios.get, "https://leetun2k2-001-site1.gtempurl.com/api/Recruiter");
    // const interviewers = yield call(axios.get, "https://leetun2k2-001-site1.gtempurl.com/api/Interviewer");
    // const candidates = yield call(axios.get, "https://leetun2k2-001-site1.gtempurl.com/api/Candidate");

    // const data = yield call(formatInterviewList, response.data, applications.data, itrsinterviews.data, rooms.data, shifts.data, recruiters.data, interviewers.data, candidates.data);

    const data_draft = yield call(formatInterviewList, response.data);
    let data;
    if (action.payload.role !== "interviewer") {
      data = data_draft
    }
    else {
      data = data_draft.filter(element => element.InterviewerId === action.payload.id)
    }

    yield put({
      type: "interviewList/setInterviewList",
      payload: data,
    });
    yield put({ type: "loading/offLoading" });
  } catch (error) {
    console.log("Error: ", error.message)
    yield put({ type: "loading/offLoading" });
  }
}

// action.payload: {
//   departmentId: departmentChoose ? departmentChoose.departmentId : null,
//   positionId: value ? value.PositionId : null,
//   status: statusChoose ? statusChoose : null,
//   priority: priorityChoose ? priorityChoose : null,
//   token: `Bearer ${user.token}`,
// }

function* getInterviewWithFilter(action) {
  yield put({ type: "loading/onLoading" });
  try {
    const response = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/Interview",
      {
        headers: { Authorization: action.payload.token },
      }
    );
    const data_draft_draft = yield call(formatInterviewList, response.data);
    const data_draft = yield call(
      filterInterviewList,
      data_draft_draft,
      action.payload.departmentId,
      action.payload.positionId,
      action.payload.status,
      action.payload.priority
    );

    let data;
    if (action.payload.role !== "interviewer") {
      data = data_draft
    }
    else {
      data = data_draft.filter(element => element.InterviewerId === action.payload.id)
    }
    yield put({
      type: "interviewList/setInterviewList",
      payload: data,
    });
    yield put({ type: "loading/offLoading" });
  } catch (error) {
    console.log("Error: ", error.message)
    yield put({ type: "loading/offLoading" });
  }
}

function* getUpcomingInterview(action) {
  try {
    const response = yield call(
      axios.get,
      `/data/interviewlist.json`
    );
    yield put({ type: "interview/setInterview", payload: response.data });
  } catch (error) {
    console.log(error);
  }
}

function* getInterviewResult(action) {
  try {
    let token = `Bearer ${action.payload.token}`
    const config = {
      headers: { Authorization: token },
    }
    // const responseInterviewList = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Interview`, config)

    let responseInterview = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Interview?id=${action.payload.interviewid}`)
    const responsePosition = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Position/GetPositionById?positionId=${responseInterview.data.application.position.positionId}`, config)
    const responseQSList = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/QuestionSkill`, config);

    // const responseAllQuestion = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Question`, config)

    const responseCategoryList = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/CategoryQuestion`, config)
    const responseSkillList = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Skill`, config)
    // const responseRoundList = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Round`, config)
    const roundList = responseInterview.data.rounds

    let interStruc = {
      interviewid: action.payload.interviewid,
      interviewerid: responseInterview.data.interviewer.interviewerId,
      applicationid: responseInterview.data.application.applicationId,
      note: responseInterview.data.notes,
      candidate_Status: responseInterview.data.candidate_Status,
      company_Status: responseInterview.data.company_Status,
      round: []
    };
    if (responseInterview.data.candidate_Status == "Finished") {
      // Soft Skill
      for (let cate of responseCategoryList.data) {
        if (cate.categoryQuestionName == "Soft Skill") {
          let newCate = {
            categoryid: cate.categoryQuestionId,
            categoryname: cate.categoryQuestionName,
            questions: []
          }
          interStruc.round.push(newCate)
          for (let softRo of roundList) {
            if (softRo.question.categoryQuestionId == cate.categoryQuestionId) {
              const newRo = {
                questionid: softRo.question.questionId,
                questionstring: softRo.question.questionString,
                score: softRo.score
              }
              interStruc.round[0].questions.push(newRo)
            }
          }

        }
      }
      // Language
      for (let cate of responseCategoryList.data) {
        if (cate.categoryQuestionName == "Language") {
          let newCate = {
            categoryid: cate.categoryQuestionId,
            categoryname: cate.categoryQuestionName,
            languages: []
          }
          interStruc.round.push(newCate)
          let newLang = {
            languageid: responsePosition.data.language.languageId,
            languagename: responsePosition.data.language.languageName,
            questions: []
          }
          interStruc.round[1].languages.push(newLang)
          let prefix = ""
          if (responsePosition.data.language.languageName == "English") {
            prefix = "$eng$"
          }
          else if (responsePosition.data.language.languageName == "Chinese") {
            prefix = "$chi$"
          }
          else if (responsePosition.data.language.languageName == "Italian") {
            prefix = "$ita$"
          }
          else if (responsePosition.data.language.languageName == "Spanish") {
            prefix = "$spa$"
          }
          else if (responsePosition.data.language.languageName == "French") {
            prefix = "$fre$"
          }
          else if (responsePosition.data.language.languageName == "Russian") {
            prefix = "$rus$"
          }
          else if (responsePosition.data.language.languageName == "Japanese") {
            prefix = "$jap$"
          }
          else if (responsePosition.data.language.languageName == "Korean") {
            prefix = "$kor$"
          }
          else if (responsePosition.data.language.languageName == "German") {
            prefix = "$ger$"
          }
          else if (responsePosition.data.language.languageName == "Portuguese") {
            prefix = "$por$"
          }
          else if (responsePosition.data.language.languageName == "Hindi") {
            prefix = "$hin$"
          }

          for (let langRo of roundList) {
            if (langRo.question.categoryQuestionId == cate.categoryQuestionId) {
              const newLangQues = {
                questionid: langRo.question.questionId,
                questionstring: langRo.question.questionString.slice(5),
                score: langRo.score,
              }
              interStruc.round[1].languages[0].questions.push(newLangQues)
            }
          }

        }
      }
      // Technology
      for (let cate of responseCategoryList.data) {
        if (cate.categoryQuestionName == "Technology") {
          let newCate = {
            categoryid: cate.categoryQuestionId,
            categoryname: cate.categoryQuestionName,
            skills: []
          }
          interStruc.round.push(newCate)
          for (let skill of responseSkillList.data) {
            for (let skillRequired of responsePosition.data.requirements) {
              if (skill.skillId == skillRequired.skillId) {
                let newSkill = {
                  skillid: skillRequired.skillId,
                  skillname: skill.skillName,
                  questions: []
                }
                interStruc.round[2].skills.push(newSkill)
                for (let QS of responseQSList.data) {
                  if (QS.skillId == skillRequired.skillId)
                    for (let techRo of roundList) {
                      if (techRo.question.categoryQuestionId == cate.categoryQuestionId && techRo.question.questionId == QS.questionId) {
                        const newTechRo = {
                          questionid: techRo.question.questionId,
                          questionstring: techRo.question.questionString,
                          score: techRo.score,
                        }
                        interStruc.round[2].skills[interStruc.round[2].skills.length - 1].questions.push(newTechRo)
                      }
                    }
                }
              }
            }
          }

        }
      }
    }
    yield put({ type: "interviewResult/setInterviewResult", payload: interStruc });
  }
  catch (error) {
    console.log("error: ", error)
  }
  // const response = yield call(axios.get, `/data/interviewid.json`);
}

function* scoreInterview(action) {
  // const abc = yield call(axios.post, "/api/interview", action.payload)
  try {
    let token = `Bearer ${action.payload.token}`
    const config = {
      headers: { Authorization: token },
    }
    console.log("input: ", JSON.stringify(action.payload))
    yield call(axios.post, `https://leetun2k2-001-site1.gtempurl.com/api/Interview/PostQuestionInterviewResult/${action.payload.interviewid}`, action.payload.result, config)
    yield call(axios.put, `https://leetun2k2-001-site1.gtempurl.com/api/Interview/UpdateStatusInterview/${action.payload.interviewid}?Candidate_Status=Finished&Company_Status=Pending`, null, config)
    yield put({ type: "error/setError", payload: { status: "no", message: action.payload.interviewid } })
  }
  catch (error) {
    console.log("err: ", error)
    yield put({ type: "error/setError", payload: { status: "yes", message: "Cannot end interview" } })
  }
}

function* createInterview(action) {
  try {
    let token = `Bearer ${action.payload.token}`
    const config = {
      headers: { Authorization: token },
    }
    yield call(axios.post, `https://leetun2k2-001-site1.gtempurl.com/api/Interview/${action.payload.newInter.interview.applicationId}`, action.payload.newInter, config)
    // update Application status
    yield call(axios.put, `https://leetun2k2-001-site1.gtempurl.com/api/Application/UpdateStatusApplication/${action.payload.newInter.interview.applicationId}?Candidate_Status=Pending&Company_Status=Accepted`, null, config)
    const responseInterviewList = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Interview/GetInterviewsByInterviewer/${action.payload.newInter.interview.interviewerId}`, config)
    const findInterview = responseInterviewList.data.find((item) => {
      return item.recruiter.recruiterId == action.payload.newInter.interview.recruiterId
        && item.application.applicationId == action.payload.newInter.interview.applicationId
        && item.interviewer.interviewerId == action.payload.newInter.interview.interviewerId
        && item.itrsinterview.room.roomId == action.payload.newInter.itrs.roomId
        && item.itrsinterview.shift.shiftId == action.payload.newInter.itrs.shiftId
    })
    yield put({ type: "error/setError", payload: { status: "no", message: findInterview.interviewId } })
  }
  catch (err) {
    yield put({ type: "error/setError", payload: { status: "yes", message: "This schedule is conflict with another interview. Please choose again" } })
    console.log("err: ", err)
  }
}

function* getInterviewInfo(action) {
  try {

    const config = {
      headers: {
        Authorization: action.payload.token,
        'Content-Type': 'application/json'
      }
    };
    const response = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Interview?id=${action.payload.interviewid}`, config)
    // lấy position, sau đó lọc ra lấy skill và language
    if (response.data === 'Not found'){
      yield put({ type: 'interviewError/onError', payload: response.data })
    }
    console.log('response', response.data);
    console.log('payload', action.payload);
    //console.log('inteerviewidinsaga', response.data.application);
    // const interviewid = response.data.filter((props) => props.interviewId === action.payload.interviewid);
    // console.log('interid', interviewid);
    const response2 = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Position/GetPositionById?positionId=${response.data.application.position.positionId}`, config)
    // console.log("appinsaga", interviewid);
    let skilllist = []
    const response3 = yield call(axios.get, 'https://leetun2k2-001-site1.gtempurl.com/api/Skill', config);
    for (let i = 0; i < response2.data.requirements.length; i++) {
      for (let j = 0; j < response3.data.length; j++) {
        if (response2.data.requirements[i].skillId === response3.data[j].skillId) {
          skilllist.push(response3.data[j]);
        }
      }
    }
    yield put({ type: "interviewposition/setInterviewPosition", payload: response2.data });
    yield put({ type: "interviewidInfo/setInterviewidInfo", payload: response.data });
    yield put({ type: 'interviewskill/setInterviewSkill', payload: skilllist })
  } catch (error) {
    if (error.response.request.status === 400 || error.response.request.status === 404 ) {
      yield put({ type: 'interviewError/onError', payload: error.response.request.status })
    }
    else{
      yield put({ type: 'interviewError/onError', payload: 'error server' })
    } 
  }
}

function* getQuestionsForStartingIntervew(action) {
  let token = `Bearer ${action.payload.token}`
  const config = {
    headers: { Authorization: token },
  }
  const responseInterviewList = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Interview`, config)
  let responseInterview = responseInterviewList.data.find((item) => {
    return item.interviewId == action.payload.interviewid
  })
  responseInterview = {
    data: responseInterview
  }
  const responsePosition = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Position/GetPositionById?positionId=${responseInterview.data.application.position.positionId}`, config)
  const responseSoftList = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Question/GetAllSoftSkillQuestions/SoftSkill`, config);
  const responseLangList = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Question/GetAllLanguageQuestions/Language`, config);
  const responseTechList = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Question/GetAllTechnologyQuestions/Technology`, config);
  const responseQSList = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/QuestionSkill`, config);

  const responseAllQuestion = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Question`, config)

  const responseCategoryList = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/CategoryQuestion`, config)
  const responseSkillList = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Skill`, config)
  let quesStruc = [];
  // Soft Skill
  for (let cate of responseCategoryList.data) {
    if (cate.categoryQuestionName == "Soft Skill") {
      let newCate = {
        categoryid: cate.categoryQuestionId,
        categoryname: cate.categoryQuestionName,
        questions: []
      }
      quesStruc.push(newCate)
      for (let softQues of responseAllQuestion.data) {
        if (softQues.categoryQuestionId == cate.categoryQuestionId) {
          let newQuesObj = {
            questionid: softQues.questionId,
            questionstring: softQues.questionString
          }
          quesStruc[0].questions.push(newQuesObj)
        }
      }

    }
  }
  // Language
  for (let cate of responseCategoryList.data) {
    if (cate.categoryQuestionName == "Language") {
      let newCate = {
        categoryid: cate.categoryQuestionId,
        categoryname: cate.categoryQuestionName,
        languages: []
      }
      quesStruc.push(newCate)
      let newLang = {
        languageid: responsePosition.data.language.languageId,
        languagename: responsePosition.data.language.languageName,
        questions: []
      }
      quesStruc[1].languages.push(newLang)
      let prefix = ""
      if (responsePosition.data.language.languageName == "English") {
        prefix = "$eng$"
      }
      else if (responsePosition.data.language.languageName == "Chinese") {
        prefix = "$chi$"
      }
      else if (responsePosition.data.language.languageName == "Italian") {
        prefix = "$ita$"
      }
      else if (responsePosition.data.language.languageName == "Spanish") {
        prefix = "$spa$"
      }
      else if (responsePosition.data.language.languageName == "French") {
        prefix = "$fre$"
      }
      else if (responsePosition.data.language.languageName == "Russian") {
        prefix = "$rus$"
      }
      else if (responsePosition.data.language.languageName == "Japanese") {
        prefix = "$jap$"
      }
      else if (responsePosition.data.language.languageName == "Korean") {
        prefix = "$kor$"
      }
      else if (responsePosition.data.language.languageName == "German") {
        prefix = "$ger$"
      }
      else if (responsePosition.data.language.languageName == "Portuguese") {
        prefix = "$por$"
      }
      else if (responsePosition.data.language.languageName == "Hindi") {
        prefix = "$hin$"
      }
      for (let langQues of responseLangList.data) {
        if (langQues.questionString.slice(0, 5) == prefix) {
          let newQuesObj = {
            questionid: langQues.questionId,
            questionstring: langQues.questionString.slice(5)
          }
          quesStruc[1].languages[0].questions.push(newQuesObj)
        }
      }

    }
  }
  // Technology
  for (let cate of responseCategoryList.data) {
    if (cate.categoryQuestionName == "Technology") {
      let newCate = {
        categoryid: cate.categoryQuestionId,
        categoryname: cate.categoryQuestionName,
        skills: []
      }
      quesStruc.push(newCate)
      for (let skill of responseSkillList.data) {
        for (let skillRequired of responsePosition.data.requirements) {
          if (skill.skillId == skillRequired.skillId) {
            let newSkill = {
              skillid: skillRequired.skillId,
              skillname: skill.skillName,
              questions: []
            }
            quesStruc[2].skills.push(newSkill)
            for (let QS of responseQSList.data) {
              if (QS.skillId == skillRequired.skillId)
                for (let techQues of responseTechList.data) {
                  if (techQues.questionId == QS.questionId) {
                    let newQues = {
                      questionid: techQues.questionId,
                      questionstring: techQues.questionString
                    }
                    quesStruc[2].skills[quesStruc[2].skills.length - 1].questions.push(newQues)
                  }
                }
            }
          }
        }
      }

    }
  }
  yield put({ type: "question/setInterviewQuestion", payload: quesStruc });
  yield put({ type: "interviewStart/setInterviewStart", payload: responseInterview.data });

  // const responsefake = yield call(
  //   axios.get,
  //   `/data/questionlist.json`
  // );
  // yield put({
  //   type: "question/setInterviewQuestion",
  //   payload: responsefake.data,
  // });
}

function* getDataForCreatingInterview(action) {
  // const responseApplication = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Application/${action.payload}`)
  // --------hàng tạm thời------------
  // get application infor
  let token = `Bearer ${action.payload.token}`
  const config = {
    headers: { Authorization: token },
  }
  // const responseApp = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Application/${action.payload.applicationid}`, config)
  // const appItem = responseApp.data
  const responsePosition = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Position/GetPositionById?positionId=${action.payload.recruitmentid}`, config)
  const findPosition = responsePosition.data
  // const findDepartment = findPosition.department
  // get upcoming interview
  // sửa lại chỗ này
  let responseInterviewList = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Interview`, config)
  responseInterviewList = responseInterviewList.data.filter((item) => {
    return item.candidate_Status == "Not start"
  })
  responseInterviewList = {
    data: responseInterviewList
  }
  let interviewList = []
  for (let resInter of responseInterviewList.data) {
    // const responseItrsList = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Itrsinterview?id=${resInter.itrsinterviewId}`)
    // const responseRoomList = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Room`)
    // const findRoom = responseRoomList.data.find((item) => item.roomId == responseItrsList.data.roomId)
    const newInter = {
      interviewid: resInter.interviewId,
      departmentid: resInter.application.position.department.departmentId,
      departmentname: resInter.application.position.department.departmentName,
      candidateid: resInter.application.cv.candidateId,
      candidatename: resInter.application.cv.candidate.user.fullName,
      interviewerid: resInter.interviewer.interviewerId,
      interviewername: resInter.interviewer.user.fullName,
      interviewdate: resInter.itrsinterview.dateInterview.slice(0, 11) + "17" + resInter.itrsinterview.dateInterview.slice(13) + ".000Z",
      shiftid: resInter.itrsinterview.shift.shiftId,
      roomid: resInter.itrsinterview.room.roomId,
      roomname: resInter.itrsinterview.room.roomName
    }
    interviewList.push(newInter)
  }
  // get department interviewer
  const responseDepartInterviewerList = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Interviewer?departmentId=${findPosition.department.departmentId}`, config)
  let interviewerList = []
  for (let filterInter of responseDepartInterviewerList.data) {
    let newInterviewer = {
      departmentid: filterInter.departmentId,
      interviewerid: filterInter.interviewerId,
      userid: filterInter.userId,
      user: filterInter.user,
    };
    interviewerList.push(newInterviewer);
  }
  // Get room
  const responseRoomList = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Room`, config)
  let roomList = responseRoomList.data.map((item) => {
    const newRoomObj = {
      roomid: item.roomId,
      roomname: item.roomName,
    };
    return newRoomObj;
  });
  // Get shift
  const responseShiftList = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Shift`, config)
  let shiftList = responseShiftList.data.map((item) => {
    let newShiftObj = {
      shiftid: item.shiftId,
      shiftstart: item.shiftTimeStart,
      shiftend: item.shiftTimeEnd,
    };
    return newShiftObj;
  });
  shiftList.sort((a, b) => {
    return a.shiftstart - b.shiftstart;
  });
  // ---------------------------------
  // -----------------------------------FAKE---------------------------------------

  // -----------------------------------FAKE---------------------------------------
  // yield put({ type: "application/setApplication", payload: appItem })
  yield put({ type: "interviewList/setInterviewList", payload: interviewList });
  yield put({
    type: "interviewerList/setInterviewerList",
    payload: interviewerList,
  });
  yield put({ type: "room/setRoom", payload: roomList });
  yield put({ type: "shift/setShift", payload: shiftList });
}

function* acceptInterview(action) {
  try {
    let token = `Bearer ${action.payload.token}`
    const config = {
      headers: { Authorization: token },
    }
    // yield call(delay, 2000)
    yield call(axios.put, `https://leetun2k2-001-site1.gtempurl.com/api/Interview/UpdateStatusInterview/${action.payload.interviewid}?Candidate_Status=Finished&Company_Status=Passed`, null, config)
    yield call(axios.put, `https://leetun2k2-001-site1.gtempurl.com/api/Application/UpdateStatusApplication/${action.payload.applicationid}?Candidate_Status=Passed&Company_Status=Accepted`, null, config)
    let newInterviewResult = {
      ...action.payload.interviewResult,
      company_Status: "Passed"
    }
    yield put({ type: "interviewResult/setInterviewResult", payload: newInterviewResult })
    yield put({ type: "error/setError", payload: { status: "no", message: "" } })
  }
  catch (error) {
    console.log("error")
  }
}

function* rejectInterview(action) {
  try {
    let token = `Bearer ${action.payload.token}`
    const config = {
      headers: { Authorization: token },
    }
    // yield call(delay, 2000)
    yield call(axios.put, `https://leetun2k2-001-site1.gtempurl.com/api/Interview/UpdateStatusInterview/${action.payload.interviewid}?Candidate_Status=Finished&Company_Status=Failed`, null, config)
    let newInterviewResult = {
      ...action.payload.interviewResult,
      company_Status: "Failed"
    }
    yield put({ type: "interviewResult/setInterviewResult", payload: newInterviewResult })
    yield put({ type: "error/setError", payload: { status: "no", message: "" } })
  }
  catch (error) {

  }
}

function* interviewSaga() {
  yield all([
    takeEvery("interviewSaga/getInterviewInfo", getInterviewInfo),
    takeEvery("interviewSaga/getUpcomingInterview", getUpcomingInterview),
    takeEvery("interviewSaga/scoreInterview", scoreInterview),
    takeEvery("interviewSaga/getInterviewResult", getInterviewResult),
    takeEvery("interviewSaga/createInterview", createInterview),
    takeEvery("interviewSaga/getQuestionsForStartingIntervew", getQuestionsForStartingIntervew),
    takeEvery("interviewSaga/acceptInterview", acceptInterview),
    takeEvery("interviewSaga/rejectInterview", rejectInterview),
    takeLatest("interviewSaga/getAllInterview", getAllInterview),
    takeLatest("interviewSaga/getInterviewWithFilter", getInterviewWithFilter),
    takeEvery("interviewSaga/getDataForCreatingInterview", getDataForCreatingInterview),
  ]);
}

export default interviewSaga;
