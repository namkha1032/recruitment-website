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
import AlertDialog from '../../components/AlertDialog/AlertDialog';

import GigaCard from '../../components/GigaCard/GigaCard';
import GigaCardHeader from '../../components/GigaCardHeader/GigaCardHeader';
import GigaCardBody from '../../components/GigaCardBody/GigaCardBody';
import SportsScoreIcon from '@mui/icons-material/SportsScore';

import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import EditNoteIcon from '@mui/icons-material/EditNote';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import TitleDivider from '../../components/TitleDivider/TitleDivider';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import BlackContainedButton from '../../components/BlackContainedButton/BlackContainedButton';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
// import { useNavItem } from '@restart/ui/esm/NavItem';
const Page_Company_Interview_Id = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const theme = useTheme()
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const isSm = useMediaQuery(theme.breakpoints.up('sm'));
    const role = useGetRole();
    const [openAlertStart, setOpenAlertStart] = useState(false)
    const [openAlertAccept, setOpenAlertAccept] = useState(false)
    const [openAlertReject, setOpenAlertReject] = useState(false)
    useEffect(() => {
        dispatch({ type: "interviewSaga/getInterviewId" })
    }, [])
    const interview = useSelector(state => state.interviewResult)
    console.log("interview: ", interview)
    function handleStart() {
        navigate("/company/interview/1/start")
    }
    function handleAccept() {
        setOpenAlertAccept(false)
    }
    function handleReject() {
        setOpenAlertReject(false)
    }
    return (
        interview && role
            ? <>
                <Page_Interview_Id />
                {role == "admin" || role == "interviewer"
                    ?
                    <>
                        <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: 4, marginBottom: 4 }}>
                            <BlackContainedButton handleClick={() => { setOpenAlertStart(true) }}>Start</BlackContainedButton>
                        </Box>
                        <AlertDialog
                            openAlert={openAlertStart} setOpenAlert={setOpenAlertStart}
                            alertMessage={"Are you sure you want to start this interview?"}
                            successfulMessage={""}
                            handleSubmit={handleStart} />
                    </>
                    : null}
                {role == "admin" ?
                    <>
                        <TitleDivider>
                            RESULT OF THE INTERVIEW
                        </TitleDivider>
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
                            <Grid item md={12} sx={{ width: "100%" }}>
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
                            <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end", columnGap: 4 }}>
                                <Button
                                    onClick={() => { setOpenAlertReject(true) }}
                                    size={"large"} sx={isSm ? null : { width: "100%" }} color="error" variant="contained" startIcon={<CloseIcon />}>
                                    Reject
                                </Button>
                                <Button
                                    onClick={() => { setOpenAlertAccept(true) }}
                                    size={"large"} sx={isSm ? null : { width: "100%" }} color="success" variant="contained" startIcon={<CheckIcon />}>
                                    Accept
                                </Button>
                            </Grid>
                        </Grid>

                        <AlertDialog
                            openAlert={openAlertAccept} setOpenAlert={setOpenAlertAccept}
                            alertMessage={"Are you sure you want to accept this candidate"}
                            successfulMessage={""}
                            handleSubmit={handleAccept} />
                        <AlertDialog
                            openAlert={openAlertReject} setOpenAlert={setOpenAlertReject}
                            alertMessage={"Are you sure you want to reject this candidate"}
                            successfulMessage={""}
                            handleSubmit={handleReject} />
                    </>
                    : <Box />}
            </>
            : <Backdrop
                sx={{ backgroundColor: theme.palette.grey[200] }}
                open={true}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
    )
}


export default Page_Company_Interview_Id