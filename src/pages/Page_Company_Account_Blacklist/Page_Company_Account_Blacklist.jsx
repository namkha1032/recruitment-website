import React, {useEffect, useState} from 'react'
import {
    Box,
    Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
    InputAdornment, InputLabel,
    MenuItem,
    Select, TextField,
    Typography
} from "@mui/material"
import {DataGrid, GridAddIcon, GridSearchIcon, GridToolbar, GridToolbarQuickFilter} from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import {mockDataContacts} from "../Page_Company_Account/mockData";
import {grey, lightBlue, red, teal} from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import {
    AddBox,
    ArrowBack,
    ArrowBackIos,
    ArrowBackIosNewRounded,
    ArrowBackRounded,
    DoorBackRounded
} from "@mui/icons-material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import { shadows } from '@mui/system';
import FindInPageIcon from "@mui/icons-material/FindInPage";
import {useDispatch, useSelector} from "react-redux";
import DoDisturbIcon from '@mui/icons-material/DoDisturb';


const RenderStatusButton = ({params}) => {
    const [open, setOpen] = React.useState(false);
    return (
        <strong>
            <IconButton color="#000000" aria-label="Show Status" size="large"
                        onClick={() => {
                            setOpen(true)
                        }}>
                <FindInPageIcon></FindInPageIcon>
            </IconButton>
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
                        Blacklist ID: {params.row.blackListId}<br/>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>{
                        setOpen(false)
                    }}>Go To Account</Button>
                    <Button onClick={()=>{
                        setOpen(false)
                    }}>Close</Button>
                </DialogActions>
            </Dialog>
        </strong>
    )
}
const Page_Company_Account = () => {
    const navigate = useNavigate()
    // const [account, setAccount] = useState('');
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({type: "saga/getBlacklist"});
    }, [dispatch]);
    const blacklist = useSelector(state => state.admin.blacklist)
    function QuickSearchToolbar() {
        return (
            <Grid container margin={1}>
                <Grid item xs={4} display="flex">
                <GridToolbarQuickFilter />
                </Grid>
                <Grid item xs={8} justifyContent="right" display="flex">
                <GridToolbar />
                </Grid>
            </Grid>
        );
    }
    const columns = [
        { field: "blackListId", headerName: "Blacklist ID", flex: 0.5, headerClassName: "blacklistId-header-column", cellClassName: "blacklistId-cell-column"},
        { field: "candidateId", headerName: "Candidate ID", flex: 0.5},
        {
            field: "reason",
            headerName: "Reason",
            flex: 0.3,
            cellClassName: "name-column--cell",
        },
        { field: "dateTime", headerName: "Blacklist Date", flex: 0.3},
        {
            field: "info",
            headerName: "Check Info",
            flex: 0.3,
            renderCell: (params)=>{
                return(<RenderStatusButton params={params} />)
            },
        },
    ];

    return (
        <Grid item xs={12}>
            <Card
                raised="true"
                sx={{
                    // display:'flex',
                    // border: "1px solid black",
                    // borderRadius: 1,
                    padding:4
                }}>
                <Grid container>
                    <Grid item xs={10}
                          display="flex"
                          alignItems="center"
                          justifyContent="left">
                        <DoDisturbIcon sx={{ fontSize: 60 }}></DoDisturbIcon>
                        <Typography variant="h3"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="left"
                                    m="10px 0 10px 10px">
                            Blacklist
                        </Typography>
                    </Grid>
                    <Grid item xs={2} display="flex">
                        <Grid container  spacing={{ xs: 0, sm: 3 }} rowSpacing={{ xs: 1, sm: 0 }} display="flex">
                            <Grid
                                item
                                m="10px 0 10px 0"
                                xs={12}
                                display="flex"
                                justifyContent="right">
                                <Button
                                    variant="contained"
                                    size="medium"
                                    fullWidth
                                    onClick={() => {
                                        navigate("/company/account")
                                    }}
                                    sx={{
                                        boxShadow:7,
                                        backgroundColor: grey[900],
                                    }}
                                    style={{minWidth: '100px'}}
                                    startIcon={<ArrowBackIosNewRounded/>}
                                >
                                    Back to Account List
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Card>
            <Card
                raised="true"
                sx={{
                    // width:'77vw',
                    display:'flex',
                    // border: "1px solid black",
                    // borderRadius: 1,
                    padding:4,
                    mt:4
                }}>
                <Grid container>
                <Grid
                    width="78vw"
                    item
                    // m="0px 10px 0px 10px"
                    xs={12}
                    display="flex"
                    sx={{
                        "& .MuiDataGrid-root": {
                            border: "none",
                        },
                        "& .MuiDataGrid-cell": {
                            borderBottom: "none",
                            backgroundColor: "#ffffff",
                        },
                        "& .name-column--cell": {
                            color: grey[900],
                        },
                        "& .blacklistId-header-column": {
                            color: red[800],
                        },
                        "& .blacklistId-cell-column": {
                            color: red[800],
                        },
                        "& .MuiDataGrid-columnHeaders": {
                            // backgroundColor: grey[100],
                            borderBottom: "5",
                        },
                        "& .MuiDataGrid-virtualScroller": {
                            backgroundColor: grey[100],
                        },
                        "& .MuiDataGrid-footerContainer": {
                            borderTop: "5",
                            // backgroundColor:grey[100],
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
                        rows={blacklist}
                        getRowId={(row) => row.blackListId}
                        columns={columns}
                        slots={{ toolbar: QuickSearchToolbar }}
                    />
                </Grid>
                </Grid>
            </Card>
        </Grid>

    );
}

export default Page_Company_Account