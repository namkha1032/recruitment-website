import React, { useState } from 'react'
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
import { mockDataContacts } from "./mockData";
import { grey, lightBlue, teal } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import {AddAlarm, AddBox, AddCard, FileOpen} from "@mui/icons-material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import { shadows } from '@mui/system';


const RenderAddToBlacklist = ({params}) => {
    const [open, setOpen] = React.useState(false);
    return (
        <strong>
            <IconButton color="primary" aria-label="Add to Blacklist" size="large"
                        onClick={() => {
                            setOpen(true)
                        }}>
                <GridAddIcon></GridAddIcon>
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
                        Account ID: {params.row.id}<br/>
                        Account Name: {params.row.accountName}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>{
                        setOpen(false)
                    }}>Go to Account</Button>
                    <Button onClick={()=>{
                        setOpen(false)
                    }}>
                        Add
                    </Button>
                    <Button onClick={()=>{
                        setOpen(false)
                    }}>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </strong>
    )
}
const Page_Company_Account = () => {
    const navigate = useNavigate()
    const [account, setAccount] = useState('');
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
        { field: "id", headerName: "ID", flex: 0.2 },
        { field: "registerId", headerName: "Register ID", flex: 0.4},
        {
            field: "accountName",
            headerName: "Account Name",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "addtoBlacklist",
            headerName: "Add to Blacklist",
            flex: 0.3,
            renderCell: (params) => {return(<RenderAddToBlacklist params={params} />)},
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
                <Grid container columnSpacing={{xs: 1}}>
                <Grid item md={12} xs={7}
                      display="flex"
                      alignItems="center"
                      justifyContent="left">
                    <Typography
                        m="0px 10px 20px 3px"
                        variant="h3"
                        alignItems="center"
                        // justifyContent="left"
                    >
                        Account List
                    </Typography>
                </Grid>
                <Grid item xs={5} sm={12} display="flex">
                <Grid container  spacing={{ xs: 0, sm: 3 }} rowSpacing={{ xs: 1, sm: 0 }} display="flex">
                    <Grid
                        item
                        xs={12}
                        sm={3}
                        lg={3}
                        display="flex"
                        justifyContent="right">
                        <Button
                            variant="contained"
                            size="medium"
                            fullWidth
                            onClick={() => {
                                navigate("/company/account/create")
                            }}
                            sx={{
                                boxShadow:7
                            }}
                            startIcon={<AddCard />}
                        >
                            Add Advanced Account
                        </Button>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={3}
                        lg={3}
                        display="flex"
                        justifyContent="right">
                        <Button
                            variant="contained"
                            size="medium"
                            fullWidth
                            onClick={() => {
                                navigate("/company/account/blacklist")
                            }}
                            sx={{
                                boxShadow:7
                            }}
                            startIcon={<FileOpen />}
                        >
                            Access Blacklist
                        </Button>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={3}
                        lg={3}
                        display="flex"
                        justifyContent="left">
                        <FormControl
                            display="flex"
                            sx={{
                                width: '250px',
                                minWidth:'50px',
                                maxHeight:'55px',
                                boxShadow:7
                            }}
                        >
                            <InputLabel id="accountSelect">Select Account</InputLabel>
                            <Select
                                display="flex"
                                labelId="selectaccount"
                                id="selectaccount"
                                label="Select Account"
                                value={account}
                                onChange={e => setAccount(e.target.value)}
                                displayEmpty={true}
                                variant="outlined"
                            >
                                <MenuItem value={"candidate"}>Candidate</MenuItem>
                                <MenuItem value={"interviewer"}>Interviewer</MenuItem>
                                <MenuItem value={"recruiter"}>Recruiter</MenuItem>
                            </Select>
                        </FormControl>
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
                <Grid
                    width="77vw"
                    item
                    m="0px 0px 10px 0px"
                    xs={12}
                    display="flex"
                    sx={{
                        "& .MuiDataGrid-root": {
                            border: "none"
                        },
                        "& .MuiDataGrid-cell": {
                            borderBottom: "none"
                        },
                        "& .name-column--cell": {
                            color: lightBlue[800]
                        },
                        "& .MuiDataGrid-columnHeaders": {
                            backgroundColor: lightBlue[700],
                            color: "#ffffff",
                            borderBottom: "none"
                        },
                        "& .MuiDataGrid-virtualScroller": {
                            backgroundColor: grey[100]
                        },
                        "& .MuiDataGrid-footerContainer": {
                            borderTop: "none",
                            backgroundColor: lightBlue[700],
                        },
                        "& .MuiCheckbox-root": {
                            color: `${teal[300]} !important`
                        },
                        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                            color: `${grey[700]} !important`
                        }
                    }}
                >
                    <DataGrid
                        rows={mockDataContacts}
                        columns={columns}
                        slots={{ toolbar: QuickSearchToolbar }}
                    />
                </Grid>
            </Card>
        </Grid>

    );
}

export default Page_Company_Account