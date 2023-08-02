// import libraries
import axios from "axios"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import MUI components
import {
    Typography,
    Button,
    Autocomplete,
    TextField,
    Paper,
    Box,
    Chip,
    Card,
    CardHeader,
    CardContent,
    FormControl,
    Select,
    InputLabel,
    MenuItem
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { useNavigate, useSearchParams } from "react-router-dom";
// import components
import TableInterviewer from "./TableInterviewer/TableInterviewer";
import TableRoom from "./TableRoom/TableRoom";
import TableResult from "./TableResult/TableResult";
import DateTimePicker from "./DateTimePicker/DateTimePicker";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

import GigaCard from '../../components/GigaCard/GigaCard';
import GigaCardBody from '../../components/GigaCardBody/GigaCardBody';
import GigaCardHeader from '../../components/GigaCardHeader/GigaCardHeader';

import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import RoomIcon from '@mui/icons-material/Room';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import FactCheckIcon from '@mui/icons-material/FactCheck';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import TitleDivider from "../../components/TitleDivider/TitleDivider";
import AlertDialog from "../../components/AlertDialog/AlertDialog";
import SkeletonInterviewCreate from "./SkeletonInterviewCreate/SkeletonInterviewCreate";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
// import utilities
import cleanStore from "../../utils/cleanStore";
const Page_Company_Interview_Create = () => {
    // useState
    let [chosenInterviewer, setChosenInterviewer] = useState(null)
    let [chosenRoom, setChosenRoom] = useState(null)
    let [chosenDate, setChosenDate] = useState(null)
    let [chosenShift, setChosenShift] = useState(null)

    let [busyInterviewer, setBusyInterviewer] = useState([])
    let [busyRoom, setBusyRoom] = useState([])
    let [errorSnackbar, setErrorSnackbar] = useState(false)
    let [openAlert, setOpenAlert] = useState(false)
    const navigate = useNavigate()
    let [searchParams, setSearchParams] = useSearchParams();
    let applicationid = searchParams.get("applicationid")
    console.log("appid: ", applicationid)

    const dispatch = useDispatch()
    const theme = useTheme()

    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const isSm = useMediaQuery(theme.breakpoints.up('sm'));
    // fetch Data
    useEffect(() => {
        dispatch({ type: "saga/getDataForInterview", payload: applicationid })
        // return () => {
        //     dispatch({ type: "interview/setInterview", payload: null })
        //     dispatch({ type: "interviewer/setInterviewer", payload: null })
        //     dispatch({ type: "room/setRoom", payload: null })
        //     dispatch({ type: "shift/setShift", payload: null })
        // }
    }, [])

    const interviewList = useSelector(state => state.interviewList)
    const interviewerList = useSelector(state => state.interviewerList)
    const roomList = useSelector(state => state.room)
    const shiftList = useSelector(state => state.shift)
    const newError = useSelector(state => state.error)

    // set busyInterviewer and busyRoom
    useEffect(() => {
        console.log("useEffect set busyInterviewer and busyRoom")
        console.log("chosenDate: ", chosenDate)
        console.log("chosenShift: ", chosenShift)
        setBusyInterviewer(oldList => [])
        setBusyRoom(oldList => [])
        if (chosenShift) {
            for (let interview of interviewList) {
                for (let interviewer of interviewerList) {
                    if (interview.shiftid == chosenShift.shiftid
                        && interview.interviewdate == chosenDate
                        && interview.interviewerid == interviewer.interviewerid) {
                        setBusyInterviewer(busyInList => busyInList.concat(interviewer))
                    }
                }
                for (let room of roomList) {
                    if (interview.shiftid == chosenShift.shiftid
                        && interview.interviewdate == chosenDate
                        && interview.roomid == room.roomid) {
                        setBusyRoom(busyRoList => busyRoList.concat(room))
                    }
                }
            }
        }
    }, [chosenShift])

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

    function handleSubmit() {
        const newInterviewObj = {
            interview: {
                interviewerId: chosenInterviewer.interviewerid,
                recruiterId: "13b849af-bea9-49a4-a9e4-316d13b3a08a",
                applicationId: applicationid,
                itrsinterviewId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                notes: "",
                resultId: "00000000-0000-0000-0000-000000000001",
            },
            itrs: {
                dateInterview: chosenDate,
                shiftId: chosenShift.shiftid,
                roomId: chosenRoom.roomid
            }
        }
        console.log("newinter: ", JSON.stringify(newInterviewObj))
        dispatch({ type: "saga/createInterview", payload: newInterviewObj })
        // navigate("/company/interview/1")
    }
    function preProcessing() {
        const messArr = []
        if (chosenInterviewer == null) {
            messArr.push("an interviewer")
        }
        if (chosenRoom == null) {
            messArr.push("a room")
        }
        if (chosenDate == null) {
            messArr.push("a date")
        }
        if (chosenShift == null) {
            messArr.push("a shift")
        }
        let messString = ""
        if (messArr.length > 0) {
            messArr.forEach((x, index) => {
                messString = messString + x
                if (index < messArr.length - 1) {
                    messString = messString + ", "
                }
                else {
                    messString = messString + "."
                }
            })
            dispatch({ type: "error/setError", payload: { status: "yes", message: `please choose ${messString}` } })
        }
        else {
            setOpenAlert(true)
        }
    }
    return (
        <>{interviewerList && interviewList && roomList && shiftList ?
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <TitleDivider>
                        Create Interview
                    </TitleDivider>
                </Grid>
                <Grid item xs={12} md={6}>
                    <GigaCard>
                        <GigaCardHeader color={"black"} headerIcon={<RecordVoiceOverIcon sx={{ fontSize: "inherit" }} />}>
                            Choose an interviewer
                        </GigaCardHeader>
                        <GigaCardBody>
                            <TableInterviewer
                                interviewerList={interviewerList}
                                chosenShift={chosenShift}
                                busyInterviewer={busyInterviewer}
                                chosenInterviewer={chosenInterviewer}
                                setChosenInterviewer={setChosenInterviewer}
                            />
                        </GigaCardBody>
                    </GigaCard>
                </Grid>
                <Grid item xs={12} md={6}>
                    <GigaCard>
                        <GigaCardHeader color={"black"} headerIcon={<RoomIcon sx={{ fontSize: "inherit" }} />}>
                            Choose a room
                        </GigaCardHeader>
                        <GigaCardBody>
                            <TableRoom
                                roomList={roomList}
                                chosenShift={chosenShift}
                                busyRoom={busyRoom}
                                chosenRoom={chosenRoom}
                                setChosenRoom={setChosenRoom}
                            />
                        </GigaCardBody>
                    </GigaCard>
                </Grid>
                <Grid item xs={12}>
                    <GigaCard>
                        <Grid container>
                            <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column" }}>
                                <GigaCardHeader color={"black"} headerIcon={<AccessTimeFilledIcon sx={{ fontSize: "inherit" }} />}>
                                    Time
                                </GigaCardHeader>
                                <GigaCardBody>
                                    <DateTimePicker
                                        chosenDate={chosenDate}
                                        setChosenDate={setChosenDate}
                                        chosenShift={chosenShift}
                                        setChosenShift={setChosenShift}
                                        chosenInterviewer={chosenInterviewer}
                                        chosenRoom={chosenRoom}
                                        interviewList={interviewList}
                                        shiftList={shiftList}
                                    />
                                </GigaCardBody>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <GigaCardHeader color={"black"} headerIcon={<FactCheckIcon sx={{ fontSize: "inherit" }} />}>
                                    Result
                                </GigaCardHeader>
                                <GigaCardBody>
                                    <TableResult
                                        chosenDate={chosenDate}
                                        setChosenDate={setChosenDate}
                                        chosenShift={chosenShift}
                                        setChosenShift={setChosenShift}
                                        chosenInterviewer={chosenInterviewer}
                                        setChosenInterviewer={setChosenInterviewer}
                                        chosenRoom={chosenRoom}
                                        setChosenRoom={setChosenRoom}
                                        setBusyInterviewer={setBusyInterviewer}
                                        setBusyRoom={setBusyRoom}
                                    />
                                </GigaCardBody>
                            </Grid>
                        </Grid>
                    </GigaCard>

                </Grid>

                <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button variant="contained" sx={{
                        backgroundColor: "black",
                        "&:hover": {
                            backgroundColor: "black"
                        }
                    }}
                        onClick={preProcessing} >Create Interview
                    </Button>
                </Grid>
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
                <AlertDialog openAlert={openAlert} setOpenAlert={setOpenAlert}
                    alertMessage={"Are you sure you want to create this interview?"}
                    successfulMessage={"Interview created successfully"}
                    handleSubmit={handleSubmit} />
            </Grid>
            :
            <Backdrop
                sx={{ backgroundColor: theme.palette.grey[200] }}
                open={true}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            // <SkeletonInterviewCreate />
        }
        </>
    )
}

export default Page_Company_Interview_Create