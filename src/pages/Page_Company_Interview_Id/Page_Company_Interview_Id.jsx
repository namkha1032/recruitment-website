import { useState, useEffect } from 'react';
import {
    Tabs,
    Tab,
    Typography,
    Box,
    Button,
    TextField,
    Card,
    CardHeader,
    CardContent,
    Divider,
    Chip
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Plot from 'react-plotly.js';
// import components
import ScoreTable from '../Page_Company_Interview_Id_Start/ScoreTable/ScoreTable';
import RadarPlot from './RadarPlot/RadarPlot';
import QuestionTable from './QuestionTable/QuestionTable';
import NoteField from './NoteField/NoteField';
import Page_Interview_Id from "../Page_Interview_Id/Page_Interview_Id";

import GigaCard from '../../components/GigaCard/GigaCard';
import GigaCardHeader from '../../components/GigaCardHeader/GigaCardHeader';
import GigaCardBody from '../../components/GigaCardBody/GigaCardBody';
import SportsScoreIcon from '@mui/icons-material/SportsScore';

import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
// import { useNavItem } from '@restart/ui/esm/NavItem';
const Page_Company_Interview_Id = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({ type: "saga/getInterviewId" })
    }, [])
    const interview = useSelector(state => state.interview)
    const interviewer = useSelector(state => state.interviewer)
    const room = useSelector(state => state.room)
    const shift = useSelector(state => state.shift)
    const error = useSelector(state => state.error)
    console.log("interview: ", interview)
    console.log("interviewer: ", interviewer)
    console.log("room: ", room)
    console.log("shift: ", shift)
    console.log("error: ", error)
    function handleStart() {
        navigate("/company/interview/1/start")
    }
    return (
        <>{interview &&
            <>
                <Page_Interview_Id />
                <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: 4, marginBottom: 4 }}>
                    <Button variant='contained' onClick={handleStart}>Start</Button>
                </Box>
                <Divider sx={{
                    marginY: 10,
                    "&::before, &::after": {
                        borderColor: "error.main",
                        borderWidth: "1px"
                    },
                }}>
                    <Button variant="contained" color="error" sx={{ fontSize: 25, borderRadius: 100 }}>
                        RESULT OF THE INTERVIEW
                    </Button>
                </Divider>
                <Grid container spacing={4}>
                    <Grid item md={6} xs={12}>
                        <NoteField note={interview.note} />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <QuestionTable round={interview.round} />
                    </Grid>
                    <Grid item md={12}>
                        <GigaCard>
                            <Grid container>
                                <Grid item md={6} xs={12} sx={{ display: "flex", flexDirection: "column" }}>
                                    <GigaCardHeader color={"primary.main"} headerIcon={<TroubleshootIcon sx={{ fontSize: "inherit" }} />}>
                                        Analysis
                                    </GigaCardHeader>
                                    <GigaCardBody>
                                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                                            <RadarPlot allResult={interview.round} />
                                        </Box>
                                    </GigaCardBody>
                                </Grid>
                                <Grid item md={6} xs={12} sx={{ display: "flex", flexDirection: "column" }}>
                                    <GigaCardHeader color={"primary.main"} headerIcon={<SportsScoreIcon sx={{ fontSize: "inherit" }} />}>
                                        Final Score
                                    </GigaCardHeader>
                                    <GigaCardBody>
                                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                                            <ScoreTable allResult={interview.round} />
                                        </Box>
                                    </GigaCardBody>
                                </Grid>
                            </Grid>
                        </GigaCard>
                    </Grid>
                    <Grid item md={12} sx={{ display: "flex", justifyContent: "flex-end", columnGap: 4 }}>
                        <Button size={"large"} color="error" variant="contained" startIcon={<CloseIcon />}>
                            Reject
                        </Button>
                        <Button size={"large"} color="success" variant="contained" startIcon={<CheckIcon />}>
                            Accept
                        </Button>
                    </Grid>

                </Grid>

            </>
        }</>
    )
}

export default Page_Company_Interview_Id