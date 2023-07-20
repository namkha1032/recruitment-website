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

const DateTimePicker = (props) => {
    const {
        chosenDate, setChosenDate,
        chosenShift, setChosenShift,
        chosenInterviewer, chosenRoom,
        interviewList, shiftList
    } = props
    return (
        <Box sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-evenly" }} >
            <Box sx={{ height: 100, display: "flex", alignItems: "center" }}>
                <DatePicker sx={{
                    width: 300,
                    "&": {
                        cursor: "pointer"
                    }
                }} label="Choose a date" value={chosenDate} onChange={(newValue) => {
                    let newDate = new Date(newValue.$d)
                    const year = newDate.toLocaleString('default', { year: 'numeric' });
                    const month = newDate.toLocaleString('default', { month: '2-digit' });
                    const day = newDate.toLocaleString('default', { day: '2-digit' });
                    newDate = year + "-" + month + "-" + day
                    setChosenDate(newDate)
                    setChosenShift(null)
                }} />
            </Box>
            <Box sx={{ height: 100, display: "flex", alignItems: "center" }}>
                {chosenDate &&
                    <FormControl variant="filled" sx={{ width: 300 }}>
                        <InputLabel id="shiftSelectLabel">Choose a shift</InputLabel>
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
                    </FormControl>}
            </Box>
        </Box>
    )
}

export default DateTimePicker