import React, { useState } from 'react'
import {
    Box,
    Button,
    InputAdornment,
    MenuItem,
    Select, TextField,
    Typography
} from "@mui/material"
import { DataGrid, GridSearchIcon, GridToolbar, GridToolbarQuickFilter } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import { mockDataContacts } from "./mockData";
import { grey, lightBlue, teal } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
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
    const renderActionButton = () => {
        return (
            <strong>
                <Button
                    variant="contained"
                    size="small"
                    color="primary"
                    onClick={() => {
                    }}
                >
                    Action
                </Button>
            </strong>
        )
    }
    const columns = [
        { field: "id", headerName: "ID", flex: 0.5 },
        { field: "registerId", headerName: "Register ID", flex: 0.5},
        {
            field: "accountName",
            headerName: "Account Name",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "details",
            headerName: "Details",
            flex: 0.5,
            renderCell: renderActionButton,
        },
    ];

    return (
        <Grid container width="77vw" justifyContent="center">
            <Grid
                container
            >
                <Grid
                    item
                    xs={8}
                    md={12}
                    display="flex"
                    alignItems="center"
                    justifyContent="left"
                >
                    <Typography
                        m="20px 0 30px 0"
                        variant="h3"
                        alignItems="center"
                        justifyContent="left"
                    >
                        Account List
                    </Typography>
                </Grid>
                <Grid item xs={4} md={12}>
                    <Grid container spacing={{ xs: 0, md: 1.5 }} rowSpacing={{ xs: 1, md: 0 }} display="flex">
                        <Grid
                            item
                            xs={12}
                            md={2}
                            display="flex"
                            justifyContent="right">
                            <Button
                                variant="contained"
                                size="small"
                                fullWidth
                                onClick={() => {
                                    navigate("/company/account/create")
                                }}
                            >
                                Create Advanced Account
                            </Button>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={2}
                            display="flex"
                            justifyContent="right">
                            <Button
                                variant="contained"
                                size="small"
                                fullWidth
                                onClick={() => {
                                    navigate("/company/account/blacklist")
                                }}
                            >
                                Access Blacklist
                            </Button>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={2}
                            display="flex"
                            justifyContent="right">
                            <Select
                                labelId="selectaccount"
                                id="selectaccount"
                                label="Age"
                                value={account}
                                onChange={e => setAccount(e.target.value)}
                                fullWidth
                            >
                                <MenuItem value={"candidate"}>Candidate</MenuItem>
                                <MenuItem value={"interviewer"}>Interviewer</MenuItem>
                                <MenuItem value={"recruiter"}>Recruiter</MenuItem>
                            </Select>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={4}
                            display="flex"
                            justifyContent="right">
                            <TextField
                                fullWidth
                                label="Account Search"
                                id="accountSearch"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton aria-label="searchBoxButton" edge="end">
                                                <GridSearchIcon></GridSearchIcon>
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                item
                m="25px 0 10px 0"
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
                        backgroundColor: lightBlue[600],
                        borderBottom: "none"
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: grey[100]
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: lightBlue[600]
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
        </Grid>
    );
}

export default Page_Company_Account