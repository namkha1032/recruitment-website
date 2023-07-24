function cleanStore(dispatch) {
    dispatch({ type: "error/setError", payload: { status: "idle", message: "" } })
    dispatch({ type: "candidate/setCandidate", payload: null })
    dispatch({ type: "cvList/setCvList", payload: null })
    dispatch({ type: "department/setDepartment", payload: null })
    dispatch({ type: "interviewer/setInterviewer", payload: null })
    dispatch({ type: "interview/setInterview", payload: null })
    dispatch({ type: "language/setLanguage", payload: null })
    dispatch({ type: "position/setPosition", payload: null })
    dispatch({ type: "question/setQuestion", payload: null })
    dispatch({ type: "room/setRoom", payload: null })
    dispatch({ type: "shift/setShift", payload: null })
    dispatch({ type: "skill/setSkill", payload: null })
}

export default cleanStore