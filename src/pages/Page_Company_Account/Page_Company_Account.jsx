import React from 'react'
import {Box, Button, MenuItem, Select, Typography} from "@mui/material"
import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import {useNavigate} from "react-router-dom";
import {mockDataContacts} from "./mockData";
import {grey, lightBlue, teal} from "@mui/material/colors";

const Page_Company_Account = () => {
    const navigate = useNavigate()
    const renderActionButton = (params) => {
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
    const gotoBlacklist = () => {
        navigate("/company/account/blacklist")
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
            field: "zipCode",
            headerName: "Zip Code",
            flex: 1,
        },
        {
            field: "action",
            headerName: "Action",
            flex: 1,
            renderCell: renderActionButton,
        },
    ];

    return (
        <Box m="5px" width="76.5vw">
            <Box
                display="grid"
                gridTemplateColumns="repeat(5, 1fr)"
                gridAutoRows="70px"
                gap="10px"
            >
                <Typography variant="h2"
                            gridColumn="span 4"
                            gridRow="span 3"
                            display="flex"
                            alignItems="center"
                            justifyContent="left">
                    Account List
                </Typography>
                <Button variant="contained"
                        size="medium"
                        gridColumn="span 1"
                        gridRow="span 1"
                        xs={1}
                        onClick={() => {
                            navigate("/company/account/create")
                        }}>
                    Create Advanced Account
                </Button>
                <Button variant="contained"
                        size="medium"
                        gridColumn="span 1"
                        gridRow="span 1"
                        onClick={() => {
                            gotoBlacklist()
                        }}>
                    Access Blacklist
                </Button>
                <Select
                    gridColumn="span 1"
                    gridRow="span 1"
                    labelId="selectaccount"
                    id="selectaccount"
                    label="Age"
                >
                    <MenuItem value={10}>Candidate</MenuItem>
                    <MenuItem value={20}>Interviewer</MenuItem>
                    <MenuItem value={30}>Recruiter</MenuItem>
                </Select>
            </Box>
            <Box
                m="20px 0px 0 0px"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .name-column--cell": {
                        color: lightBlue[800],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: lightBlue[600],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: grey[100],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: lightBlue[600],
                    },
                    "& .MuiCheckbox-root": {
                        color: `${teal[300]} !important`,
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${grey[700]} !important`,
                    },
                }}
            >
                <DataGrid
                    rows={mockDataContacts}
                    columns={columns}
                    components={{Toolbar: GridToolbar}}
                />
            </Box>
        </Box>
    );
}

export default Page_Company_Account