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
const Page_Company_Interview_Create = () => {
    // useState
    let [chosenInterviewer, setChosenInterviewer] = useState(null)
    let [chosenRoom, setChosenRoom] = useState(null)
    let [chosenDate, setChosenDate] = useState(null)
    let [chosenShift, setChosenShift] = useState(null)

    let [busyInterviewer, setBusyInterviewer] = useState([])
    let [busyRoom, setBusyRoom] = useState([])
    let [busyShift, setBusyShift] = useState([])
    const [rowSelectionModel, setRowSelectionModel] = useState([]);
    const navigate = useNavigate()

    const dispatch = useDispatch()
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
    // // set busyShift wrt chosenInterviewer
    // useEffect(() => {
    //     if (chosenDate) {
    //         for (let interview of interviewList) {
    //             for (let shift of shiftList) {
    //                 if (interview.interviewDate == chosenDate
    //                     && interview.interviewerid == chosenInterviewer.interviewerid
    //                     && interview.shiftid == shift.shiftid) {
    //                     let flag = false
    //                     for (let busyShi of busyShift) {
    //                         if busyShi.shiftid == intervi
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }, [chosenInterviewer])

    // // set busyShift wrt chosenRoom
    // useEffect(() => {

    // }, [chosenRoom])

    const interviewerRows = interviewerList ? interviewerList.map(inter => (
        {
            interviewerid: inter.interviewerid,
            interviewername: inter.interviewername,
            status: "status",
            action: "action"
        }
    )) : []
    const interviewerColumns = [
        { field: 'interviewerid', headerName: 'ID', flex: 1 },
        { field: 'interviewername', headerName: 'Name', flex: 3 },
        {
            field: 'status',
            headerName: 'Status',
            flex: 2,
            renderCell: (params) => {
                if (chosenShift && busyInterviewer.length > 0) {
                    for (let busyIn of busyInterviewer) {
                        if (busyIn.interviewerid == params.row.interviewerid) {
                            return (<Chip icon={<CloseIcon />} label="Unavailable" color="error" size="small" />)
                        }

                    }
                }
                return (
                    <Chip icon={<CheckIcon />} label="Available" color="primary" size="small" />
                )
            }
        },
        {
            field: "action",
            headerName: "Action",
            flex: 2,
            renderCell: (params) => {
                if (chosenInterviewer && params.row.interviewerid == chosenInterviewer.interviewerid) {
                    return (
                        <Button variant="contained" color="success">Chosen</Button>
                    )
                }
                else {
                    if (chosenShift && busyInterviewer.length > 0) {
                        for (let busyIn of busyInterviewer) {
                            if (busyIn.interviewerid == params.row.interviewerid) {
                                return (<Button disabled variant="outlined">Choose</Button>)
                            }

                        }
                    }
                    return (
                        <Button variant="outlined" color="primary" onClick={() => setChosenInterviewer(params.row)}>Choose</Button>
                    )
                }
            }
        }
    ]

    const roomRows = roomList ? roomList.map(room => (
        {
            roomid: room.roomid,
            roomname: room.roomname,
            status: "free",
            action: "action button"
        }
    )) : []
    const roomColumns = [
        { field: 'roomid', headerName: 'ID', flex: 1 },
        { field: 'roomname', headerName: 'Name', flex: 3 },
        {
            field: 'status',
            headerName: 'Status',
            flex: 2,
            renderCell: (params) => {
                if (chosenShift && busyRoom.length > 0) {
                    for (let busyRo of busyRoom) {
                        if (busyRo.roomid == params.row.roomid) {
                            return (<Chip icon={<CloseIcon />} label="Unavailable" color="error" size="small" />)
                        }
                    }
                }
                return (
                    <Chip icon={<CheckIcon />} label="Available" color="primary" size="small" />
                )
            }
        },
        {
            field: "action",
            headerName: "Action",
            flex: 2,
            renderCell: (params) => {
                if (chosenRoom && params.row.roomid == chosenRoom.roomid) {
                    return (
                        <Button variant="contained" color="success">Chosen</Button>
                    )
                }
                else {
                    if (chosenShift && busyRoom.length > 0) {
                        for (let busyRo of busyRoom) {
                            if (busyRo.roomid == params.row.roomid) {
                                return (<Button disabled variant="outlined">Choose</Button>)
                            }

                        }
                    }
                    return (
                        <Button variant="outlined" color="primary" onClick={() => setChosenRoom(params.row)}>Choose</Button>
                    )
                }
            }
        }
    ]
    function handleSubmit() {
        navigate("/company/interview/1")
    }
    return (
        <>{interviewerList &&
            <Grid container spacing={4}>
                <Grid item md={12}>
                    <Typography variant="h2" sx={{ textAlign: "center" }}>Create an interview</Typography>
                </Grid>
                <Grid item md={6}>
                    <Card variant="outlined" sx={{ border: "1px solid black", borderRadius: 5 }}>
                        <CardHeader title="Choose an interviewer" />
                        <CardContent>
                            <DataGrid
                                // checkboxSelection
                                onRowSelectionModelChange={(newRowSelectionModel) => {
                                    console.log(newRowSelectionModel)
                                    setRowSelectionModel(newRowSelectionModel);
                                }}
                                rowSelectionModel={rowSelectionModel}
                                sx={{ height: 400 }}
                                rowHeight={50}
                                rows={interviewerRows}
                                columns={interviewerColumns}
                                getRowId={(row) => row.interviewerid}
                                disableColumnFilter
                                disableColumnSelector
                                disableDensitySelector
                                slots={{ toolbar: GridToolbar }}
                                slotProps={{
                                    toolbar: {
                                        showQuickFilter: true,
                                        quickFilterProps: { debounceMs: 100 },
                                        csvOptions: { disableToolbarButton: true },
                                        printOptions: { disableToolbarButton: true }
                                    },
                                }} />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={6}>
                    <Card variant="outlined" sx={{ border: "1px solid black", borderRadius: 5 }}>
                        <CardHeader title="Choose a room" />
                        <CardContent>
                            <DataGrid
                                sx={{ height: 400 }}
                                rowHeight={50}
                                rows={roomRows}
                                columns={roomColumns}
                                getRowId={(row) => row.roomid}
                                disableColumnFilter
                                disableColumnSelector
                                disableDensitySelector
                                slots={{ toolbar: GridToolbar }}
                                slotProps={{
                                    toolbar: {
                                        showQuickFilter: true,
                                        quickFilterProps: { debounceMs: 100 },
                                        csvOptions: { disableToolbarButton: true },
                                        printOptions: { disableToolbarButton: true }
                                    },
                                }} />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={12}>
                    <Card sx={{ border: "1px solid black", borderRadius: 5 }}>
                        <Grid container>
                            <Grid item md={6}>
                                <CardHeader title="Choose a date" />
                                <CardContent>
                                    <DatePicker sx={{ width: 300 }} label="Choose date" value={chosenDate} onChange={(newValue) => {
                                        let newDate = new Date(newValue.$d)
                                        const year = newDate.toLocaleString('default', { year: 'numeric' });
                                        const month = newDate.toLocaleString('default', { month: '2-digit' });
                                        const day = newDate.toLocaleString('default', { day: '2-digit' });
                                        newDate = year + "-" + month + "-" + day
                                        setChosenDate(newDate)
                                        setChosenShift(null)
                                    }} />
                                </CardContent>
                                {chosenDate && <>
                                    <CardHeader title="Choose a shift" />
                                    <CardContent>
                                        <FormControl variant="filled" sx={{ width: 300 }}>
                                            <InputLabel id="shiftSelectLabel">Shift</InputLabel>
                                            <Select
                                                labelId="shiftSelectLabel"
                                                id="shiftSelect"
                                                value={chosenShift ? chosenShift : ""}
                                                onChange={(event) => {
                                                    console.log("event: ", event.target.value)
                                                    setChosenShift(event.target.value)
                                                }}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                {shiftList ? shiftList.map(shift => {
                                                    if (chosenInterviewer || chosenRoom) {
                                                        for (let interview of interviewList) {
                                                            if (chosenInterviewer && interview.interviewerid == chosenInterviewer.interviewerid
                                                                && interview.interviewdate == chosenDate
                                                                && interview.shiftid == shift.shiftid) {
                                                                return (
                                                                    <MenuItem disabled key={shift.shiftid} value={shift}>Shift {shift.shiftid}: {shift.shiftstart} to {shift.shiftend}</MenuItem>
                                                                )
                                                            }
                                                            else if (chosenRoom && interview.roomid == chosenRoom.roomid
                                                                && interview.interviewdate == chosenDate
                                                                && interview.shiftid == shift.shiftid) {
                                                                return (
                                                                    <MenuItem disabled key={shift.shiftid} value={shift}>Shift {shift.shiftid}: {shift.shiftstart} to {shift.shiftend}</MenuItem>
                                                                )
                                                            }
                                                        }
                                                    }
                                                    return (
                                                        <MenuItem key={shift.shiftid} value={shift}>Shift {shift.shiftid}: {shift.shiftstart} to {shift.shiftend}</MenuItem>
                                                    )
                                                }) : null}
                                            </Select>
                                        </FormControl>
                                    </CardContent>
                                </>}
                            </Grid>
                            <Grid item md={6}>
                                <CardHeader title="Result" />
                                <CardContent>
                                    <Grid container spacing={2} columns={15}>
                                        <Grid item md={4}>
                                            <Typography variant="h6">Interviewer: </Typography>
                                        </Grid>
                                        <Grid item md={8}>
                                            {chosenInterviewer &&
                                                <Chip
                                                    label={chosenInterviewer.interviewername}
                                                    variant="outlined"
                                                    onDelete={() => { setChosenInterviewer(null) }}
                                                />}
                                        </Grid>
                                        <Grid item md={4}>
                                            <Typography variant="h6">Date: </Typography>
                                        </Grid>
                                        <Grid item md={8}>
                                            {chosenDate &&
                                                <Chip
                                                    label={chosenDate}
                                                    variant="outlined"
                                                    onDelete={() => {
                                                        setChosenDate(null)
                                                        setChosenShift(null)
                                                        setBusyInterviewer([])
                                                        setBusyRoom([])
                                                    }}
                                                />}
                                        </Grid>
                                        <Grid item md={4}>
                                            <Typography variant="h6">Time: </Typography>
                                        </Grid>
                                        <Grid item md={8}>
                                            {chosenShift &&
                                                <Chip
                                                    label={`Shift ${chosenShift.shiftid}: ${chosenShift.shiftstart} to ${chosenShift.shiftend}`}
                                                    variant="outlined"
                                                    onDelete={() => {
                                                        setChosenShift(null)
                                                        setBusyInterviewer([])
                                                        setBusyRoom([])
                                                    }}
                                                />}
                                        </Grid>
                                        <Grid item md={4}>
                                            <Typography variant="h6">Room: </Typography>
                                        </Grid>
                                        <Grid item md={8}>
                                            {chosenRoom &&
                                                <Chip
                                                    label={chosenRoom.roomname}
                                                    variant="outlined"
                                                    onDelete={() => {
                                                        setChosenRoom(null)
                                                    }}
                                                />}
                                        </Grid>
                                        <Grid item md={15} sx={{ display: "flex", justifyContent: "flex-end" }}>
                                            <Button variant="contained" onClick={handleSubmit}>Create Interview</Button>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Grid>
                        </Grid>
                    </Card>

                </Grid>

                <Grid item md={6}>

                </Grid>
            </Grid>
        }
        </>
    )
}

export default Page_Company_Interview_Create