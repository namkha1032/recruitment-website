import { useState, useEffect } from 'react';
import {
    Box,
    Button,
    Divider
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
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

import { Pass, Fail } from '../../components/Label/LabelNo';
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
    const { interviewid } = useParams()
    const user = useSelector(state => state.user)
    const candidate = useSelector(state => state.candidate)
    const interviewidInfo = useSelector(state => state.interviewidInfo)
    const interviewskill = useSelector(state => state.interviewskill)
    const interviewposition = useSelector(state => state.interviewposition)
    const cv = useSelector(state => state.cv)
    const interview = useSelector(state => state.interviewResult)

    const condition = interview && role && candidate && interviewidInfo && interviewskill && interviewposition && cv
    const viewPage = condition ? "block" : "none"
    const viewLoading = condition ? false : true
    useEffect(() => {
        let newObj = {
            interviewid: interviewid,
            token: user.token
        }
        dispatch({ type: "interviewSaga/getInterviewResult", payload: newObj })
    }, [])
    function handleStart() {
        navigate(`/company/interview/${interviewid}/start`)
    }
    function handleAccept() {
        dispatch({
            type: "interviewSaga/acceptInterview", payload: {
                interviewid: interview.interviewid,
                applicationid: interview.applicationid,
                interviewResult: interview,
                token: user.token
            }
        })
    }
    function handleReject() {
        dispatch({
            type: "interviewSaga/rejectInterview", payload: {
                interviewid: interview.interviewid,
                applicationid: interview.applicationid,
                interviewResult: interview,
                token: user.token
            }
        })
    }
    return (
        <>
            <Box sx={{ display: viewPage }}>
                {interview && role ?
                    <>
                        <Page_Interview_Id />
                        {role == "interviewer" && interview.candidate_Status == "Not start"
                            ?
                            <Box>
                                {user.interviewerId == interview.interviewerid
                                    ?
                                    <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: 4, marginBottom: 4 }}>
                                        <BlackContainedButton handleClick={() => { setOpenAlertStart(true) }}>Start</BlackContainedButton>
                                    </Box>
                                    : null
                                }
                                <AlertDialog
                                    openAlert={openAlertStart} setOpenAlert={setOpenAlertStart}
                                    alertMessage={"Are you sure you want to start this interview?"}
                                    successfulMessage={""}
                                    handleSubmit={handleStart} />
                            </Box>
                            : null}
                        {(interview.candidate_Status == "Finished") ?
                            <Box>
                                <Box sx={{ marginY: 4 }}>
                                    <TitleDivider>
                                        RESULT OF THE INTERVIEW
                                    </TitleDivider>
                                </Box>
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
                                    {role == "admin"
                                        ? <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end", columnGap: 4 }}>
                                            {interview.company_Status == "Pending"
                                                ? <>
                                                    <Button
                                                        onClick={() => { setOpenAlertReject(true) }}
                                                        size={"large"} sx={{ width: isSm ? "auto" : "100%" }} color="error" variant="contained" startIcon={<CloseIcon />}>
                                                        Reject
                                                    </Button>
                                                    <Button
                                                        onClick={() => { setOpenAlertAccept(true) }}
                                                        size={"large"} sx={{ width: isSm ? "auto" : "100%" }} color="success" variant="contained" startIcon={<CheckIcon />}>
                                                        Accept
                                                    </Button>
                                                </>
                                                : null}
                                            {interview.company_Status == "Passed"
                                                ? <Pass />
                                                : null}
                                            {interview.company_Status == "Failed"
                                                ? <Fail />
                                                : null}
                                        </Grid>
                                        : null}

                                </Grid>

                                <AlertDialog
                                    openAlert={openAlertAccept} setOpenAlert={setOpenAlertAccept}
                                    alertMessage={"Are you sure you want to accept this candidate?"}
                                    successfulMessage={"Candidate accepted successfully"}
                                    handleSubmit={handleAccept} />
                                <AlertDialog
                                    openAlert={openAlertReject} setOpenAlert={setOpenAlertReject}
                                    alertMessage={"Are you sure you want to reject this candidate?"}
                                    successfulMessage={"Candidate rejected successfully"}
                                    handleSubmit={handleReject} />
                            </Box>
                            : <Box />}
                    </>
                    : null}

            </Box >
            <Backdrop
                sx={{ backgroundColor: theme.palette.grey[200] }}
                open={viewLoading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    )
}


export default Page_Company_Interview_Id