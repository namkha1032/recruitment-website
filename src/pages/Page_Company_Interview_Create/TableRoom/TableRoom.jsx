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

const TableRoom = (props) => {
    const { roomList, chosenShift, busyRoom,
        chosenRoom, setChosenRoom } = props
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
                    <Chip icon={<CheckIcon />} label="Available" color="success" size="small" />
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
                        <Button variant="contained" color="primary">Chosen</Button>
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
    return (
        <>
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
        </>
    )
}

export default TableRoom