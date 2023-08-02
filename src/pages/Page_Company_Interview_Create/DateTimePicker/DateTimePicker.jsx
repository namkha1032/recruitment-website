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

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const DateTimePicker = (props) => {
    const {
        chosenDate, setChosenDate,
        chosenShift, setChosenShift,
        chosenInterviewer, chosenRoom,
        interviewList, shiftList
    } = props
    const theme = useTheme()
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Box sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-evenly" }} >
            <Box sx={{ height: 100, display: "flex", alignItems: "center", justifyContent: isMd ? "flex-start" : "center" }}>
                <DatePicker sx={{
                    width: 300,
                    "&": {
                        cursor: "pointer"
                    }
                }} label="Choose a date" value={chosenDate} onChange={(newValue) => {
                    console.log("newValue: ", newValue)
                    console.log("newD: ", new Date(newValue.$d).toJSON())
                    setChosenDate(new Date(newValue.$d).toJSON())
                    setChosenShift(null)
                }} />
            </Box>
            <Box sx={{ height: 100, display: "flex", alignItems: "center", justifyContent: isMd ? "flex-start" : "center" }}>
                {chosenDate &&
                    <FormControl variant="filled" sx={{ width: 300 }}>
                        <InputLabel id="shiftSelectLabel">Choose a shift</InputLabel>
                        <Select
                            labelId="shiftSelectLabel"
                            id="shiftSelect"
                            value={chosenShift ? chosenShift : ""}
                            onChange={(event) => {
                                setChosenShift(event.target.value)
                            }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {shiftList ? shiftList.map((shift, index) => {
                                let startSmallTen = "0" + shift.shiftstart + ":00:00"
                                let startLargeTen = shift.shiftstart + ":00:00"
                                let endSmallTen = "0" + shift.shiftend + ":00:00"
                                let endLargeTen = shift.shiftend + ":00:00"
                                let shiftStart = shift.shiftstart < 10 ? startSmallTen : startLargeTen
                                let shiftEnd = shift.shiftend < 10 ? endSmallTen : endLargeTen
                                if (chosenInterviewer || chosenRoom) {
                                    for (let interview of interviewList) {
                                        if (chosenInterviewer && interview.interviewerid == chosenInterviewer.interviewerid
                                            && interview.interviewdate == chosenDate
                                            && interview.shiftid == shift.shiftid) {
                                            console.log("index: ", index)
                                            return (
                                                <MenuItem disabled key={shift.shiftid} value={shift}>Shift {index + 1}: {shiftStart} to {shiftEnd}</MenuItem>
                                            )
                                        }
                                        else if (chosenRoom && interview.roomid == chosenRoom.roomid
                                            && interview.interviewdate == chosenDate
                                            && interview.shiftid == shift.shiftid) {
                                            return (
                                                <MenuItem disabled key={shift.shiftid} value={shift}>Shift {index + 1}: {shiftStart} to {shiftEnd}</MenuItem>
                                            )
                                        }
                                    }
                                }
                                return (
                                    <MenuItem key={shift.shiftid} value={shift}>Shift {index + 1}: {shiftStart} to {shiftEnd}</MenuItem>
                                )
                            }) : null}
                        </Select>
                    </FormControl>}
            </Box>
        </Box>
    )
}

export default DateTimePicker