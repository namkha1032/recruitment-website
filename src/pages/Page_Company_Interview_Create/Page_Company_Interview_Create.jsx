// import libraries
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import MUI components
import {
    Button,
    Box,
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

import { useTheme } from '@mui/material/styles';
import TitleDivider from "../../components/TitleDivider/TitleDivider";
import AlertDialog from "../../components/AlertDialog/AlertDialog";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import InfoApplication from "../../components/InfoApplication/InfoApplication";
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
    let recruitmentid = searchParams.get("recruitmentid")

    const dispatch = useDispatch()
    const theme = useTheme()



    // fetch Data
    useEffect(() => {
        dispatch({
            type: "interviewSaga/getDataForCreatingInterview", payload: {
                applicationid: applicationid,
                recruitmentid: recruitmentid,
                token: user.token
            }
        })
        // return () => {
        //     dispatch({ type: "interview/setInterview", payload: null })
        //     dispatch({ type: "interviewer/setInterviewer", payload: null })
        //     dispatch({ type: "room/setRoom", payload: null })
        //     dispatch({ type: "shift/setShift", payload: null })
        // }
        return (() => {
            cleanStore(dispatch)
        })
    }, [])

    const interviewList = useSelector(state => state.interviewList)
    const interviewerList = useSelector(state => state.interviewerList)
    const roomList = useSelector(state => state.room)
    const shiftList = useSelector(state => state.shift)
    const newError = useSelector(state => state.error)
    const candidate = useSelector(state => state.candidate)
    const position = useSelector(state => state.position)
    const infoApplication = useSelector(state => state.infoApplication)
    const user = useSelector(state => state.user)

    const condition = interviewerList && interviewList && roomList && shiftList && candidate && position && infoApplication
    const viewPage = condition ? "block" : "none"
    const viewLoading = condition ? false : true

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
            setTimeout(() => {
                const idToNavigate = newError.message
                cleanStore(dispatch)
                navigate(`/company/interview/${idToNavigate}`)
            }, 2000)
        }
        if (newError.status == "yes") {
            setErrorSnackbar(true)
            setChosenInterviewer(null)
            setChosenRoom(null)
            setChosenDate(null)
            setChosenShift(null)
            dispatch({
                type: "interviewSaga/getDataForCreatingInterview", payload: {
                    applicationid: applicationid,
                    recruitmentid: recruitmentid,
                    token: user.token
                }
            })
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
                recruiterId: user.recruiterId,
                applicationId: applicationid,
                itrsinterviewId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                notes: "",
                resultId: "14106e09-cacd-4a89-8858-5f06499b7b81",
            },
            itrs: {
                dateInterview: chosenDate,
                shiftId: chosenShift.shiftid,
                roomId: chosenRoom.roomid
            }
        }
        dispatch({
            type: "interviewSaga/createInterview", payload: {
                newInter: newInterviewObj,
                token: user.token
            }
        })
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
        <>
            <Box sx={{ display: viewPage }}>

                {interviewerList && interviewList && roomList && shiftList
                    // && candidate && position && infoApplication 
                    ?
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <TitleDivider>
                                General information
                            </TitleDivider>
                        </Grid>
                        <Grid item xs={12}>
                            <InfoApplication recruitmentid={recruitmentid} applicationid={applicationid} page={""} />
                        </Grid>
                        <Grid item xs={12}>
                            <TitleDivider>
                                Create Interview
                            </TitleDivider>
                        </Grid>
                        <Grid item xs={12} md={5}>
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
                        <Grid item xs={12} md={7}>
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
                    null
                    // <SkeletonInterviewCreate />
                }
            </Box>
            <Backdrop
                sx={{ backgroundColor: theme.palette.grey[200] }}
                open={viewLoading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    )
}

export default Page_Company_Interview_Create