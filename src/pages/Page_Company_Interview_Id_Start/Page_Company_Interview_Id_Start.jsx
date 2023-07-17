import { useState, useEffect } from 'react';
import {
    Typography,
    Box,
    Button,
    TextField,
    Card,
    CardHeader,
    CardContent
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// import components
import ScoreTable from './ScoreTable/ScoreTable';
import TechTransfer from './TechTransfer/TechTransfer';
import LangTransfer from './LangTransfer/LangTransfer';
import SoftTransfer from './SoftTransfer/SoftTransfer';
import CateTab from './CateTab/CateTab';

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


    useEffect(() => {
        dispatch({ type: "saga/getInterviewQuestion" })
        return () => {
            dispatch({ type: "question/setQuestion", payload: null })
        }
    }, [])
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
            <form autoComplete='off' onSubmit={handleSubmit}>
                <Box sx={{ border: "1px solid black", borderRadius: 4 }}>
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
                </Box>
                {/* Note and mark */}
                <Grid container sx={{ marginTop: 5 }} columnSpacing={5}>
                    <Grid item md={6}>
                        <TextField
                            label="Note"
                            placeholder="Note"
                            multiline
                            fullWidth
                            variant="outlined"
                            value={note}
                            onChange={event => setNote(event.target.value)}
                            rows={11}
                            sx={{
                                "&": {
                                    height: "100%"
                                },
                                "& .MuiInputBase-root": {
                                    height: "100%",
                                    borderRadius: 5,
                                    border: "1px solid black"
                                }
                            }}
                        />
                    </Grid>
                    <Grid item md={6}>
                        <Card variant="outlined" sx={{ border: "1px solid black", borderRadius: 5 }}>
                            <CardHeader title="Final Score" />
                            <CardContent>
                                <ScoreTable allResult={allQuestion.right} />
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: 4 }}>
                    <Button variant="contained" type="submit">Save record</Button>
                </Box>
            </form >
            : null
    );
}