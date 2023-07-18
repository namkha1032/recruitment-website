import { useState, useEffect, useRef } from 'react';
import {
    Typography,
    Box,
    Button,
    TextField,
    Card,
    CardHeader,
    CardContent,
    Paper
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// import components
import ScoreTable from './ScoreTable/ScoreTable';
import TechTransfer from './TechTransfer/TechTransfer';
import LangTransfer from './LangTransfer/LangTransfer';
import SoftTransfer from './SoftTransfer/SoftTransfer';
import CateTab from './CateTab/CateTab';
// import style
import boxStyle from '../../assets/js/boxStyle';
import "./Page_Company_Interview_Id_Start.scss"
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



    let [note, setNote] = useState("<h1>About skill</h1>")
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
        navigate("/company/interview/1")
    }
    return (
        leftSoft ?
            <>
                <form autoComplete='off' onSubmit={handleSubmit}>
                    <Box sx={boxStyle}>
                        {/* <Paper elevation={24} sx={{ borderRadius: 4 }}> */}
                        <CateTab currentCateTab={currentCateTab} setCurrentCateTab={setCurrentCateTab} />
                        {/* Soft Skill Questions */}
                        {currentCateTab == 0
                            ? <SoftTransfer leftSoft={leftSoft} rightSoft={rightSoft} />
                            : null}
                        {/* Language Skill */}
                        {currentCateTab == 1
                            ? <LangTransfer leftLang={leftLang} rightLang={rightLang} />
                            : null}
                        {/* Technical Questions */}
                        {currentCateTab == 2
                            ? <TechTransfer leftTech={leftTech} rightTech={rightTech} />
                            : null}
                        {/* </Paper> */}
                    </Box>
                    {/* Note and mark */}
                    <Grid container sx={{ marginTop: 5 }} columnSpacing={5}>
                        <Grid item md={6}>
                            <Box sx={{ ...boxStyle, height: "100%", padding: 2 }}>
                                <ReactQuill theme="snow" value={note} onChange={setNote} />
                            </Box>
                        </Grid>
                        <Grid item md={6}>
                            {/* <Card variant="outlined" sx={{ border: "1px solid black", borderRadius: 5 }}> */}
                            <Box sx={boxStyle}>
                                <CardHeader title="Final Score" />
                                <CardContent>
                                    <ScoreTable allResult={allQuestion.right} />
                                </CardContent>
                            </Box>
                            {/* </Card> */}
                        </Grid>
                    </Grid>
                    <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: 4 }}>
                        <Button variant="contained" type="submit">Save record</Button>
                    </Box>
                </form >
            </>
            : null
    );
}