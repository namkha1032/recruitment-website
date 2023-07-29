// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { delay } from "../../utils/delay";
import host from "../host";
import { formatQuestionList } from "../../utils/formatQuestionList";
import { filterQuestionList } from "../../utils/filterQuestionList";

function* getAllQuestion() {
  console.log("Get All Question");
  try {
    yield put({ type: "loading/onLoading" });
    // yield call(delay, 1500)
    // const response = yield call(axios.get, `${host.name}/data/questionListR.json`)
    // yield put({ type: "questionList/setQuestionList", payload: response.data });
    
    const response = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/Question"
    );
    // --- GET NAME

    const categorys = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/CategoryQuestion"
    );
    const skillsQ = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/QuestionSkill"
    );
    const skills = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/Skill"
    );
    const languages = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/Language"
    );
    const data = yield call(
      formatQuestionList,
      response.data,
      categorys.data,
      skillsQ.data,
      skills.data,
      languages.data
    );
      console.log(data)
    yield put({ type: "questionList/setQuestionList", payload: data });
    yield put({ type: "loading/offLoading" });
    yield put({
      type: "error/setError",
      payload: {
        status: "no",
        message: "",
      },
    });
  } catch (error) {
    yield put({
      type: "error/setError",
      payload: {
        status: "yes",
        message: "message" in error ? error.message : error.response.data,
      },
    });
  }
}

function* getQuestionListWithFilter(action) {
  console.log("Filter by: ", action.payload);
  try {
    yield put({ type: "loading/onLoading" });
    // yield call(delay, 1500)
    // const response = yield call(axios.get, `${host.name}/data/questionlist.json`)
    // yield put({ type: "questionList/setQuestionList", payload: response.data });

    const response = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/Question"
    );

    // --- GET NAME

    const categorys = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/CategoryQuestion"
    );
    const skillsQ = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/QuestionSkill"
    );
    const skills = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/Skill"
    );
    const languages = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/Language"
    );
    const draft = yield call(
      formatQuestionList,
      response.data,
      categorys.data,
      skillsQ.data,
      skills.data,
      languages.data
    );

    // --- FILTER
    const data = yield call(filterQuestionList, draft, action.payload);
    console.log("OUTPUT: ", data)
    yield put({ type: "questionList/setQuestionList", payload: data });
    yield put({ type: "loading/offLoading" });
    yield put({
      type: "error/setError",
      payload: {
        status: "no",
        message: "",
      },
    });
  } catch (error) {
    yield put({
      type: "error/setError",
      payload: {
        status: "yes",
        message: "message" in error ? error.message : error.response.data,
      },
    });
  }
}

function* postQuestion(action) {
  console.log("POST: ", action.payload)
}

function* putQuestion(action) {
  console.log("PUT: ", action.payload)
  yield delay(1500)
  console.log("Finish")
}

