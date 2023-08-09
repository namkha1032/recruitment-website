
import { useSelector } from "react-redux";
// import MUI components
import {
    Button,
    Chip
} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import InterviewerDialog from "../InterviewerDialog/InterviewerDialog";
const TableInterviewer = (props) => {
    const { interviewerList, chosenShift, busyInterviewer,
        chosenInterviewer, setChosenInterviewer } = props
    const theme = useTheme()
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const isSm = useMediaQuery(theme.breakpoints.up('sm'));
    const position = useSelector(state => state.position)
    const interviewerRows = interviewerList.map(inter => (
        {
            interviewerid: inter.interviewerid,
            userid: inter.userid,
            interviewername: inter.user.fullName,
            dob: inter.user.dateOfBirth,
            email: inter.user.email,
            departmentname: position ? position.department.departmentName : "",
            departmentaddress: position ? position.department.address : "",
            departmentemail: position ? position.department.email : "",
            departmentphone: position ? position.department.phone : "",
            departmentwebsite: position ? position.department.website : "",
            avatar: inter.user.imageURL ? inter.user.imageURL : "https://i.kym-cdn.com/entries/icons/original/000/026/152/gigachadd.jpg",
            status: "status",
            action: "action"
        }
    ))
    const interviewerColumns = [
        { field: 'interviewerid', headerName: 'ID', flex: 0 },
        { field: 'userid', headerName: 'userID', flex: 0 },
        { field: 'interviewername', headerName: 'Name', flex: 3 },
        { field: 'dob', headerName: 'Dob', flex: 0 },
        { field: 'email', headerName: 'Email', flex: 0 },
        { field: 'departmentname', headerName: 'Department', flex: 0 },
        { field: 'departmentaddress', headerName: 'Department Address', flex: 0 },
        { field: 'departmentemail', headerName: 'Department Email', flex: 0 },
        { field: 'departmentphone', headerName: 'Department Phone', flex: 0 },
        { field: 'departmentwebsite', headerName: 'Department Website', flex: 0 },
        {
            field: 'avatar', headerName: '', flex: 1,
            renderCell: (params) => {
                return (
                    <InterviewerDialog params={params} />
                )
            }
        },
        {
            field: 'status',
            headerName: 'Status',
            flex: 2,
            renderCell: (params) => {
                if (chosenShift && busyInterviewer.length > 0) {
                    for (let busyIn of busyInterviewer) {
                        if (busyIn.interviewerid == params.row.interviewerid) {
                            return (<Chip icon={<CloseIcon />} label={isSm ? "Unavailable" : ""} color="error" size="small" />)
                        }

                    }
                }
                return (
                    <Chip icon={<CheckIcon />} label={isSm ? "Available" : ""} color="success" size="small" />
                    // <></>
                )
            }
        },
        {
            field: "action",
            headerName: "",
            flex: 2,
            renderCell: (params) => {
                if (chosenInterviewer && params.row.interviewerid == chosenInterviewer.interviewerid) {
                    return (
                        <Button variant="contained" color="primary" size={isMd ? "medium" : "small"}>Chosen</Button>
                    )
                }
                else {
                    if (chosenShift && busyInterviewer.length > 0) {
                        for (let busyIn of busyInterviewer) {
                            if (busyIn.interviewerid == params.row.interviewerid) {
                                return (<Button disabled variant="outlined" size={isMd ? "medium" : "small"}>Choose</Button>)
                            }

                        }
                    }
                    return (
                        <Button variant="outlined" color="primary" size={isMd ? "medium" : "small"} onClick={() => setChosenInterviewer(params.row)}>Choose</Button>
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
                disableColumnMenu
                disableColumnFilter
                disableColumnSelector
                disableDensitySelector
                disableRowSelectionOnClick
                initialState={{
                    columns: {
                        columnVisibilityModel: {
                            interviewerid: false,
                            userid: false,
                            dob: false,
                            email: false,
                            departmentname: false,
                            departmentaddress: false,
                            departmentemail: false,
                            departmentphone: false,
                            departmentwebsite: false,
                        },
                    },
                }}
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