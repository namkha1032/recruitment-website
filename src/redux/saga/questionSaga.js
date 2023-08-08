// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { delay } from "../../utils/delay";
import host from "../host";
import { formatQuestionList } from "../../utils/formatQuestionList";
import { filterQuestionList } from "../../utils/filterQuestionList";
import { createQuestionDraft } from "../../utils/createQuestionDraft";
import { getQuestionSkillInfo } from "../../utils/getQuestionSkillInfo";

// action.payload: {
//   token: `Bearer ${user.token}`
// }
function* getAllQuestion(action) {
  try {
    yield put({ type: "loading/onLoading" });
    // yield call(delay, 1500)
    // const response = yield call(axios.get, `/data/questionListR.json`)
    // yield put({ type: "questionList/setQuestionList", payload: response.data });

    const response = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/Question",
      {
        headers: { Authorization: action.payload.token },
      }
    );
    // --- GET NAME

    const categorys = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/CategoryQuestion",
      {
        headers: { Authorization: action.payload.token },
      }
    );
    const skillsQ = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/QuestionSkill",
      {
        headers: { Authorization: action.payload.token },
      }
    );
    const skills = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/Skill",
      {
        headers: { Authorization: action.payload.token },
      }
    );
    const languages = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/Language",
      {
        headers: { Authorization: action.payload.token },
      }
    );
    const data = yield call(
      formatQuestionList,
      response.data,
      categorys.data,
      skillsQ.data,
      skills.data,
      languages.data
    );
    yield put({ type: "questionList/setQuestionList", payload: data });
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
    // yield put({
    //   type: "error/setError",
    //   payload: {
    //     status: "yes",
    //     message: "message" in error ? error.message : error.response.data,
    //   },
    // });
    yield put({ type: "loading/offLoading" });
    yield put({
      type: "status/onError",
      payload: error.message,
    });
  }
}

function* getQuestionListWithFilter(action) {
  try {
    yield put({ type: "loading/onLoading" });
    // yield call(delay, 1500)
    // const response = yield call(axios.get, `/data/questionlist.json`)
    // yield put({ type: "questionList/setQuestionList", payload: response.data });

    const response = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/Question",
      {
        headers: { Authorization: action.payload.token },
      }
    );

    // --- GET NAME

    const categorys = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/CategoryQuestion",
      {
        headers: { Authorization: action.payload.token },
      }
    );
    const skillsQ = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/QuestionSkill",
      {
        headers: { Authorization: action.payload.token },
      }
    );
    const skills = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/Skill", {
        headers: { Authorization: action.payload.token },
      }
    );
    const languages = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/Language", {
        headers: { Authorization: action.payload.token },
      }
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

    yield put({ type: "questionList/setQuestionList", payload: data });
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
    // yield put({
    //   type: "error/setError",
    //   payload: {
    //     status: "yes",
    //     message: "message" in error ? error.message : error.response.data,
    //   },
    // });
    yield put({ type: "loading/offLoading" });
    yield put({
      type: "status/onError",
      payload: error.message,
    });
  }
}

// action.payload: {
//   QuestionName: value.question,
//   Category: value.category,
//   TypeId: value.typeId,
//   TypeName: value.typeName,
// }

function* postQuestion(action) {
  try {
    yield put({
      type: "status/onLoading",
    });
    const techId = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/CategoryQuestion?name=Technology", {
        headers: { Authorization: action.payload.token },
      }
    );
    const langId = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/CategoryQuestion?name=Language", {
        headers: { Authorization: action.payload.token },
      }
    );
    const softId = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/CategoryQuestion?name=Soft%20Skill", {
        headers: { Authorization: action.payload.token },
      }
    );

    const ques_draft = yield call(
      createQuestionDraft,
      action.payload,
      techId.data,
      langId.data,
      softId.data
    );

    const quesId = yield call(
      axios.post,
      "https://leetun2k2-001-site1.gtempurl.com/api/Question",
      {
        questionString: ques_draft.QuestionName,
        categoryQuestionId: ques_draft.CategoryId,
      }, {
        headers: { Authorization: action.payload.token },
      }
    );

    if (quesId.data.categoryQuestionId === techId.data[0].categoryQuestionId) {
      const ques = yield call(
        axios.post,
        "https://leetun2k2-001-site1.gtempurl.com/api/QuestionSkill",
        {
          questionId: quesId.data.questionId,
          skillId: ques_draft.TypeId,
        }, {
          headers: { Authorization: action.payload.token },
        }
      );
    }
    yield put({
      type: "status/onSuccess",
      payload: "Create question",
    });

    // Load with filter
    yield put({
      type: "questionSaga/getQuestionListWithFilter",
      payload: {
        categoryName: action.payload.categoryName,
        skillId: action.payload.skillId,
        skillName: action.payload.skillName,
        languageId: action.payload.languageId,
        languageName: action.payload.languageName,
        softskill: action.payload.softskill,
        token: action.payload.token
      },
    });
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
    yield put({
      type: "status/onError",
      payload: error.message,
    });
  }
}

