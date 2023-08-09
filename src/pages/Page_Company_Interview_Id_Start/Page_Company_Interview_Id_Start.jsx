import { useState, useEffect, useRef } from 'react';
import {
    Box,
    Button
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Backdrop from '@mui/material/Backdrop';
// import components
// import ScoreTable from './ScoreTable/ScoreTable';
import ScoreTable from '../../components/ScoreTable/ScoreTable';
import QuestionTransfer from './QuestionTransfer/QuestionTransfer';
import CateTab from '../../components/CateTab/CateTab';
import GigaCard from '../../components/GigaCard/GigaCard';
import GigaCardBody from '../../components/GigaCardBody/GigaCardBody';
import GigaCardHeader from '../../components/GigaCardHeader/GigaCardHeader';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import EditNoteIcon from '@mui/icons-material/EditNote';
import "./Page_Company_Interview_Id_Start.scss"
import CircularProgress from '@mui/material/CircularProgress';
import TitleDivider from '../../components/TitleDivider/TitleDivider';
import cleanStore from '../../utils/cleanStore';
import AlertDialog from '../../components/AlertDialog/AlertDialog';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Page_Interview_Id from '../Page_Interview_Id/Page_Interview_Id';
import Unauthorized from '../../components/Unauthorized/Unauthorized';

import useGetRole from '../../hooks/useGetRole';

import { useTheme } from '@mui/material/styles';
export default function Page_Company_Interview_Id_Start() {
    const dispatch = useDispatch()
    const theme = useTheme()
    let allQuestion = useSelector(state => state.question)
    const { interviewid } = useParams()
    let leftSoft = allQuestion ? allQuestion.left[0] : null
    let leftLang = allQuestion ? allQuestion.left[1] : null
    let leftTech = allQuestion ? allQuestion.left[2] : null
    let rightSoft = allQuestion ? allQuestion.right[0] : null
    let rightLang = allQuestion ? allQuestion.right[1] : null
    let rightTech = allQuestion ? allQuestion.right[2] : null
    const user = useSelector(state => state.user)
    const candidate = useSelector(state => state.candidate)
    const cv = useSelector(state => state.cv)
    const interviewidInfo = useSelector(state => state.interviewidInfo)
    const interviewskill = useSelector(state => state.interviewskill)
    const interviewposition = useSelector(state => state.interviewposition)
    const interviewStart = useSelector(state => state.interviewStart)
    const role = useGetRole()

    const condition = allQuestion && role && candidate && interviewidInfo && interviewskill && interviewposition && cv
    const viewPage = condition ? "block" : "none"
    const viewLoading = condition ? false : true
    // const isAuthorized = interviewStart && user && interviewStart.interviewer.interviewerId == user.interviewerId
    // const viewSection = isAuthorized ? "block" : "none"
    // const viewUnauthorized = isAuthorized ? false : true

    const navigate = useNavigate()
    let [currentCateTab, setCurrentCateTab] = useState(0);
    let [openAlert, setOpenAlert] = useState(false)
    let [errorSnackbar, setErrorSnackbar] = useState(false)
    let [note, setNote] = useState("")
    const newError = useSelector(state => state.error)
    const noteRef = useRef()
    useEffect(() => {
        dispatch({
            type: "interviewSaga/getQuestionsForStartingIntervew", payload: {
                interviewid: interviewid,
                token: user.token
            }
        })
        return () => {
            cleanStore(dispatch)
        }
    }, [])
    useEffect(() => {
        if (newError.status == "no") {
            setTimeout(() => {
                const idToNavigate = newError.message
                cleanStore(dispatch)
                navigate(`/company/interview/${idToNavigate}`)
            }, 2000)
        }
        if (newError.status == "yes") {
            setErrorSnackbar(true)
            setTimeout(() => {
                setErrorSnackbar(false)
                dispatch({ type: "error/setError", payload: { status: "idle", message: "" } })
            }, 5000)
        }
    }, [newError])
    useEffect(() => {
        if (noteRef.current) {
            console.log("noteRef: ", noteRef)
            noteRef.current.innerHTML = note
        }
    }, [noteRef])
    useEffect(() => {
        if (user && interviewStart) {
            if (interviewStart.interviewer.interviewerId != user.interviewerId) {
                navigate("/unauthorized")
            }
        }
    }, [user, interviewStart])
    function handleSubmit(e) {
        let newObj = {
            interviewId: interviewid,
            notes: note,
            rounds: [
                // rightSoft,
                // rightLang,
                // rightTech
            ]
        }
        for (let softRes of rightSoft.questions) {
            let newSoftRes = {
                questionId: softRes.questionid,
                score: softRes.score
            }
            newObj.rounds.push(newSoftRes)
        }
        for (let langRes of rightLang.languages[0].questions) {
            let newLangRes = {
                questionId: langRes.questionid,
                score: langRes.score
            }
            newObj.rounds.push(newLangRes)
        }
        for (let skill of rightTech.skills) {
            for (let techRes of skill.questions) {
                let newTechRes = {
                    questionId: techRes.questionid,
                    score: techRes.score
                }
                newObj.rounds.push(newTechRes)
            }
        }
        dispatch({
            type: "interviewSaga/scoreInterview", payload: {
                result: newObj,
                interviewid: interviewid,
                token: user.token
            }
        })
    }
    function preprocessing() {
        if (rightSoft.questions.length == 0) {
            dispatch({ type: "error/setError", payload: { status: "yes", message: `Please ask some Soft Skill questions.` } })
            return;
        }
        if (rightLang.languages[0].questions.length == 0) {
            dispatch({ type: "error/setError", payload: { status: "yes", message: `Please ask some Language questions.` } })
            return;
        }
        for (let skill of rightTech.skills) {
            if (skill.questions.length == 0) {
                dispatch({ type: "error/setError", payload: { status: "yes", message: `Please ask some ${skill.skillname} questions.` } })
                return;
            }
        }
        for (let softRes of rightSoft.questions) {
            if (softRes.score == "") {
                dispatch({ type: "error/setError", payload: { status: "yes", message: `Please give a score for question '${softRes.questionstring}'` } })
                return
            }
        }
        for (let langRes of rightLang.languages[0].questions) {
            if (langRes.score == "") {
                dispatch({ type: "error/setError", payload: { status: "yes", message: `Please give a score for question '${langRes.questionstring}'` } })
                return
            }
        }
        for (let skill of rightTech.skills) {
            for (let techRes of skill.questions) {
                if (techRes.score == "") {
                    dispatch({ type: "error/setError", payload: { status: "yes", message: `Please give a score for question '${techRes.questionstring}'` } })
                    return
                }
            }
        }
        setOpenAlert(true)
    }
    console.log("note: ", note)
    return (
        <>
            <Box sx={{ display: viewPage }}>
                {
                    allQuestion && user && role == "interviewer" && interviewStart
                        ?
                        <>
                            <Page_Interview_Id />
                            <Box sx={{ marginY: 4 }}>
                                <TitleDivider>
                                    Score Interview
                                </TitleDivider>
                            </Box>
                            <Grid container spacing={4}>
                                <Grid item xs={12}>
                                    <GigaCard>
                                        <GigaCardHeader color={"black"} headerIcon={<QuestionMarkIcon sx={{ fontSize: "inherit" }} />}>
                                            Questions
                                        </GigaCardHeader>
                                        <GigaCardBody>
                                            <CateTab currentCateTab={currentCateTab} setCurrentCateTab={setCurrentCateTab} />
                                            {/* Soft Skill */}
                                            {currentCateTab == 0
                                                ? <QuestionTransfer leftTable={leftSoft} rightTable={rightSoft} cate={0} />
                                                : null}
                                            {/* Language Skill */}
                                            {currentCateTab == 1
                                                ? <QuestionTransfer leftTable={leftLang} rightTable={rightLang} cate={1} />
                                                : null}
                                            {/* Technology Skill */}
                                            {currentCateTab == 2
                                                ? <QuestionTransfer leftTable={leftTech} rightTable={rightTech} cate={2} />
                                                : null}
                                        </GigaCardBody>
                                    </GigaCard>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <GigaCard>
                                        <GigaCardHeader color={"black"} headerIcon={<EditNoteIcon sx={{ fontSize: "inherit" }} />}>
                                            Note
                                        </GigaCardHeader>
                                        <GigaCardBody>
                                            <ReactQuill theme="snow" value={note} onChange={setNote} />
                                        </GigaCardBody>
                                    </GigaCard>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    {/* <Card variant="outlined" sx={{ border: "1px solid black", borderRadius: 5 }}> */}
                                    <GigaCard>
                                        <GigaCardHeader color={"black"} headerIcon={<SportsScoreIcon sx={{ fontSize: "inherit" }} />}>
                                            Final Score
                                        </GigaCardHeader>
                                        <GigaCardBody>
                                            <ScoreTable allResult={allQuestion.right} />
                                        </GigaCardBody>
                                    </GigaCard>
                                    {/* </Card> */}
                                </Grid>
                            </Grid>
                            <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: 4 }}>
                                <Button variant="contained" onClick={preprocessing} sx={{
                                    backgroundColor: "black", "&:hover": {
                                        backgroundColor: "grey"
                                    }
                                }}>Save record</Button>
                            </Box>
                            <AlertDialog
                                openAlert={openAlert}
                                setOpenAlert={setOpenAlert}
                                alertMessage={"Are you sure you want to end this interview?"}
                                successfulMessage={"Result saved successfully"}
                                handleSubmit={handleSubmit}
                            />
                            <Snackbar
                                // anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                                open={errorSnackbar}
                                autoHideDuration={4000}
                                onClose={() => { setErrorSnackbar(false) }}
                            // message="I love snacks"
                            // key={vertical + horizontal}
                            >
                                <Alert variant="filled" onClose={() => { setErrorSnackbar(false) }} severity="error" sx={{ width: '100%' }}>
                                    {newError.message}
                                </Alert>
                            </Snackbar>

                        </>
                        :
                        <Unauthorized />
                }
            </Box>
            <Backdrop
                sx={{ backgroundColor: theme.palette.grey[200] }}
                open={viewLoading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    );
}