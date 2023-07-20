import { React, useState } from 'react';
import {  Grid, Box,  Button } from '@mui/material';
import { DataGrid, GridToolbarQuickFilter } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import PendingIcon from '@mui/icons-material/Pending';
import FmdBadIcon from '@mui/icons-material/FmdBad';
import GradingIcon from '@mui/icons-material/Grading';
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

const styleofbox = {
    borderRadius: "8px",
    border: "1px solid black",
    marginTop: "10px",
    backgroundColor: "#6cbcc4"
}
const List_application = () => {
    const navigate = useNavigate();
    
    let [currentTable, setCurrentTable] = useState(0)
    const datas = require('../../data/Application_list/list.json');
    const pending = datas.filter(data => {
        return data.status === false
    });
    const pass = datas.filter(data => {
        return data.status === true
    });
    const reject = datas.filter(data => {
        return data.priority === false
    });
    const handleEditClick = (params) => {
        navigate(`/company/recruitment/:recruitmentid/application/${params.id}`);
    }
    
    
    const columns = [
        {
            field: "id",
            headerName: "ID",
            headerAlign: 'center',
            width: 200
        },

        {
            field: "fullname",
            headerName: "Candidate Name",
            headerAlign: 'center',
            width: 200
        },
        {
            field: "date applied",
            headerName: "Date applied",
            headerAlign: 'center',
            width: 200

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
            width: 200
        }
    ];

    return (
        <Box
            display="flex"
            minHeight="130vh"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ height: 200, width: '45%', margin: "auto" }}>
            <Box minHeight="125vh">
                <Grid container spacing={2} >
                    <Grid item xs={12} sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>

                        <Button color="primary" sx={{ textDecoration: currentTable == 0 ? 'underline' : 'none' }} variant={currentTable == 0 ? 'contained' : 'outlined'} onClick={() => { setCurrentTable(0) }} >
                            <PendingIcon></PendingIcon> Đang chờ
                        </Button>

                        <Button color="warning" sx={{ textDecoration: currentTable == 1 ? 'underline' : 'none' }} variant={currentTable == 1 ? 'contained' : 'outlined'} onClick={() => { setCurrentTable(1) }} >
                            <FmdBadIcon></FmdBadIcon> Đã từ chối
                        </Button>

                        <Button color="success" sx={{ textDecoration: currentTable == 2 ? 'underline' : 'none' }} variant={currentTable == 2 ? 'contained' : 'outlined'} onClick={() => { setCurrentTable(2) }} >
                            <GradingIcon></GradingIcon> Đã duyệt
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
                            "& .MuiDataGrid-cell": {
                                border: 1,
                                borderRight: 1,
                                borderTop: 1,
                                borderBottom: 1

                            },
                        }}
                        slots={{ toolbar: QuickSearchToolbar }}

                        rowHeight={72}
                        rows={pending}
                        {...other}
                        columns={columns}
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
                        rows={reject}
                        {...other}
                        columns={columns}
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
                        rows={pass}
                        {...other}
                        columns={columns}
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
        </Box>
    );
}

export default List_application;