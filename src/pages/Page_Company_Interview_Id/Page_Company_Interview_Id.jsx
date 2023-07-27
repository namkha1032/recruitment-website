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
import useGetRole from '../../hooks/useGetRole';
// import components
// import ScoreTable from '../Page_Company_Interview_Id_Start/ScoreTable/ScoreTable';
import ScoreTable from '../../components/ScoreTable/ScoreTable';
import RadarPlot from './RadarPlot/RadarPlot';
import QuestionTable from './QuestionTable/QuestionTable';
import NoteField from './NoteField/NoteField';
import Page_Interview_Id from "../Page_Interview_Id/Page_Interview_Id";

import GigaCard from '../../components/GigaCard/GigaCard';
import GigaCardHeader from '../../components/GigaCardHeader/GigaCardHeader';
import GigaCardBody from '../../components/GigaCardBody/GigaCardBody';
import SportsScoreIcon from '@mui/icons-material/SportsScore';

import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import EditNoteIcon from '@mui/icons-material/EditNote';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
// import { useNavItem } from '@restart/ui/esm/NavItem';
const Page_Company_Interview_Id = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const role = useGetRole()
    useEffect(() => {
        dispatch({ type: "saga/getInterviewId" })
    }, [])
    const interview = useSelector(state => state.interview)
    console.log("interview: ", interview)
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
                {role == "admin" ?
                    <>
                        <Divider sx={{
                            marginY: 10,
                            "&::before, &::after": {
                                borderColor: "black",
                                borderWidth: "1px"
                            },
                        }}>
                            <Button variant="contained" sx={{ backgroundColor: "black", color: "white", fontSize: 25, borderRadius: 100 }}>
                                RESULT OF THE INTERVIEW
                            </Button>
                        </Divider>
                        <Grid container spacing={4}>
                            <Grid item md={6} xs={12}>
                                <GigaCard>
                                    <GigaCardHeader color={"black"} headerIcon={<EditNoteIcon sx={{ fontSize: "inherit" }} />}>
                                        Note
                                    </GigaCardHeader>
                                    <GigaCardBody>
                                        <Divider />
                                        <NoteField note={interview.note} />
                                        <Divider />
                                    </GigaCardBody>
                                </GigaCard >
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <GigaCard>
                                    <GigaCardHeader color={"black"} headerIcon={<QuestionMarkIcon sx={{ fontSize: "inherit" }} />}>
                                        Questions
                                    </GigaCardHeader>
                                    <GigaCardBody>
                                        <QuestionTable round={interview.round} />
                                    </GigaCardBody>
                                </GigaCard>
                            </Grid>
                            <Grid item md={12}>
                                <GigaCard>
                                    <Grid container>
                                        <Grid item md={6} xs={12} sx={{ display: "flex", flexDirection: "column" }}>
                                            <GigaCardHeader color={"black"} headerIcon={<TroubleshootIcon sx={{ fontSize: "inherit" }} />}>
                                                Analysis
                                            </GigaCardHeader>
                                            <GigaCardBody>
                                                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                                                    <RadarPlot allResult={interview.round} />
                                                </Box>
                                            </GigaCardBody>
                                        </Grid>
                                        <Grid item md={6} xs={12} sx={{ display: "flex", flexDirection: "column" }}>
                                            <GigaCardHeader color={"black"} headerIcon={<SportsScoreIcon sx={{ fontSize: "inherit" }} />}>
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
                    : <Box />}
            </>
        }</>
    )
}

export const Xoa = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const role = useGetRole()
    useEffect(() => {
        dispatch({ type: "saga/getInterviewId" })
    }, [])
    const interview = useSelector(state => state.interview)
    console.log("interview: ", interview)
    function handleStart() {
        navigate("/company/interview/1/start")
    }
    return (
        interview ?
            <>
                <Divider sx={{
                    marginY: 10,
                    "&::before, &::after": {
                        borderColor: "black",
                        borderWidth: "1px"
                    },
                }}>
                    <Button variant="contained" sx={{ backgroundColor: "black", color: "white", fontSize: 25, borderRadius: 100 }}>
                        RESULT OF THE INTERVIEW
                    </Button>
                </Divider>
                <Grid container spacing={4}>
                    <Grid item md={6} xs={12}>
                        <GigaCard>
                            <GigaCardHeader color={"black"} headerIcon={<EditNoteIcon sx={{ fontSize: "inherit" }} />}>
                                Note
                            </GigaCardHeader>
                            <GigaCardBody>
                                <Divider />
                                <NoteField note={interview.note} />
                                <Divider />
                            </GigaCardBody>
                        </GigaCard >
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <GigaCard>
                            <GigaCardHeader color={"black"} headerIcon={<QuestionMarkIcon sx={{ fontSize: "inherit" }} />}>
                                Questions
                            </GigaCardHeader>
                            <GigaCardBody>
                                <QuestionTable round={interview.round} />
                            </GigaCardBody>
                        </GigaCard>
                    </Grid>
                    <Grid item md={12}>
                        <GigaCard>
                            <Grid container>
                                <Grid item md={6} xs={12} sx={{ display: "flex", flexDirection: "column" }}>
                                    <GigaCardHeader color={"black"} headerIcon={<TroubleshootIcon sx={{ fontSize: "inherit" }} />}>
                                        Analysis
                                    </GigaCardHeader>
                                    <GigaCardBody>
                                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                                            <RadarPlot allResult={interview.round} />
                                        </Box>
                                    </GigaCardBody>
                                </Grid>
                                <Grid item md={6} xs={12} sx={{ display: "flex", flexDirection: "column" }}>
                                    <GigaCardHeader color={"black"} headerIcon={<SportsScoreIcon sx={{ fontSize: "inherit" }} />}>
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
            : null
    )
}

export default Page_Company_Interview_Id