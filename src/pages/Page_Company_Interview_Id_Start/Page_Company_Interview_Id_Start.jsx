import { useState, useEffect, useRef } from 'react';
import {
    Typography,
    Box,
    Button,
    TextField,
    Card,
    CardHeader,
    CardContent,
    Paper,
    Divider
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
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
export default function Page_Company_Interview_Id_Start() {
    const dispatch = useDispatch()

    let allQuestion = useSelector(state => state.question)

    let leftSoft = allQuestion ? allQuestion.left[0] : null
    let leftLang = allQuestion ? allQuestion.left[1] : null
    let leftTech = allQuestion ? allQuestion.left[2] : null
    let rightSoft = allQuestion ? allQuestion.right[0] : null
    let rightLang = allQuestion ? allQuestion.right[1] : null
    let rightTech = allQuestion ? allQuestion.right[2] : null

    let [currentCateTab, setCurrentCateTab] = useState(0);

    let [note, setNote] = useState("")
    const noteRef = useRef()
    useEffect(() => {
        dispatch({ type: "saga/getInterviewQuestion" })
        return () => {
            dispatch({ type: "question/setQuestion", payload: null })
        }
    }, [])
    useEffect(() => {
        if (noteRef.current) {
            console.log("noteRef: ", noteRef)
            noteRef.current.innerHTML = note
        }
    })
    const navigate = useNavigate()
    function handleSubmit(e) {
        e.preventDefault()
        const newObj = {
            interviewid: "123",
            note: note,
            round: [
                rightSoft,
                rightLang,
                rightTech
            ]
        }
        dispatch({ type: "saga/scoreInterview", payload: newObj })
        navigate("/company/interview/00000000-0000-0000-0000-000000000001")
    }
    console.log("note: ", note)
    return (
        leftSoft ?
            <>
                <TitleDivider>
                    Score Interview
                </TitleDivider>
                <form autoComplete='off' onSubmit={handleSubmit}>
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
                        <Button variant="contained" type="submit" sx={{
                            backgroundColor: "black", "&:hover": {
                                backgroundColor: "grey"
                            }
                        }}>Save record</Button>
                    </Box>
                </form >
            </>
            :
            <Box sx={{ minHeight: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <CircularProgress color="inherit" />
            </Box>
    );
}