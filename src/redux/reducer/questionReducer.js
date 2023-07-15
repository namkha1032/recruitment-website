import { createSlice } from "@reduxjs/toolkit";

const questionSlice = createSlice({
    name: "question",
    initialState: null,
    reducers: {
        setInterviewQuestion(state, action) {
            return {
                left: action.payload,
                right: action.payload.map((cate, index) => {
                    if (index < 2) {
                        return {
                            ...cate,
                            questions: []
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
        transferSoftLangQuestion(state, action) {
            let addedQuestion = null
            let left = state.left.map((cate, cateIndex) => {
                if (cateIndex != action.payload.categoryOrder) {
                    return cate
                }
                else {
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
            })
            let right = state.right.map((cate, cateIndex) => {
                if (cateIndex != action.payload.categoryOrder) {
                    return cate
                }
                else {
                    return {
                        ...cate,
                        questions: cate.questions.concat(
                            {
                                ...addedQuestion,
                                score: ""
                            })
                    }
                }
            })
            return {
                left: left,
                right: right
            }
        },
        transferTechQuestion(state, action) {
            let addedQuestion = null
            let left = state.left.map((cate, cateIndex) => {
                if (cateIndex != action.payload.categoryOrder) {
                    return cate
                }
                else {
                    return {
                        ...cate,
                        skills: cate.skills.map((skill, skillIndex) => {
                            if (skillIndex != action.payload.skillOrder) {
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
            })
            let right = state.right.map((cate, cateIndex) => {
                if (cateIndex != action.payload.categoryOrder) {
                    return cate
                }
                else {
                    return {
                        ...cate,
                        skills: cate.skills.map((skill, skillIndex) => {
                            if (skillIndex != action.payload.skillOrder) {
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
            })
            return {
                left: left,
                right: right
            }
            // return state
            // return action.payload
        },
        updateNewSoftLangScore(state, action) {
            let left = state.left
            let right = state.right.map((cate, cateIndex) => {
                if (cateIndex != action.payload.categoryOrder) {
                    return cate
                }
                else {
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
            })
            return {
                left: left,
                right: right
            }
            // return state
            // return action.payload
        },
        updateNewTechScore(state, action) {
            let left = state.left
            let right = state.right.map((cate, cateIndex) => {
                if (cateIndex != action.payload.categoryOrder) {
                    return cate
                }
                else {
                    return {
                        ...cate,
                        skills: cate.skills.map((skill, skillIndex) => {
                            if (skillIndex != action.payload.skillOrder) {
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
            })
            return {
                left: left,
                right: right
            }
            // return state
            // return action.payload
        }
    }
})

export default questionSlice