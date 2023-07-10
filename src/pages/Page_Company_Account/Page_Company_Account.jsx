import React from 'react'
import {Box, Typography} from "@mui/material"
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import {Button,Select,MenuItem} from "@mui/material";
import { useNavigate, useLocation, useParams, useSearchParams, Navigate } from "react-router-dom";
import {mockDataContacts} from "./mockData";
import {useNavigation} from "react-router-dom";

const Page_Company_Account = () => {
    const navigate = useNavigate()
    const renderActionButton = (params) => {
        return (
            <strong>
                <Button
                    variant="contained"
                    size="small"
                    color="primary"
                    style={{ marginLeft: 16 }}
                    onClick={() => {
                    }}
                >
                    Action
                </Button>
            </strong>
        )
    }
    const gotoBlacklist = ()=>{
        navigate("/company/account/blacklist")
    }
    const columns = [
        { field: "id", headerName: "ID", flex: 0.5 },
        { field: "registerId", headerName: "Register ID" },
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
        <Box m="20px">
            <Box m="30px"
                 display="grid"
                 gridTemplateColumns="repeat(5, 1fr)"
                 gridAutoRows="50px"
                 gap="20px"
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
                        size="small"
                        gridColumn="span 1"
                        gridRow="span 1"
                        onClick={() => {
                            navigate("/company/account/create")
                        }}>
                    Create Advanced Accounts
                </Button>
                <Button variant="contained"
                        size="small"
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
                m="20px 30px 0 30px"
                height="75vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .name-column--cell": {
                        color: "white",
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: "primary",
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: "grey",
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: "primary",
                    },
                    "& .MuiCheckbox-root": {
                        color: `${"lightgreen"} !important`,
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${"grey"} !important`,
                    },
                }}
            >
                <DataGrid
                    rows={mockDataContacts}
                    columns={columns}
                    components={{ Toolbar: GridToolbar }}
                />
            </Box>
        </Box>
    );
}

export default Page_Company_Account