function* getInterviewQuestion(action) {
  // const response = yield call(
  //   axios.get,
  //   `http://leetun2k2-001-site1.gtempurl.com/api/Question`
  // );
  // const response1 = yield call(
  //   axios.get,
  //   `http://leetun2k2-001-site1.gtempurl.com/api/CategoryQuestion`
  // );
  // const response2 = yield call(
  //   axios.get,
  //   `http://leetun2k2-001-site1.gtempurl.com/api/Skill`
  // );
  // const response3 = yield call(
  //   axios.get,
  //   `http://leetun2k2-001-site1.gtempurl.com/api/Language`
  // );
  // const resList = response.data;
  // const res1List = response1.data;
  // const res2List = response2.data;
  // const res3List = response3.data;
  // let quesStruc = [];
  // // Soft skill
  // for (let res1 of res1List) {
  //   if (res1.categoryQuestionName == "Soft Skill") {
  //     let newCate = {
  //       categoryid: res1.categoryQuestionId,
  //       categoryname: res1.categoryQuestionName,
  //       questions: [],
  //     };
  //     quesStruc.push(newCate);
  //     for (let res of resList) {
  //       if (res.categoryQuestionId == res1.categoryQuestionId) {
  //         let newQues = {
  //           questionid: res.questionId,
  //           questionstring: res.questionString,
  //         };
  //         quesStruc[0].questions.push(newQues);
  //       }
  //     }
  //     break;
  //   }
  // }
  // // Language
  // for (let res1 of res1List) {
  //   if (res1.categoryQuestionName == "Language") {
  //     let newCate = {
  //       categoryid: res1.categoryQuestionId,
  //       categoryname: res1.categoryQuestionName,
  //       languages: [],
  //     };
  //     quesStruc.push(newCate);
  //     for (let res3 of res3List) {
  //       if (res3.languageName == "English") {
  //         const newObj = {
  //           languageid: res3.languageId,
  //           languagename: res3.languageName,
  //           questions: [],
  //         };
  //         quesStruc[1].languages.push(newObj);
  //         for (let res of resList) {
  //           if (res.categoryQuestionId == res1.categoryQuestionId) {
  //             let newQues = {
  //               questionid: res.questionId,
  //               questionstring: res.questionString.slice(5),
  //             };
  //             quesStruc[1].languages[0].questions.push(newQues);
  //           }
  //         }
  //       }
  //     }
  //     break;
  //   }
  // }
  // // Technology
  // for (let res1 of res1List) {
  //   if (res1.categoryQuestionName == "Technology") {
  //     let newCate = {
  //       categoryid: res1.categoryQuestionId,
  //       categoryname: res1.categoryQuestionName,
  //       skills: [],
  //     };
  //     quesStruc.push(newCate);
  //     for (let res2 of res2List) {
  //       if (res2.skillName == "React") {
  //         const newObj = {
  //           skillid: res2.skillId,
  //           skillname: res2.skillName,
  //           questions: [],
  //         };
  //         quesStruc[2].skills.push(newObj);
  //         for (let res of resList) {
  //           if (res.categoryQuestionId == res1.categoryQuestionId) {
  //             let newQues = {
  //               questionid: res.questionId,
  //               questionstring: res.questionString,
  //             };
  //             quesStruc[2].skills[0].questions.push(newQues);
  //           }
  //         }
  //       }
  //     }
  //     for (let res2 of res2List) {
  //       if (res2.skillName == "C#") {
  //         const newObj = {
  //           skillid: res2.skillId,
  //           skillname: res2.skillName,
  //           questions: [],
  //         };
  //         quesStruc[2].skills.push(newObj);
  //         for (let res of resList) {
  //           if (res.categoryQuestionId == res1.categoryQuestionId) {
  //             let newQues = {
  //               questionid: res.questionId,
  //               questionstring: res.questionString,
  //             };
  //             quesStruc[2].skills[1].questions.push(newQues);
  //           }
  //         }
  //       }
  //     }
  //     for (let res2 of res2List) {
  //       if (res2.skillName == "Java") {
  //         const newObj = {
  //           skillid: res2.skillId,
  //           skillname: res2.skillName,
  //           questions: [],
  //         };
  //         quesStruc[2].skills.push(newObj);
  //         for (let res of resList) {
  //           if (res.categoryQuestionId == res1.categoryQuestionId) {
  //             let newQues = {
  //               questionid: res.questionId,
  //               questionstring: res.questionString,
  //             };
  //             quesStruc[2].skills[2].questions.push(newQues);
  //           }
  //         }
  //       }
  //     }
  //     break;
  //   }
  // }
  // yield put({ type: "question/setInterviewQuestion", payload: quesStruc });
  const responsefake = yield call(
    axios.get,
    `${host.name}/data/questionlist.json`
  );
  yield put({ type: "question/setInterviewQuestion", payload: responsefake.data })
}

function* getQuestion(action) {
  yield put({ type: "question/setQuestion", action: action.payload });
}

function* questionSaga() {
  yield all([
    takeEvery("saga/getInterviewQuestion", getInterviewQuestion),
    takeEvery("saga/getQuestion", getQuestion),
    takeEvery("saga/getAllQuestion", getAllQuestion),
    takeLatest("saga/getQuestionListWithFilter", getQuestionListWithFilter),
    takeEvery("saga/putQuestion", putQuestion),
    takeEvery("saga/postQuestion", postQuestion)
  ]);
}

export default questionSaga;
