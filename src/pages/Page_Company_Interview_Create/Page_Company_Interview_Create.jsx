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
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { DatePicker } from '@mui/x-date-pickers';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useNavigate } from "react-router-dom";
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
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const theme = useTheme()

    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const isSm = useMediaQuery(theme.breakpoints.up('sm'));
    // fetch Data
    useEffect(() => {
        dispatch({ type: "saga/getUpcomingInterview" })
        dispatch({ type: "saga/getDepartmentInterviewer" })
        dispatch({ type: "saga/getRoom" })
        dispatch({ type: "saga/getShift" })
        return () => {
            dispatch({ type: "interview/setInterview", payload: null })
            dispatch({ type: "interviewer/setInterviewer", payload: null })
            dispatch({ type: "room/setRoom", payload: null })
            dispatch({ type: "shift/setShift", payload: null })
        }
    }, [])

    const interviewList = useSelector(state => state.interview)
    const interviewerList = useSelector(state => state.interviewer)
    const roomList = useSelector(state => state.room)
    const shiftList = useSelector(state => state.shift)
    const newError = useSelector(state => state.error)

    // set busyInterviewer and busyRoom
    useEffect(() => {
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
            cleanStore(dispatch)
            navigate("/company/interview/00000000-0000-0000-0000-000000000001")
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
        console.log("chosenInterviewer: ", chosenInterviewer)
        console.log("chosenRoom: ", chosenRoom)
        console.log("chosenDate: ", chosenDate)
        console.log("chosenShift: ", chosenShift)
        dispatch({ type: "saga/createInterview", payload: null })
        // navigate("/company/interview/1")
    }
    return (
        <>{interviewerList &&
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
                <Grid item md={12}>
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
                    }} onClick={handleSubmit}>Create Interview</Button>
                </Grid>
                <Snackbar
                    // anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                    open={errorSnackbar}
                    autoHideDuration={5000}
                    onClose={() => { setErrorSnackbar(false) }}
                // message="I love snacks"
                // key={vertical + horizontal}
                >
                    <Alert onClose={() => { setErrorSnackbar(false) }} severity="error" sx={{ width: '100%' }}>
                        {newError.message}
                    </Alert>
                </Snackbar>
            </Grid>
        }
        </>
    )
}

export default Page_Company_Interview_Create