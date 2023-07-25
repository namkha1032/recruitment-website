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

const TableInterviewer = (props) => {
    const { interviewerList, chosenShift, busyInterviewer,
        chosenInterviewer, setChosenInterviewer } = props
    const interviewerRows = interviewerList.map(inter => (
        {
            interviewerid: inter.interviewerid,
            interviewername: inter.interviewername,
            status: "status",
            action: "action"
        }
    ))
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
                    <Chip icon={<CheckIcon />} label="Available" color="success" size="small" />
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
                        <Button variant="contained" color="primary">Chosen</Button>
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
    return (
        <>
            <DataGrid
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
        </>
    )
}

export default TableInterviewer