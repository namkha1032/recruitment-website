function cleanStore(dispatch) {
    dispatch({ type: "error/setError", payload: { status: "idle", message: "" } })
    dispatch({ type: "application/setApplication", payload: null })
    dispatch({ type: "candidate/setCandidate", payload: null })
    dispatch({ type: "cvList/setCvList", payload: null })
    dispatch({ type: "cv/setCv", payload: null })
    dispatch({ type: "department/setDepartment", payload: null })
    dispatch({ type: "eventList/setEventList", payload: null })
    dispatch({ type: "interviewer/setInterviewer", payload: null })
    dispatch({ type: "interviewList/setInterviewList", payload: null })
    dispatch({ type: "interview/setInterview", payload: null })
    dispatch({ type: "language/setLanguage", payload: null })
    dispatch({ type: "positionList/setPositionList", payload: null })
    dispatch({ type: "position/setPosition", payload: null })
    dispatch({ type: "questionList/setQuestionList", payload: null })
    dispatch({ type: "question/setQuestion", payload: null })
    dispatch({ type: "room/setRoom", payload: null })
    dispatch({ type: "shift/setShift", payload: null })
    dispatch({ type: "skill/setSkill", payload: null })
    dispatch({ type: "event/setEvent", payload: null })
    dispatch({ type: "interviewListCandidate/setInterviewList", payload: null})
    dispatch({ type: "candidateJoinEvent/setCandidateJoinEvent", payload: null})
    dispatch({ type: "interviewidInfo/setInterviewidInfo", payload: null})
    dispatch({ type: "cvCandidate/setCvCandidate", payload: null })
    dispatch({ type: "loading/offLoading" })
    dispatch({ type: "status/onReset" })
    dispatch({ type: "eventNavigate/onReset" })
    dispatch({ type: "infoApplication/setInfoApplication", payload: null })
    dispatch({ type: "requirement/setRequirement", payload: null })
    

}

export default cleanStore