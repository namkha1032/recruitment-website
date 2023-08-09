
// import MUI components
import {
    Button,
    Chip,
} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const TableRoom = (props) => {
    const { roomList, chosenShift, busyRoom,
        chosenRoom, setChosenRoom } = props
    const theme = useTheme()
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const isSm = useMediaQuery(theme.breakpoints.up('sm'));
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
                            return (<Chip icon={<CloseIcon />} label={isSm ? "Unavailable" : ""} color="error" size="small" />)
                        }
                    }
                }
                return (
                    <Chip icon={<CheckIcon />} label={isSm ? "Available" : ""} color="success" size="small" />
                )
            }
        },
        {
            field: "action",
            headerName: "",
            flex: 2,
            renderCell: (params) => {
                if (chosenRoom && params.row.roomid == chosenRoom.roomid) {
                    return (
                        <Button variant="contained" color="primary" size={isMd ? "medium" : "small"}>Chosen</Button>
                    )
                }
                else {
                    if (chosenShift && busyRoom.length > 0) {
                        for (let busyRo of busyRoom) {
                            if (busyRo.roomid == params.row.roomid) {
                                return (<Button disabled variant="outlined" size={isMd ? "medium" : "small"}>Choose</Button>)
                            }

                        }
                    }
                    return (
                        <Button variant="outlined" color="primary" size={isMd ? "medium" : "small"} onClick={() => setChosenRoom(params.row)}>Choose</Button>
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
                disableColumnMenu
                disableColumnFilter
                disableColumnSelector
                disableDensitySelector
                disableRowSelectionOnClick
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