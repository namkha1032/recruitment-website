import {
    Box,
    Button,
    Dialog, DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    InputAdornment,
    TextField,
    Typography
} from "@mui/material"
import {DataGrid, GridSearchIcon, GridToolbar, GridToolbarQuickFilter} from "@mui/x-data-grid";
import {mockDataContacts} from "../Page_Company_Account/mockData";
import {grey, red, teal} from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import React from "react";
const renderActionButton = () => {
    return (
        <strong>
            <Button
                variant="contained"
                size="small"
                color="secondary"
                onClick={() => {

                }}
            >
                Action
            </Button>
        </strong>
    )
}
const RenderStatusButton = ({params}) => {
    const [open, setOpen] = React.useState(false);
    return (
        <strong>
            <Button
                variant="contained"
                size="small"
                color="secondary"
                onClick={() => {
                    setOpen(true)
                }}
            >
                Status
            </Button>
            <Dialog open={open}
                    onClose={()=>{
                        setOpen(false)
                    }}
                    aria-labelledby="accountinfo"
                    aria-describedby="accountdetails"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Account info "}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Account ID: {params.row.id}<br/>
                        Account Name: {params.row.name}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>{
                        setOpen(false)
                    }}>Disagree</Button>
                    <Button onClick={()=>{
                        setOpen(false)
                    }}>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </strong>
    )
}

const Page_Company_Account_Blacklist = () => {
    function QuickSearchToolbar() {
        return (
            <Box
                sx={{
                    p: 0.5,
                    pb: 0,
                }}
            >
                <GridToolbarQuickFilter />
                <GridToolbar></GridToolbar>
            </Box>
        );
    }
    const columns = [
        {field: "id", headerName: "ID", flex: 0.5},
        {field: "registerId", headerName: "Register ID"},
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "age",
            headerName: "Age",
            type: "number",
            headerAlign: "left",
            align: "left",
        },
        {
            field: "phone",
            headerName: "Phone Number",
            flex: 1,
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
        },
        {
            field: "address",
            headerName: "Address",
            flex: 1,
        },
        {
            field: "city",
            headerName: "City",
            flex: 1,
        },
        {
            field: "action",
            headerName: "Action",
            flex: 1,
            renderCell: renderActionButton,
        },
        {
            field: "status",
            headerName: "Account Status",
            flex: 1,
            renderCell: (params)=>{
                return(<RenderStatusButton params={params} />)
            },
        },
    ];

    return (
        <Grid
             container width="77vw">
            <Grid
                item
                xs={12}
                display="flex"
                alignItems="center"
                justifyContent="left"
            >
                <Typography variant="h2"
                            display="flex"
                            alignItems="center"
                            justifyContent="left"
                            m="30px 0 10px 0">
                    Blacklist
                </Typography>
            </Grid>
            <Grid
                item
                display="flex"
                justifyContent="right">
                <TextField
                    fullWidth
                    label="Account Search"
                    id="blacklistSearch"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton aria-label="toggle password visibility" edge="end">
                                    <GridSearchIcon></GridSearchIcon>
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
            </Grid>
            <Grid
                item
                m="10px 0 10px 0"
                xs={12}
                display="flex"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                        backgroundColor: grey[300],
                    },
                    "& .name-column--cell": {
                        color: teal[600],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: red[100],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: grey[100],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: red[100],
                    },
                    "& .MuiCheckbox-root": {
                        color: `${"green"} !important`,
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${grey[700]} !important`,
                    },
                }}
            >
                <DataGrid
                    rows={mockDataContacts}
                    columns={columns}
                    slots={{ toolbar: QuickSearchToolbar }}
                />
            </Grid>
        </Grid>
    );
}

export default Page_Company_Account_Blacklist