import { React, useEffect, useState } from 'react';
import { Grid, Box, Button } from '@mui/material';
import { DataGrid, GridToolbarQuickFilter } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import PendingIcon from '@mui/icons-material/Pending';
import FmdBadIcon from '@mui/icons-material/FmdBad';
import GradingIcon from '@mui/icons-material/Grading';
import cleanStore from '../../utils/cleanStore';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
function QuickSearchToolbar() {
    return (
        <Box
            sx={{
                // p: 0.5,
                // pb: 0,
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
    // showCellVerticalBorder: true
    // showColumnVerticalBorder: true,
};

const List_application = (props) => {
    const navigate = useNavigate();
    const { recruitmentid } = useParams();
    let [currentTable, setCurrentTable] = useState(0)
    // const applications = useSelector(state => state.application);
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch({ type: 'saga/getApplication' })
    //     return () => {
    //         cleanStore(dispatch);
    //     }
    // }, [])

    // const detail = useSelector(state => state.position);
    
    const pending1 = props.applications ? props.applications.filter(application => {
        return application.company_status === "Đang chờ"
    }) : [];
    const pass1 = props.applications ? props.applications.filter(application => {
        return application.company_status === "Đã duyệt"
    }) : [];
    const reject1 = props.applications ? props.applications.filter(application => {
        return application.company_status === "Đã từ chối"
    }) : [];
    // const pendingmain = props.applications ? props.applications.filter(application => {
    //     return application.status === "Pending"
    // }) : [];
    console.log("application", props.applications);
    // console.log("status", pendingmain);
    console.log("chờ", pending1);
    console.log("đậu", pass1);
    console.log("chối", reject1);
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
            field: "candidateName",
            headerName: "Candidate Name",
            flex: 1,
            minWidth: 200
        },
        {
            field: "Detail",
            type: "action",
            renderCell: (cellValues) => {
                return (
                    <Button
                        onClick={() => handleEditClick(cellValues)}
                        variant="contained"

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
            {/* <Box sx={{ padding: "0" }}> */}
            <Box
                display="flex"

                
                flexDirection="column"
                sx={{ width: "100%" }}>


                <Grid container spacing={2} >
                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                        <Button color="primary" variant={currentTable == 0 ? 'contained' : 'outlined'} onClick={() => { setCurrentTable(0) }} >
                            <PendingIcon sx={{marginRight: "5px"}}></PendingIcon> Pending
                        </Button>

                        <Button color="warning" sx={{  marginLeft: "10px" }} variant={currentTable == 1 ? 'contained' : 'outlined'} onClick={() => { setCurrentTable(1) }} >
                            <FmdBadIcon sx={{marginRight: "5px"}}></FmdBadIcon> Reject
                        </Button>
                        <Button color="success" sx={{  marginLeft: "10px" }} variant={currentTable == 2 ? 'contained' : 'outlined'} onClick={() => { setCurrentTable(2) }} >
                            <GradingIcon sx={{marginRight: "5px"}}></GradingIcon> Pass
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
                        rows={pending1}
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
                        rows={reject1}
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
                        rows={pass1}
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
            </Box>
            {/* </Box> */}
        </>

    );
}

export default List_application;







