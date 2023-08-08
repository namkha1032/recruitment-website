import { React, useEffect, useState } from 'react';
import { Grid, Box, Button } from '@mui/material';
import { DataGrid, GridToolbarQuickFilter } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import PendingIcon from '@mui/icons-material/Pending';
import cleanStore from '../../utils/cleanStore';
import { useSelector, useDispatch } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useParams } from "react-router-dom";
import { CloseRounded, DoneRounded } from "@mui/icons-material";
function QuickSearchToolbar() {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                
            }}
        >
            <GridToolbarQuickFilter />
        </Box>
    );
}

const other = {
    autoHeight: true
};

const List_application = (props) => {
    const theme = useTheme()
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const navigate = useNavigate();
    const { recruitmentid } = useParams();
    let [currentTable, setCurrentTable] = useState(0)
    const dispatch = useDispatch();
    const passmain = props.applications ? props.applications.filter(application => {
        return application.company_Status === "Accepted"
    }) : [];
    const pass = passmain.map((item) => item = {
        ...item,
        fullName: item.user.fullName
    })
    console.log('pass', pass);
    const pendingmain = props.applications ? props.applications.filter(application => {
        return application.company_Status === "Pending"
    }) : [];
    const pending = pendingmain.map((item) => item = {
        ...item,
        fullName: item.user.fullName
    })
    console.log('dang cho', pending)
    const rejectmain = props.applications ? props.applications.filter(application => {
        return application.company_Status === "Rejected"
    }) : [];
    const reject = rejectmain.map((item) => item ={
        ...item,
        fullName: item.user.fullName
    } )
    console.log("application", props.applications);
    const handleEditClick = (params) => {
        navigate(`/company/recruitment/${recruitmentid}/application/${params.id}`);
    }
    const columns = [
        {
            field: "applicationId",
            headerName: "ID",
            flex: 0.5,
            minWidth: 200
        },

        {
            field: "fullName",
            headerName: "Candidate Name",
            flex: 1,
            minWidth: 200
        },
        {
            field: "point",
            headerName: "Estimated Point",
            flex: 1,
            minWidth: 100
        },
        {
            field: "Detail",
            type: "action",
            renderCell: (cellValues) => {
                return (
                    <Button
                        onClick={() => handleEditClick(cellValues)}
                        variant="contained"
                        sx={{
                            backgroundColor: "black",
                            ":hover": {
                                backgroundColor: "grey",
                            }
                        }}
                    >
                        Detail
                    </Button>
                );
            },
            headerAlign: 'center',
            width: 100
        }
    ];

    return (
        props.applications &&
        <>
            <Box
                display="flex"
                flexDirection="column"
                sx={{ width: "100%" }}>
                <Grid container spacing={2} sx ={{marginBottom: 2, marginTop: 1}} >
                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-start" }}>

                        <Button size ={isMd ? "medium" : "small"} color="primary" variant={currentTable == 0 ? 'contained' : 'outlined'} sx={{ borderRadius: 100 }} onClick={() => { setCurrentTable(0) }} >
                            {isMd ? (
                                <>
                                <PendingIcon sx={{marginRight: "5px"}}></PendingIcon> Pending
                                </>
                            ): (
                                <>
                                <PendingIcon sx={{marginRight: "5px"}}></PendingIcon> Pend
                                </>
                            )}
                            
                        </Button>

                        <Button size ={isMd ? "medium" : "small"} color="warning" sx={{  marginLeft: "10px", borderRadius: 100 }} variant={currentTable == 1 ? 'contained' : 'outlined'}  onClick={() => { setCurrentTable(1) }} >
                            <CloseRounded sx={{marginRight: "5px"}}></CloseRounded> Reject
                        </Button>
                        <Button size ={isMd ? "medium" : "small"} color="success" sx={{  marginLeft: "10px", borderRadius: 100 }} variant={currentTable == 2 ? 'contained' : 'outlined'} onClick={() => { setCurrentTable(2) }} >
                            <DoneRounded sx={{marginRight: "5px"}}></DoneRounded> Accept
                        </Button>


                    </Grid>
                </Grid>

                {currentTable == 0 ? (

                    <DataGrid
                        sx={{
                            "& .MuiDataGrid-columnHeaders": {
                                backgroundColor: "#1976d2",
                                fontSize: 16,
                                color: "white",
                                fontWeight: 600
                            },
                            "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
                                outline: "none",
                            },
                            "&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within": {
                                outline: "none",
                            },
                            "&.MuiDataGrid-root .MuiDataGrid-columnSeparator": {
                                display: "none",
                            }
                        }}
                        slots={{ toolbar: QuickSearchToolbar }}
                        rowHeight={72}
                        rows={pending}
                        {...other}
                        columns={columns}
                        getRowId={(row) => row.applicationId}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 10,
                                },
                            },
                        }}
                        pageSizeOptions={[5, 10, 25, 50, 100]}
                        disableColumnMenu

                    />

                ) : null}
                {currentTable == 1 ? (
                    <DataGrid
                        sx={{
                            "& .MuiDataGrid-columnHeaders": {
                                backgroundColor: "#ed6c02",

                                fontSize: 16,

                                color: "white",
                                fontWeight: 600
                            },
                            "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
                                outline: "none",
                            },
                            "&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within": {
                                outline: "none",
                            },
                            "&.MuiDataGrid-root .MuiDataGrid-columnSeparator": {
                                display: "none",
                            }
                        }}
                        slots={{ toolbar: QuickSearchToolbar }}
                        rowHeight={72}
                        rows={reject}
                        {...other}
                        columns={columns}
                        getRowId={(row) => row.applicationId}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 5,
                                },
                            },
                        }}
                        pageSizeOptions={[5]}
                        disableColumnMenu
                    />

                ) : null}
                {currentTable == 2 ? (
                    <DataGrid
                        sx={{
                            "& .MuiDataGrid-columnHeaders": {
                                backgroundColor: "#1b5e20",
                                color: "white",
                                fontSize: 16,
                                fontWeight: 600
                            },
                            "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
                                outline: "none",
                            },
                            "&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within": {
                                outline: "none",
                            },
                            "&.MuiDataGrid-root .MuiDataGrid-columnSeparator": {
                                display: "none",
                            }
                        }}
                        slots={{ toolbar: QuickSearchToolbar }}
                        rowHeight={72}
                        rows={pass}
                        {...other}
                        columns={columns}
                        getRowId={(row) => row.applicationId}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 10,
                                },
                            },
                        }}
                        pageSizeOptions={[10]}
                        disableColumnMenu
                    />
                ) : null}
            </Box>
        </>

    );
}

export default List_application;







