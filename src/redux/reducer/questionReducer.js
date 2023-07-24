import { createSlice } from "@reduxjs/toolkit";

const questionSlice = createSlice({
    name: "question",
    initialState: null,
    reducers: {
        setInterviewQuestion(state, action) {
            return {
                left: action.payload,
                right: action.payload.map((cate, index) => {
                    if (index == 0) {
                        return {
                            ...cate,
                            questions: []
                        }
                    }
                    else if (index == 1) {
                        return {
                            ...cate,
                            languages: cate.languages.map((language, index) => {
                                return {
                                    ...language,
                                    questions: []
                                }
                            })
                        }
                    }
                    else {
                        return {
                            ...cate,
                            skills: cate.skills.map((skill, index) => {
                                return {
                                    ...skill,
                                    questions: []
                                }
                            })
                        }
                    }
                })
            }
        },
        setQuestion(state, action) {
            return action.payload
        },
        transferQuestion(state, action) {
            let addedQuestion = null
            let left = state.left.map((cate, cateIndex) => {
                if (cateIndex != action.payload.categoryOrder) {
                    return cate
                }
                else {
                    if (cateIndex == 0) {
                        return {
                            ...cate,
                            questions: cate.questions.filter((ques) => {
                                if (ques.questionid == action.payload.chosenQuestionId) {
                                    addedQuestion = { ...ques }
                                    return false
                                }
                                return true
                            })
                        }
                    }
                    else if (cateIndex == 1) {
                        return {
                            ...cate,
                            languages: cate.languages.map((language, languageIndex) => {
                                if (languageIndex != action.payload.subOrder) {
                                    return language
                                }
                                else {
                                    return {
                                        ...language,
                                        questions: language.questions.filter((ques) => {
                                            if (ques.questionid == action.payload.chosenQuestionId) {
                                                addedQuestion = { ...ques }
                                                return false
                                            }
                                            return true
                                        })
                                    }
                                }
                            })
                        }
                    }
                    else if (cateIndex == 2) {
                        return {
                            ...cate,
                            skills: cate.skills.map((skill, skillIndex) => {
                                if (skillIndex != action.payload.subOrder) {
                                    return skill
                                }
                                else {
                                    return {
                                        ...skill,
                                        questions: skill.questions.filter((ques) => {
                                            if (ques.questionid == action.payload.chosenQuestionId) {
                                                addedQuestion = { ...ques }
                                                return false
                                            }
                                            return true
                                        })
                                    }
                                }
                            })
                        }
                    }
                }
            })
            let right = state.right.map((cate, cateIndex) => {
                if (cateIndex != action.payload.categoryOrder) {
                    return cate
                }
                else {
                    if (cateIndex == 0) {
                        return {
                            ...cate,
                            questions: cate.questions.concat(
                                {
                                    ...addedQuestion,
                                    score: ""
                                })
                        }
                    }
                    else if (cateIndex == 1) {
                        return {
                            ...cate,
                            languages: cate.languages.map((language, languageIndex) => {
                                if (languageIndex != action.payload.subOrder) {
                                    return language
                                }
                                else {
                                    return {
                                        ...language,
                                        questions: language.questions.concat(
                                            {
                                                ...addedQuestion,
                                                score: ""
                                            }
                                        )
                                    }
                                }
                            })
                        }
                    }
                    else if (cateIndex == 2) {
                        return {
                            ...cate,
                            skills: cate.skills.map((skill, skillIndex) => {
                                if (skillIndex != action.payload.subOrder) {
                                    return skill
                                }
                                else {
                                    return {
                                        ...skill,
                                        questions: skill.questions.concat(
                                            {
                                                ...addedQuestion,
                                                score: ""
                                            }
                                        )
                                    }
                                }
                            })
                        }
                    }
                }
            })
            return {
                left: left,
                right: right
            }
        },
        scoreQuestion(state, action) {
            let left = state.left
            let right = state.right.map((cate, cateIndex) => {
                if (cateIndex != action.payload.categoryOrder) {
                    return cate
                }
                else {
                    if (cateIndex == 0) {
                        return {
                            ...cate,
                            questions: cate.questions.map(ques => {
                                if (ques.questionid != action.payload.chosenQuestionId) {
                                    return ques
                                }
                                else {
                                    return {
                                        ...ques,
                                        score: action.payload.newScore
                                    }
                                }
                            })
                        }
                    }
                    else if (cateIndex == 1) {
                        return {
                            ...cate,
                            languages: cate.languages.map((language, languageIndex) => {
                                if (languageIndex != action.payload.subOrder) {
                                    return language
                                }
                                else {
                                    return {
                                        ...language,
                                        questions: language.questions.map(ques => {
                                            if (ques.questionid != action.payload.chosenQuestionId) {
                                                return ques
                                            }
                                            else {
                                                return {
                                                    ...ques,
                                                    score: action.payload.newScore
                                                }
                                            }
                                        })
                                    }
                                }
                            })
                        }
                    }
                    else if (cateIndex == 2) {
                        return {
                            ...cate,
                            skills: cate.skills.map((skill, skillIndex) => {
                                if (skillIndex != action.payload.subOrder) {
                                    return skill
                                }
                                else {
                                    return {
                                        ...skill,
                                        questions: skill.questions.map(ques => {
                                            if (ques.questionid != action.payload.chosenQuestionId) {
                                                return ques
                                            }
                                            else {
                                                return {
                                                    ...ques,
                                                    score: action.payload.newScore
                                                }
                                            }
                                        })
                                    }
                                }
                            })
                        }
                    }
                }
            })
            return {
                left: left,
                right: right
            }
        }
    }
})

export default questionSlice