// action.payload: {
//   QuestionId: value.QuestionId,
//   QuestionName: value.QuestionName,
//   Category: value.CategoryName,
//   TypeId: value.TypeId,
//   TypeName: value.TypeName,
// }
// -> PUT Question:
//   {
//     "questionId": "00000000-0000-0000-0000-000000000001",
//     "questionString": "Java",
//     "categoryQuestionId": "6a454d2b-2668-444e-b36a-566d3e732b4d"
//   }

function* putQuestion(action) {
  try {
    yield put({
      type: "status/onLoading",
    });
    const techId = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/CategoryQuestion?name=Technology", {
        headers: { Authorization: action.payload.token },
      }
    );
    const langId = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/CategoryQuestion?name=Language", {
        headers: { Authorization: action.payload.token },
      }
    );
    const softId = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/CategoryQuestion?name=Soft%20Skill", {
        headers: { Authorization: action.payload.token },
      }
    );

    const ques_draft = yield call(
      createQuestionDraft,
      action.payload,
      techId.data,
      langId.data,
      softId.data
    );

    const ques_old = yield call(
      axios.get,
      `https://leetun2k2-001-site1.gtempurl.com/api/Question?questionId=${action.payload.QuestionId}`, {
        headers: { Authorization: action.payload.token },
      }
    );

    // Category Not Change
    if (ques_old.data[0].categoryQuestionId === ques_draft.CategoryId) {
      console.log("Helllloooooo")
      const quesId = yield call(
        axios.put,
        `https://leetun2k2-001-site1.gtempurl.com/api/Question/${action.payload.QuestionId}`,
        {
          // questionId: action.payload.QuestionId,
          questionString: ques_draft.QuestionName,
          categoryQuestionId: ques_draft.CategoryId,
        }, {
          headers: { Authorization: action.payload.token },
        }
      );
      if (ques_draft.CategoryId === techId.data[0].categoryQuestionId) {
        // Get Question Skills
        const questionSkills = yield call(
          axios.get,
          "https://leetun2k2-001-site1.gtempurl.com/api/QuestionSkill", {
            headers: { Authorization: action.payload.token },
          }
        );

        // Get Question Skill Info
        const quesSkil = yield call(
          getQuestionSkillInfo,
          action.payload.QuestionId,
          questionSkills.data
        );

        // Question Skill change
        if (quesSkil.skillId !== ques_draft.TypeId) {
          const ques = yield call(
            axios.put,
            `https://leetun2k2-001-site1.gtempurl.com/api/QuestionSkill/${quesSkil.questionSkillsId}`,
            {
              questionSkillsId: quesSkil.questionSkillsId,
              questionId: action.payload.QuestionId,
              skillId: ques_draft.TypeId,
            }, {
              headers: { Authorization: action.payload.token },
            }
          );
        }
      }
    }
    // Category Change
    else {
      const quesId = yield call(
        axios.put,
        `https://leetun2k2-001-site1.gtempurl.com/api/Question/${action.payload.QuestionId}`,
        {
          // questionId: action.payload.QuestionId,
          questionString: ques_draft.QuestionName,
          categoryQuestionId: ques_draft.CategoryId,
        }, {
          headers: { Authorization: action.payload.token },
        }
      );
      if (ques_draft.CategoryId === techId.data[0].categoryQuestionId) {
        const ques = yield call(
          axios.post,
          "https://leetun2k2-001-site1.gtempurl.com/api/QuestionSkill",
          {
            questionId: action.payload.QuestionId,
            skillId: ques_draft.TypeId,
          }, {
            headers: { Authorization: action.payload.token },
          }
        );
      } else if (
        ques_old.data[0].categoryQuestionId ===
        techId.data[0].categoryQuestionId
      ) {
        const questionSkills = yield call(
          axios.get,
          "https://leetun2k2-001-site1.gtempurl.com/api/QuestionSkill", {
            headers: { Authorization: action.payload.token },
          }
        );
        const quesSkil = yield call(
          getQuestionSkillInfo,
          action.payload.QuestionId,
          questionSkills.data
        );
        yield call(
          axios.delete,
          `https://leetun2k2-001-site1.gtempurl.com/api/QuestionSkill/${quesSkil.questionSkillsId}`, {
            headers: { Authorization: action.payload.token },
          }
        );
      }
    }
    yield put({
      type: "status/onSuccess",
      payload: "Update question",
    });
    // Load with filter
    yield put({
      type: "questionSaga/getQuestionListWithFilter",
      payload: {
        categoryName: action.payload.categoryName,
        skillId: action.payload.skillId,
        skillName: action.payload.skillName,
        languageId: action.payload.languageId,
        languageName: action.payload.languageName,
        softskill: action.payload.softskill,
        token: action.payload.token
      },
    });
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
    //     message: "message" in error ? error.message : error.response.data,
    //   },
    // });
    console.log("Error: ", error.message)
    yield put({ type: "loading/offLoading" });
    yield put({
      type: "status/onError",
      payload: error.message,
    });
  }
}

