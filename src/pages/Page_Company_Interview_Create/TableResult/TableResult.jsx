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

const TableResult = (props) => {
    const {
        chosenDate, setChosenDate,
        chosenShift, setChosenShift,
        chosenInterviewer, setChosenInterviewer,
        chosenRoom, setChosenRoom,
        setBusyInterviewer, setBusyRoom
    } = props
    return (
        <>
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
            </Grid>
        </>
    )
}

export default TableResult