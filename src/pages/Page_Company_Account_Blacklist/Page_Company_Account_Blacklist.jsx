import {Box, Button, Typography} from "@mui/material"
import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import {mockDataContacts} from "../Page_Company_Account/mockData";
import {grey, red, teal} from "@mui/material/colors";

const Page_Company_Account_Blacklist = () => {
    const renderActionButton = (params) => {
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
    const renderStatusButton = (params) => {
        return (
            <strong>
                <Button
                    variant="contained"
                    size="small"
                    color="secondary"
                    onClick={() => {
                    }}
                >
                    Status
                </Button>
            </strong>
        )
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
            renderCell: renderStatusButton,
        },
    ];

    return (
        <Box width="76.5vw"
             alignItems="center"
             justifyContent="center">
            <Box
                display="grid"
                gridTemplateColumns="repeat(5, 1fr)"
                gridAutoRows="40px"
                gap="20px"
            >
                <Typography variant="h2"
                            gridColumn="1"
                            gridRow="span 3"
                            display="flex"
                            alignItems="center"
                            justifyContent="center">
                    Blacklist
                </Typography>
            </Box>
            <Box
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
                    components={{Toolbar: GridToolbar}}
                />
            </Box>
        </Box>
    );
}

export default Page_Company_Account_Blacklist