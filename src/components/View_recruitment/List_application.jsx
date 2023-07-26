import { React, useEffect, useState } from 'react';
import { Grid, Box, Button } from '@mui/material';
import { DataGrid, GridToolbarQuickFilter } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import PendingIcon from '@mui/icons-material/Pending';
import FmdBadIcon from '@mui/icons-material/FmdBad';
import GradingIcon from '@mui/icons-material/Grading';
import cleanStore from '../../utils/cleanStore';
import { useSelector, useDispatch } from 'react-redux';
function QuickSearchToolbar() {
    return (
        <Box
            sx={{
                p: 0.5,
                pb: 0,
                marginLeft: 50,
            }}
        >
            <GridToolbarQuickFilter />
        </Box>
    );
}

const other = {
    autoHeight: true,
    showCellVerticalBorder: true,
    showColumnVerticalBorder: true,
};

const List_application = (props) => {
    const navigate = useNavigate();
    let [currentTable, setCurrentTable] = useState(0)
    // const applications = useSelector(state => state.application);
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch({ type: 'saga/getApplication' })
    //     return () => {
    //         cleanStore(dispatch);
    //     }
    // }, [])
    const pending1 = props.applications ? props.applications.filter(application => {
        return application.company_status === "Đang chờ"
    }) : [];
    const pass1 = props.applications ? props.applications.filter(application => {
        return application.company_status === "Đã duyệt"
    }) : [];
    const reject1 = props.applications ? props.applications.filter(application => {
        return application.company_status === "Đã từ chối"
    }) : [];
    console.log("application", props.applications);
    console.log("chờ", pending1);
    console.log("đậu", pass1);
    console.log("chối", reject1);
    const handleEditClick = (params) => {
        navigate(`/company/recruitment/:recruitmentid/application/${params.id}`);
    }
    const columns = [
        {
            field: "applicationid",
            headerName: "ID",
            headerAlign: 'center',
            width: 100
        },

        {
            field: "candidateName",
            headerName: "Candidate Name",
            headerAlign: 'center',
            width: 350
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
            <Box
                display="flex"
               
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                sx={{ height: "100%", width: '45%', margin: "auto" }}>

                <Grid container spacing={2} >
                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                        <Button color="primary" sx={{ textDecoration: currentTable == 0 ? 'underline' : 'none' }} variant={currentTable == 0 ? 'contained' : 'outlined'} onClick={() => { setCurrentTable(0) }} >
                            <PendingIcon></PendingIcon> Pending
                        </Button>

                        <Button color="warning" sx={{ textDecoration: currentTable == 1 ? 'underline' : 'none', marginLeft: "10px" }} variant={currentTable == 1 ? 'contained' : 'outlined'} onClick={() => { setCurrentTable(1) }} >
                            <FmdBadIcon></FmdBadIcon> Reject
                        </Button>
                        <Button color="success" sx={{ textDecoration: currentTable == 2 ? 'underline' : 'none', marginLeft: "10px" }} variant={currentTable == 2 ? 'contained' : 'outlined'} onClick={() => { setCurrentTable(2) }} >
                            <GradingIcon></GradingIcon> Pass
                        </Button>


                    </Grid>
                </Grid>

                {currentTable == 0 ? (
                    <DataGrid
                        sx={{
                            "& .MuiDataGrid-columnHeaders": {
                                backgroundColor: "#1976d2",
                                fontSize: 16
                            },
                        }}
                        slots={{ toolbar: QuickSearchToolbar }}
                        rowHeight={72}
                        rows={pending1}
                        {...other}
                        columns={columns}
                        getRowId={(row) => row.applicationid}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 5,
                                },
                            },
                        }}
                        pageSizeOptions={[5]}

                    />
                ) : null}
                {currentTable == 1 ? (
                    <DataGrid
                        sx={{
                            "& .MuiDataGrid-columnHeaders": {
                                backgroundColor: "#ed6c02",

                                fontSize: 16
                            },
                            "& .MuiDataGrid-cell": {
                                border: 1,
                                borderRight: 1,
                                borderTop: 1,
                                borderBottom: 1

                            },
                        }}
                        slots={{ toolbar: QuickSearchToolbar }}
                        rowHeight={72}
                        rows={reject1}
                        {...other}
                        columns={columns}
                        getRowId={(row) => row.applicationid}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 5,
                                },
                            },
                        }}
                        pageSizeOptions={[5]}
                    />

                ) : null}
                {currentTable == 2 ? (
                    <DataGrid
                        sx={{
                            "& .MuiDataGrid-columnHeaders": {
                                backgroundColor: "#1b5e20",
                                color: "white",
                                fontSize: 16
                            },
                            "& .MuiDataGrid-cell": {
                                border: 1,
                                borderRight: 1,
                                borderTop: 1,
                                borderBottom: 1
                            },
                        }}
                        slots={{ toolbar: QuickSearchToolbar }}
                        rowHeight={72}
                        rows={pass1}
                        {...other}
                        columns={columns}
                        getRowId={(row) => row.applicationid}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 5,
                                },
                            },
                        }}
                        pageSizeOptions={[5]}
                    />
                ) : null}

            </Box>
        </>

    );
}

export default List_application;