// action.payload: {
//   QuestionId: "",
//   CategoryId: "",
// }

function* deleteQuestion(action) {
  try {
    // Delete QuestionSkill (if have)
    yield put({
      type: "status/onLoading",
    });
    const techId = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/CategoryQuestion?name=Technology", {
        headers: { Authorization: action.payload.token },
      }
    );
    if (action.payload.CategoryId === techId.data[0].categoryQuestionId) {
      const questionSkills = yield call(
        axios.get,
        "https://leetun2k2-001-site1.gtempurl.com/api/QuestionSkill", {
          headers: { Authorization: action.payload.token },
        }
      );
      const quesSkil = yield call(
        getQuestionSkillInfo,
        action.payload.QuestionId,
        questionSkills.data
      );

      // Don't in QuestionSkills
      if (quesSkil !== null) {
        yield call(
          axios.delete,
          `https://leetun2k2-001-site1.gtempurl.com/api/QuestionSkill/${quesSkil.questionSkillsId}`, {
            headers: { Authorization: action.payload.token },
          }
        );
      }
    }

    // Delete Question
    yield call(
      axios.delete,
      `https://leetun2k2-001-site1.gtempurl.com/api/Question/${action.payload.QuestionId}`, {
        headers: { Authorization: action.payload.token },
      }
    );
    yield put({
      type: "status/onSuccess",
      payload: "Delete question",
    });
    // Load with filter
    yield put({
      type: "questionSaga/getQuestionListWithFilter",
      payload: {
        categoryName: action.payload.categoryName,
        skillId: action.payload.skillId,
        skillName: action.payload.skillName,
        languageId: action.payload.languageId,
        languageName: action.payload.languageName,
        softskill: action.payload.softskill,
        token: action.payload.token
      },
    });
    // yield put({
    //   type: "error/setError",
    //   payload: {
    //     status: "no",
    //     message: "",
    //   },
    // });
  } catch (error) {
    console.log("Error: ", error.message)
    // yield put({
    //   type: "error/setError",
    //   payload: {
    //     status: "yes",
    //     message: "message" in error ? error.message : error.response.data,
    //   },
    // });
    yield put({ type: "loading/offLoading" });
    yield put({
      type: "status/onError",
      payload: error.message,
    });
  }
}



function* getQuestion(action) {
  yield put({ type: "question/setQuestion", action: action.payload });
}

function* questionSaga() {
  yield all([
    takeEvery("saga/getQuestion", getQuestion),
    takeEvery("questionSaga/getAllQuestion", getAllQuestion),
    takeLatest(
      "questionSaga/getQuestionListWithFilter",
      getQuestionListWithFilter
    ),
    takeEvery("questionSaga/putQuestion", putQuestion),
    takeEvery("questionSaga/postQuestion", postQuestion),
    takeEvery("questionSaga/deleteQuestion", deleteQuestion),
  ]);
}

export default questionSaga;
